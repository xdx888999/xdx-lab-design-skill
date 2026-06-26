#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { contrastRatio } from './lib/contrast.mjs';

const exportedSemanticColorTokens = new Set([
  'surface',
  'surface-variant',
  'on-surface',
  'primary',
  'on-primary',
  'accent',
  'error',
  'success',
  'warning',
]);

const files = process.argv.slice(2).filter(a => a.endsWith('.md'));
const allFiles = files.length > 0 ? files : [
  ...readdirSync('references/styles').filter(f => f.endsWith('-DESIGN.md')).map(f => join('references/styles', f)),
  ...readdirSync('references/masters').filter(f => f.endsWith('-DESIGN.md')).map(f => join('references/masters', f)),
];

const findings = [];
let totalErrors = 0;
let totalWarnings = 0;
let totalInfo = 0;

for (const filePath of allFiles) {
  const content = readFileSync(filePath, 'utf-8');
  const name = basename(filePath);
  const fileFindings = lintFile(content, name);
  findings.push(...fileFindings);
}

// Print results
const grouped = {};
for (const f of findings) {
  if (!grouped[f.file]) grouped[f.file] = [];
  grouped[f.file].push(f);
}

for (const [file, items] of Object.entries(grouped)) {
  console.log(`\n${file}:`);
  for (const item of items) {
    const icon = item.severity === 'error' ? '✗' : item.severity === 'warning' ? '⚠' : 'ℹ';
    console.log(`  ${icon} [${item.rule}] ${item.message}`);
    if (item.severity === 'error') totalErrors++;
    else if (item.severity === 'warning') totalWarnings++;
    else totalInfo++;
  }
}

console.log(`\n━━━ Summary ━━━`);
console.log(`Files: ${allFiles.length} | Errors: ${totalErrors} | Warnings: ${totalWarnings} | Info: ${totalInfo}`);

if (totalErrors > 0) process.exit(1);

function lintFile(content, fileName) {
  const results = [];
  const { yaml, body } = splitYamlBody(content);

  // Rule 1: broken-ref — Token references must resolve
  if (yaml && body) {
    const refs = [...body.matchAll(/\{colors\.([a-z0-9-]+)\}/gi)];
    const definedTokens = new Set();
    const colorLines = yaml.match(/^\s{2}[a-z][a-z0-9-]*:\s*"#/gm) || [];
    for (const line of colorLines) {
      const m = line.match(/^\s{2}([a-z][a-z0-9-]*):/);
      if (m) definedTokens.add(m[1]);
    }
    // Also check YAML components for refs
    const yamlRefs = [...yaml.matchAll(/\{colors\.([a-z0-9-]+)\}/gi)];
    for (const ref of [...refs, ...yamlRefs]) {
      if (!definedTokens.has(ref[1])) {
        results.push({ file: fileName, severity: 'error', rule: 'broken-ref', message: `Token reference {colors.${ref[1]}} not found in YAML colors` });
      }
    }
  }

  // Rule 2: missing-primary — Must have primary color
  if (yaml && !/^\s{2}primary:\s/m.test(yaml)) {
    results.push({ file: fileName, severity: 'warning', rule: 'missing-primary', message: 'No "primary" color defined in YAML' });
  }

  // Rule 3: contrast-ratio — Check text/background contrast
  if (yaml) {
    const surface = yaml.match(/^\s{2}surface:\s*"(#[0-9A-Fa-f]{6})"/m);
    const onSurface = yaml.match(/^\s{2}on-surface:\s*"(#[0-9A-Fa-f]{6})"/m);
    if (surface && onSurface) {
      const ratio = contrastRatio(surface[1], onSurface[1]);
      if (ratio !== null && ratio < 4.5) {
        results.push({ file: fileName, severity: 'warning', rule: 'contrast-ratio', message: `on-surface (${onSurface[1]}) on surface (${surface[1]}) contrast ${ratio}:1 < 4.5:1 AA` });
      }
    }
    const primary = yaml.match(/^\s{2}primary:\s*"(#[0-9A-Fa-f]{6})"/m);
    const onPrimary = yaml.match(/^\s{2}on-primary:\s*"(#[0-9A-Fa-f]{6})"/m);
    if (primary && onPrimary) {
      const ratio = contrastRatio(primary[1], onPrimary[1]);
      if (ratio !== null && ratio < 3) {
        results.push({ file: fileName, severity: 'warning', rule: 'contrast-ratio', message: `on-primary (${onPrimary[1]}) on primary (${primary[1]}) contrast ${ratio}:1 < 3:1` });
      }
    }
  }

  // Rule 4: orphaned-tokens — Colors in YAML but never referenced in body
  if (yaml && body) {
    const colorTokens = [...yaml.matchAll(/^\s{2}([a-z][a-z0-9-]*):\s*"#/gm)].map(m => m[1]);
    for (const token of colorTokens) {
      // 语义色是 Skill 对外暴露的基础 API，即使正文未直接引用，也不应按孤儿 token 处理。
      if (exportedSemanticColorTokens.has(token)) continue;

      const hex = yaml.match(new RegExp(`^\\s{2}${token}:\\s*"(#[0-9A-Fa-f]{6})"`, 'm'));
      if (hex) {
        const hexUsed = body.includes(hex[1]) || body.includes(hex[1].toLowerCase());
        const refUsed = body.includes(`{colors.${token}}`) || yaml.includes(`{colors.${token}}`);
        if (!hexUsed && !refUsed) {
          results.push({ file: fileName, severity: 'warning', rule: 'orphaned-token', message: `Color token "${token}" (${hex[1]}) not referenced in body or components` });
        }
      }
    }
  }

  // Rule 5: token-summary
  const colorCount = (yaml?.match(/^\s{2}[a-z][a-z0-9-]*:\s*"#/gm) || []).length;
  const typoCount = (yaml?.match(/^\s{2}[a-z][a-z0-9-]*:\n\s{4}fontFamily/gm) || []).length;
  results.push({ file: fileName, severity: 'info', rule: 'token-summary', message: `${colorCount} colors, ${typoCount} typography entries` });

  // Rule 6: missing-sections — Check for required sections in body
  const requiredSections = ['Color Palette', 'Typography', 'Component', "Do's and Don'ts"];
  for (const section of requiredSections) {
    if (!new RegExp(section, 'i').test(body || content)) {
      results.push({ file: fileName, severity: 'info', rule: 'missing-section', message: `Section "${section}" not found` });
    }
  }

  // Rule 7: missing-typography
  if (yaml && typoCount === 0) {
    results.push({ file: fileName, severity: 'warning', rule: 'missing-typography', message: 'No typography tokens in YAML' });
  }

  // Rule 8: section-order — Sections should appear in canonical order
  const sectionOrder = ['Visual Theme', 'Color Palette', 'Typography', 'Component', 'Layout', 'Depth', 'Shapes', "Do's", 'Responsive', 'Agent Prompt'];
  let lastIdx = -1;
  for (const s of sectionOrder) {
    const idx = (body || content).search(new RegExp(`## \\d+\\.\\s+.*${s}`, 'i'));
    if (idx !== -1) {
      if (idx < lastIdx) {
        results.push({ file: fileName, severity: 'warning', rule: 'section-order', message: `Section "${s}" appears before a section that should precede it` });
        break;
      }
      lastIdx = idx;
    }
  }

  // Rule 9: unknown-key — Check for suspicious YAML keys
  if (yaml) {
    const knownTopKeys = ['version', 'name', 'colors', 'typography', 'rounded', 'spacing', 'components'];
    const topKeys = [...yaml.matchAll(/^([a-z][a-z-]*):/gm)].map(m => m[1]);
    for (const key of topKeys) {
      if (!knownTopKeys.includes(key)) {
        results.push({ file: fileName, severity: 'warning', rule: 'unknown-key', message: `Unknown top-level YAML key: "${key}"` });
      }
    }
  }

  // No YAML front matter at all
  if (!yaml) {
    results.push({ file: fileName, severity: 'error', rule: 'missing-yaml', message: 'No YAML front matter found' });
  }

  return results;
}

function splitYamlBody(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { yaml: null, body: content };
  return { yaml: m[1], body: m[2] };
}

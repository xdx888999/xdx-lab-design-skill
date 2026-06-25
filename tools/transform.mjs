#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { parseDesignMd } from './lib/parser.mjs';
import { mapSemanticRoles } from './lib/semantic-map.mjs';
import { contrastRatio, wcagLevel } from './lib/contrast.mjs';
import { generateYamlFrontMatter } from './lib/yaml-writer.mjs';

const DRY_RUN = process.argv.includes('--dry-run');
const SINGLE = process.argv.find(a => a.endsWith('.md'));

function main() {
  const files = [];

  if (SINGLE) {
    files.push(SINGLE);
  } else {
    const stylesDir = 'references/styles';
    const mastersDir = 'references/masters';
    for (const f of readdirSync(stylesDir)) {
      if (f.endsWith('-DESIGN.md')) files.push(join(stylesDir, f));
    }
    for (const f of readdirSync(mastersDir)) {
      if (f.endsWith('-DESIGN.md')) files.push(join(mastersDir, f));
    }
  }

  console.log(`Processing ${files.length} files${DRY_RUN ? ' (dry-run)' : ''}...\n`);
  let processed = 0;
  let warnings = 0;

  for (const filePath of files) {
    try {
      const result = transformFile(filePath);
      processed++;
      warnings += result.warnings;
      console.log(`  ✓ ${basename(filePath)} — ${result.colorCount} colors, ${result.contrastPairs} contrast pairs${result.warnings > 0 ? `, ${result.warnings} warnings` : ''}`);
    } catch (err) {
      console.error(`  ✗ ${basename(filePath)} — ${err.message}`);
    }
  }

  console.log(`\nDone: ${processed}/${files.length} files processed, ${warnings} total warnings.`);
}

function transformFile(filePath) {
  const parsed = parseDesignMd(filePath);
  const semanticColors = mapSemanticRoles(parsed.colors, parsed.isDark);

  // Build contrast annotations
  const contrastAnnotations = buildContrastAnnotations(parsed.colors, semanticColors, parsed.isDark);

  // Generate YAML front matter
  const yaml = generateYamlFrontMatter({
    name: parsed.name,
    semanticColors,
    allColors: parsed.colors,
    typography: parsed.typography,
    spacing: parsed.spacing,
    rounded: parsed.rounded,
    components: parsed.components,
  });

  // Transform the markdown body
  let content = parsed.originalContent;

  // Strip existing YAML front matter if present
  content = content.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Inject contrast annotations into Section 2
  content = injectContrastAnnotations(content, contrastAnnotations);

  // Add Shapes section if not present
  content = addShapesSection(content, parsed.rounded);

  // Add spacing tokens annotation to Section 5
  content = addSpacingAnnotation(content, parsed.spacing);

  // Combine YAML + content
  const output = yaml + '\n\n' + content;

  if (!DRY_RUN) {
    writeFileSync(filePath, output, 'utf-8');
  } else {
    console.log('\n--- YAML Preview ---');
    console.log(yaml);
    console.log('--- End Preview ---\n');
  }

  return {
    colorCount: parsed.colors.filter(c => c.hex).length,
    contrastPairs: contrastAnnotations.length,
    warnings: contrastAnnotations.filter(a => a.level === 'FAIL').length,
  };
}

function buildContrastAnnotations(colors, semanticColors, isDark) {
  const annotations = [];
  const bgHex = semanticColors.surface;
  if (!bgHex) return annotations;

  const textColors = colors.filter(c => {
    if (!c.hex) return false;
    const nameRole = (c.name + ' ' + c.role).toLowerCase();
    return /text|heading|body|caption|label|ink|primary|muted|secondary/i.test(nameRole) &&
           !/background|surface|card|paper|border|shadow|blob|glass|wash\s*tint/i.test(c.name.toLowerCase());
  });

  for (const tc of textColors) {
    const ratio = contrastRatio(tc.hex, bgHex);
    if (ratio !== null) {
      const level = wcagLevel(ratio);
      annotations.push({
        textName: tc.name,
        textHex: tc.hex,
        bgHex,
        ratio,
        level,
      });
    }
  }

  return annotations;
}

function injectContrastAnnotations(content, annotations) {
  if (annotations.length === 0) return content;

  const block = [
    '',
    '### Contrast Ratios (WCAG 2.1)',
    '',
    '| Text Token | Hex | Background | Ratio | Level |',
    '|------------|-----|------------|-------|-------|',
  ];

  for (const a of annotations) {
    block.push(`| ${a.textName} | \`${a.textHex}\` | \`${a.bgHex}\` | ${a.ratio}:1 | ${a.level} |`);
  }
  block.push('');

  // Insert after the last color subsection in Section 2, before Section 3
  const section3Marker = content.match(/\n## 3\./);
  if (section3Marker) {
    const idx = content.indexOf(section3Marker[0]);
    content = content.slice(0, idx) + block.join('\n') + content.slice(idx);
  }

  return content;
}

function addShapesSection(content, rounded) {
  // Check if Shapes section already exists
  if (/## (?:\d+\.\s*)?Shapes/i.test(content)) return content;

  const values = Object.entries(rounded);
  if (values.length === 0) return content;

  const section = [
    '',
    '## Shapes',
    '',
    '| Scale | Value | Usage |',
    '|-------|-------|-------|',
  ];

  for (const [key, val] of values) {
    const usage = key === 'none' ? 'Square elements'
      : key === 'sm' ? 'Inputs, tags'
      : key === 'md' ? 'Cards, buttons'
      : key === 'lg' ? 'Modals, large cards'
      : key === 'xl' ? 'Containers'
      : key === 'full' ? 'Pills, avatars'
      : key === 'default' ? 'Default radius'
      : '';
    section.push(`| ${key} | ${val} | ${usage} |`);
  }
  section.push('');

  // Insert before Do's and Don'ts section
  const dontsMarker = content.match(/\n## (?:\d+\.\s*)?Do['']?s and Don['']?ts/i) ||
                       content.match(/\n## 7\./);
  if (dontsMarker) {
    const idx = content.indexOf(dontsMarker[0]);
    content = content.slice(0, idx) + section.join('\n') + '\n---\n' + content.slice(idx);
  }

  return content;
}

function addSpacingAnnotation(content, spacing) {
  if (Object.keys(spacing).length === 0) return content;

  // Check if there's already a spacing token block
  if (/### Spacing Tokens/i.test(content)) return content;

  const block = [
    '',
    '### Spacing Tokens',
    '',
    '| Token | Value |',
    '|-------|-------|',
  ];
  for (const [key, val] of Object.entries(spacing)) {
    block.push(`| ${key} | ${val} |`);
  }
  block.push('');

  // Insert at the end of Section 5, before Section 6
  const section6Marker = content.match(/\n## (?:6|Shapes)\./i) ||
                         content.match(/\n## 6\./);
  if (section6Marker) {
    const idx = content.indexOf(section6Marker[0]);
    content = content.slice(0, idx) + block.join('\n') + content.slice(idx);
  }

  return content;
}

main();

#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { basename } from 'path';

const args = process.argv.slice(2);
const formatIdx = args.indexOf('--format');
const format = formatIdx !== -1 ? args[formatIdx + 1] : 'css';
const filePath = args.find(a => a.endsWith('.md'));

if (!filePath) {
  console.log(`Usage: node export.mjs --format <css|tailwind|dtcg> <DESIGN.md>`);
  console.log(`  css      → CSS Custom Properties (:root { --color-primary: #hex; })`);
  console.log(`  tailwind → Tailwind v4 CSS theme (@theme { ... })`);
  console.log(`  dtcg     → W3C Design Tokens Community Group JSON`);
  process.exit(1);
}

const content = readFileSync(filePath, 'utf-8');
const yaml = parseYaml(content);

if (!yaml) {
  console.error('No YAML front matter found in', filePath);
  process.exit(1);
}

const styleName = yaml.name || basename(filePath, '.md');

switch (format) {
  case 'css': exportCSS(yaml, styleName); break;
  case 'tailwind': exportTailwind(yaml, styleName); break;
  case 'dtcg': exportDTCG(yaml, styleName); break;
  default: console.error('Unknown format:', format); process.exit(1);
}

function exportCSS(yaml, name) {
  const lines = [`/* ${name} — Design Tokens (CSS Custom Properties) */`, ':root {'];

  if (yaml.colors) {
    lines.push('  /* Colors */');
    for (const [key, val] of Object.entries(yaml.colors)) {
      lines.push(`  --color-${key}: ${val};`);
    }
  }

  if (yaml.typography) {
    lines.push('  /* Typography */');
    for (const [key, val] of Object.entries(yaml.typography)) {
      if (typeof val === 'object') {
        if (val.fontFamily) lines.push(`  --font-${key}: ${val.fontFamily};`);
        if (val.fontSize) lines.push(`  --font-size-${key}: ${val.fontSize};`);
        if (val.fontWeight) lines.push(`  --font-weight-${key}: ${val.fontWeight};`);
      }
    }
  }

  if (yaml.rounded) {
    lines.push('  /* Rounded */');
    for (const [key, val] of Object.entries(yaml.rounded)) {
      lines.push(`  --rounded-${key}: ${val};`);
    }
  }

  if (yaml.spacing) {
    lines.push('  /* Spacing */');
    for (const [key, val] of Object.entries(yaml.spacing)) {
      lines.push(`  --spacing-${key}: ${val};`);
    }
  }

  lines.push('}');
  console.log(lines.join('\n'));
}

function exportTailwind(yaml, name) {
  const lines = [`/* ${name} — Tailwind v4 CSS Theme */`, '@theme {'];

  if (yaml.colors) {
    for (const [key, val] of Object.entries(yaml.colors)) {
      lines.push(`  --color-${key}: ${val};`);
    }
  }

  if (yaml.rounded) {
    for (const [key, val] of Object.entries(yaml.rounded)) {
      lines.push(`  --radius-${key}: ${val};`);
    }
  }

  if (yaml.spacing) {
    for (const [key, val] of Object.entries(yaml.spacing)) {
      lines.push(`  --spacing-${key}: ${val};`);
    }
  }

  if (yaml.typography) {
    for (const [key, val] of Object.entries(yaml.typography)) {
      if (typeof val === 'object' && val.fontFamily) {
        lines.push(`  --font-${key}: ${val.fontFamily};`);
      }
    }
  }

  lines.push('}');
  console.log(lines.join('\n'));
}

function exportDTCG(yaml, name) {
  const dtcg = { $name: name };

  if (yaml.colors) {
    dtcg.colors = {};
    for (const [key, val] of Object.entries(yaml.colors)) {
      dtcg.colors[key] = { $value: val, $type: 'color' };
    }
  }

  if (yaml.typography) {
    dtcg.typography = {};
    for (const [key, val] of Object.entries(yaml.typography)) {
      if (typeof val === 'object') {
        dtcg.typography[key] = {
          $value: {
            fontFamily: val.fontFamily || '',
            fontSize: val.fontSize || '',
            fontWeight: parseInt(val.fontWeight) || 400,
          },
          $type: 'typography',
        };
      }
    }
  }

  if (yaml.rounded) {
    dtcg.rounded = {};
    for (const [key, val] of Object.entries(yaml.rounded)) {
      dtcg.rounded[key] = { $value: val, $type: 'dimension' };
    }
  }

  if (yaml.spacing) {
    dtcg.spacing = {};
    for (const [key, val] of Object.entries(yaml.spacing)) {
      dtcg.spacing[key] = { $value: val, $type: 'dimension' };
    }
  }

  console.log(JSON.stringify(dtcg, null, 2));
}

function parseYaml(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;

  const yaml = m[1];
  const result = {};
  let currentTopKey = null;
  let currentSubKey = null;

  for (const line of yaml.split('\n')) {
    // Top-level key: no indent
    const topMatch = line.match(/^([a-z][a-z-]*):\s*(.*)/);
    if (topMatch) {
      currentTopKey = topMatch[1];
      const val = topMatch[2].trim().replace(/^"(.*)"$/, '$1');
      if (val) {
        result[currentTopKey] = val;
      } else {
        result[currentTopKey] = {};
      }
      currentSubKey = null;
      continue;
    }

    // 2-space indent: sub-key of top-level
    const subMatch = line.match(/^  ([a-z][a-z0-9-]*):\s*(.*)/);
    if (subMatch && currentTopKey) {
      const key = subMatch[1];
      const val = subMatch[2].trim().replace(/^"(.*)"$/, '$1');
      if (typeof result[currentTopKey] !== 'object') result[currentTopKey] = {};
      if (val) {
        result[currentTopKey][key] = val;
        currentSubKey = null;
      } else {
        result[currentTopKey][key] = {};
        currentSubKey = key;
      }
      continue;
    }

    // 4-space indent: property of sub-key
    const propMatch = line.match(/^    ([a-zA-Z][a-zA-Z0-9]*?):\s*(.*)/);
    if (propMatch && currentTopKey && currentSubKey) {
      const val = propMatch[2].trim().replace(/^"(.*)"$/, '$1');
      if (typeof result[currentTopKey][currentSubKey] !== 'object') {
        result[currentTopKey][currentSubKey] = {};
      }
      result[currentTopKey][currentSubKey][propMatch[1]] = val;
    }
  }

  return result;
}

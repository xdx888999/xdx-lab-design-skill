import test from 'node:test';
import assert from 'node:assert/strict';
import { generateYamlFrontMatter } from '../lib/yaml-writer.mjs';

test('generateYamlFrontMatter 输出语义色、额外色和字体 token', () => {
  const yaml = generateYamlFrontMatter({
    name: 'Tang Poster System',
    semanticColors: {
      surface: '#F7F2E8',
      'on-surface': '#111111',
      primary: '#C8372D',
      'on-primary': '#FFFFFF',
    },
    allColors: [
      { name: 'Paper Background', hex: '#F7F2E8' },
      { name: 'Warm Gold', hex: '#D6A84F' },
    ],
    typography: {
      families: [
        { role: 'Display', family: 'Noto Serif SC' },
        { role: 'Body', family: 'Noto Sans SC' },
        { role: 'Monospace', family: 'JetBrains Mono' },
      ],
      scale: [
        { role: 'Hero Display', fontSize: '64px', fontWeight: '700' },
        { role: 'Body', fontSize: '16px', fontWeight: '400' },
        { role: 'Code Sample', fontSize: '13px', fontWeight: '400' },
      ],
    },
    spacing: { base: '8px' },
    rounded: { none: '0px', sm: '4px' },
    components: {
      'primary-button': {
        background: '#C8372D',
        color: '#FFFFFF',
        border: '1px solid #D6A84F',
        'border-radius': '4px',
      },
    },
  });

  assert.match(yaml, /^---\nversion: alpha\nname: "Tang Poster System"/);
  assert.match(yaml, /  primary: "#C8372D"/);
  assert.match(yaml, /  warm-gold: "#D6A84F"/);
  assert.doesNotMatch(yaml, /paper-background/);
  assert.match(yaml, /  hero-display:\n    fontFamily: "Noto Serif SC"\n    fontSize: 64px\n    fontWeight: 700/);
  assert.match(yaml, /  code-sample:\n    fontFamily: "JetBrains Mono"\n    fontSize: 13px\n    fontWeight: 400/);
  assert.match(yaml, /    backgroundColor: "{colors.primary}"/);
  assert.match(yaml, /    textColor: "{colors.on-primary}"/);
  assert.match(yaml, /    border: "1px solid {colors.warm-gold}"/);
  assert.match(yaml, /    rounded: "4px"/);
});

test('generateYamlFrontMatter 在只有字体族时仍生成 typography', () => {
  const yaml = generateYamlFrontMatter({
    name: 'Family Only',
    semanticColors: { surface: '#FFFFFF' },
    allColors: [],
    typography: {
      families: [{ role: 'Body Text', family: 'Inter' }],
      scale: [],
    },
    spacing: {},
    rounded: {},
    components: {},
  });

  assert.match(yaml, /typography:\n  body-text:\n    fontFamily: "Inter"/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  parseColors,
  parseComponents,
  parseDesignMd,
  parseRounded,
  parseSpacing,
  parseTypography,
} from '../lib/parser.mjs';

test('parseTypography 可以解析混合字体表格', () => {
  const content = `
# Design System: Luxury Premium

## 3. Typography Rules

### Font Family
- **Primary Display**: \`Playfair Display\` or \`Cormorant Garamond\`, fallback: \`Georgia\`, \`serif\`
- **Secondary / Body**: \`Jost\`, fallback: \`Inter\`, \`sans-serif\`

### Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing |
|------|--------|------|--------|-------------|----------------|
| Brand Display | Playfair Display | 96-120px | 300-400 | 0.9 | -5px |
| Body | Jost | 15px | 300-400 | 1.7 | 0.5px |
`;

  const typography = parseTypography(content);

  assert.deepEqual(typography.scale, [
    {
      role: 'Brand Display',
      fontFamily: 'Playfair Display',
      fontSize: '96px',
      fontWeight: '300',
    },
    {
      role: 'Body',
      fontFamily: 'Jost',
      fontSize: '15px',
      fontWeight: '300',
    },
  ]);
  assert.equal(
    typography.families.some(item => item.role === 'Secondary / Body' && item.family === 'Jost'),
    true,
  );
});

test('parseColors 可以解析多种色彩写法并按 HEX 去重', () => {
  const content = `
## 2. Color Palette
- **Paper White** (\`#f7f2e8\`): background surface
- **Primary Accent**: \`#C8372D\` CTA buttons
- **Ink Black**: main text (#111111)
- **Duplicate Accent** (\`#C8372D\`): repeated value should be ignored
- **Glass Wash** (\`rgba(255,255,255,0.18)\`): translucent overlay

\`\`\`text
Border Line: #D6C6A8 subtle divider
\`\`\`
`;

  const colors = parseColors(content);

  assert.deepEqual(
    colors.map(item => item.hex || item.rgba),
    ['#F7F2E8', '#C8372D', '#111111', 'rgba(255,255,255,0.18)', '#D6C6A8'],
  );
  assert.equal(colors[1].name, 'Primary Accent');
  assert.equal(colors[2].role, 'main text');
});

test('parseSpacing 和 parseRounded 可以提取布局尺度', () => {
  const content = `
## 5. Layout & Spacing
Base unit: 8px
Card padding: 24px
Card gap: 16–24px
Section padding: 96px
Max content width: 1200px
Gutter: 32px
Margin minimum: 20px

## 6. Depth
.card { border-radius: 4px; }
.modal { border-radius: 12px; }
.pill { border-radius: 999px; }
`;

  assert.deepEqual(parseSpacing(content), {
    base: '8px',
    'card-padding': '24px',
    'card-gap': '16px',
    'section-padding': '96px',
    'max-width': '1200px',
    gutter: '32px',
    margin: '20px',
  });
  assert.deepEqual(parseRounded(content), {
    none: '4px',
    sm: '12px',
    md: '999px',
  });
});

test('parseComponents 只提取支持的组件属性', () => {
  const content = `
## 4. Component System

### Primary Button
\`\`\`css
background: #C8372D
color: #FFFFFF
padding: 12px 28px
border-radius: 4px
box-shadow: 0 8px 24px rgba(0,0,0,0.14)
unknown-prop: ignored
\`\`\`

### Empty Block
No code block here.
`;

  assert.deepEqual(parseComponents(content), {
    'primary-button': {
      background: '#C8372D',
      color: '#FFFFFF',
      padding: '12px 28px',
      'border-radius': '4px',
      'box-shadow': '0 8px 24px rgba(0,0,0,0.14)',
    },
  });
});

test('parseDesignMd 可以识别大师文件类型和暗色主题', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'design-skill-parser-'));
  const filePath = join(tempDir, 'references', 'masters', 'sample-DESIGN.md');

  try {
    await mkdir(join(tempDir, 'references', 'masters'), { recursive: true });
    await writeFile(filePath, `# Design System: Sample Master

## 2. Color Palette
- **Deep Background** (\`#050505\`): Primary page background.
- **Ghost White** (\`#FFFFFF\`): Heading text.

## 3. Typography Rules
| Role | Family | Size | Weight |
|------|--------|------|--------|
| Display | Inter | 48px | 700 |
`);

    const parsed = parseDesignMd(filePath);

    assert.equal(parsed.type, 'master');
    assert.equal(parsed.name, 'Sample Master');
    assert.equal(parsed.isDark, true);
    assert.equal(parsed.colors.length, 2);
    assert.equal(parsed.typography.scale[0].role, 'Display');
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

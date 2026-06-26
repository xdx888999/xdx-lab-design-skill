import test from 'node:test';
import assert from 'node:assert/strict';
import { parseTypography } from '../lib/parser.mjs';

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

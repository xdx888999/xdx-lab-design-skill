import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));

function runNode(args) {
  return spawnSync(process.execPath, args, {
    cwd: repoRoot,
    encoding: 'utf8',
  });
}

async function withTempDesignFile(content, callback) {
  const tempDir = await mkdtemp(join(tmpdir(), 'design-skill-cli-'));
  const filePath = join(tempDir, 'fixture-DESIGN.md');

  try {
    await writeFile(filePath, content);
    return await callback(filePath);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

const yamlFixture = `---
version: alpha
name: "CLI Fixture"
colors:
  surface: "#FFFFFF"
  on-surface: "#111111"
  primary: "#C8372D"
  on-primary: "#FFFFFF"
typography:
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
rounded:
  none: 0px
  sm: 4px
spacing:
  base: 8px
---

# Design System: CLI Fixture
`;

test('export CLI 可以导出 CSS、Tailwind 和 DTCG tokens', async () => {
  await withTempDesignFile(yamlFixture, async filePath => {
    const css = runNode(['tools/export.mjs', '--format', 'css', filePath]);
    assert.equal(css.status, 0, css.stderr || css.stdout);
    assert.match(css.stdout, /--color-primary: #C8372D;/);
    assert.match(css.stdout, /--font-body: Inter, sans-serif;/);

    const tailwind = runNode(['tools/export.mjs', '--format', 'tailwind', filePath]);
    assert.equal(tailwind.status, 0, tailwind.stderr || tailwind.stdout);
    assert.match(tailwind.stdout, /@theme \{/);
    assert.match(tailwind.stdout, /--radius-sm: 4px;/);

    const dtcg = runNode(['tools/export.mjs', '--format', 'dtcg', filePath]);
    assert.equal(dtcg.status, 0, dtcg.stderr || dtcg.stdout);
    const parsed = JSON.parse(dtcg.stdout);
    assert.equal(parsed.$name, 'CLI Fixture');
    assert.deepEqual(parsed.colors.primary, { $value: '#C8372D', $type: 'color' });
    assert.equal(parsed.typography.body.$value.fontWeight, 400);
  });
});

test('export CLI 对缺少 YAML 的文件返回错误', async () => {
  await withTempDesignFile('# Design System: Missing YAML\n', async filePath => {
    const result = runNode(['tools/export.mjs', filePath]);

    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /No YAML front matter found/);
  });
});

test('transform CLI dry-run 输出预览且不写入原文件', async () => {
  const content = `# Design System: Dry Run Fixture

## 2. Color Palette
- **Paper Background** (\`#F7F2E8\`): Primary page background.
- **Ink Black** (\`#111111\`): Heading text.
- **Primary Vermillion** (\`#C8372D\`): CTA buttons.

## 3. Typography Rules
| Role | Family | Size | Weight |
|------|--------|------|--------|
| Display | Noto Serif SC | 48px | 700 |

## 4. Component System
### Primary Button
\`\`\`css
background: #C8372D
color: #FFFFFF
padding: 12px 24px
border-radius: 4px
\`\`\`

## 5. Layout & Spacing
Base unit: 8px
Card padding: 24px

## 6. Depth
Use flat layers.

## 7. Do's and Don'ts
Do keep token references stable.
`;

  await withTempDesignFile(content, async filePath => {
    const result = runNode(['tools/transform.mjs', '--dry-run', filePath]);
    const after = await readFile(filePath, 'utf8');

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.match(result.stdout, /Processing 1 files \(dry-run\)/);
    assert.match(result.stdout, /--- YAML Preview ---/);
    assert.match(result.stdout, /primary: "#C8372D"/);
    assert.equal(after, content);
  });
});

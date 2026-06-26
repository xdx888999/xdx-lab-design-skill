import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));

test('lint 不把导出的语义色 token 判为孤儿 token', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'design-skill-lint-'));
  const fixturePath = join(tempDir, 'semantic-colors-DESIGN.md');

  try {
    await writeFile(fixturePath, `---
version: alpha
name: "Semantic Colors"
colors:
  surface: "#FFFFFF"
  on-surface: "#111111"
  primary: "#0066CC"
  on-primary: "#FFFFFF"
  accent: "#CC6600"
typography:
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
rounded:
  none: 0px
components:
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
---

# Design System: Semantic Colors

## 1. Visual Theme
语义色需要作为 Skill API 导出。

## 2. Color Palette
Primary uses \`#0066CC\`.

## 3. Typography
Use Inter for body text.

## 4. Component
Button uses semantic color references.

## 5. Do's and Don'ts
Do keep semantic tokens available to consumers.
`);

    const result = spawnSync(process.execPath, ['tools/lint.mjs', fixturePath], {
      cwd: repoRoot,
      encoding: 'utf8',
    });

    assert.equal(result.status, 0, result.stderr || result.stdout);
    assert.equal(result.stdout.includes('[orphaned-token]'), false, result.stdout);
    assert.match(result.stdout, /Warnings: 0/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test('lint 对不存在的颜色引用返回错误', async () => {
  const tempDir = await mkdtemp(join(tmpdir(), 'design-skill-lint-'));
  const fixturePath = join(tempDir, 'broken-ref-DESIGN.md');

  try {
    await writeFile(fixturePath, `---
version: alpha
name: "Broken Reference"
colors:
  surface: "#FFFFFF"
  on-surface: "#111111"
  primary: "#0066CC"
  on-primary: "#FFFFFF"
typography:
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
rounded:
  none: 0px
components:
  button:
    backgroundColor: "{colors.missing-token}"
---

# Design System: Broken Reference

## 1. Visual Theme
引用不存在的颜色 token 应该失败。

## 2. Color Palette
Primary uses \`#0066CC\`.

## 3. Typography
Use Inter for body text.

## 4. Component
Button references \`{colors.missing-token}\`.

## 5. Do's and Don'ts
Do keep references resolvable.
`);

    const result = spawnSync(process.execPath, ['tools/lint.mjs', fixturePath], {
      cwd: repoRoot,
      encoding: 'utf8',
    });

    assert.equal(result.status, 1);
    assert.match(result.stdout, /\[broken-ref\]/);
    assert.match(result.stdout, /\{colors\.missing-token\}/);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

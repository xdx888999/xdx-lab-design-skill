import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));
const mastersDir = join(repoRoot, 'references', 'masters');
const expectedMasterCount = 20;
const minimumMasterTypographyEntries = 4;

test('全量 DESIGN lint 保持 0 warning', () => {
  const result = spawnSync(process.execPath, ['tools/lint.mjs'], {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Errors: 0 \| Warnings: 0/);
});

test('20 个大师 DESIGN 文件都有完整 typography token', async () => {
  const masterFiles = (await readdir(mastersDir))
    .filter(file => file.endsWith('-DESIGN.md'))
    .sort();

  assert.equal(masterFiles.length, expectedMasterCount);

  for (const file of masterFiles) {
    const content = await readFile(join(mastersDir, file), 'utf8');
    const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(yamlMatch, `${file} 缺少 YAML front matter`);

    const yamlLines = yamlMatch[1].split('\n');
    const typographyStart = yamlLines.findIndex(line => line === 'typography:');
    assert.notEqual(typographyStart, -1, `${file} 缺少 typography`);

    const nextTopLevelIndex = yamlLines.findIndex((line, index) => (
      index > typographyStart && /^[a-z][a-z-]*:/.test(line)
    ));
    const typographyLines = yamlLines.slice(
      typographyStart + 1,
      nextTopLevelIndex === -1 ? yamlLines.length : nextTopLevelIndex,
    );
    const entries = [];
    let currentEntry = null;

    for (const line of typographyLines) {
      const entryMatch = line.match(/^  ([a-z][a-z0-9-]*):$/);
      if (entryMatch) {
        if (currentEntry) entries.push(currentEntry);
        currentEntry = { name: entryMatch[1], body: '' };
        continue;
      }

      if (currentEntry) currentEntry.body += `${line}\n`;
    }
    if (currentEntry) entries.push(currentEntry);

    assert.ok(
      entries.length >= minimumMasterTypographyEntries,
      `${file} typography token 少于 ${minimumMasterTypographyEntries} 个`,
    );

    for (const entry of entries) {
      assert.match(entry.body, /fontFamily:\s*"/, `${file} 的 ${entry.name} 缺少 fontFamily`);
      assert.match(entry.body, /fontSize:\s*\d+px/, `${file} 的 ${entry.name} 缺少 fontSize`);
      assert.match(entry.body, /fontWeight:\s*\d+/, `${file} 的 ${entry.name} 缺少 fontWeight`);
    }
  }
});

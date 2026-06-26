import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import vm from 'node:vm';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));
const mastersDir = join(repoRoot, 'references', 'masters');
const casesDir = join(repoRoot, 'docs', 'cases');
const expectedMasterCount = 20;
const expectedCaseCount = 8;
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

test('案例库保留 8 个高质量真实案例并清理旧 examples PPT', async () => {
  await assert.rejects(
    readdir(join(repoRoot, 'examples')),
    error => error && error.code === 'ENOENT',
  );

  const pptxScan = spawnSync('find', ['.', '-path', './.git', '-prune', '-o', '-name', '*.pptx', '-print'], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  assert.equal(pptxScan.status, 0, pptxScan.stderr || pptxScan.stdout);
  assert.equal(pptxScan.stdout.trim(), '');

  const caseData = await readFile(join(casesDir, 'case-data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(caseData, sandbox);

  const cases = sandbox.window.designCases;
  assert.equal(Array.isArray(cases), true);
  assert.equal(cases.length, expectedCaseCount);
  assert.equal(new Set(cases.map(item => item.id)).size, expectedCaseCount);

  for (const item of cases) {
    assert.ok(item.title, `${item.id} 缺少标题`);
    assert.ok(item.brief, `${item.id} 缺少真实业务简报`);
    assert.ok(item.style, `${item.id} 缺少风格引用`);
    assert.ok(item.master, `${item.id} 缺少大师方法引用`);
    assert.ok(item.prompt, `${item.id} 缺少可复用 prompt`);
    assert.ok(item.deliverables.length >= 4, `${item.id} 交付物不足`);
    assert.ok(item.tokens.length >= 4, `${item.id} token 不足`);
    assert.ok(item.quality.length >= 4, `${item.id} 质量标准不足`);
  }
});

test('本地画廊案例总览链接显式指向 index.html', async () => {
  const indexHtml = await readFile(join(repoRoot, 'docs', 'index.html'), 'utf8');

  assert.match(indexHtml, /href="cases\/index\.html">案例总览/);
  assert.doesNotMatch(indexHtml, /href="cases\/">案例总览/);
});

test('每个真实案例详情页包含实际成品样张模板', async () => {
  const caseHtml = await readFile(join(casesDir, 'case.html'), 'utf8');
  const requiredArtifactSelectors = [
    'poster-sheet',
    'dash-kpis',
    'report-page',
    'booking-bar',
    'phone-screen',
    'pitch-slide',
    'commerce-hero',
    'terminal',
  ];

  assert.match(caseHtml, /id="artifact"/);
  for (const selector of requiredArtifactSelectors) {
    assert.match(caseHtml, new RegExp(selector), `缺少成品样张模板：${selector}`);
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));
const mastersDir = join(repoRoot, 'references', 'masters');
const casesDir = join(repoRoot, 'docs', 'cases');
const showcaseExampleDir = join(casesDir, 'example');
const expectedMasterCount = 20;
const expectedShowcaseExampleCount = 14;
const expectedShowcaseHtmlCount = 13;
const expectedShowcasePptxCount = 1;
const minimumMasterTypographyEntries = 4;
const removedCaseFiles = [
  'app-luxury.html',
  'case-data.js',
  'case.html',
  'cases.css',
  'poster-tang.html',
  'ppt-artdeco.html',
  'web-editorial.html',
];
const requiredShowcaseFiles = [
  'song-kenya-hara-cultural-relics-poster-2026.html',
  'swiss-vignelli-art-exhibition-poster-2026.html',
  'luxury-premium-clothing-poster-2026.html',
  'luxury-premium-pet-shop-poster-2026.html',
  'nature-organic-chuanzang-travel-poster-2026.html',
  'restaurant-fine-dining-pizza-poster-2026.html',
  'travel-hospitality-hotel-homepage-2026.html',
  'fashion-editorial-independent-designer-commerce-2026.html',
  'dark-developer-tool-launch-2026.html',
  'medical-healthcare-cleaning-company-homepage-2026.html',
  'saas-dashboard-light-manufacturing-control-panel-2026.html',
  'brutalist-web-photographer-exhibition-2026.html',
  'academic-codex-whitepaper-2026.pptx',
  'claymorphism-fitness-app-whiteboard-2026.html',
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

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

test('案例库使用 14 个真实示例并清理旧案例页', async () => {
  await assert.rejects(
    readdir(join(repoRoot, 'examples')),
    error => error && error.code === 'ENOENT',
  );
  await assert.rejects(
    readdir(join(repoRoot, 'example')),
    error => error && error.code === 'ENOENT',
  );

  const caseEntries = await readdir(casesDir);
  for (const file of removedCaseFiles) {
    assert.equal(caseEntries.includes(file), false, `旧案例文件仍然存在：${file}`);
  }

  const exampleEntries = await readdir(showcaseExampleDir);
  const htmlFiles = exampleEntries.filter(file => file.endsWith('.html')).sort();
  const pptxFiles = exampleEntries.filter(file => file.endsWith('.pptx')).sort();

  assert.equal(htmlFiles.length, expectedShowcaseHtmlCount);
  assert.equal(pptxFiles.length, expectedShowcasePptxCount);
  assert.equal(htmlFiles.length + pptxFiles.length, expectedShowcaseExampleCount);

  for (const file of requiredShowcaseFiles) {
    assert.equal(exampleEntries.includes(file), true, `缺少真实示例文件：${file}`);
  }

  for (const file of requiredShowcaseFiles) {
    const baseName = file.replace(/\.(html|pptx)$/, '');
    assert.equal(exampleEntries.includes(`${baseName}.png`), true, `${file} 缺少封面截图`);
  }

  await access(join(repoRoot, 'docs', 'assets', 'example-showcase-overview.png'));

  const caseIndex = await readFile(join(casesDir, 'index.html'), 'utf8');
  for (const file of requiredShowcaseFiles) {
    const baseName = file.replace(/\.(html|pptx)$/, '');
    assert.match(caseIndex, new RegExp(`href:\\s*"example/${escapeRegExp(file)}"`));
    assert.match(caseIndex, new RegExp(`thumb:\\s*"example/${escapeRegExp(baseName)}\\.png"`));
  }
  assert.doesNotMatch(caseIndex, /case\.html\?id=/);
  assert.doesNotMatch(caseIndex, /case-data\.js/);
});

test('README 中 14 个真实示例都提供可点击链接', async () => {
  const readme = await readFile(join(repoRoot, 'README.md'), 'utf8');

  assert.match(readme, /cases\/index\.html\?v=20260626-real-examples/);
  for (const file of requiredShowcaseFiles) {
    assert.match(readme, new RegExp(`cases/example/${escapeRegExp(file)}`));
  }
});

test('README 的安装入口指向轻量 Skill 仓库', async () => {
  const readme = await readFile(join(repoRoot, 'README.md'), 'utf8');

  assert.match(readme, /https:\/\/github\.com\/xdx888999\/xdx-lab-design-style-skill/);
  assert.match(readme, /git clone https:\/\/github\.com\/xdx888999\/xdx-lab-design-style-skill\.git/);
  assert.doesNotMatch(readme, /git clone https:\/\/github\.com\/xdx888999\/xdx-lab-design-skill\.git/);
});

test('Skill 对缺少用户素材的配图场景有硬性规则', async () => {
  const skill = await readFile(join(repoRoot, 'SKILL.md'), 'utf8');
  const readme = await readFile(join(repoRoot, 'README.md'), 'utf8');

  assert.match(skill, /资产交付合同/);
  assert.match(skill, /如果项目需要配图但用户没有提供素材/);
  assert.match(skill, /免版权 \/ 开放授权 \/ 可商用免费图库图片/);
  assert.match(skill, /不得宣称完成/);
  assert.match(skill, /生成式图片、自绘 SVG、Canvas 图示、CSS 图案纹理/);
  assert.match(readme, /如果用户没有提供素材，Agent 默认使用免版权 \/ 开放授权 \/ 可商用免费图库图片/);
});

test('本地画廊案例总览链接显式指向 index.html', async () => {
  const indexHtml = await readFile(join(repoRoot, 'docs', 'index.html'), 'utf8');

  assert.match(indexHtml, /href="cases\/index\.html\?v=20260626-real-examples">作品集总览/);
  assert.doesNotMatch(indexHtml, /href="cases\/"/);
  assert.doesNotMatch(indexHtml, /case\.html\?id=/);
});

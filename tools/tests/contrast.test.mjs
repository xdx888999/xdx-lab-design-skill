import test from 'node:test';
import assert from 'node:assert/strict';
import {
  contrastRatio,
  hexToRgb,
  relativeLuminance,
  wcagLevel,
} from '../lib/contrast.mjs';

test('hexToRgb 可以解析合法 HEX 并拒绝异常值', () => {
  assert.deepEqual(hexToRgb('#C8372D'), [200, 55, 45]);
  assert.deepEqual(hexToRgb('FFFFFF'), [255, 255, 255]);
  assert.equal(hexToRgb('#FFF'), null);
  assert.equal(hexToRgb('#GGGGGG'), null);
});

test('contrastRatio 计算 WCAG 对比度并处理非法输入', () => {
  assert.equal(relativeLuminance([0, 0, 0]), 0);
  assert.equal(relativeLuminance([255, 255, 255]), 1);
  assert.equal(contrastRatio('#000000', '#FFFFFF'), 21);
  assert.equal(contrastRatio('#FFFFFF', '#000000'), 21);
  assert.equal(contrastRatio('#XYZXYZ', '#FFFFFF'), null);
});

test('wcagLevel 根据对比度返回等级', () => {
  assert.equal(wcagLevel(7), 'AAA');
  assert.equal(wcagLevel(4.5), 'AA');
  assert.equal(wcagLevel(3), 'AA-large');
  assert.equal(wcagLevel(2.9), 'FAIL');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { mapSemanticRoles } from '../lib/semantic-map.mjs';

test('mapSemanticRoles 可以从命名和角色推导核心语义色', () => {
  const colors = [
    { name: 'Paper Background', hex: '#F7F2E8', role: 'main background' },
    { name: 'Card Surface', hex: '#FFF7EA', role: 'raised panel' },
    { name: 'Ink Black', hex: '#111111', role: 'heading text' },
    { name: 'Primary Vermillion', hex: '#C8372D', role: 'CTA buttons and active state' },
    { name: 'Secondary Accent Cyan', hex: '#1E88A8', role: 'alternative accent' },
    { name: 'Danger Tone', hex: '#D32F2F', role: 'error alert' },
    { name: 'Success Green', hex: '#2E7D32', role: 'success state' },
    { name: 'Warning Amber', hex: '#ED6C02', role: 'warning state' },
  ];

  const semantic = mapSemanticRoles(colors, false);

  assert.deepEqual(semantic, {
    surface: '#F7F2E8',
    'surface-variant': '#FFF7EA',
    'on-surface': '#111111',
    primary: '#C8372D',
    'on-primary': '#FFFFFF',
    accent: '#1E88A8',
    error: '#D32F2F',
    success: '#2E7D32',
    warning: '#ED6C02',
  });
});

test('mapSemanticRoles 在缺少主色命名时回退到最高饱和色', () => {
  const colors = [
    { name: 'Canvas White', hex: '#FFFFFF', role: 'background' },
    { name: 'Text Primary', hex: '#111111', role: 'body text' },
    { name: 'Electric Yellow', hex: '#FFE000', role: 'visual highlight' },
  ];

  const semantic = mapSemanticRoles(colors, false);

  assert.equal(semantic.primary, '#FFE000');
  assert.equal(semantic['on-primary'], '#111111');
});

test('mapSemanticRoles 对无 HEX 输入返回空对象', () => {
  assert.deepEqual(mapSemanticRoles([{ name: 'Glass', rgba: 'rgba(255,255,255,0.2)' }], false), {});
});

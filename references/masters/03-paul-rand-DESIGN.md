---
version: alpha
name: "Paul Rand Method"
colors:
  surface: "#F7F2E7"
  on-surface: "#111827"
  primary: "#1D4ED8"
  on-primary: "#FFFFFF"
  text-muted: "#6B5F52"
  red: "#E63946"
  yellow: "#F7C948"
  black: "#111111"
rounded:
  none: 0px
---

# Design System: Paul Rand Method
# 保罗·兰德设计方法

> 风格定位：现代主义、符号清晰和机智的视觉隐喻。用简单图形承载商业传播中的复杂意义。
> 使用边界：参考其现代主义原则、品牌识别方法和图形思维，不复制 IBM、UPS、ABC 等具体标志。

## 1. Visual Theme & Philosophy

- 核心气质：聪明、简洁、有幽默感、商业可用、现代主义。
- 设计目标：把品牌或主题压缩成一个可记忆的视觉观念。
- 适用场景：品牌提案、Logo 概念页、创意海报、广告主视觉、产品发布页。

## 2. Color Palette & Roles

```text
Background:   #F7F2E7
Surface:      #FFFFFF
Text primary: #111827
Text muted:   #6B5F52
Red:          #E63946
Blue:         #1D4ED8
Yellow:       #F7C948
Black:        #111111
```

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Text primary | `#111827` | `#F7F2E7` | 15.9:1 | AAA |
| Text muted | `#6B5F52` | `#F7F2E7` | 5.6:1 | AA |

## 3. Typography Rules

- Heading: `Futura`, `Avenir`, `Inter`, sans-serif; weight 600-800.
- Body: `Inter`, `Helvetica Neue`, sans-serif; weight 400.
- 标题可使用大小写对比，但字形必须干净。
- 允许一个强几何字母作为图形主角。

## 4. Layout & Component Rules

- 用大留白突出一个强符号，不要堆满装饰。
- 版面可采用非对称构图，但视觉重心必须稳定。
- 卡片和组件保持简单，图形符号比 UI 装饰更重要。
- CTA 可使用原色块，但比例要精确，不做渐变。

## 5. Imagery & Iconography

- 使用拼贴、几何形、手绘感符号和简化物象。
- 图标应像商标一样可在小尺寸下识别。
- 可用一个意外的视觉双关作为封面主概念。

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 6. Do's and Don'ts

Do:
- 先提炼一句核心概念，再画图形。
- 让符号在黑白状态也成立。
- 用色大胆但数量有限。

Don't:
- 不要复制具体企业 Logo。
- 不要用复杂插图掩盖概念不清。
- 不要让装饰超过符号本身。

## 7. Output Behavior

- 海报：一个主符号 + 一个标题 + 最少必要信息。
- 网站：Hero 必须有可记忆图形，而不是普通产品截图。
- PPT：每章节可使用一个概念符号建立记忆点。

## 8. Agent Prompt Guide

```text
使用 Paul Rand 方法设计。先把主题提炼成一个现代主义符号，用 #F7F2E7 背景、#E63946 / #1D4ED8 / #F7C948 原色强调，保持留白和几何清晰。不要复制任何现有 Logo，要原创一个能表达主题的视觉隐喻。
```

## 9. Source Notes

- Paul Rand official archive: https://www.paulrand.design/
- Smithsonian American Art Museum: https://americanart.si.edu/artist/paul-rand-3936


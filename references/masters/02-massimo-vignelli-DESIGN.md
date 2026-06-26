---
version: alpha
name: "Massimo Vignelli Method"
colors:
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  primary: "#E31B23"
  on-primary: "#FFFFFF"
  surface: "#F4F4F2"
  text-muted: "#666666"
  rule: "#CFCFCB"
  accent-blue: "#0057B8"
typography:
  display:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 700
  heading:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: 30px
    fontWeight: 600
  body:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
  caption:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 600
rounded:
  none: 0px
---

# Design System: Massimo Vignelli Method
# 马西莫·维涅利设计方法

> 风格定位：用网格、字体纪律和长期主义建立秩序。设计不是表面风格，而是语义、结构和可理解性。
> 使用边界：参考 Vignelli 的系统化设计思想，不复制特定品牌、地图或导视方案。

## 1. Visual Theme & Philosophy

- 核心气质：严谨、永恒、系统、清晰、国际主义。
- 设计目标：让信息站在强结构上，减少短期潮流干扰。
- 适用场景：品牌系统、导视、出版物、企业官网、年度报告、机构 PPT。

## 2. Color Palette & Roles

```text
Background:   #FFFFFF
Surface:      #F4F4F2
Text primary: #0A0A0A
Text muted:   #666666
Rule:         #CFCFCB
Accent red:   #E31B23
Accent blue:  #0057B8
```

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Text primary | `#0A0A0A` | `#FFFFFF` | 19.8:1 | AAA |
| Text muted | `#666666` | `#FFFFFF` | 5.7:1 | AA |

## 3. Typography Rules

- Heading: `Helvetica Neue`, `Arial`, `Inter`, sans-serif; weight 600.
- Body: `Helvetica Neue`, `Arial`, `Inter`, sans-serif; weight 400.
- 可少量使用 `Libre Baskerville` 或 `Times New Roman` 做正式引用，但不要混用过多字体。
- 使用左对齐为主；若使用居中，必须建立严格轴线。

## 4. Layout & Component Rules

- 必须先设定网格：12 列、6 列或清晰的中心轴。
- 标题、正文、图、注释必须落在同一系统中；不要凭感觉摆放。
- 卡片可以无圆角或 2px 圆角，边框要比阴影重要。
- CTA 使用纯色矩形，留白和比例比装饰更重要。

## 5. Imagery & Iconography

- 图片以黑白、单色或高对比裁切为主。
- 图标和导视符号保持统一笔画和几何比例。
- 数据图要有坐标、单位、注释，不做花哨视觉。

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 6. Do's and Don'ts

Do:
- 先定义信息分类和网格，再进入视觉。
- 控制字体数量，保持字重和字号层级稳定。
- 使用少量红/蓝作为系统级信号。

Don't:
- 不要使用随机排版、装饰纹理、风格拼贴。
- 不要把标题做成没有结构依据的视觉噱头。
- 不要为了活泼破坏一致性。

## 7. Output Behavior

- 网站：导航、标题、内容块和 CTA 必须共享同一网格。
- PPT：封面、目录、章节页、内容页应形成统一版式系统。
- Figma：先输出 tokens、grid、type scale，再做 frames。

## 8. Agent Prompt Guide

```text
使用 Massimo Vignelli 方法设计。先建立严格网格和字体系统，以 Helvetica/Inter 为核心，背景 #FFFFFF，文字 #0A0A0A，少量 #E31B23 / #0057B8 做系统强调。整体要像长期可用的品牌和导视系统，不追求短期潮流。
```

## 9. Source Notes

- Vignelli Center: https://www.rit.edu/vignellicenter/
- The Vignelli Canon: https://www.rit.edu/vignellicenter/sites/rit.edu.vignellicenter/files/documents/The%20Vignelli%20Canon.pdf


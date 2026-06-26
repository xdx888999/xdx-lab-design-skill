---
version: alpha
name: "Armin Hofmann Method"
colors:
  surface: "#F5F5F2"
  on-surface: "#111111"
  primary: "#CC0000"
  on-primary: "#FFFFFF"
  text-muted: "#5F5F59"
  mid-gray: "#8A8A84"
  light-gray: "#D6D6D0"
typography:
  display:
    fontFamily: "Helvetica Neue, Inter, Arial, sans-serif"
    fontSize: 60px
    fontWeight: 800
  heading:
    fontFamily: "Helvetica Neue, Inter, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
  body:
    fontFamily: "Helvetica Neue, Inter, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
  caption:
    fontFamily: "Helvetica Neue, Inter, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
rounded:
  none: 0px
---

# Design System: Armin Hofmann Method
# 阿明·霍夫曼设计方法

> 风格定位：用点、线、面、明暗和比例制造视觉张力。克制不是空白，而是精准的对比。
> 使用边界：参考其瑞士设计教育和海报方法，不复制具体 Kunsthalle Basel 等作品。

## 1. Visual Theme & Philosophy

- 核心气质：黑白、高对比、紧张、实验、教育性。
- 设计目标：用最少元素建立最大视觉关系。
- 适用场景：艺术展览、实验海报、设计课程、文化机构、黑白品牌提案。

## 2. Color Palette & Roles

```text
Background:   #F5F5F2
Text primary: #111111
Text muted:   #5F5F59
Mid gray:     #8A8A84
Light gray:   #D6D6D0
Accent red:   #CC0000
```

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Text primary | `#111111` | `#F5F5F2` | 17.3:1 | AAA |
| Text muted | `#5F5F59` | `#F5F5F2` | 5.9:1 | AA |

## 3. Typography Rules

- Heading: `Helvetica Neue`, `Arial`, `Inter`, sans-serif; weight 500-700.
- Body: `Inter`, `Helvetica Neue`, sans-serif; weight 400.
- 字体不是装饰，应该服务形态关系。
- 大标题可以压缩到画面边缘，但不可裁掉核心语义。

## 4. Layout & Component Rules

- 通过尺度差、黑白关系、倾斜、重复建立张力。
- 卡片不是重点；更适合海报、分割线、文字块和图形关系。
- 允许大面积黑形或灰形，但必须服务视觉结构。
- 留白要主动塑形，不是空出来的背景。

## 5. Imagery & Iconography

- 使用高对比摄影、局部裁切、单个抽象形。
- 图标保持几何、粗细统一，避免彩色插画。
- 可以把图片当作黑白形体，而不是普通配图。

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 6. Do's and Don'ts

Do:
- 先做黑白稿，确认张力成立后再加极少颜色。
- 用尺度和位置关系表达主题。
- 保持元素数量极少。

Don't:
- 不要加入渐变、材质和复杂背景。
- 不要使用可爱或商业化插画。
- 不要把画面做成普通 Swiss 模板，必须有张力。

## 7. Output Behavior

- 海报：最适合，用一个形态关系支撑全画面。
- PPT：适合章节页和概念页，正文页要降低张力提高可读性。
- 网站：适合艺术机构首页，不适合复杂电商。

## 8. Agent Prompt Guide

```text
使用 Armin Hofmann 方法设计。以 #F5F5F2、黑、灰为主，先建立强烈黑白构成，再用少量 #CC0000 做强调。用点线面、尺度、裁切和负空间制造张力，避免装饰和多色。
```

## 9. Source Notes

- AIGA Medalist: https://www.aiga.org/membership-community/aiga-awards/2011-aiga-medalist-armin-hofmann
- MoMA poster collection references Hofmann's museum presence through Swiss design context.


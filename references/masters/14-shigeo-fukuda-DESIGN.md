---
version: alpha
name: "Shigeo Fukuda Method"
colors:
  surface: "#FFFFFF"
  on-surface: "#111111"
  primary: "#0057B8"
  on-primary: "#FFFFFF"
  text-muted: "#606060"
  red: "#E31B23"
  soft-gray: "#F2F2F2"
  line: "#D6D6D6"
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
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
  caption:
    fontFamily: "Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 600
rounded:
  none: 0px
---

# Design System: Shigeo Fukuda Method
# 福田繁雄设计方法

> 风格定位：视觉机智、错视、极简符号和社会议题。让观众先“看懂谜题”，再理解观点。
> 使用边界：参考其错视和公益海报方法，不复制具体反战、环保海报图像。

## 1. Visual Theme & Philosophy

- 核心气质：聪明、极简、反转、讽刺、公益性。
- 设计目标：用一个视觉悖论传达一个清晰观点。
- 适用场景：公益倡导、课堂引入、概念海报、品牌传播中的观点表达。

## 2. Color Palette & Roles

```text
Background:   #FFFFFF
Text primary: #111111
Text muted:   #606060
Red:          #E31B23
Blue:         #0057B8
Soft gray:    #F2F2F2
Line:         #D6D6D6
```

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Text primary | `#111111` | `#FFFFFF` | 18.9:1 | AAA |
| Text muted | `#606060` | `#FFFFFF` | 6.3:1 | AA |

## 3. Typography Rules

- Heading: `Helvetica Neue`, `Inter`, `Arial`, sans-serif; weight 600-800.
- Body: `Inter`, `Helvetica Neue`, sans-serif; weight 400.
- 文案必须短，最好一句话完成反转。
- 字体中性，让图形谜题成为主角。

## 4. Layout & Component Rules

- 使用白底、中心图形、最少文字。
- 主图形要能产生双重意义：正负形、方向反转、影子、错视。
- 卡片和 UI 中可使用“问题卡 / 答案卡 / 反转图示”。
- 色彩越少越好，红色用于议题或关键冲突。

## 5. Imagery & Iconography

- 使用原创错视图形、负空间、影子和符号替换。
- 图标应可在黑白状态成立。
- 避免真实照片，除非照片能形成明确视觉悖论。

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 6. Do's and Don'ts

Do:
- 先定义观点，再设计错视。
- 保持图形极简，让观众一眼参与解谜。
- 让幽默服务议题。

Don't:
- 不要为了炫技做难懂谜题。
- 不要把公益议题做成轻浮玩笑。
- 不要复制经典反战海报。

## 7. Output Behavior

- 海报：中心错视图 + 一句标题。
- PPT：适合开场问题、概念反转、课堂互动。
- 网站：适合作为 campaign 首屏，不适合复杂信息密集页。

## 8. Agent Prompt Guide

```text
使用 Shigeo Fukuda 方法设计。白底、黑色极简符号、少量 #E31B23，构造一个原创视觉错视或双关图形来表达主题。文字要短，图形要聪明但不难懂。
```

## 9. Source Notes

- MoMA: https://www.moma.org/collection/artists/2026
- International Council of Design: https://www.theicod.org/resources/news-archive/shigeo-fukuda-passes-away-at-76


---
version: alpha
name: "Laszlo Moholy-Nagy Method"
colors:
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  primary: "#0057B8"
  on-primary: "#FFFFFF"
  text-muted: "#666666"
  red: "#E31B23"
  yellow: "#FFD100"
  metal: "#C0C0C0"
  shadow: "#1F2937"
rounded:
  none: 0px
---

# Design System: Laszlo Moholy-Nagy Method
# 拉斯洛·莫霍利-纳吉设计方法

> 风格定位：光、摄影、机械、实验教育和构成主义媒体。把技术当成扩展感知的工具。
> 使用边界：参考其 Bauhaus 教学、摄影和新媒体实验方法，不复制具体艺术作品。

## 1. Visual Theme & Philosophy

- 核心气质：实验、机械、光感、未来主义、教育性。
- 设计目标：通过透明层、投影、摄影裁切和几何关系展示新感知。
- 适用场景：科技展览、实验课程、创新报告、AI/影像工具、设计研究网页。

## 2. Color Palette & Roles

```text
Background:   #FFFFFF
Text primary: #0A0A0A
Text muted:   #666666
Red:          #E31B23
Blue:         #0057B8
Yellow:       #FFD100
Metal:        #C0C0C0
Shadow:       #1F2937
```

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Text primary | `#0A0A0A` | `#FFFFFF` | 19.8:1 | AAA |
| Text muted | `#666666` | `#FFFFFF` | 5.7:1 | AA |

## 3. Typography Rules

- Heading: `Space Grotesk`, `Futura`, `Inter`, sans-serif; weight 600-800.
- Body: `IBM Plex Sans`, `Inter`, sans-serif; weight 400.
- 可少量使用 `IBM Plex Mono` 表达实验记录或技术数据。
- 排版可以斜向、层叠，但必须保留阅读路径。

## 4. Layout & Component Rules

- 使用透明叠层、圆/线/矩形、机械轴线、光影投射。
- 图片和文字可形成 collage，但不要失控。
- 卡片可像实验记录板：编号、参数、注释、图像样本。
- 动效适合使用缓慢旋转、光束移动、层叠显隐。

## 5. Imagery & Iconography

- 使用摄影局部、X-ray 感、实验装置、抽象光影。
- 图标可以是机械符号和几何指示。
- 视觉资产应强调“看见新的关系”，不是普通科技背景。

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 6. Do's and Don'ts

Do:
- 结合摄影、几何和文字。
- 用光影解释结构或概念。
- 保持实验感与信息可读的平衡。

Don't:
- 不要做成普通 Bauhaus 三原色模板。
- 不要滥用科技霓虹。
- 不要让 collage 遮挡核心信息。

## 7. Output Behavior

- 网站：适合做全屏实验视觉和分层滚动。
- PPT：适合概念引入、实验步骤和视觉研究。
- 海报：适合摄影 + 几何 + 斜向标题。

## 8. Agent Prompt Guide

```text
使用 Laszlo Moholy-Nagy 方法设计。用白底、黑字、三原色和金属灰，加入光影、透明叠层、摄影裁切和构成主义几何。整体要像实验室里的视觉研究，而不是普通科技模板。
```

## 9. Source Notes

- MoMA: https://www.moma.org/collection/artists/4048
- The Art Story overview: https://www.theartstory.org/artist/moholy-nagy-laszlo/


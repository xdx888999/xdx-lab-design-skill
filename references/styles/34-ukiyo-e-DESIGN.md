---
version: alpha
name: "Ukiyo-e Woodblock"
colors:
  surface: "#F5F0E6"
  surface-variant: "#EDE6D4"
  on-surface: "#1A1614"
  primary: "#1A4B7A"
  on-primary: "#FFFFFF"
  deep-indigo: "#1E2A5E"
  cerulean: "#4A88C0"
  sky-pale: "#A8C8D8"
  terracotta: "#D4603A"
  vermillion: "#C43B2A"
  sap-green: "#4A7A3A"
typography:
  title:
    fontFamily: "Noto Serif JP"
    fontSize: 64px
    fontWeight: 700
  sub-heading:
    fontFamily: "Noto Serif JP"
    fontSize: 20px
    fontWeight: 600
  caption:
    fontFamily: "Noto Serif JP"
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  section-padding: 80px
components:
  card:
    backgroundColor: "{colors.surface-variant}"
    border: "2px solid {colors.on-surface}  ← strong woodblock outline"
    rounded: "0px"
    padding: "24px"
  button:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "2px solid {colors.primary}"
    rounded: "0px"
    padding: "10px 28px"
    hover: "background {colors.primary}, color {colors.surface}"
  wave-divider:
    height: "60–80px"
---

# Design System: Ukiyo-e Woodblock
# 浮世绘版画风格

> **风格定位**：江户时代浮世绘的数字演绎。葛饰北斋《神奈川冲浪里》的视觉张力——波浪线条、平涂色块、戏剧性构图。
> **适用场景**：日本文化品牌、旅行/酒店、艺术展览、和风游戏、日式餐饮、文创产品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Ukiyo-e (浮世絵, "pictures of the floating world") — the woodblock print tradition of Edo-period Japan (1603–1868). Hokusai, Hiroshige, Utamaro: these artists created compositions of extraordinary graphic power. Flat planes of color divided by precise black outlines. Indigo waves. Terracotta skies. The explosive energy of a crashing wave rendered in pure 2D geometry.

This design system translates woodblock aesthetics into digital form: strong black outlines, flat color fills, no gradients, no shadows. The composition is dramatic and asymmetric — foreground objects loom large while distance shrinks to a sliver. The palette derives from Prussian blue, bokashi (graduated color blocks), and the ivory of Japanese washi paper.

**Key Characteristics:**
- Ivory washi paper background (#F5F0E6)
- Strong black outlines (2–4px) defining all elements
- Flat color fills — no gradients, no shadows
- Prussian blue (#1A4B7A) as primary dramatic color
- Terracotta (#D4603A) and indigo as secondary accents
- Asymmetric, dramatic compositions with foreground/background scale contrast
- Wave, cloud, mountain motifs as structural design elements

---

## 2. Color Palette & Roles

### Background
- **Washi Ivory** (`#F5F0E6`): Warm paper tone — primary background.
- **Aged Washi** (`#EDE6D4`): Slightly darker for card differentiation.

### Woodblock Palette
- **Prussian Blue** (`#1A4B7A`): Primary — the signature color of Hokusai's wave.
- **Deep Indigo** (`#1E2A5E`): Dark variant, background elements.
- **Cerulean** (`#4A88C0`): Mid-tone blue for gradation (bokashi).
- **Sky Pale** (`#A8C8D8`): Light blue, background sky tones.
- **Terracotta** (`#D4603A`): Warm dramatic accent — Hiroshige sunsets.
- **Vermillion** (`#C43B2A`): Bold accents, seals, important UI.
- **Sap Green** (`#4A7A3A`): Mountain/pine foliage.
- **Ink Black** (`#1A1614`): Outlines, text — warm black.
- **Cream** (`#F5F0E6`): Paper white — negative space fill.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Washi Ivory | `#F5F0E6` | `#F5F0E6` | 1:1 | FAIL |
| Prussian Blue | `#1A4B7A` | `#F5F0E6` | 7.9:1 | AAA |
| Ink Black | `#1A1614` | `#F5F0E6` | 15.8:1 | AAA |

## 3. Typography Rules

### Font Family
- **Japanese**: `Noto Serif JP` (Google Fonts) or `Shippori Mincho`
- **Latin**: `Playfair Display` weight 700 — editorial serif
- **Body**: `Noto Serif JP` weight 400

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Title | 48–64px | 700 | #1A4B7A | Or vermillion for dramatic effect |
| Heading | 28–36px | 700 | #1A1614 | |
| Sub-heading | 20px | 600 | #1A4B7A | |
| Body | 16–17px | 400 | #1A1614 | line-height: 1.9 |
| Caption | 13px | 400 | #6A6058 | |
| Seal/Label | 11px | 700 | #C43B2A | Vermillion, letter-spacing: 2px |

### Typography Notes
- Vertical text naturally fits this aesthetic: `writing-mode: vertical-rl`
- Mixed Japanese/English layouts should have clear visual hierarchy by scale
- Use `font-feature-settings: "palt"` for proper CJK spacing

---

## 4. Component Stylings

### Card (版画式)
```
background: #EDE6D4
border: 2px solid #1A1614  ← strong woodblock outline
border-radius: 0px
padding: 24px

No shadows. Elevation = stronger border weight.
```

### Button
```
Primary:
  background: #1A4B7A
  color: #F5F0E6
  border: 2px solid #1A1614
  border-radius: 0px
  padding: 10px 28px
  hover: background #D4603A (terracotta shift — dramatic)

Ghost:
  background: transparent
  border: 2px solid #1A4B7A
  color: #1A4B7A
  hover: background #1A4B7A, color #F5F0E6
```

### Wave Divider (波浪分隔)
```
SVG wave pattern in Prussian blue — flat, with black 2px outline
height: 60–80px
Evokes Hokusai's signature wave forms
```

### Section Background Panels
```
Prussian blue section: background #1A4B7A, text #F5F0E6
Terracotta section: background #D4603A, text #F5F0E6
Use for alternating section contrast — flat, no gradient
```

---

## 5. Layout Principles

- **Dramatic scale contrast**: Foreground elements are very large, backgrounds compressed
- **Asymmetry**: Content offset to one side; negative space counterbalances
- **Border outlines**: All cards and images have strong black borders
- **Max-width**: 1100px
- **Section padding**: 80–100px
- **Flat panels**: Color sections are flat fills, no gradients

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

No shadows. Elevation through:
- Outline weight: base 1px → elevated 2px → featured 3px
- Color contrast: ivory → aged washi → blue panels
- Scale: larger = more important (woodblock principle)

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Use strong black outlines on all card/image elements
- Apply flat color fills — no gradients (woodblock can't do gradients)
- Use Prussian blue as the dominant color — it defines the aesthetic
- Create dramatic scale contrasts in layouts
- Incorporate wave/cloud/mountain motifs as decorative elements

### Don't
- Don't use box-shadows or drop-shadows
- Don't use photography without woodblock-style processing (posterization)
- Don't use rounded corners (woodblock prints have sharp edges)
- Don't use multiple fonts — stick to one serif family

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; reduce outline weights to 1.5px |
| Desktop | 1024px+ | Dramatic asymmetric two-column layouts |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Washi bg:        #F5F0E6
Prussian blue:   #1A4B7A
Deep indigo:     #1E2A5E
Cerulean:        #4A88C0
Terracotta:      #D4603A
Vermillion:      #C43B2A
Sap green:       #4A7A3A
Ink black:       #1A1614
```

### Example Prompts
- "Ukiyo-e woodblock style hero: #F5F0E6 washi background. Full-width SVG wave element in Prussian blue (#1A4B7A) with 2px black outline, covering bottom 40% of hero. Title 56px Noto Serif JP #1A1614, strong and large. Content card: #EDE6D4 background, 2px solid #1A1614 border, 0px radius. CTA button: #1A4B7A, #F5F0E6 text, 2px #1A1614 border, 0px radius. No shadows, no gradients — flat like a woodblock print."

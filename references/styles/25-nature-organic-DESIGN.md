---
version: alpha
name: "Nature Organic"
colors:
  surface: "#FAF6F0"
  surface-variant: "#E2D5C0"
  on-surface: "#2A2218"
  primary: "#4A8B3A"
  on-primary: "#111111"
  linen: "#F0E8D8"
  border-warm: "#CBBFA8"
  forest: "#2D5A27"
  sage: "#8FAE8A"
  mint-light: "#C8DFC4"
  ochre: "#C4832A"
  clay: "#9C5A3C"
  terracotta: "#C4614A"
  bark: "#6B4226"
  body: "#4A3B2A"
  muted: "#7A6B55"
  color: "#FFFFFF"
typography:
  caveat:
    fontFamily: "Source Serif 4"
    fontSize: 28px
    fontWeight: 400
rounded:
  none: 16px
  sm: 100px
spacing:
  section-padding: 24px
  max-width: 1200px
  gutter: 24px
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.color}"
    padding: "14px 28px"
    rounded: "100px (pill — organic, no hard corners)"
    border: "none"
    typography: "Jost 15px weight 500"
    shadow: "0 4px 12px rgba(74,139,58,0.25)"
    hover: "background {colors.forest}"
  ghost-button:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "2px solid {colors.primary}"
    rounded: "100px"
    padding: "12px 26px"
    typography: "Jost 15px weight 500"
    hover: "background rgba(74,139,58,0.08)"
  product-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border-warm}"
    rounded: "16px (slightly generous — organic)"
  ingredientfeature-tag:
    backgroundColor: "{colors.mint-light}"
    textColor: "{colors.forest}"
    rounded: "100px"
    padding: "4px 12px"
    typography: "Jost 12px weight 500"
  section-with-texture:
    backgroundColor: "{colors.linen}"
    padding: "80px 0"
  handwritten-accent:
    typography: "Caveat 28px weight 400 {colors.primary}"
---

# Design System: Nature Organic
# 自然有机风格

> **风格定位**：大地感、可持续、真实材质。绿植配色、手写笔触、有机形状，传递天然与可信赖。
> **适用场景**：有机食品品牌、可持续生活产品、植物护肤、农场直送、环保公司、户外品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Nature Organic design communicates trust through authenticity. The visual language says: nothing artificial here. The palette is drawn from living plants, rich soil, morning light, and clean water. Every design choice reinforces the message of naturalness.

This is not the corporate green of sustainability-washing — it is the genuine warmth of a farmers' market, handwritten labels, linen packaging, and real photography of real ingredients. Imperfection is a virtue. Organic shapes over geometric grids. Human typography over mechanical precision.

**Key Characteristics:**
- Earth palette: greens, ochres, warm whites, clay
- Organic/biomorphic shapes (blobs, leaf curves, natural boundaries)
- Texture presence: linen, paper grain, natural fiber
- Humanist typography (not geometric, not corporate)
- Photography: real ingredients, natural light, honest — no studio styling
- Hand-drawn elements: botanical illustrations, handwritten labels
- Generous whitespace with warm, not cold, base

---

## 2. Color Palette & Roles

### Earth Foundation
- **Cream** (`#FAF6F0`): Warm white — cream, like unbleached paper.
- **Linen** (`#F0E8D8`): Surface — natural fiber tones.
- **Sand** (`#E2D5C0`): Card backgrounds.
- **Border Warm** (`#CBBFA8`): Dividers, subtle borders.

### Greens (primary brand palette)
- **Forest** (`#2D5A27`): Deep, trusted green — primary brand.
- **Leaf** (`#4A8B3A`): Vibrant mid-green — active states, CTAs.
- **Sage** (`#8FAE8A`): Soft green — secondary, backgrounds.
- **Mint Light** (`#C8DFC4`): Very light green — tint areas.

### Earth Accents
- **Ochre** (`#C4832A`): Warm amber — seasonal warmth, harvest.
- **Clay** (`#9C5A3C`): Earthy red-brown — autumn/root theme.
- **Terracotta** (`#C4614A`): Bold warm red.
- **Bark** (`#6B4226`): Dark brown — deep text option.

### Text
- **Primary** (`#2A2218`): Warm near-black (not pure black — organic).
- **Body** (`#4A3B2A`): Warm brown-gray.
- **Muted** (`#7A6B55`): Captions, metadata.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Forest | `#2D5A27` | `#FAF6F0` | 7.5:1 | AAA |
| Sage | `#8FAE8A` | `#FAF6F0` | 2.3:1 | FAIL |
| Bark | `#6B4226` | `#FAF6F0` | 8:1 | AAA |
| Primary | `#2A2218` | `#FAF6F0` | 14.6:1 | AAA |
| Body | `#4A3B2A` | `#FAF6F0` | 10:1 | AAA |
| Muted | `#7A6B55` | `#FAF6F0` | 4.8:1 | AA |

## 3. Typography Rules

### Font Family
- **Display**: `Lora` (warm serif, humanist) or `DM Serif Display`
- **Body**: `Source Serif 4` weight 300–400 or `Jost` weight 300
- **Handwritten accent**: `Caveat` or `Satisfy` (for labels, accents, handwritten notes)
- **Alternative Display**: `Fraunces` (organic, slightly irregular)

### Hierarchy

| Role | Family | Size | Weight | Color | Notes |
|------|--------|------|--------|-------|-------|
| Brand/Hero | Lora | 64px | 700 | #2A2218 | Warm serif, line-height 1.1 |
| Display | Lora | 48px | 600 | #2A2218 | |
| H2 | Lora | 32px | 600 | #2D5A27 | Green accented |
| Handwritten | Caveat | 28px | 400 | #4A8B3A | For emphasis, labels |
| Body | Source Serif | 16px | 400 | #4A3B2A | line-height 1.75 |
| Caption | Jost | 12px | 400 | #7A6B55 | Ingredients, notes |
| Label | Jost | 11px | 500 | #2D5A27 | Uppercase, categories |

### Typography Rules
- Serif for all primary text — the humanist quality signals artisanal care
- Handwritten font for 1–2 accent moments (not body text)
- Generous line-height (1.7–1.8) — unhurried reading
- Avoid geometric sans-serif — it signals corporate, not natural

---

## 4. Component Stylings

### Primary Button
```
background: #4A8B3A
color: #FFFFFF
padding: 14px 28px
border-radius: 100px (pill — organic, no hard corners)
border: none
font: Jost 15px weight 500
box-shadow: 0 4px 12px rgba(74,139,58,0.25)
hover: background #2D5A27
```

### Ghost Button
```
background: transparent
color: #4A8B3A
border: 2px solid #4A8B3A
border-radius: 100px
padding: 12px 26px
font: Jost 15px weight 500
hover: background rgba(74,139,58,0.08)
```

### Product Card
```
background: #FAF6F0
border: 1px solid #CBBFA8
border-radius: 16px (slightly generous — organic)
overflow: hidden

Image: full-width, natural light photo style
Content padding: 16px 20px
Badge: pill shape, #C8DFC4 bg #2D5A27 text (e.g. "Organic", "Farm Fresh")
Name: 18px Lora weight 600 #2A2218
Price: 16px Jost weight 500 #4A3B2A
Description: 13px Source Serif #7A6B55 line-height 1.6
CTA: small pill button #4A8B3A
```

### Ingredient/Feature Tag
```
background: #C8DFC4
color: #2D5A27
border-radius: 100px
padding: 4px 12px
font: Jost 12px weight 500
```

### Section With Texture
```
background: #F0E8D8
background-image: url('grain-texture.png') (optional subtle paper grain)
padding: 80px 0
```

### Handwritten Accent
```
font: Caveat 28px weight 400 #4A8B3A
transform: rotate(-2deg) (slight tilt — human touch)
Used for: "Fresh daily", product callouts, section labels
```

---

## 5. Layout Principles

### Spacing
- Generous: 80–100px section padding
- Card gutter: 24px
- Content max width: 1200px
- Text content: 680px
- Organic asymmetry: intentional imbalance in image/text layout

### Grid Approach
- 12-column, but use organically: not rigid 4-col cards — vary
- Full-bleed images alternating with text sections
- Feature ingredients: large image + text prose (not spec lists)
- Hero: overlapping elements, one image bleeding into text zone

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 24px |
| max-width | 1200px |
| gutter | 24px |

## 6. Depth & Elevation

Organic depth — no harsh shadows:
- Warm-toned shadows only: `rgba(74,59,42,0.1)` 
- Product cards: `0 4px 16px rgba(74,59,42,0.08)`
- Hover: `0 8px 24px rgba(74,59,42,0.12)`
- No cool/blue-tinted shadows

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 16px | Square elements |
| sm | 100px | Inputs, tags |

---

## 7. Do's and Don'ts

### Do
- Use warm colors exclusively — cool colors break the organic warmth
- Apply humanist serif fonts — they feel hand-crafted
- Add handwritten font accents for personality (one per section)
- Use real photography: ingredients on linen, plants in soil, hands touching produce
- Use pill-shaped buttons — curved, organic, approachable
- Let cards breathe — 16px padding minimum

### Don't
- Don't use geometric sans-serif (Inter, Helvetica) as primary font
- Don't use cool whites (#FFFFFF) — always warm (#FAF6F0)
- Don't use harsh shadows or pure black borders
- Don't use corporate/tech visual patterns
- Don't show perfect, studio-lit photos — realness is the brand

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, pill CTA full-width, hero 50vh |
| Tablet | 640–1024px | 2-col product grid |
| Desktop | 1024px+ | 3-col product grid, alternating editorial layouts |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:  #FAF6F0
Surface:     #F0E8D8
Border:      #CBBFA8
Text:        #2A2218
Body:        #4A3B2A
Muted:       #7A6B55
Forest:      #2D5A27
Leaf green:  #4A8B3A
Sage:        #8FAE8A
Mint:        #C8DFC4
Ochre:       #C4832A
```

### Example Prompts
- "Design a nature organic product section: #FAF6F0 background. Product card: #FAF6F0 bg, 1px solid #CBBFA8 border, 16px radius. Natural photography. Badge: #C8DFC4 bg, #2D5A27 'Certified Organic' text, pill shape. Product name: 18px Lora weight 600 #2A2218. Price: 16px Jost #4A3B2A. Pill CTA button: #4A8B3A, white text, 100px radius."
- "Create a nature brand hero: warm cream #FAF6F0 bg. Large botanical photography full-bleed left. Right: handwritten Caveat 28px #4A8B3A accent '-' mark, hero headline 64px Lora weight 700 #2A2218. Body 16px Source Serif #4A3B2A line-height 1.75. Pill button #4A8B3A. Organic ingredient tags (#C8DFC4 pills)."

---
version: alpha
name: "Tang Dynasty Splendor"
colors:
  surface: "#F0DFA0"
  on-surface: "#0D0805"
  primary: "#3D1200"
  on-primary: "#FFFFFF"
  accent: "#E8C456"
  error: "#C43B2A"
  midnight-jade: "#0A1A15"
  imperial-gold: "#C9A84C"
  dark-gold: "#8B6B2A"
  lapis-blue: "#2B5BA8"
  malachite: "#2D7A5A"
  jadeite-white: "#E8EDE5"
typography:
  emperor-title:
    fontFamily: "Noto Serif SC"
    fontSize: 72px
    fontWeight: 700
  sub-heading:
    fontFamily: "Noto Serif SC"
    fontSize: 24px
    fontWeight: 600
  caption:
    fontFamily: "Noto Serif SC"
    fontSize: 13px
    fontWeight: 300
rounded:
  none: 0px
spacing:
  section-padding: 80px
components:
  card:
    backgroundColor: "rgba(201,168,76,0.06)"
    border: "1.5px solid {colors.accent}"
    rounded: "0px"
    padding: "28px 32px"
    shadow: "0 0 24px rgba(201,168,76,0.2)"
  button:
    backgroundColor: "transparent"
    textColor: "{colors.imperial-gold}"
    rounded: "0px"
    padding: "12px 36px"
    typography: "Noto Serif SC 600 14px letter-spacing: 0.12em"
    hover: "background rgba(201,168,76,0.1)"
    border: "1.5px solid {colors.imperial-gold}"
  ornamental-divider:
    textColor: "{colors.imperial-gold}"
  pattern-border:
    border: "3px solid {colors.imperial-gold}"
---

# Design System: Tang Dynasty Splendor
# 唐代华彩风格

> **风格定位**：盛唐的国际与富丽。金色、朱砂、孔雀蓝——丝绸之路带来的色彩碰撞，敦煌壁画的视觉震撼。
> **适用场景**：中式奢华品牌、博物馆大展、文旅项目、唐风游戏/影视宣传、高档国宴/酒店
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

The Tang Dynasty (618–907 CE) was China at its most cosmopolitan and confident. Chang'an was the world's largest city. Silk Road caravans brought lapis lazuli, Persian motifs, and Central Asian music. The court wore bold colors: crimson robes, gold ornaments, peacock-blue glazed tiles.

This design system captures Tang visual language: rich jewel tones against dark backgrounds, gold as a structural element (not mere decoration), and the bold geometry of Tang patterns — cloud scrolls, lotus roundels, four-petal medallions. Unlike Song's restraint, Tang says: more is more.

**Key Characteristics:**
- Deep lacquer-black or dark vermillion backgrounds
- Gold (#C9A84C or #E8C456) as structural color — borders, titles, ornaments
- Jewel accent palette: lapis blue, malachite green, jadeite white
- Noto Serif SC or bold display Chinese fonts
- Symmetric, ceremonial compositions — the Tang court was formal
- Pattern elements from Dunhuang murals and Tang textile motifs
- No flat/minimal aesthetics — Tang is rich, layered, hierarchical

---

## 2. Color Palette & Roles

### Background
- **Lacquer Black** (`#0D0805`): The deepest ground — lacquerware black.
- **Vermillion Dark** (`#3D1200`): Alternative warm dark — cinnabar earth.
- **Midnight Jade** (`#0A1A15`): Cool dark alternative.

### Gold Scale (structural, not decorative)
- **Imperial Gold** (`#C9A84C`): Primary gold — borders, titles, key UI.
- **Bright Gold** (`#E8C456`): Highlight, hover states.
- **Pale Gold** (`#F0DFA0`): Secondary text on dark backgrounds.
- **Dark Gold** (`#8B6B2A`): Shadow side of gold elements.

### Jewel Palette
- **Lapis Blue** (`#2B5BA8`): Tang ceramics blue — buttons, links.
- **Malachite** (`#2D7A5A`): Tang green glaze — secondary accent.
- **Cinnabar** (`#C43B2A`): Vermillion red — alert, emphasis.
- **Jadeite White** (`#E8EDE5`): Off-white for body text on dark.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Imperial Gold | `#C9A84C` | `#F0DFA0` | 1.7:1 | FAIL |
| Pale Gold | `#F0DFA0` | `#F0DFA0` | 1:1 | FAIL |
| Lapis Blue | `#2B5BA8` | `#F0DFA0` | 5:1 | AA |
| Malachite | `#2D7A5A` | `#F0DFA0` | 3.9:1 | AA-large |
| Jadeite White | `#E8EDE5` | `#F0DFA0` | 1.1:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Display**: `Noto Serif SC` weight 700 — or heavy Chinese display fonts
- **Body**: `Noto Serif SC` weight 400
- **Latin**: `Cormorant Garamond` weight 600 — antique Latin pairs well

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Emperor Title | 52–72px | 700 | #E8C456 | Gold on dark, max 6 characters |
| Heading | 32–40px | 700 | #C9A84C | |
| Sub-heading | 20–24px | 600 | #F0DFA0 | |
| Body | 16–18px | 400 | #E8EDE5 | line-height: 1.9 |
| Caption | 13px | 300 | #C9A84C | Gold muted |
| Label | 11px | 600 | #C9A84C | Uppercase, letter-spacing: 3px |

---

## 4. Component Stylings

### Card (锦盒式)
```
background: rgba(201,168,76,0.06)
border: 1px solid #C9A84C
border-radius: 0px
padding: 28px 32px
Decorative corner elements: 4px × 4px gold squares at each corner

Elevated variant:
border: 1.5px solid #E8C456
box-shadow: 0 0 24px rgba(201,168,76,0.2)
```

### Button (诏令式)
```
Primary:
  background: #C9A84C
  color: #0D0805
  border-radius: 0px
  padding: 12px 36px
  font: Noto Serif SC 600 14px letter-spacing: 0.12em
  hover: background #E8C456

Ghost:
  background: transparent
  border: 1.5px solid #C9A84C
  color: #C9A84C
  hover: background rgba(201,168,76,0.1)
```

### Ornamental Divider (锦带)
```
A horizontal line flanked by small decorative elements:
  ◈ ──────────────────── ◈
Color: #C9A84C
Line: 1px solid, flanked by 8px rotated square markers
```

### Pattern Border (唐草纹)
```
Use CSS background-image with repeating SVG lotus/cloud scroll
Or: solid gold border with wider width (3px) for ceremonial frames
border: 3px solid #C9A84C
```

---

## 5. Layout Principles

- **Symmetric axis**: Tang compositions are often centered and formally symmetric
- **Hierarchical sections**: Clearly delineated tiers (emperor, court, people)
- **Max-width**: 1200px — Tang is expansive, not narrow
- **Gold grid lines**: Structural borders in gold define content areas
- **Section padding**: 80–100px
- **Hero**: Full-bleed dark background with large gold title, centered

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Base | `#0D0805` lacquer |
| Content | `rgba(201,168,76,0.06)` panel |
| Elevated | `rgba(201,168,76,0.12)` + gold border |
| Glow | `box-shadow: 0 0 20px rgba(232,196,86,0.3)` |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Use gold as a structural element — borders, titles, key marks
- Keep backgrounds dark — Tang richness emerges from contrast
- Apply Dunhuang-inspired geometry: lotus roundels, cloud scrolls as decorative patterns
- Use jewel colors sparingly — one per section as an accent

### Don't
- Don't use gold decoratively while text lacks contrast
- Don't use light backgrounds — Tang is a dark, jeweled aesthetic
- Don't use modern sans-serif fonts
- Don't make every element gold — contrast is achieved by restraint

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Reduce gold ornaments; single column; hero title 36px |
| Tablet | 640–1024px | Simplified symmetric layout |
| Desktop | 1024px+ | Full ceremonial layout with ornamental dividers |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #0D0805
Imperial gold:   #C9A84C
Bright gold:     #E8C456
Pale gold text:  #F0DFA0
Lapis blue:      #2B5BA8
Cinnabar red:    #C43B2A
Body text:       #E8EDE5
```

### Example Prompts
- "Tang Dynasty luxury hero section: #0D0805 background. Centered: decorative gold ornament (◈) above, large title 64px Noto Serif SC #E8C456 bold. Subtitle 20px #F0DFA0. Two gold horizontal lines (1px #C9A84C) flanking the title block. Call-to-action button: #C9A84C background, #0D0805 text, 0px radius, letter-spacing 0.12em. Generous vertical padding 120px."

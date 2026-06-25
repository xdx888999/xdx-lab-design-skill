---
version: alpha
name: "Islamic Geometric"
colors:
  surface: "#0D3340"
  on-surface: "#FAF6EE"
  primary: "#0D4858"
  on-primary: "#FFFFFF"
  accent: "#E8C456"
  warm-white: "#F5F0E8"
  iznik-teal: "#1B6B7B"
  moroccan-blue: "#2E4E7E"
  sky-tile: "#5B9BB5"
  tile-tint: "#E0F0F5"
  mosque-gold: "#C9A84C"
  gold-tint: "#FAF2DC"
  terracotta: "#C0562A"
  rose: "#C4547A"
  emerald: "#2A7A5A"
  dark: "#1A2830"
  muted: "#8A9AAA"
typography:
  sub-heading:
    fontFamily: "Inter"
    fontSize: 24px
    fontWeight: 500
rounded:
  none: 0px
spacing:
  section-padding: 80px
components:
  geometric-pattern-background:
    textColor: "gold ({colors.mosque-gold}) at 6–10% opacity on dark, or 8% on light"
  card:
    backgroundColor: "rgba(255,255,255,0.06) on dark"
    border: "1px solid rgba(201,168,76,0.4)  ← gold border subtle"
    rounded: "0 0 0 0  ← flat, or arch top (CSS clip-path)"
    padding: "28px 24px"
    shadow: "0 4px 20px rgba(0,0,0,0.3) on dark mode"
  arch-top-clip-path:
    clipPath: "polygon(0 8%, 50% 0%, 100% 8%, 100% 100%, 0 100%);"
    rounded: "50% 50% 0 0 / 25% 25% 0 0;"
  button:
    backgroundColor: "{colors.iznik-teal}"
    textColor: "{colors.mosque-gold}"
    rounded: "0px"
    padding: "12px 32px"
    typography: "Inter 600 13px uppercase letter-spacing: 2px"
    hover: "background rgba(201,168,76,0.1)"
    border: "1.5px solid {colors.mosque-gold}"
  divider:
    height: "12px"
    backgroundColor: "repeating SVG pattern in gold on dark teal"
---

# Design System: Islamic Geometric
# 伊斯兰几何风格

> **风格定位**：伊斯兰艺术的数学之美。阿尔汉布拉宫的星形图案、蓝色清真寺的穹顶、摩洛哥泥板的细腻——几何作为精神语言。
> **适用场景**：伊斯兰文化品牌、中东豪华酒店、阿拉伯艺术机构、穆斯林时尚、中东科技公司品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Islamic geometric art is one of the world's most sophisticated decorative traditions — mathematical patterns of extraordinary complexity, born from the theological prohibition on representational imagery. The 8-pointed star, the 12-fold radial pattern, the interlocking hexagon — these are infinite patterns that suggest the infinite nature of the divine.

For digital design, this aesthetic translates into: geometric pattern backgrounds (at low opacity), jewel-tone color palettes from Moroccan tilework, arched forms (the pointed arch as a structural element), and elegant calligraphic typography.

**Key Characteristics:**
- Deep teal/blue primaries from Iznik tilework (#1B6B7B, #2E4E7E)
- Gold (#C9A84C) as the sacred accent — geometric borders, key highlights
- Jewel secondary palette: terracotta, rose, emerald
- Geometric star patterns as background elements (SVG at low opacity)
- Pointed arch shapes as structural design elements
- Arabic calligraphy-style decorative text (ornamental only)
- 0px radius OR pointed/arch-shaped elements — no neutral rounded corners

---

## 2. Color Palette & Roles

### Background
- **Deep Teal** (`#0D3340`): Primary dark background — Moroccan mosaic deep water.
- **Ivory** (`#FAF6EE`): Light background — limestone walls.
- **Warm White** (`#F5F0E8`): Alternate light surface.

### Primary — Iznik Blue
- **Iznik Teal** (`#1B6B7B`): Primary brand.
- **Iznik Dark** (`#0D4858`): Hover, headings.
- **Moroccan Blue** (`#2E4E7E`): Deep blue variant.
- **Sky Tile** (`#5B9BB5`): Lighter accent.
- **Tile Tint** (`#E0F0F5`): Background tints.

### Sacred Gold
- **Mosque Gold** (`#C9A84C`): Geometric borders, key accents.
- **Bright Gold** (`#E8C456`): Highlights.
- **Gold Tint** (`#FAF2DC`): Warm background.

### Jewel Palette
- **Terracotta** (`#C0562A`): Moroccan clay.
- **Rose** (`#C4547A`): Persian rose.
- **Emerald** (`#2A7A5A`): Tile green.

### Text
- **Light** (`#FAF6EE`): On dark backgrounds.
- **Dark** (`#1A2830`): On light backgrounds.
- **Gold Text** (`#C9A84C`): Labels, accents.
- **Muted** (`#8A9AAA`): Secondary text.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Deep Teal | `#0D3340` | `#0D3340` | 1:1 | FAIL |
| Iznik Teal | `#1B6B7B` | `#0D3340` | 2.2:1 | FAIL |
| Iznik Dark | `#0D4858` | `#0D3340` | 1.3:1 | FAIL |
| Muted | `#8A9AAA` | `#0D3340` | 4.7:1 | AA |

## 3. Typography Rules

### Font Family
- **Arabic-flavor display**: `Scheherazade New` (Google Fonts) — traditional Arabic flavor for headings
- **Modern Arabic-compatible**: `Noto Sans Arabic` — for actual Arabic text
- **Latin headings**: `Cormorant Garamond` — old-style serif that pairs with the aesthetic
- **Body**: `Inter` weight 300–400

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero Title | 52–72px | 700 | Scheherazade or Cormorant |
| Section Heading | 32–40px | 600 | |
| Sub-heading | 20–24px | 500 | |
| Body | 16px | 300 | line-height: 1.9 |
| Gold Label | 12px | 600 | Inter uppercase, letter-spacing: 2px, #C9A84C |
| Decorative Quote | 24px | 400 | Scheherazade italic |

---

## 4. Component Stylings

### Geometric Pattern Background
```
SVG: 8-pointed star (khatam) tiling pattern
Color: gold (#C9A84C) at 6–10% opacity on dark, or 8% on light
Use as: full section background OR corner decorative element
Scale: 60–80px per pattern unit
```

### Card (Arch-framed)
```
background: rgba(255,255,255,0.06) on dark
  OR #FFFFFF with warm tint on light
border: 1px solid rgba(201,168,76,0.4)  ← gold border subtle
border-radius: 0 0 0 0  ← flat, or arch top (CSS clip-path)

Arch variant:
  top: clip-path with pointed arch shape
  padding: 28px 24px

box-shadow: 0 4px 20px rgba(0,0,0,0.3) on dark mode
```

### Arch Top Clip-Path
```css
/* Pointed arch for section headers */
clip-path: polygon(0 8%, 50% 0%, 100% 8%, 100% 100%, 0 100%);
/* or CSS pointed arch via border-radius trick */
border-radius: 50% 50% 0 0 / 25% 25% 0 0;
```

### Button
```
Primary:
  background: #C9A84C  ← gold
  color: #0D3340
  border-radius: 0px
  padding: 12px 32px
  font: Inter 600 13px uppercase letter-spacing: 2px
  hover: background #E8C456

Teal:
  background: #1B6B7B
  color: #FAF6EE
  hover: background #0D4858

Ghost:
  border: 1.5px solid #C9A84C
  color: #C9A84C
  hover: background rgba(201,168,76,0.1)
```

### Divider (Geometric strip)
```
A narrow horizontal band with repeating small geometric pattern
height: 12px
background: repeating SVG pattern in gold on dark teal
Use between major sections
```

---

## 5. Layout Principles

- **Symmetry**: Islamic design is rigorously symmetric — layouts should mirror
- **Max-width**: 1200px
- **Section padding**: 80–100px
- **Geometric corners**: Decorative star-pattern SVGs in corners of sections
- **Arch portal elements**: Use arch shapes for featured content, images, or hero frames

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Dark base | `#0D3340` teal dark |
| Card | `rgba(white, 0.06)` + gold border |
| Featured | Gold border `2px solid #C9A84C` |
| Light base | `#FAF6EE` ivory + teal accent elements |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Use the 8-pointed star pattern as a background texture (low opacity)
- Apply gold for structural elements — borders, labels, accents
- Use arch shapes as frame elements — they're architecturally authentic
- Pair teal and gold — the classic Iznik tilework pairing
- Support Arabic text (RTL) if the audience includes Arabic speakers

### Don't
- Don't use representational imagery as pattern (figures, animals)
- Don't appropriate the aesthetic without understanding: this is a spiritual tradition
- Don't mix multiple geometric pattern styles — one type per project
- Don't use bright pink or neon — stay within the jewel-tone palette

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Reduce pattern complexity; single column |
| Desktop | 1024px+ | Full symmetric layout; arch elements enabled |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Dark bg:         #0D3340
Iznik teal:      #1B6B7B
Mosque gold:     #C9A84C
Ivory light:     #FAF6EE
Terracotta:      #C0562A
Text light:      #FAF6EE
Text dark:       #1A2830
Gold label:      #C9A84C
```

### Example Prompts
- "Islamic geometric design page: #0D3340 dark teal background with 8-pointed star SVG pattern overlay at 8% opacity in gold (#C9A84C). Hero: Scheherazade or Cormorant 64px heading in #FAF6EE. Gold geometric border lines (1px #C9A84C) framing content sections. Cards: rgba white 0.06 bg, gold border, arch-shaped top clip-path. CTA button: gold background #C9A84C, dark text. Symmetric layout. Gold label text uppercase letter-spacing 2px."

# Design System: Dark Academia
# 暗系学院派风格

> **风格定位**：牛津图书馆的烛光、《死亡诗社》的激情、黑色笔记本的密语——学术与哥特的浪漫交响。
> **适用场景**：文学平台、独立书店、古典音乐品牌、高端文具/书写工具、私立学校、学术出版、文化沙龙
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Dark Academia is an aesthetic movement rooted in classical education, European literature, and the melancholic romance of knowledge-seeking. Think the Bodleian Library at night, the smell of aged paper, Greek mythology annotations in the margins, Romantic poetry read by candlelight.

The visual language: warm dark backgrounds (not cold black — dark like aged wood and mahogany), gold and sepia tones, classical serif typography with wide letter-spacing, imagery of books, architecture, autumn leaves, and candlelight. The aesthetic celebrates the pursuit of knowledge as a beautiful, slightly melancholic endeavor.

**Key Characteristics:**
- Dark mahogany backgrounds (#1A1208, #2C1F0E) — warm, not cold
- Sepia gold (#C8A050) as the primary accent
- Aged parchment (#F5EDD8) for reversed content or cards
- Crimson (#8B1A1A) as secondary accent — deep red of academic crests
- Garamond, Cormorant Garamond, or EB Garamond — classical scholarship
- Wide letter-spacing on headings
- Decorative borders from classical printing
- No modern UI patterns — this is a library, not an app

---

## 2. Color Palette & Roles

### Dark Backgrounds
- **Mahogany** (`#1A1208`): Deepest background — aged hardwood.
- **Walnut** (`#2C1F0E`): Cards, surfaces.
- **Oak** (`#3D2E1A`): Raised elements, hover states.

### Light Backgrounds (alternate mode)
- **Parchment** (`#F5EDD8`): Warm aged paper.
- **Cream** (`#EDE3CC`): Slightly more aged.

### Gold (Scholar's Ink)
- **Scholar Gold** (`#C8A050`): Primary accent — ink, illuminated manuscripts.
- **Bright Gold** (`#E0B860`): Hover, highlight.
- **Gold Dim** (`#8A6C30`): Muted gold for borders.
- **Gold Tint** (`#FAF0DC`): Very light gold tint.

### Crimson
- **Academic Crimson** (`#8B1A1A`): Secondary accent — Oxford red.
- **Crimson Light** (`#C43A3A`): Lighter variant.

### Text
- **Parchment** (`#F5EDD8`): Primary text on dark.
- **Faded Parchment** (`#C8B89A`): Secondary text on dark.
- **Muted Scholar** (`#8A7858`): Muted text.
- **Dark on Light** (`#1A1208`): Text on parchment backgrounds.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Cormorant Garamond` weight 400–700 — most classical of all Google Fonts
- **Alternative**: `EB Garamond` — equal elegance
- **Small Caps**: `font-variant: small-caps` for subheadings and labels
- **No sans-serif** — ever. This is the Academy.

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Chapter Title | 52–72px | 700 | Cormorant, wide letter-spacing |
| Section Heading | 28–40px | 600 | Cormorant, italic option |
| Sub-heading | 20–24px | 600 | Small-caps variant |
| Body | 17–18px | 400 | EB Garamond, line-height: 1.9 |
| Pull Quote | 24px | 300 | Cormorant italic |
| Label | 12px | 600 | Cormorant small-caps, letter-spacing: 3px |
| Caption | 13px | 400 | Italic #8A7858 |

---

## 4. Component Stylings

### Card (Tome)
```
background: #2C1F0E walnut
border: 1px solid rgba(200,160,80,0.3)  ← gold subtle
border-radius: 0px
padding: 28px 32px

Optional: decorative corner ornament in gold (◈ or classical fleuron)
hover: border-color rgba(200,160,80,0.6)
```

### Classical Border Frame
```
A double-line ornamental border:
  outer: 1px solid #C8A050
  inner: 1px solid #C8A050 (offset 4px inward)
  corner: fleuron or simple square ornament
Use for hero sections, featured content, pull quotes
```

### Quote Block
```
font: Cormorant Garamond 24px italic weight 300
color: #F5EDD8
border-left: 3px solid #C8A050
padding-left: 24px
margin: 40px 0

Attribution: 13px Cormorant #8A7858
"— Keats, 1819" — specific, specific, specific
```

### Button
```
Primary:
  background: #C8A050
  color: #1A1208
  border-radius: 0px
  padding: 12px 32px
  font: Cormorant Garamond 600 15px letter-spacing: 1px
  hover: background #E0B860

Crimson:
  background: #8B1A1A
  color: #F5EDD8
  hover: background #C43A3A

Ghost:
  border: 1px solid #C8A050
  color: #C8A050
  hover: background rgba(200,160,80,0.1)
```

### Divider (Ornamental)
```
A classical typographic ornament centered:
  ❦ ——————— ❦
  or
  ✦ ✦ ✦
Color: #C8A050 or #8A6C30
Never a plain HR — always ornamented
```

---

## 5. Layout Principles

- **Narrow reading column**: 680px max-width for text-heavy content — like a book
- **Section padding**: 100–120px — scholarship takes its time
- **Centered composition**: Classical layouts are often centered and formal
- **Generous line-height**: 1.8–2.0 minimum — reading comfort for long texts
- **No sidebar navigation**: Single-column reading, like a book

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Deepest | `#1A1208` mahogany |
| Surface | `#2C1F0E` walnut |
| Raised | `#3D2E1A` oak |
| Candlelight glow | `box-shadow: 0 0 40px rgba(200,160,80,0.15)` |

---

## 7. Do's and Don'ts

### Do
- Use Cormorant Garamond everywhere — it is this aesthetic
- Apply ornamental dividers between sections — classical typography uses them
- Write in flowing prose, not bullet points — Dark Academia is literary
- Use sepia/gold consistently — warm, scholarly, timeless
- Include specific literary/classical references in copy

### Don't
- Don't use sans-serif fonts
- Don't use cold black (#000000) — dark academia is warm dark, not cold
- Don't use bright colors — nothing saturated
- Don't use modern UI patterns (slide indicators, flat icons)
- Don't use humor or irony in copy — this aesthetic takes itself seriously

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; 16px body; reduce ornamental complexity |
| Desktop | 1024px+ | Narrow reading column centered; wide dark side margins |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Mahogany bg:     #1A1208
Walnut:          #2C1F0E
Scholar gold:    #C8A050
Academic crimson:#8B1A1A
Parchment:       #F5EDD8
Faded parchment: #C8B89A
Muted scholar:   #8A7858
```

### Example Prompts
- "Dark Academia book platform: #1A1208 mahogany background. Classical double-border frame in gold (#C8A050). Large Cormorant Garamond 60px weight 600 title in parchment (#F5EDD8), wide letter-spacing. Body text 18px EB Garamond #C8B89A line-height 1.9. Quote block: gold left border, Cormorant italic 24px. Card: walnut bg, gold border, ornamental corner fleurons. Button: gold background, 0px radius, Cormorant letter-spacing. Ornamental divider ❦ between sections. No sans-serif, no bright colors, no modern UI."

# Design System: Bauhaus
# 包豪斯风格

> **风格定位**：形式追随功能，几何即美学。圆形+方形+三角形，原色+黑白，完全拒绝装饰。
> **适用场景**：设计类机构、艺术院校、建筑/工业设计品牌、创意工作室、展览海报、文化机构
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Bauhaus is not a trend — it is a foundational philosophy of design. Founded in 1919, the Bauhaus school declared that form follows function and that beauty emerges from purposeful construction, not ornamentation. Every element in this system is geometric, primary, and intentional.

The visual language is built on three shapes (circle, square, triangle), three primary colors (red, yellow, blue), and black and white. Typography is geometric sans-serif, set with mathematical precision. The grid is visible and assertive. Nothing is decorative — everything is structural.

**Key Characteristics:**
- Background: pure white (#FFFFFF) or black (#000000)
- Primary palette: red (#E63329), yellow (#F7C948), blue (#1B5FA0)
- Typography: geometric sans-serif only (Futura, Bauhaus 93, ITC Avant Garde)
- Shapes as design elements: circles, rectangles, triangles
- Bold, flat color blocking — no gradients, no shadows
- Grid: visible, mathematical, grid lines may be part of the design
- Black rules, borders, and frames are structural elements

---

## 2. Color Palette & Roles

### Foundation
- **White** (`#FFFFFF`): Primary background.
- **Black** (`#000000`): Structure, typography, borders — never "near-black".

### Bauhaus Primary Triad
- **Bauhaus Red** (`#E63329`): Passion, energy — circle association.
- **Bauhaus Yellow** (`#F7C948`): Optimism, light — triangle association.
- **Bauhaus Blue** (`#1B5FA0`): Depth, thought — square association.

### Secondary (use sparingly)
- **Orange** (`#F08030`): Red + Yellow mix.
- **Green** (`#2D7A3A`): Blue + Yellow mix.
- **Violet** (`#6B3A8C`): Blue + Red mix.

### Color Assignment Philosophy
- Itten's color theory: primary colors to primary shapes
- Circle = Red (dynamic, rolling)
- Square = Blue (stable, four-sided, grounded)
- Triangle = Yellow (sharp, pointing, light)

---

## 3. Typography Rules

### Font Family
- **Primary**: `Futura PT` or `Jost` (geometric sans — closest free alternative)
- **Alternative**: `DM Sans` weight 400–700
- **Display**: `Oswald` weight 700 (for bold vertical text)
- **Authentic Historical**: `ITC Avant Garde Gothic` (if licensed)

### Hierarchy

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Display | 80px+ | 700 | ALL CAPS, tight tracking |
| H1 | 56px | 700 | ALL CAPS or title case |
| H2 | 36px | 600 | |
| H3 | 24px | 600 | |
| Body | 16px | 400 | Regular weight — contrast with bold heads |
| Caption | 12px | 400 | Uppercase, 2px letter-spacing |
| Label | 11px | 700 | Uppercase only |

### Typography Rules
- Geometric sans exclusively — no humanist, no serif, no rounded
- Uppercase for headings — geometric letters are designed to be read in caps
- Tight tracking on large type (-1 to -2px)
- No italic — geometric type doesn't need it

---

## 4. Component Stylings

### Button
```
background: #E63329 (or any primary)
color: #FFFFFF
padding: 14px 32px
border-radius: 0px (always rectangular)
border: none
font: Futura/Jost 14px weight 700 uppercase letter-spacing 2px
hover: background darken 10%
```

### Card (structural, not decorative)
```
background: #FFFFFF
border: 2px solid #000000
border-radius: 0px
padding: 32px
No shadow — border IS the structure
```

### Hero Layout Pattern
```
Full-width grid of color blocks:
  Left third: solid #E63329
  Center: white with black headline
  Right third: solid #1B5FA0
  Or: horizontal band structure (black top 40%, white bottom 60%)
```

### Icon / Badge (geometric)
```
Circles: 48px diameter, primary color fill
Squares: 48×48px, solid fill
Triangles: equilateral, SVG path
All shapes: flat, no shadow, no gradient
```

### Divider
```
height: 4px (thick — structural)
background: #000000 or primary color
margin: 32px 0
100% width — full bleed
```

---

## 5. Layout Principles

### Grid
- Visible grid structure — grid lines can be part of the design
- Asymmetric but mathematically derived
- Color blocks as structural layout elements (not just backgrounds)
- Columns: typically 4 or 6 column, 0px gutter (blocks abut each other)

### Bauhaus Layout Patterns
- Horizontal band: stack full-width color bands
- Grid mosaic: tiles of color blocks with text
- Diagonal: tilted geometric shapes as dynamic elements
- Off-center: intentional imbalance — not centered, not symmetric

### Spacing
- Section padding: 64px vertical
- Content max width: 1200px
- Tight grid — elements align precisely to grid intersections

---

## 6. Depth & Elevation

Bauhaus is 2D. Depth is created through:
- **Color weight**: Black > Primary > White
- **Scale**: Large shapes advance, small recede
- **Overlap**: Shapes overlapping each other

No shadows, no gradients, no blur effects.

---

## 7. Do's and Don'ts

### Do
- Use only pure geometric sans-serif typefaces
- Apply flat, unmodulated color (no gradient)
- Maintain 0px border-radius on all elements
- Use thick (2–4px) black borders as structural elements
- Let geometric shapes BE the design — a circle, a bar, a triangle IS art
- Keep color use purposeful: never more than 2 primary colors + black/white per composition

### Don't
- Don't add shadows — they destroy the flat, 2D Bauhaus aesthetic
- Don't use rounded corners (even 2px violates the philosophy)
- Don't use gradients or transparency effects
- Don't use serif or humanist fonts
- Don't add decorative icons — geometry IS the decoration
- Don't use more than 3 primary colors together

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Stack horizontal bands vertically, reduce font sizes proportionally |
| Tablet | 640–1024px | 2-col grid |
| Desktop | 1024px+ | Full grid/mosaic layout |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
White:          #FFFFFF
Black:          #000000
Bauhaus Red:    #E63329
Bauhaus Yellow: #F7C948
Bauhaus Blue:   #1B5FA0
```

### Example Prompts
- "Create a Bauhaus-style hero section: horizontal band layout. Top band full-width 200px solid red #E63329. Center: white background, headline 80px Futura/Jost weight 700 uppercase letter-spacing -2px #000000. Left: 40% width solid blue #1B5FA0 column. Right: content column. No shadows, no gradients, no border-radius. Thick 3px black borders between sections."
- "Design a Bauhaus poster card: white background, 2px solid black border, 0px radius. Title: 56px Jost weight 700 uppercase. Large circle: 200px #E63329 positioned bottom-right overlapping card edge. Horizontal rule: 4px solid black. Text below rule: 12px uppercase letter-spacing 3px. Everything flat, no shadow."

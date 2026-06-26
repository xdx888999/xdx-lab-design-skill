---
version: alpha
name: "Swiss International Style / International Typographic Style"
colors:
  surface: "#FFFFFF"
  on-surface: "#000000"
  primary: "#E3001B"
  on-primary: "#FFFFFF"
  accent: "#0047AB"
  mid-gray: "#777777"
  light-gray: "#CCCCCC"
  very-light: "#F5F5F5"
typography:
  display:
    fontFamily: "Helvetica Neue, Neue Haas Grotesk, Arial, sans-serif"
    fontSize: 120px
    fontWeight: 700
  h2:
    fontFamily: "Helvetica Neue, Neue Haas Grotesk, Arial, sans-serif"
    fontSize: 36px
    fontWeight: 700
  body-l:
    fontFamily: "Helvetica Neue, Neue Haas Grotesk, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 400
  caption:
    fontFamily: "Helvetica Neue, Neue Haas Grotesk, Arial, sans-serif"
    fontSize: 11px
    fontWeight: 400
rounded:
  none: 0px
components:
  navigation:
    backgroundColor: "{colors.on-primary}"
    height: "64px"
    active: "text color {colors.primary}"
  content-card:
    border: "1px solid {colors.light-gray} or borderless (whitespace separates)"
  bold-statement-block:
    backgroundColor: "{colors.on-surface} (or {colors.primary})"
    padding: "64px"
  caption-system:
    typography: "11px Helvetica Neue uppercase letter-spacing 1px {colors.mid-gray}"
---

# Design System: Swiss International Style / International Typographic Style
# 国际主义排版风格

> **风格定位**：网格即法则，功能即美。Helvetica + 严格网格 + 极端留白，20世纪最有影响力的设计体系。
> **适用场景**：设计类机构、博物馆、品牌标识系统、年报、公共信息系统、高端印刷品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

The International Typographic Style (Swiss Style) emerged from Zurich and Basel in the 1950s and became the dominant visual language of the 20th century. Its influence persists in every major corporation's brand guidelines and every well-designed public information system.

The philosophy is radical simplicity: the grid is mathematical and visible. Typography is Helvetica (or its equivalents). Photography is objective and precise. Nothing is decorative. The design system communicates universally, across cultures and languages, through pure structural clarity.

This is not minimalism — it is rigor. Where minimalism removes for aesthetic reasons, Swiss Style removes for functional ones.

**Key Characteristics:**
- Invisible-feeling grid (but mathematically precise)
- Helvetica or Neue Haas Grotesk — the defining typeface
- Flush-left, ragged-right alignment (never centered, never justified)
- Black/white with maximum one accent color (often red)
- Objective photography: cropped, printed large, no filters
- Numbers and type as visual elements at scale
- No decorative elements — structure IS the ornament

---

## 2. Color Palette & Roles

### Primary
- **White** (`#FFFFFF`): Primary background — pure, never tinted.
- **Black** (`#000000`): Primary text — absolute, never softened.
- **Swiss Red** (`#E3001B`): The signature accent — Basel school red.
- **Swiss Blue** (`#0047AB`): Alternative institutional accent.

### Extended (minimal)
- **Mid Gray** (`#777777`): Secondary text, captions.
- **Light Gray** (`#CCCCCC`): Borders, subtle dividers.
- **Very Light** (`#F5F5F5`): Section background differentiation.

### Usage Rules
- Maximum 2 colors per composition (black + one accent)
- Color as structure, not decoration
- Large color blocks are layout elements, not backgrounds

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| White | `#FFFFFF` | `#FFFFFF` | 1:1 | FAIL |
| Black | `#000000` | `#FFFFFF` | 21:1 | AAA |
| Mid Gray | `#777777` | `#FFFFFF` | 4.5:1 | AA |

## 3. Typography Rules

### Font Family
- **The Font**: `Helvetica Neue`, fallback `Helvetica`, `Arial`, `sans-serif`
- **Open Source Alternative**: `Inter` (closest to Neue Haas Grotesk)
- **Pure Alternative**: `Aktiv Grotesk`, `Neue Haas Grotesk`
- **NEVER**: Serif, script, display faces

### Hierarchy

| Role | Size | Weight | Alignment | Notes |
|------|------|--------|-----------|-------|
| Display | 80–120px | 700 | Left | Column-width spanning |
| H1 | 56px | 700 | Left | |
| H2 | 36px | 700 | Left | |
| H3 | 22px | 700 | Left | |
| Body L | 18px | 400 | Left | line-height 1.4 |
| Body | 15px | 400 | Left | line-height 1.4 |
| Caption | 11px | 400 | Left | Uppercase version |
| Label | 11px | 700 | Left | Uppercase, 1px tracking |

### Swiss Typography Rules
- **Left-aligned only**: Never centered, never justified
- **Optical line-height**: 1.3–1.4 (tighter than modern recommendations — deliberate)
- **No italic**: Swiss style uses upright text; emphasis through weight, not slant
- **Negative tracking on large text**: -1 to -2px for display sizes
- **Captions in uppercase**: Small informational text is all-caps
- **Grid-locked**: All type aligns to the baseline grid

---

## 4. Component Stylings

### Grid (the foundation)
```
12 columns, fixed gutters
Columns are equal width; gutters are 1/4 column width
Visual column rules (vertical lines) are sometimes made visible
Content bleeds to grid column edges — no internal card padding bleeding
```

### Navigation
```
background: #FFFFFF
border-bottom: 2px solid #000000 (heavy rule)
height: 64px
Brand: Helvetica Neue 18px weight 700 uppercase
Links: 13px weight 400 uppercase letter-spacing 1px
Active: text color #E3001B
No hover background — only text color change
```

### Hero Layout
```
Grid: 2/3 image + 1/3 text OR full-bleed image + text overlay
Text block: left-aligned, positioned precisely on grid
Display: 80px Helvetica weight 700 #000000 line-height 1.1
No decorative elements under/over text
```

### Content Card (strictly grid-aligned)
```
No border radius
No shadow
border: 1px solid #CCCCCC or borderless (whitespace separates)
Content padding: must align to grid module
```

### Bold Statement Block
```
background: #000000 (or #E3001B)
padding: 64px
text: 56px Helvetica weight 700 #FFFFFF line-height 1.1 left-aligned
No decorative elements — this IS the decoration
```

### Caption System
```
font: 11px Helvetica Neue uppercase letter-spacing 1px #777777
margin-top: 8px, flush left with image
Figure number prefix: bold
```

---

## 5. Layout Principles

### The Modular Grid
- Swiss Style uses a modular grid — modules, not just columns
- Module height = module width (square modules)
- Content spans multiples of modules
- Strict: nothing overlaps grid lines decoratively

### Spatial Rhythm
- Consistent vertical spacing based on baseline grid (8px)
- Section separation: 80–120px (large, breathing)
- No irregular spacing — everything is a multiple of the base unit

### Asymmetric Balance
- Asymmetry is intentional: heavy element balanced by white space
- NOT centered — left-anchored or grid-anchored

---

## 6. Depth & Elevation

Flat — zero shadows. Depth through:
- Scale: large type vs small text
- Color: black block vs white space
- Weight: bold vs regular

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Left-align everything — never center or justify
- Use Helvetica or Inter exclusively
- Make color blocks large and structural (not decorative)
- Apply the grid rigorously — align to modules
- Use uppercase for labels and captions
- Let whitespace speak — large empty areas are intentional

### Don't
- Don't use serif, script, or decorative fonts
- Don't center text
- Don't use shadows or rounded corners
- Don't use more than 2 colors per composition
- Don't add decorative illustrations or icons
- Don't use italic — weight conveys emphasis

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | 4-column grid, maintained left alignment, reduced display size |
| Tablet | 640–1024px | 8-column grid |
| Desktop | 1024px+ | 12-column grid, full module system |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
White:      #FFFFFF
Black:      #000000
Swiss Red:  #E3001B
Gray mid:   #777777
Gray light: #CCCCCC
```

### Example Prompts
- "Design a Swiss International Style layout: white background. All text left-aligned (never centered). Headline: 80px Helvetica Neue / Inter weight 700 #000000 letter-spacing -1px. Bold red label: 11px uppercase #E3001B letter-spacing 1px. Body: 15px weight 400 #000000 line-height 1.4. Large black block section: #000000 bg, 64px padding, 56px weight 700 white headline. No shadows, no border-radius, no decorative elements."

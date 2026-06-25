---
version: alpha
name: "Pop Art 60s"
colors:
  surface: "#FFFEF5"
  surface-variant: "#F5F0E0"
  on-surface: "#0A0A0A"
  primary: "#E8002A"
  on-primary: "#FFFFFF"
  accent: "#00ADEF"
  pop-yellow: "#FFD700"
  pop-green: "#00A550"
  pop-orange: "#FF6900"
  pink: "#FF69B4"
typography:
  speech-bubble:
    fontFamily: "Inter"
    fontSize: 32px
    fontWeight: 700
rounded:
  none: 0px
  sm: 8px
spacing:
  section-padding: 80px
components:
  card:
    backgroundColor: "{colors.surface}"
    border: "3px solid {colors.on-surface}  ← thick black outline"
    rounded: "0px"
    padding: "20px"
    hover: "background fill in a primary color, text color switches to paper white"
  speech-bubble:
    backgroundColor: "{colors.pop-yellow} (yellow) or {colors.surface}"
    border: "3px solid {colors.on-surface}"
    rounded: "8px"
    padding: "16px 20px"
    typography: "Bangers 28px {colors.on-surface}"
  button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    border: "3px solid {colors.on-surface}"
    rounded: "0px"
    padding: "12px 28px"
    typography: "Bebas 20px uppercase letter-spacing: 2px"
    hover: "background {colors.primary}, color {colors.surface}"
---

# Design System: Pop Art 60s
# 60年代波普艺术风格

> **风格定位**：安迪·沃霍尔的重复印刷、罗伊·利希滕斯坦的网点漫画、英国波普的活力——大众文化变成高雅艺术。
> **适用场景**：艺术画廊/当代艺术、复古时尚品牌、流行音乐品牌、创意机构、国际青年文化品牌、博物馆特展
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Pop Art (1955–1969) took the imagery of mass consumer culture — soup cans, celebrity faces, comic strips — and treated it with the seriousness of fine art. Warhol's silk-screen grids, Lichtenstein's Ben-Day dots, Hockney's California colors.

The visual language is immediately recognizable: pure primary colors (red, yellow, blue, black, white), halftone dot patterns, thick black outlines, flat fills, and zero gradients. Everything is graphic. Everything is slightly ironic. Everything says: this is a PRINT.

**Key Characteristics:**
- Pure primaries: red (#E8002A), yellow (#FFD700), cyan blue (#00ADEF)
- Paper white (#FFFEF5) background
- Thick black outlines (2–4px) on all elements
- Flat fills — no gradients, no shadows
- Ben-Day dot patterns as background textures
- Bold, compressed sans-serif or Futura-style typography
- Repetitive grid compositions (Warhol effect)
- Speech bubbles as UI elements (Lichtenstein reference)

---

## 2. Color Palette & Roles

### Background
- **Paper White** (`#FFFEF5`): Printing paper off-white.
- **Newsprint** (`#F5F0E0`): Aged newspaper alternative.

### Primary Pop Colors
- **Pop Red** (`#E8002A`): Urgent, bold, primary.
- **Pop Yellow** (`#FFD700`): Sunny, optimistic, graphic.
- **Pop Blue** (`#00ADEF`): Clean cyan blue, printing process.
- **Ink Black** (`#0A0A0A`): Outlines, text — always thick.

### Secondary Pop Colors
- **Pop Green** (`#00A550`): Four-color process green.
- **Pop Orange** (`#FF6900`): High energy secondary.
- **Pink** (`#FF69B4`): Warhol's feminine palette.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Pop Red | `#E8002A` | `#FFFEF5` | 4.6:1 | AA |
| Ink Black | `#0A0A0A` | `#FFFEF5` | 19.6:1 | AAA |
| Pop Orange | `#FF6900` | `#FFFEF5` | 2.9:1 | FAIL |
| Pink | `#FF69B4` | `#FFFEF5` | 2.6:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Display**: `Bebas Neue` (Google Fonts) — the modern Futura, 100% pop energy
- **Alternative**: `Impact` — raw compressed power
- **Body**: `Inter` weight 700–900 — bold is the setting; no light weights
- **Comic**: `Bangers` (Google Fonts) — Lichtenstein comic text

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Title | 72–120px | 900 | Bebas, ALL CAPS |
| Subtitle | 32–40px | 700 | Bebas uppercase |
| Speech Bubble | 24–32px | 700 | Bangers — "WOW!", "BAM!" |
| Body | 16px | 700 | Inter bold — even body is bold |
| Label | 14px | 900 | Inter or Bebas uppercase |
| Caption | 13px | 700 | Short, punchy |

---

## 4. Component Stylings

### Card (Ben-Day)
```
background: #FFFEF5
border: 3px solid #0A0A0A  ← thick black outline
border-radius: 0px
padding: 20px

Ben-Day dot overlay: radial-gradient dots at 3–5% opacity in primary color
hover: background fill in a primary color, text color switches to paper white
```

### Speech Bubble
```
background: #FFD700 (yellow) or #FFFEF5
border: 3px solid #0A0A0A
border-radius: 8px
padding: 16px 20px

Tail: CSS triangle at bottom-left or bottom-right, same color + black outline
font: Bangers 28px #0A0A0A
content: "POW!", "WOW!", exclamatory short text
```

### Button
```
Primary:
  background: #E8002A
  color: #FFFEF5
  border: 3px solid #0A0A0A
  border-radius: 0px
  padding: 12px 28px
  font: Bebas 20px uppercase letter-spacing: 2px
  hover: background #0A0A0A, color #FFD700

Yellow:
  background: #FFD700
  color: #0A0A0A
  border: 3px solid #0A0A0A
  hover: background #E8002A, color #FFFEF5

Blue:
  background: #00ADEF
  color: #FFFEF5
  border: 3px solid #0A0A0A
```

### Ben-Day Dot Pattern
```css
/* CSS Ben-Day dot background */
background-image: radial-gradient(circle, #E8002A 25%, transparent 25%);
background-size: 8px 8px;
opacity: 0.08;
/* Apply as ::before overlay on sections */
```

### Warhol Grid (repetition element)
```
CSS grid or flexbox
4×4 or 3×3 identical items
Each item: different background color (rotate through primary palette)
Same image/icon, different color per cell
Creates the Warhol silkscreen effect
```

---

## 5. Layout Principles

- **Primary colors alternate**: Sections use different primary colors as backgrounds
- **Thick outlines**: Every UI element has a visible black border
- **Flat**: Zero shadows, zero gradients — this is screen printing
- **Max-width**: 1200px
- **Section padding**: 80px
- **Grid**: Rigid, visible — content snaps to clear columns

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

No depth — everything is flat, like a printed poster:
- Hierarchy through color (yellow = important, white = neutral)
- Scale (bigger = more important)
- Outline weight (thicker border = more emphasis)
- Zero box-shadows

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| sm | 8px | Inputs, tags |

---

## 7. Do's and Don'ts

### Do
- Use primary colors only — no muted or pastel tones
- Apply thick black outlines to ALL elements — cards, buttons, images
- Use Bebas Neue/Bangers for all display text — they ARE the aesthetic
- Create repetitive grid compositions à la Warhol
- Include Ben-Day dot patterns as section background textures

### Don't
- Don't use gradients or shadows — this is a printing medium
- Don't use rounded corners (beyond 0px)
- Don't use more than 3 colors in one section
- Don't use photography without high-contrast/posterization treatment
- Don't use thin or light font weights — bold is the rule

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; reduce Warhol grids to 2×2 |
| Desktop | 1024px+ | Full grid compositions; Warhol 4×4 |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Paper white:     #FFFEF5
Pop red:         #E8002A
Pop yellow:      #FFD700
Pop blue:        #00ADEF
Ink black:       #0A0A0A
Pop green:       #00A550
Pop orange:      #FF6900
```

### Example Prompts
- "60s Pop Art landing page: #FFFEF5 paper white background with faint Ben-Day dot overlay. Hero: Bebas Neue 100px ALL CAPS title in #E8002A. Large bold yellow (#FFD700) background section. Speech bubble UI element with Bangers font 'WOW!'. Cards: 3px black border, 0px radius, hover switches to primary color fill. Buttons: #E8002A with 3px black border, 0px radius, Bebas uppercase. Warhol-style 2×2 grid with color variants. No shadows, no gradients — flat printing aesthetic."

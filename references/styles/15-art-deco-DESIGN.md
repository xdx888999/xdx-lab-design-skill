# Design System: Art Deco
# 装饰艺术风格

> **风格定位**：黄金年代的华丽与精密。几何对称、金色线条、黑色背景、菱形花纹，1920s 大都会美学。
> **适用场景**：高端活动/婚礼邀请、赌场/酒店品牌、精品品牌复古线、博物馆、烈酒/香水包装
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Art Deco is the aesthetic of ambition crystallized. Born in 1920s Paris and reaching its pinnacle in New York's Chrysler Building, it fuses industrial precision with opulent beauty. The visual language is bold, symmetrical, and unabashedly glamorous.

Where Bauhaus says "form follows function," Art Deco says "function deserves ceremony." Every surface is an opportunity for geometric ornament — but the ornament is always architectural, never frivolous.

**Key Characteristics:**
- Black (#0A0A0A) or deep navy (#0D1B2A) primary background
- Gold (#C9A84C or #D4AF37) as the dominant accent — metallic, burnished
- Geometric patterns: chevrons, sunbursts, fan shapes, stepped pyramids
- Perfect bilateral symmetry — always centered
- Thin gold line frames and borders (1–2px)
- High-contrast serif typography: Didot, Bodoni, Trajan
- Vertical orientation preference — towers, columns, stacked forms

---

## 2. Color Palette & Roles

### Foundation
- **Noir** (`#0A0A0A`): Primary background — absolute dark.
- **Deep Onyx** (`#111111`): Card backgrounds, elevated surfaces.
- **Charcoal** (`#1E1E1E`): Secondary surfaces.
- **Gold Line** (`rgba(201,168,76,0.3)`): Subtle gold tints.

### Gold Scale (the defining palette)
- **Burnished Gold** (`#C9A84C`): Primary accent — borders, icons, highlights.
- **Bright Gold** (`#D4AF37`): Pure gold — hero elements, large accents.
- **Pale Gold** (`#E8C97A`): Light catches — highlights on gold elements.
- **Dark Gold** (`#8B6914`): Shadows on gold elements.
- **Champagne** (`#F0E4C4`): Very light gold tint — cream highlight.

### Secondary (rare, used only to support gold)
- **Ivory** (`#F5F0E8`): Primary text on dark backgrounds.
- **Deep Teal** (`#0D3B3E`): Occasional panel accent (Gatsby viridian).
- **Deep Burgundy** (`#5C1A1A`): Warm rich panel alternative.

---

## 3. Typography Rules

### Font Family
- **Display**: `Cormorant Garamond` (tall, elegant serifs) or `Playfair Display`
- **Alternative Display**: `Bodoni Moda` — extreme thick/thin contrast
- **Sub-headings**: `Josefin Sans` (geometric art deco-style sans)
- **Body**: `Jost` weight 300 or `EB Garamond`
- **Authentic**: `Didot` (if licensed)

### Hierarchy

| Role | Family | Size | Weight | Color | Letter-Spacing |
|------|--------|------|--------|-------|----------------|
| Masthead | Cormorant | 96px | 300 | #D4AF37 | 12px (very wide) |
| Display | Cormorant | 64px | 400 | #F5F0E8 | 8px |
| H1 | Cormorant | 48px | 400 | #F5F0E8 | 4px |
| H2 | Josefin Sans | 24px | 300 | #C9A84C | 6px (uppercase) |
| H3 | Josefin Sans | 16px | 400 | #C9A84C | 4px (uppercase) |
| Body | Jost | 15px | 300 | rgba(245,240,232,0.8) | 1px |
| Caption | Josefin Sans | 11px | 300 | #C9A84C | 4px (uppercase) |

### Typography Rules
- Display type must be WIDE-tracked — Art Deco never condenses
- All-caps for sub-headings and labels
- Center-aligned for titles, left or center for body
- Gold for labels/sub-headings, ivory for body text

---

## 4. Component Stylings

### Hero / Title Frame
```
Black background #0A0A0A
Center-aligned content
Outer frame: 1px solid #C9A84C border, 8px inset margin
Inner frame: 1px solid rgba(201,168,76,0.4), 4px from outer
Corner ornaments: SVG chevron/diamond shapes in gold
Title: Cormorant Garamond 64px weight 400 letter-spacing 8px #F5F0E8
Sub-title: Josefin Sans 16px uppercase letter-spacing 6px #C9A84C
Gold rule: 1px #C9A84C, 120px width, centered, between title and sub
```

### Button
```
background: transparent
color: #C9A84C
border: 1px solid #C9A84C
padding: 14px 40px
border-radius: 0px
font: Josefin Sans 12px weight 300 uppercase letter-spacing 4px
hover: background rgba(201,168,76,0.1)
```

### Filled Button (for primary CTA)
```
background: linear-gradient(135deg, #C9A84C, #8B6914)
color: #0A0A0A
font: Josefin Sans 12px weight 600 uppercase letter-spacing 3px
border: none, border-radius: 0px, padding: 14px 40px
```

### Content Card
```
background: #111111
border: 1px solid rgba(201,168,76,0.3)
border-radius: 0px
padding: 32px
Top: thin gold line 1px #C9A84C full width (decorative header rule)
Bottom: same gold line as footer rule
```

### Art Deco Divider
```
Pattern: ——◇—— (line-diamond-line)
Color: #C9A84C
Center diamond: 8×8px rotated square, #C9A84C
Lines: 1px, extend to panel edges or fixed width
```

---

## 5. Layout Principles

### Symmetry First
- Perfect bilateral symmetry — everything mirrors on center axis
- Center-aligned headlines, centered CTA blocks
- Paired elements: always in twos (two columns, two icons, two lines)

### Framing
- Everything is framed — frames within frames suggest architectural depth
- Content blocks have: outer border, inner border, corner ornaments
- "Stage" metaphor: design like a theater proscenium

### Spacing
- Section padding: 80px vertical
- Max content width: 960px (narrower — columns feel more architectural)
- Card padding: 40px

### Vertical Rhythm
- Elongated proportions — tall rather than wide
- Column layouts prefer portrait orientation
- Use vertical gold rules to divide columns (not gutters)

---

## 6. Depth & Elevation

Art Deco uses layered frames, not shadows:
- Multiple nested borders create perceived depth
- Gold inner glow: `box-shadow: inset 0 0 20px rgba(201,168,76,0.1)`
- Background texture: subtle radial gradient from center (#111111 → #0A0A0A)

---

## 7. Do's and Don'ts

### Do
- Use gold as the structural element — lines, borders, dividers, icons
- Apply extreme letter-spacing to headings and labels (6–12px)
- Design with perfect symmetry — mirror everything on center axis
- Nest frames (border within border) for architectural depth
- Use Cormorant or Bodoni — their extreme thick/thin is Art Deco DNA
- All text either ivory or gold — no gray, no mid-tone

### Don't
- Don't use sans-serif for display text — the serif contrast is the style
- Don't use bright primary colors — Art Deco palette is gold + black + ivory
- Don't break symmetry without strong reason
- Don't use border-radius — zero is the rule
- Don't use flat, modern icons — use geometric ornamental shapes

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Stack columns, reduce tracking slightly, shrink frames |
| Tablet | 640–1024px | 2-col with center gold rule divider |
| Desktop | 1024px+ | Full symmetrical layout with frame elements |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #0A0A0A
Surface:         #111111
Gold primary:    #C9A84C
Gold bright:     #D4AF37
Gold pale:       #E8C97A
Text ivory:      #F5F0E8
Text body:       rgba(245,240,232,0.8)
```

### Example Prompts
- "Design an Art Deco event invitation card: #0A0A0A background, 1px solid #C9A84C outer border with 8px margin, 1px solid rgba(201,168,76,0.4) inner border with 4px margin. SVG chevron ornaments at 4 corners. Center: event title 64px Cormorant Garamond weight 400 letter-spacing 8px ivory. Gold rule 1px 80px wide. Date/time in Josefin Sans 14px uppercase letter-spacing 6px #C9A84C. All centered."
- "Create an Art Deco hero: black background, symmetric layout. Left gold rule and right gold rule framing central content. Masthead text 96px Cormorant weight 300 letter-spacing 12px #D4AF37. Sub-heading 16px Josefin Sans uppercase #C9A84C. CTA: ghost button gold border, no radius."

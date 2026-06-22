# Design System: Fashion Editorial
# 时尚编辑风格

> **风格定位**：高端时尚杂志的数字语言。Vogue 的视觉霸权、Dazed 的先锋感、System 的极简实验。
> **适用场景**：时尚品牌官网、奢侈品电商、时装秀直播、风格类媒体、高端美妆、设计师个人品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Fashion editorial design exists in the space between art and commerce — it must sell while appearing not to care about selling. The photography IS the layout. Type is used architecturally, often large and crossing over images. White space is editorial statement.

Visual references: Vogue's full-bleed cover energy, i-D magazine's conceptual typography, System's experimental white space, SSENSE's commerce-as-art approach. The tension between the very large and the very small is the signature move.

**Key Characteristics:**
- Pure white (#FFFFFF) or pure black (#000000) backgrounds — no in-between
- Extreme typographic scale contrast (96px titles, 12px captions)
- Photography dominates — minimal UI chrome
- Didot, Bodoni Moda, or Playfair Display for display typography
- Black and white as the primary palette — color from photography only
- Grid violations: text bleeding over images, oversized type as graphic element
- Minimal navigation — single line, edge-to-edge

---

## 2. Color Palette & Roles

### Monochrome Base (always)
- **White** (`#FFFFFF`): Light mode primary.
- **Off-Black** (`#0A0A0A`): Primary dark — warmer than pure black.
- **Light Gray** (`#F5F5F5`): Background variation.
- **Medium Gray** (`#9B9B9B`): Caption text, secondary labels.
- **Dark Gray** (`#3A3A3A`): Body text on white.

### Accent (one per brand identity — use sparingly)
- **Classic Noir** (`#000000`): No accent — black and white only.
- **Editorial Red** (`#C41E3A`): Vogue energy — ONE element max.
- **Powder Blue** (`#A8C8D8`): Soft luxury.
- **Acid Yellow** (`#F5E642`): Conceptual fashion energy.

---

## 3. Typography Rules

### Font Family
- **Display**: `Bodoni Moda` (Google Fonts) — the classic fashion serif
- **Alternative**: `Playfair Display` weight 700–900
- **Body/Captions**: `Inter` weight 300 — thin, recessive
- **Navigation**: `Inter` weight 400 uppercase

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Cover Title | 80–120px | 900 | Bodoni Moda, can overlap image |
| Editorial Headline | 56–72px | 700 | Bodoni Moda |
| Cover Subhead | 14px | 300 | Inter uppercase, letter-spacing: 5px |
| Body / Longread | 16px | 400 | Inter, line-height: 1.8 |
| Photo Caption | 11px | 300 | Inter, #9B9B9B, italic |
| Navigation | 12px | 400 | Inter uppercase, letter-spacing: 3px |
| Pull Quote | 28–36px | 400 | Bodoni Moda italic |

---

## 4. Component Stylings

### Editorial Layout Block
```
Full-bleed image: 100vw wide, 80–100vh tall
Title overlay: Bodoni Moda 96px absolute-positioned, bottom-left or top-right
  Can cross image boundary (z-index layer)
Caption: Inter 11px italic #9B9B9B, bottom-right of image
```

### Product/Campaign Card
```
background: #FFFFFF
border: none — no borders in fashion editorial
Image: fills top 70–80% of card
Product name: Inter 400 13px #0A0A0A uppercase letter-spacing: 1px
Price: Inter 300 13px #9B9B9B
hover: image subtle zoom (scale 1.03, 600ms ease)
No shadow, no border
```

### Navigation (Masthead style)
```
Layout: single horizontal line, full-width
Left: Logo / Brand name (Bodoni Moda or Sans)
Center: Nav items, 12px uppercase letter-spacing: 3px
Right: Search, Cart, Account icons (minimal, thin stroke)
border-bottom: 1px solid #0A0A0A  ← only structural line
```

### Pull Quote
```
font: Bodoni Moda 32px italic weight 400 #0A0A0A
margin: 60px 0  ← floats in whitespace
No quotation marks (fashion editorial rarely uses them)
No background, no border
Optional: a single thin line (1px #0A0A0A) above or below
```

### Button
```
Primary:
  background: #0A0A0A
  color: #FFFFFF
  border-radius: 0px
  padding: 12px 32px
  font: Inter 400 11px uppercase letter-spacing: 3px
  hover: opacity 0.8

Ghost:
  border: 1px solid #0A0A0A
  color: #0A0A0A
  hover: background #0A0A0A, color #FFFFFF
```

---

## 5. Layout Principles

- **Break the grid**: Type overlapping images, columns of unequal width, off-axis elements
- **Max-width**: None on hero — then 1400px for structured content
- **Column asymmetry**: 2:1 column ratios, not equal columns
- **White space as content**: Empty areas are intentional editorial decisions
- **Section padding**: Varies widely — some sections are full-bleed (0 padding), others 120px+

---

## 6. Depth & Elevation

Pure flatness:
- No shadows anywhere
- No gradients (except subtle overlay on hero photography)
- Elevation only through z-index layering (type over images)
- Foreground text over background images — no box separation

---

## 7. Do's and Don'ts

### Do
- Use type as a graphic element — break containment, overlap images
- Apply extreme scale contrast between display and body type
- Make photography the hero — one dominant image per page section
- Use wide letter-spacing (3–5px) on short labels — the magazine convention
- Commit to the monochrome palette — let the photography provide color

### Don't
- Don't use rounded corners
- Don't use drop-shadows
- Don't use more than 2 typefaces
- Don't center body text
- Don't add too many products per section — editorial pace, not e-commerce grid

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; title size reduced to 48px; full-width images |
| Desktop | 1024px+ | Full editorial layout with overlapping type |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
White:           #FFFFFF
Off-black:       #0A0A0A
Light gray:      #F5F5F5
Medium gray:     #9B9B9B
Body text:       #3A3A3A
Editorial red:   #C41E3A (optional, single use)
```

### Example Prompts
- "Fashion editorial homepage: #FFFFFF background. Full-bleed hero image 95vh. Title: Bodoni Moda 96px weight 900 #0A0A0A absolutely positioned bottom-left of image, overlapping. One-line navigation: brand name left, 5 links center 12px uppercase letter-spacing 3px, icons right, 1px bottom border. Product grid: no borders, no shadows, 16:9 images, Inter 13px uppercase product names, muted gray prices. Pure monochrome with photography providing all color."

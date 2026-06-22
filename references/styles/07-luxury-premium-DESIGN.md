# Design System: Luxury Premium
# 奢华高端风格

> **风格定位**：极致留白、高对比衬线字、克制用色。让产品本身说话，设计是隐形的框架。
> **适用场景**：奢侈品牌官网、高端时尚电商、珠宝/腕表品牌、精品酒店、高端美妆
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Luxury Premium design speaks in silences. The whitespace is not empty — it is intentional, communicating that the brand has nothing to prove and everything to reveal. The visual language says: we don't need to shout. The product is worthy of this frame.

The defining characteristic is a pairing of extremes: ultra-thin display type (weight 100–200) at enormous scale, paired with meticulously spaced smaller text. Black and white with gold or nude accents. Photography that bleeds to edges. Navigation that disappears until needed.

Chanel, Hermès, Bottega Veneta, Rolex — these brands share a visual language that transcends trends precisely because they refuse to participate in them. This design system captures that language.

**Key Characteristics:**
- Ivory/white background (#FAFAF8 or #FFFFFF) — never colored
- Near-black (#111111 or #1A1A1A) for text — slightly warm, never cold
- Ultra-light or ultra-heavy weight display type — no medium
- Extreme negative letter-spacing on large display text
- Single accent: gold (#B8973A or #C9A96E), nude, or champagne
- Generous whitespace: sections breathe with 120–160px padding
- Product photography: large, full-bleed, white or neutral background
- No decorative elements — typography and imagery carry all visual weight

---

## 2. Color Palette & Roles

### Foundation
- **Ivory** (`#FAFAF8`): Primary background. Slightly warm white — less clinical than #FFFFFF.
- **Pure White** (`#FFFFFF`): Product image backgrounds, card surfaces.
- **Warm Black** (`#111111`): Primary text. Warm, not cold.
- **Deep Charcoal** (`#1A1A1A`): Secondary dark, slightly less intense.
- **Medium Gray** (`#6B6B6B`): Body text, secondary information.
- **Light Gray** (`#ABABAB`): Captions, metadata, placeholder.
- **Faint Gray** (`#E8E8E4`): Borders, dividers, subtle lines.

### Accent Options
- **Antique Gold** (`#B8973A`): The classic luxury accent.
- **Champagne Gold** (`#C9A96E`): Warmer, softer gold.
- **Warm Nude** (`#D4B896`): Organic, feminine luxury.
- **Muted Rose** (`#C4917A`): Warm luxury for beauty/fashion.
- **Platinum** (`#C8C8C8`): Cool luxury, jewelry/watches.

### Never Use
- Bright primary colors (blue, red, green) — they break the luxury register
- Neon or high-saturation colors
- Multiple accent colors simultaneously

---

## 3. Typography Rules

### Font Family
- **Primary Display**: `Playfair Display` or `Cormorant Garamond`, fallback: `Georgia`, `serif`
- **Secondary / Body**: `Jost`, `Futura PT`, or `Gill Sans`, fallback: `Inter`, `sans-serif`
- **Alternative High-End**: `Bodoni Moda` (dramatic contrast), `EB Garamond` (classical)
- **Monospace** (minimal use): `Courier Prime`

### Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing | Notes |
|------|--------|------|--------|-------------|----------------|-------|
| Brand Display | Playfair Display | 96–120px | 300–400 | 0.9 | -5px | Seasonal campaign headline |
| Display | Playfair Display | 64px | 400 | 1.0 | -3px | Hero headline |
| H1 | Playfair Display | 48px | 400 | 1.1 | -1.5px | Page title |
| H2 | Cormorant / Jost | 32px | 300–400 | 1.2 | -0.5px | Section title |
| H3 | Jost | 18px | 400 | 1.3 | 2px | Category label (uppercase) |
| Body L | Jost | 18px | 300 | 1.8 | 0.5px | Product descriptions |
| Body | Jost | 15px | 300–400 | 1.7 | 0.5px | Standard text |
| Body S | Jost | 13px | 400 | 1.5 | 0.8px | Captions, metadata |
| Eyebrow | Jost | 11px | 400 | 1 | 4px | UPPERCASE TRACKING — category labels |
| Price | Jost | 20px | 400 | 1 | 1px | Never bold — luxury prices are quiet |
| Nav Link | Jost | 12px | 400 | 1 | 3px | ALL CAPS, wide tracking |

### Typography Principles
- **Extreme letter-spacing for eyebrows/labels**: 3–5px for ALL CAPS small text is a luxury signature
- **Weight extremes only**: Use 300 or 700 — never 400–600 for display
- **Large type as art**: The display typeface should be used at scale (64px+) where its serifs are appreciated
- **Never justify text**: Ragged right margins are more refined
- **Serif for emotion, sans for information**: Headlines in Playfair, specs/prices/nav in Jost

---

## 4. Component Stylings

### Primary Button
```
background: #111111
color: #FAFAF8
padding: 14px 40px
border-radius: 0px (sharp edges)
border: none
font: Jost 12px weight 400 uppercase letter-spacing 3px
height: 48px
hover: background #1A1A1A, opacity 0.85
transition: opacity 200ms ease
```

### Ghost / Outline Button
```
background: transparent
color: #111111
padding: 13px 39px
border: 1px solid #111111
border-radius: 0px
font: Jost 12px weight 400 uppercase letter-spacing 3px
hover: background #111111, color #FAFAF8
```

### Product Card
```
background: #FFFFFF
border: none (no border — luxury uses whitespace for separation)
padding: 0
Image: full-width, 4:5 ratio, white background, hover slight zoom (scale 1.03)
Product name: 15px Jost weight 300 letter-spacing 0.5px #111111, margin-top 12px
Price: 15px Jost weight 400 letter-spacing 1px #111111
Second line: 13px Jost weight 300 #6B6B6B (material, variant info)
No border, no shadow — whitespace creates separation
```

### Navigation
```
background: transparent (on hero) → #FAFAF8 on scroll
height: 72px
Logo: center-aligned, Playfair Display or brand lockup
Nav links: Jost 11px uppercase letter-spacing 3px #111111
No bottom border — whitespace suffices
```

### Divider
```
height: 1px
background: #E8E8E4
margin: 64px 0
```
Or use whitespace alone — 80–120px gap is sufficient in luxury design.

### Form / Newsletter
```
Input:
  border: none
  border-bottom: 1px solid #111111
  border-radius: 0
  padding: 12px 0
  font: Jost 14px weight 300 letter-spacing 1px
  background: transparent
  placeholder: #ABABAB

Submit button: full-width or side-by-side, black #111111 background
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px, but luxury uses very large multiples
- Section padding: 120–160px vertical
- Hero height: 80–100vh
- Content max width: 1400px (wider — gives images room)
- Text content max width: 680px
- Product grid gutter: 32px (larger gutter = luxury feel)

### Grid
- 12-column grid, 32px gutter
- Product grid: 4-column desktop, 2-column mobile
- Editorial layout: full-bleed image + 50% text columns alternating
- Luxury editorial: 1 product per "scene" — not grids of 4+

### Whitespace Philosophy
- **Generous is non-negotiable**: Each element needs to breathe
- Vertical rhythm: 80px minimum between sections, 120px preferred
- Product detail page: single product at a time, maximum image size
- Never stack more than 3 information blocks without whitespace break

---

## 6. Depth & Elevation

Luxury design avoids shadow almost entirely. Depth is created through:
- **Scale contrast**: Large images vs small text
- **Color contrast**: Black on white
- **Whitespace**: Isolation creates visual importance

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | None | Everything — this is a flat system |
| Subtle | `0 1px 0 rgba(0,0,0,0.05)` | Very light separator |
| Overlay | `rgba(0,0,0,0.4)` | Image overlay for text legibility |
| Modal | `0 40px 80px rgba(0,0,0,0.15)` | Lightbox, size guide overlay |

---

## 7. Do's and Don'ts

### Do
- Use #FAFAF8 (warm ivory) not #FFFFFF — it's softer, more refined
- Apply extreme letter-spacing (3–5px) to ALL CAPS labels and navigation
- Use Playfair Display or Cormorant Garamond for headlines — their high-contrast serifs are essential
- Make whitespace the primary design element — it signals confidence
- Align images to edges/full-bleed — luxury does not crop images to fit grids
- Use 0px border-radius on buttons — sharp edges communicate precision
- Keep the accent (gold) rare — 1–2 uses per page maximum

### Don't
- Don't use colorful CTAs — black button on ivory is the luxury standard
- Don't use round-cornered buttons (pill or even 8px radius)
- Don't add drop shadows to product images — they appear cheaply produced
- Don't use more than 2 typefaces
- Don't crowd the navigation — fewer items signal confidence
- Don't animate anything aggressively — subtle transitions (300ms ease) only
- Don't use sans-serif for display headlines in this style — the serif is the identity

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column product grid, reduced section padding (64px), hero 60vh |
| Tablet | 640–1024px | 2-column grid, reduced gutter 20px |
| Desktop | 1024px+ | 4-column grid, 32px gutter, full 120px section padding |

### Mobile Luxury
- Even on mobile, maintain generous padding (20px sides)
- Reduce product grid to 2 columns — never 3 on mobile (too cramped for luxury)
- Navigation: full-screen overlay menu (not sidebar drawer)
- CTA buttons: full-width on mobile

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:       #FAFAF8
Text primary:     #111111
Text body:        #6B6B6B
Text muted:       #ABABAB
Border:           #E8E8E4
Gold accent:      #C9A96E
Button bg:        #111111
Button text:      #FAFAF8
```

### Example Prompts
- "Design a luxury fashion hero section: ivory background #FAFAF8. Full-bleed editorial image left half. Right half: eyebrow 11px Jost uppercase letter-spacing 4px #ABABAB 'NEW COLLECTION', headline 64px Playfair Display weight 400 letter-spacing -3px #111111 (2 lines). Body 15px Jost weight 300 letter-spacing 0.5px #6B6B6B line-height 1.7. Two buttons: 'Explore Collection' (black #111111 bg, ivory text, 0px radius, 14px 40px padding, Jost 12px uppercase letter-spacing 3px) and 'View Lookbook' (ghost version). No shadows."
- "Create a luxury product card: no border, no shadow, pure whitespace separation. Product image 4:5 ratio white bg, hover scale(1.03) 400ms ease. Below image: 15px Jost weight 300 letter-spacing 0.5px #111111 product name. 15px Jost weight 400 letter-spacing 1px #111111 price. 13px Jost weight 300 #6B6B6B material/color. 32px gap between cards."

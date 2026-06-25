---
version: alpha
name: "Real Estate Luxury"
colors:
  surface: "#FAFAF8"
  surface-variant: "#F0EDEA"
  on-surface: "#1A1614"
  primary: "#B8962E"
  on-primary: "#111111"
  accent: "#D4AE52"
  charcoal: "#1A1A1A"
  warm-dark: "#2C2720"
  gold-tint: "#FBF5E6"
  text-body: "#4A4540"
  text-muted: "#8A8580"
  border: "#E0DCD8"
  reverse-text: "#F5F0EA"
typography:
  property-name-hero:
    fontSize: 72px
    fontWeight: 300
  section-heading:
    fontFamily: "Inter"
    fontSize: 44px
    fontWeight: 400
  property-details:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
  caption:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  section-padding: 120px
components:
  property-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "0px"
  button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary}"
    rounded: "0px"
    padding: "14px 36px"
    typography: "Inter 500 13px uppercase letter-spacing: 2px"
    hover: "background {colors.primary}, color {colors.surface}"
    border: "1px solid {colors.primary}"
  full-bleed-hero:
    height: "85vh minimum"
    backgroundColor: "full-bleed property photo"
  amenity-icon-row:
    padding: "16px 24px"
    backgroundColor: "{colors.surface-variant}"
---

# Design System: Real Estate Luxury
# 豪宅地产风格

> **风格定位**：高端住宅的视觉语言。Sotheby's International Realty 的精致、Christie's Real Estate 的沉稳。空间感即是品牌。
> **适用场景**：豪宅/别墅销售、高端地产经纪、奢侈房产开发商、高端公寓预售、建筑事务所展示
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Luxury real estate design sells not just property but lifestyle, aspiration, and belonging. The design language must communicate exclusivity through restraint: full-bleed photography, maximum whitespace, quiet gold accents, and typography that feels as curated as the properties it presents.

Reference points: Sotheby's Realty (dark navy, gold), Christie's Real Estate (black and warm gray), Douglas Elliman (clean white and charcoal). The common thread: let the photography dominate, use typography minimally, and signal quality through precision spacing.

**Key Characteristics:**
- Full-bleed hero photography — architecture and interiors
- Charcoal/dark backgrounds (#1A1A1A, #2C2C2C)
- Warm gold (#B8962E) as sole accent color
- Cormorant Garamond or Didot-style typefaces for headings
- Maximum whitespace — every pixel of space signals exclusivity
- 0px border-radius — luxury is sharp, not rounded
- Price typography: large, confident, tabular numerals
- Floor plan SVG as a design element

---

## 2. Color Palette & Roles

### Background
- **Alabaster** (`#FAFAF8`): Warm white — primary light mode.
- **Warm Gray** (`#F0EDEA`): Section differentiation, card backgrounds.
- **Charcoal** (`#1A1A1A`): Dark mode, hero overlays, footer.
- **Warm Dark** (`#2C2720`): Slightly warmer dark for feature sections.

### Gold (Primary Accent)
- **Estate Gold** (`#B8962E`): Primary accent — borders, labels, key UI elements.
- **Gold Bright** (`#D4AE52`): Hover state, highlight.
- **Gold Tint** (`#FBF5E6`): Extremely subtle bg for featured property.

### Neutral
- **Text Primary** (`#1A1614`): Near-black, warm-toned.
- **Text Body** (`#4A4540`): Body copy.
- **Text Muted** (`#8A8580`): Supporting text, sq footage labels.
- **Border** (`#E0DCD8`): Warm-toned borders.
- **Reverse Text** (`#F5F0EA`): Text on dark backgrounds.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Alabaster | `#FAFAF8` | `#FAFAF8` | 1:1 | FAIL |
| Estate Gold | `#B8962E` | `#FAFAF8` | 2.7:1 | FAIL |
| Text Primary | `#1A1614` | `#FAFAF8` | 17.2:1 | AAA |
| Text Body | `#4A4540` | `#FAFAF8` | 9.1:1 | AAA |
| Text Muted | `#8A8580` | `#FAFAF8` | 3.5:1 | AA-large |
| Reverse Text | `#F5F0EA` | `#FAFAF8` | 1.1:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Headings**: `Cormorant Garamond` weight 300–600 — thin, aristocratic
- **Navigation/Price**: `Inter` weight 400–600 — clean precision
- **Body**: `Inter` weight 300–400 — understated

| Role | Size | Weight | Font | Notes |
|------|------|--------|------|-------|
| Property Name / Hero | 52–72px | 300 | Cormorant Garamond | Thin serif = exclusivity |
| Location / Tagline | 20–24px | 400 | Inter | Uppercase, letter-spacing: 4px |
| Section Heading | 36–44px | 400 | Cormorant Garamond | |
| Price | 40–56px | 600 | Inter | tabular-nums, #1A1614 |
| Property Details | 14px | 400 | Inter | "4 BD  ·  5 BA  ·  6,200 SF" |
| Body | 16px | 300 | Inter | line-height: 1.8 |
| Caption | 12px | 400 | Inter | #8A8580, uppercase letter-spacing: 1px |
| Gold Label | 11px | 600 | Inter | #B8962E uppercase letter-spacing: 2px |

---

## 4. Component Stylings

### Property Card
```
background: #FAFAF8
border: 1px solid #E0DCD8
border-radius: 0px
overflow: hidden

Image: 3:2 ratio, full width, hover scale 1.02 (transition 600ms)
Content padding: 20px 24px
Property tag: 11px Inter uppercase #B8962E "EXCLUSIVE LISTING"
Title: Cormorant Garamond 22px #1A1614
Details: Inter 13px #8A8580 "4 BD  ·  5 BA"
Price: Inter 700 24px #1A1614 tabular-nums
```

### Button
```
Primary:
  background: #1A1614
  color: #FAFAF8
  border-radius: 0px
  padding: 14px 36px
  font: Inter 500 13px uppercase letter-spacing: 2px
  hover: background #2C2720

Gold:
  background: #B8962E
  color: #FAFAF8
  hover: background #D4AE52

Ghost:
  border: 1px solid #B8962E
  color: #B8962E
  hover: background #B8962E, color #FAFAF8
```

### Full-Bleed Hero
```
height: 85vh minimum
background: full-bleed property photo
overlay: linear-gradient(to bottom, transparent 40%, rgba(26,22,20,0.8) 100%)
Content: bottom-aligned, left-aligned
  Property name: Cormorant Garamond 64px #F5F0EA
  Location: Inter 16px uppercase #B8962E letter-spacing: 4px
  Price: Inter 600 36px #F5F0EA
  CTA button: ghost gold style
```

### Amenity Icon Row
```
Icons: simple line icons, 24px, #B8962E
Label: Inter 12px #8A8580 uppercase letter-spacing: 0.8px
Separator: thin gold vertical line 1px #E0DCD8
padding: 16px 24px
background: #F0EDEA
```

---

## 5. Layout Principles

- **Photography first**: Every section is designed around full-bleed or large images
- **Max-width**: 1400px — luxury needs expansive layouts
- **Section padding**: 120px desktop — breathing room is the product
- **Property grid**: 3-column desktop (can be 2 for featured listings)
- **Navigation**: Transparent over hero, white/dark on scroll — classic luxury behavior
- **Virtual tour CTA**: Prominent "Schedule Viewing" or "Virtual Tour" buttons

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 120px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Base | `#FAFAF8` alabaster |
| Card | White + 1px warm border, no shadow |
| Featured | Gold border `2px solid #B8962E` |
| Dark hero | `#1A1A1A` with subtle gradient |
| Modal | `rgba(26,22,20,0.9)` lightbox-style overlay |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Use full-bleed photography — the property IS the hero
- Apply Cormorant Garamond for ALL headings — it signals luxury instantly
- Keep gold as the only accent — consistency = exclusivity
- Use uppercase + letter-spacing for short labels — adds formality
- Show the price prominently — in luxury real estate, price signals not deters

### Don't
- Don't use rounded corners — luxury is angular
- Don't use multiple accent colors — gold and charcoal only
- Don't use stock interior photography — staging matters
- Don't clutter property cards — maximum 3 details per card
- Don't use animated transitions faster than 400ms — luxury moves slowly

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single property card column; simplified hero; swipe gallery |
| Tablet | 640–1024px | 2-column grid; reduced hero height |
| Desktop | 1024px+ | 3-column grid; full hero experience |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #FAFAF8
Charcoal:        #1A1614
Estate gold:     #B8962E
Gold bright:     #D4AE52
Border:          #E0DCD8
Text primary:    #1A1614
Text body:       #4A4540
Text muted:      #8A8580
Reverse:         #F5F0EA
```

### Example Prompts
- "Luxury real estate listing page: #FAFAF8 background. Full-bleed hero: 85vh property photo, bottom-overlay gradient to dark, Cormorant Garamond 64px thin property name in #F5F0EA, gold location label uppercase. Property details section: price Inter 600 48px #1A1614, stats row (4 BD · 5 BA · 6,200 SF) in muted gray, gold amenity icons. Gallery: 0px-radius images, no shadow. CTA buttons: dark charcoal, 0px radius, uppercase letter-spacing. Footer dark charcoal."

---
version: alpha
name: "Restaurant Fine Dining"
colors:
  surface: "#FAF7F0"
  surface-variant: "#F2EDE4"
  on-surface: "#0F0F0E"
  primary: "#1A1614"
  on-primary: "#FFFFFF"
  aged-cream: "#E8E0D4"
  charcoal: "#1C1A18"
  deep-warm-dark: "#2A2520"
  gold-ochre: "#B8902A"
  terracotta: "#C0654A"
  champagne: "#D4B896"
  sage: "#6B7B5A"
  body: "#4A4540"
  muted: "#8A8580"
  reverse: "#F5F0EA"
typography:
  dish-name:
    fontFamily: "EB Garamond"
    fontSize: 22px
    fontWeight: 400
  label:
    fontFamily: "EB Garamond"
    fontSize: 11px
    fontWeight: 400
rounded:
  none: 0px
spacing:
  section-padding: 120px
  margin: 120px
components:
  hero-cover:
    textColor: "{colors.surface} (light on dark) or {colors.primary} (dark on light)"
  reservation-cta:
    backgroundColor: "{colors.primary} or {colors.gold-ochre}"
    textColor: "{colors.surface}"
    rounded: "0px"
    padding: "14px 48px"
    typography: "Inter 400 12px uppercase letter-spacing: 0.3em"
    hover: "opacity 0.85 (fade, not transform)"
  chefs-story-card:
    backgroundColor: "{colors.surface-variant}"
    padding: "32px 40px"
---

# Design System: Restaurant Fine Dining
# 高端餐饮风格

> **风格定位**：米其林级别餐厅的视觉语言。Le Bernardin 的克制、Noma 的诗意、Eleven Madison Park 的完美主义。
> **适用场景**：米其林餐厅、主厨品牌、高端私宴、精品葡萄酒、精品食材品牌、顶级外卖/订座平台
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Fine dining design is culinary experience before the food arrives. Every pixel should evoke the weight of a silver fork on linen, the glow of a candlelit table, the smell of something extraordinary about to happen. The design is not trying to sell — it is presenting.

The aesthetic draws from restaurant monographs, wine lists, and chef's tasting menus: cream paper, deep charcoal or black, thin serif typography with extreme letter-spacing, photography that shows food as sculpture. The only decoration is texture and empty space.

**Key Characteristics:**
- Warm cream (#FAF7F0) or deep black (#0F0F0E) backgrounds
- Thin Cormorant Garamond or Didot for all headings
- Extreme letter-spacing on short labels (0.3–0.5em)
- Food photography as hero — nothing else competes
- One warm gold or terracotta accent — nothing saturated
- 0px border-radius — precision plating has no rounded edges
- Reservation CTA as the singular goal

---

## 2. Color Palette & Roles

### Light Mode (Linen)
- **Cream** (`#FAF7F0`): Warm linen — primary background.
- **Warm Paper** (`#F2EDE4`): Card and section differentiation.
- **Aged Cream** (`#E8E0D4`): Borders, deep differentiation.

### Dark Mode (Candlelight)
- **Void Black** (`#0F0F0E`): Full dark mode primary.
- **Charcoal** (`#1C1A18`): Card backgrounds in dark.
- **Deep Warm Dark** (`#2A2520`): Slightly lifted surfaces.

### Accent (choose one per restaurant identity)
- **Gold Ochre** (`#B8902A`): Classic fine dining gold.
- **Terracotta** (`#C0654A`): Modern farmhouse-to-table.
- **Champagne** (`#D4B896`): Soft luxury.
- **Sage** (`#6B7B5A`): Modern natural fine dining.

### Text
- **Primary** (`#1A1614`): Near-black, warm.
- **Body** (`#4A4540`): Body copy on light bg.
- **Muted** (`#8A8580`): Captions, wine details.
- **Reverse** (`#F5F0EA`): Text on dark.
- **Gold accent text** (`#B8902A`): Label, price, key detail.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Cream | `#FAF7F0` | `#FAF7F0` | 1:1 | FAIL |
| Void Black | `#0F0F0E` | `#FAF7F0` | 17.9:1 | AAA |
| Primary | `#1A1614` | `#FAF7F0` | 16.8:1 | AAA |
| Body | `#4A4540` | `#FAF7F0` | 8.9:1 | AAA |
| Muted | `#8A8580` | `#FAF7F0` | 3.4:1 | AA-large |
| Reverse | `#F5F0EA` | `#FAF7F0` | 1.1:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Headings**: `Cormorant Garamond` weight 300 — impossibly thin, precious
- **Body**: `EB Garamond` weight 400 — classical book typography
- **Accent Labels**: `Inter` weight 300 — thin modern contrast

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Restaurant Name | 56–80px | 300 | Cormorant, center or left |
| Menu Section | 28–36px | 300 | Extreme letter-spacing: 0.3em |
| Dish Name | 20–22px | 400 | Cormorant |
| Ingredients | 14px | 300 | EB Garamond italic, comma-separated |
| Price | 14px | 400 | Inter tabular-nums, right-aligned |
| Body / Story | 16px | 400 | EB Garamond, line-height: 1.9 |
| Label | 11px | 400 | Inter uppercase, letter-spacing: 0.4em |
| Caption | 12px | 300 | #8A8580 |

---

## 4. Component Stylings

### Menu Item
```
Dish name: Cormorant Garamond 20px #1A1614
Ingredients: EB Garamond 14px italic #8A8580 (truffle, langoustine, yuzu)
Price: Inter 14px #B8902A right-aligned
Separator: hairline 1px #E8E0D4 between dishes
No box, no card — pure typography on paper
```

### Hero / Cover
```
Full-bleed food/interior photography
Overlay: transparent for photo-forward OR
  linear-gradient(to bottom, rgba(15,15,14,0.1), rgba(15,15,14,0.7))
Restaurant name: Cormorant Garamond 72px weight 300 centered
  Color: #FAF7F0 (light on dark) or #1A1614 (dark on light)
Tagline: Inter 12px uppercase letter-spacing: 0.4em #B8902A
```

### Reservation CTA
```
Not a bright button — a composed invitation
background: #1A1614 or #B8902A
color: #FAF7F0
border-radius: 0px
padding: 14px 48px
font: Inter 400 12px uppercase letter-spacing: 0.3em
text: "RESERVE A TABLE" or "BOOK YOUR EXPERIENCE"
hover: opacity 0.85 (fade, not transform)
```

### Chef's Story Card
```
background: #F2EDE4
border-left: 2px solid #B8902A
padding: 32px 40px
Quote: Cormorant Garamond 26px italic weight 300 #1A1614
Attribution: Inter 11px uppercase letter-spacing: 0.3em #8A8580
No box-shadow
```

---

## 5. Layout Principles

- **Full-bleed photography**: Every section has a full-width or large food/interior image
- **Max-width**: 1200px, with wide margins (10% each side at desktop)
- **Section padding**: 120px — each course needs time to be savored
- **Menu page**: Two-column for starters/mains/desserts; prices right-aligned
- **Typography-led sections**: Some sections are pure type on paper — the story of a dish

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 120px |
| margin | 120px |

## 6. Depth & Elevation

No shadows. Like a menu printed on stock paper, everything is flat:
- Light mode: cream → warm paper → aged cream (background differentiation only)
- Dark mode: void → charcoal → warm dark
- One exception: food photography may have a subtle CSS drop-shadow if floating

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |

---

## 7. Do's and Don'ts

### Do
- Use Cormorant Garamond weight 300 — thin typography is the signature
- Apply extreme letter-spacing (0.3–0.5em) to short labels
- Let food photography dominate — don't crowd it with text
- Write ingredient lists in lowercase italic — it reads like poetry
- Make the reservation button the only bright/prominent UI element

### Don't
- Don't use bright accent colors — no #FF0000, no #4F46E5
- Don't use rounded corners
- Don't use iconography beyond minimal arrows or social icons
- Don't clutter menu items with descriptions longer than one line
- Don't use drop-shadows on cards

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column menu; hero 60vh; simplified navigation |
| Desktop | 1024px+ | Two-column menu; full-bleed hero; wide margins |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Cream bg:        #FAF7F0
Warm paper:      #F2EDE4
Aged cream:      #E8E0D4
Void black:      #0F0F0E
Gold ochre:      #B8902A
Primary text:    #1A1614
Body text:       #4A4540
Muted:           #8A8580
Reverse text:    #F5F0EA
```

### Example Prompts
- "Fine dining restaurant website: #FAF7F0 cream background. Full-bleed hero photo with overlay, centered restaurant name Cormorant Garamond 72px weight 300 #FAF7F0. Tagline: Inter 12px uppercase letter-spacing 0.4em #B8902A. Menu section: two-column layout, dish names 20px Cormorant #1A1614, ingredients 14px EB Garamond italic #8A8580, prices 14px Inter right-aligned #B8902A, hairline separators between dishes. Reservation CTA: #1A1614 bg, #FAF7F0 text, 0px radius, uppercase letter-spacing 0.3em. Maximum whitespace throughout."

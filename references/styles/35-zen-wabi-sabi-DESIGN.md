---
version: alpha
name: "Zen Wabi-Sabi"
colors:
  surface: "#F4F1EC"
  surface-variant: "#EAE5DC"
  on-surface: "#1A1714"
  primary: "#8B5E3C"
  on-primary: "#FFFFFF"
  stone-mid: "#C8C0B8"
  soot: "#2A2520"
  ash: "#3D3830"
  moss: "#6B7B5A"
  storm-cloud: "#6A7080"
  bamboo: "#B8A870"
  stone-gray: "#6A6560"
  muted-stone: "#9A9590"
typography:
  koan-title:
    fontSize: 48px
    fontWeight: 300
  body:
    fontSize: 17px
    fontWeight: 400
  decorative-cjk:
    fontSize: 120px
    fontWeight: 700
rounded:
  none: 0px
  default: 2px
spacing:
  section-padding: 680px
components:
  card:
    backgroundColor: "{colors.soot}"
    border: "1px solid {colors.ash}"
    rounded: "2px  ← slight rounding, like a smoothed stone"
    padding: "32px"
  button:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.surface}"
    rounded: "2px"
    padding: "12px 32px"
    typography: "Noto Serif JP 400 14px"
    hover: "border-color {colors.soot}, color {colors.soot}"
    border: "1px solid {colors.muted-stone}"
  organic-divider:
    textColor: "{colors.stone-mid}"
---

# Design System: Zen Wabi-Sabi
# 禅意侘寂风格

> **风格定位**：日式侘寂美学——不完整之美、短暂之美、不完美之美。枯山水的静、茶室的拙、苔藓的残。
> **适用场景**：冥想/正念App、日式茶品牌、手工艺品牌、极简生活方式、禅宗文化机构、高端SPA/养生
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Wabi-sabi (侘寂) is a Japanese aesthetic philosophy centered on the acceptance of transience and imperfection. Wabi: the beauty of rustic simplicity. Sabi: the beauty that comes with age and wear. A cracked tea bowl repaired with gold. A moss-covered stone. The asymmetric shadow in a raked garden.

Unlike Japandi Minimal (which is clean and Scandinavian-influenced), Zen Wabi-Sabi embraces texture, the organic, and the "incomplete." Surfaces have grain. Colors are earthy and slightly desaturated. Empty space is meditative. Nothing screams. Nothing competes. The design breathes like a zazen practitioner.

**Key Characteristics:**
- Deep warm charcoal backgrounds OR warm stone-colored light backgrounds
- Desaturated, earthy palette — no saturated colors
- Organic textures: stone grain, washi paper, linen, unglazed ceramic
- Asymmetric compositions — nothing perfectly centered
- Moss (`#6B7B5A`), stone (`#9A9590`), and charcoal as primary colors
- One deliberate "imperfection" per composition (hand-drawn underline, organic shape)
- No straight decorative elements — curves from nature
- Silence as design: text is minimal, spacing is maximal

---

## 2. Color Palette & Roles

### Light Mode (石庭/Rock Garden)
- **Stone White** (`#F4F1EC`): Warm off-white, raked gravel.
- **Warm Parchment** (`#EAE5DC`): Aged washi texture.
- **Stone Mid** (`#C8C0B8`): Stepping stones, dividers.

### Dark Mode (炭 / Charcoal)
- **Ink Charcoal** (`#1A1714`): Deep warm charcoal — not pure black.
- **Soot** (`#2A2520`): Slightly lighter charcoal for cards.
- **Ash** (`#3D3830`): Border and divider tone.

### Earthy Accents (sparingly)
- **Moss** (`#6B7B5A`): Living green — the only "alive" color.
- **Rust** (`#8B5E3C`): Iron oxide, aged ceramic.
- **Storm Cloud** (`#6A7080`): Cool gray accent.
- **Bamboo** (`#B8A870`): Warm yellow-beige, dried grass.

### Text
- **Charcoal Primary** (`#2A2520`): Headlines on light.
- **Stone Gray** (`#6A6560`): Body on light.
- **Parchment** (`#EAE5DC`): Text on dark backgrounds.
- **Muted Stone** (`#9A9590`): Captions, metadata.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Warm Parchment | `#EAE5DC` | `#F4F1EC` | 1.1:1 | FAIL |
| Ink Charcoal | `#1A1714` | `#F4F1EC` | 15.8:1 | AAA |
| Stone Gray | `#6A6560` | `#F4F1EC` | 5.1:1 | AA |
| Muted Stone | `#9A9590` | `#F4F1EC` | 2.6:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Japanese**: `Noto Serif JP` weight 300–400 — light, contemplative
- **Latin**: `EB Garamond` weight 400 — humanist, aged
- **Display**: Use weight 300 for headings (counterintuitive — thin is Zen)

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Koan Title | 32–48px | 300 | #2A2520 | One short phrase — like a koan |
| Heading | 22–28px | 400 | #2A2520 | |
| Body | 16–17px | 400 | #6A6560 | line-height: 2.0–2.4 |
| Caption | 13px | 300 | #9A9590 | Very light |
| Decorative CJK | 80–120px | 700 | #C8C0B8 | opacity 0.12, background single kanji |

### Typography Notes
- Use weight 300 (light) for main headings — heaviness contradicts wabi-sabi
- Maximum 12 words per headline; 8 is better; 4 is ideal
- Single kanji as a background watermark (e.g., 空 kū, 無 mu, 禅 zen)
- Leave deliberate uneven spacing — asymmetry is authentic

---

## 4. Component Stylings

### Card (茶碗式 — tea bowl)
```
Light mode:
  background: #EAE5DC
  border: 1px solid #C8C0B8
  border-radius: 2px  ← slight rounding, like a smoothed stone
  padding: 32px

Dark mode:
  background: #2A2520
  border: 1px solid #3D3830

No shadow — shadows are artificial; elevation through background tone only
Optional: subtle paper grain texture via CSS (background-image: noise svg at 4% opacity)
```

### Button
```
Primary:
  background: #2A2520
  color: #F4F1EC
  border-radius: 2px
  padding: 12px 32px
  font: Noto Serif JP 400 14px
  letter-spacing: 0.1em
  hover: opacity 0.8 (fade, not color change — Zen transitions are subtle)

Ghost:
  background: transparent
  border: 1px solid #9A9590
  color: #6A6560
  hover: border-color #2A2520, color #2A2520

Moss accent:
  background: #6B7B5A
  color: #F4F1EC
```

### Organic Divider
```
Not a straight line — a hand-drawn SVG stroke with slight irregularity
Color: #C8C0B8
Or simply: 80px vertical white space (the Zen divider is nothing)
```

### Texture Overlay
```
Paper texture: CSS background-image with very subtle noise (SVG turbulence filter)
Apply at 3–5% opacity over solid background colors
This gives the "hand-made" quality of wabi-sabi objects
```

---

## 5. Layout Principles

- **Extreme asymmetry**: Nothing is perfectly centered or evenly distributed
- **Generous space**: Section padding 120–160px — silence is the message
- **Max-width**: 680px for reading; even narrower (560px) for meditative content
- **Off-center composition**: Primary content at ~40% from left, not center
- **Incomplete elements**: An image that bleeds off the edge; text that starts mid-line
- **One focal point per section**: Like a single flower arrangement (ikebana)

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 680px |

## 6. Depth & Elevation

Minimal depth — all elements feel like they belong to the same level:
- Light mode: backgrounds go `#F4F1EC` → `#EAE5DC` → `#D8D2C8`
- Dark mode: `#1A1714` → `#2A2520` → `#3D3830`
- Never use box-shadow — it's too modern, too artificial

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| default | 2px | Default radius |

---

## 7. Do's and Don'ts

### Do
- Use weight 300 (light) for headings — fragility is beautiful
- Embrace asymmetry in all compositions
- Include a single large watermark kanji (空, 禅, 無, 水) in ghost tone
- Use organic, slightly irregular shapes for decorative elements
- Allow content to be sparse — what you leave out matters more

### Don't
- Don't saturate any color — desaturated is authentic
- Don't center things — symmetry is Western formality
- Don't use shadows — they're synthetic
- Don't animate aggressively — transitions at 600ms+ (slowness = mindfulness)
- Don't add decorative graphics — restraint is the philosophy

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Increase padding to 32px; font-size 15px body |
| Desktop | 1024px+ | Max-width 680px centered with vast side margins |
| Wide | 1440px+ | Content island in the center of empty space |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Stone white:     #F4F1EC
Warm parchment:  #EAE5DC
Stone mid:       #C8C0B8
Ink charcoal:    #1A1714
Soot:            #2A2520
Moss:            #6B7B5A
Rust:            #8B5E3C
Body gray:       #6A6560
Caption:         #9A9590
```

### Example Prompts
- "Zen wabi-sabi meditation app landing page: #F4F1EC warm stone background. Max-width 680px, generous 120px section padding. A single large watermark kanji '禅' (opacity 0.08, #C8C0B8) behind hero. Main headline: 36px Noto Serif JP weight 300 #2A2520, left-aligned (NOT centered). Body text 16px #6A6560 line-height 2.2. Card: #EAE5DC bg, 1px solid #C8C0B8, 2px radius, 32px padding, no shadow. CTA button: #2A2520 bg, #F4F1EC text, 2px radius, fade hover. Asymmetric layout with deliberate empty space."

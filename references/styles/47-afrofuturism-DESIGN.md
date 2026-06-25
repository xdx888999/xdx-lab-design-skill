---
version: alpha
name: "Afrofuturism"
colors:
  surface: "#050505"
  surface-variant: "#1A1008"
  on-surface: "#F5EDE0"
  primary: "#A03A1A"
  on-primary: "#FFFFFF"
  deep-earth: "#0F0A06"
  terracotta: "#C05A2A"
  ochre: "#D4862A"
  kente-green: "#2A7A3A"
  electric-gold: "#E8B830"
  deep-violet: "#5B2D8A"
  cosmic-blue: "#1A3A8A"
  muted-earth: "#8A7060"
  background: "#0A0A0F"
typography:
  sub-heading:
    fontFamily: "Inter"
    fontSize: 28px
    fontWeight: 600
rounded:
  none: 0px
  default: 2px
spacing:
  section-padding: 80px
components:
  card:
    backgroundColor: "{colors.surface-variant} rich brown"
    border: "1px solid rgba(232,184,48,0.3)  ← gold subtle"
    rounded: "2px"
    padding: "24px"
    hover: "border-color rgba(232,184,48,0.7), glow 0 0 24px rgba(232,184,48,0.15)"
  pattern-background-overlay:
    textColor: "terracotta or gold at 5–8% opacity"
  button:
    backgroundColor: "{colors.electric-gold}"
    textColor: "{colors.electric-gold}"
    rounded: "2px"
    padding: "12px 32px"
    typography: "Raleway 700 13px uppercase letter-spacing: 3px"
    hover: "background rgba(232,184,48,0.1)"
    border: "1.5px solid {colors.electric-gold}"
  cosmic-section:
    backgroundColor: "{colors.background} deep space"
---

# Design System: Afrofuturism
# 非洲未来主义风格

> **风格定位**：非洲文化遗产与科幻未来的融合。Black Panther 的瓦坎达 + Sun Ra 的宇宙爵士 + Solange 的视觉诗学——非洲传统图案遇上赛博空间。
> **适用场景**：非洲创意品牌、泛非文化机构、非洲科技公司、当代非洲艺术、非洲流行音乐、未来主义文化展览
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Afrofuturism imagines African and African diaspora culture through the lens of technology and science fiction. It is both ancestral and cosmic: kente cloth patterns reimagined as circuit boards, Dogon astronomy visualized through neon, Adinkra symbols embedded in UI.

The aesthetic is bold and unapologetic: vibrant earth tones (ochre, terracotta, rust) against deep space blacks, accented with cosmic purples and electric golds. Typography is strong and present — not decorative but structural. Pattern is woven into the layout, not applied as afterthought.

**Key Characteristics:**
- Deep space black (#050505, #0A0A0F) as the cosmic void
- Earth tones: terracotta (#C05A2A), ochre (#D4862A), rust (#A03A1A)
- Cosmic accents: electric gold (#E8B830), deep violet (#5B2D8A)
- Bold display typography — no delicate fonts
- African geometric patterns (Kente, Adinkra, Kuba) as structural design elements
- Texture: woven fabric, carved wood grain at low opacity
- Asymmetric, layered compositions

---

## 2. Color Palette & Roles

### Background
- **Cosmic Black** (`#050505`): Deepest background — space.
- **Deep Earth** (`#0F0A06`): Warm near-black — dark soil.
- **Rich Brown** (`#1A1008`): Card surfaces.

### Earth Palette (primary)
- **Terracotta** (`#C05A2A`): Primary brand — warmth, pottery, laterite soil.
- **Ochre** (`#D4862A`): Secondary — Sahara gold, harvest.
- **Rust** (`#A03A1A`): Deep earth red.
- **Kente Green** (`#2A7A3A`): Forest, life, kente green stripe.

### Cosmic Accents
- **Electric Gold** (`#E8B830`): Cosmic shimmer, star light.
- **Deep Violet** (`#5B2D8A`): Space depth, cosmic mystery.
- **Cosmic Blue** (`#1A3A8A`): Night sky.

### Text
- **Warm White** (`#F5EDE0`): Primary text on dark.
- **Ochre Text** (`#D4862A`): Accent text.
- **Muted Earth** (`#8A7060`): Secondary text.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Terracotta | `#C05A2A` | `#050505` | 4.6:1 | AA |
| Ochre | `#D4862A` | `#050505` | 7:1 | AAA |
| Warm White | `#F5EDE0` | `#050505` | 17.5:1 | AAA |
| Muted Earth | `#8A7060` | `#050505` | 4.4:1 | AA-large |

## 3. Typography Rules

### Font Family
- **Display**: `Raleway` weight 800–900 — strong, structural
- **Alternative**: `Bebas Neue` — powerful impact headers
- **Body**: `Inter` weight 400 — clean contrast to heavy display
- **Accent**: `Cinzel` — classical gravity for short labels

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero Title | 64–96px | 900 | Raleway or Bebas, ALL CAPS |
| Section Heading | 40–52px | 800 | |
| Sub-heading | 22–28px | 600 | Raleway |
| Body | 16px | 400 | Inter, #F5EDE0, line-height: 1.8 |
| Label | 12px | 600 | Cinzel uppercase, letter-spacing: 3px |
| Accent Text | 18px | 700 | Ochre color |

---

## 4. Component Stylings

### Card (Ancestral Pattern)
```
background: #1A1008 rich brown
border: 1px solid rgba(232,184,48,0.3)  ← gold subtle
border-radius: 2px
padding: 24px

Decorative: thin Kente-inspired geometric stripe as top border (4px, SVG pattern)
hover: border-color rgba(232,184,48,0.7), glow 0 0 24px rgba(232,184,48,0.15)
```

### Pattern Background Overlay
```
SVG Kente cloth or Adinkra symbol pattern
Color: terracotta or gold at 5–8% opacity
Apply behind content sections for cultural texture
Grid: geometric repeat at 40–80px unit size
```

### Button
```
Primary (Terracotta):
  background: #C05A2A
  color: #F5EDE0
  border-radius: 2px
  padding: 12px 32px
  font: Raleway 700 13px uppercase letter-spacing: 3px
  hover: background #A03A1A

Gold:
  background: #E8B830
  color: #050505
  hover: background #D4A020

Ghost:
  border: 1.5px solid #E8B830
  color: #E8B830
  hover: background rgba(232,184,48,0.1)
```

### Cosmic Section
```
background: #0A0A0F deep space
Stars: tiny white dots at 1px, random scatter via CSS or SVG
Accent: subtle violet glow on text or borders
Large heading: Raleway 900 in electric gold
Creates the "interstellar" tone shift within a page
```

---

## 5. Layout Principles

- **Bold asymmetry**: Compositions are dynamically off-center
- **Pattern as structure**: Kente-inspired horizontal stripes delineate sections
- **Max-width**: 1300px
- **Section padding**: 80–100px
- **Layering**: Earth elements overlap cosmic elements (foreground/background tension)
- **Strong verticals**: Large full-height images anchoring grid columns

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Cosmic void | `#050505` |
| Earth surface | `#1A1008` |
| Raised element | `#2A1A10` + gold border glow |
| Cosmic glow | `box-shadow: 0 0 30px rgba(232,184,48,0.2)` |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| default | 2px | Default radius |

---

## 7. Do's and Don'ts

### Do
- Use actual Adinkra/Kente/Kuba geometric patterns — research the symbols
- Layer earth and cosmic aesthetics in the same composition
- Apply bold, heavy display typography — strength is the aesthetic
- Use electric gold as the bridging element between earth and cosmos
- Show the future AND the ancestral — both are Afrofuturism

### Don't
- Don't use African patterns superficially as "exotic decoration"
- Don't use animal prints — that's a Western African stereotype
- Don't use colorful but non-specific "tribal" patterns
- Don't make it sad or ethnographic — Afrofuturism is triumphant and forward-looking

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Reduce pattern complexity; single column; title 48px |
| Desktop | 1024px+ | Full asymmetric layout; multi-layer compositions |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Cosmic black:    #050505
Terracotta:      #C05A2A
Ochre:           #D4862A
Electric gold:   #E8B830
Deep violet:     #5B2D8A
Kente green:     #2A7A3A
Warm white:      #F5EDE0
Muted earth:     #8A7060
```

### Example Prompts
- "Afrofuturism brand hero: #050505 cosmic background with faint star dots. Large Raleway 900 90px title in electric gold (#E8B830), ALL CAPS. Kente-pattern horizontal stripe (terracotta/ochre geometric SVG) as section divider. Cards: #1A1008 bg, gold subtle border, terracotta top pattern stripe. CTA: #C05A2A terracotta button, uppercase Raleway, letter-spacing 3px. Layered earth + cosmic aesthetic — ancestral and future simultaneously."

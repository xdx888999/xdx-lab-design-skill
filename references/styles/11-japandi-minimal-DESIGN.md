# Design System: Japandi Minimal
# 日式极简风格（侘寂美学）

> **风格定位**：极致留白、自然材质、不完美之美。日本侘寂（Wabi-sabi）+ 北欧极简的东西方融合。
> **适用场景**：家居/生活方式品牌、健康wellness App、茶/咖啡品牌、冥想工具、日系电商、文化类网站
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Japandi Minimal asks nothing of the viewer. It creates space — physical and psychological — through the deliberate removal of everything unnecessary. The philosophy is rooted in the Japanese concept of "ma" (間): negative space as an active presence, not an absence.

The palette draws from the natural world as filtered through Japanese sensibility: weathered wood, undyed linen, aged ceramic, moss after rain. Nothing is bright; everything is considered. Typography is set with the same care as a brushstroke. Every element has earned its place.

**Key Characteristics:**
- Warm white/ivory background (#F7F5F0 or #FAF8F3)
- Natural earth palette: stone, sand, moss, charcoal
- Ultra-light serif for headings, minimal sans for body
- Maximum negative space — less is always more
- Natural texture hints (subtle grain, paper-like surfaces)
- Asymmetric composition inspired by Japanese art (break the grid deliberately)
- No decorative icons — whitespace and typography carry all meaning

---

## 2. Color Palette & Roles

### Foundation
- **Washi Paper** (`#FAF8F3`): Primary background — warm ivory, like unbleached paper.
- **Linen** (`#F2EEE6`): Section backgrounds, card surfaces.
- **Sand** (`#E8E2D5`): Subtle borders, hover states.
- **Warm Border** (`#D5CDBD`): Dividers, card borders.

### Earth Tones
- **Charcoal Ink** (`#2C2C2C`): Primary heading color — warm near-black.
- **Graphite** (`#4A4A4A`): Body text.
- **Stone** (`#7A7068`): Secondary text, captions.
- **Dust** (`#A89F91`): Muted text, placeholders.

### Natural Accents (use ONE, sparingly)
- **Matcha** (`#6B7C5A`): Green from nature — fresh, calm.
- **Clay** (`#9C6B52`): Terracotta warmth — artisan feeling.
- **Indigo** (`#4A5568`): Deep, considered, traditional.
- **Ash** (`#8C8178`): Neutral, pottery-inspired.

### Never Use
- Bright white (#FFFFFF) — too stark, breaks warmth
- Pure black (#000000) — too harsh
- Saturated or neon colors

---

## 3. Typography Rules

### Font Family
- **Display**: `Shippori Mincho` or `Cormorant Garamond` (elegant, refined serifs)
- **Body**: `DM Sans` weight 300, or `Jost` weight 300–400
- **Japanese text**: `Noto Serif JP` for heading, `Noto Sans JP` for body

### Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing |
|------|--------|------|--------|-------------|----------------|
| Brand / Campaign | Cormorant | 80px+ | 300 | 0.9 | -2px |
| Display | Cormorant | 56px | 300–400 | 1.1 | -1px |
| H1 | Cormorant | 40px | 400 | 1.2 | -0.5px |
| H2 | Cormorant | 28px | 400 | 1.3 | 0 |
| H3 | DM Sans | 18px | 400 | 1.4 | 1px (uppercase) |
| Body L | DM Sans | 17px | 300 | 1.9 | 0.3px |
| Body | DM Sans | 15px | 300–400 | 1.85 | 0.2px |
| Caption | DM Sans | 12px | 400 | 1.5 | 1.5px (uppercase) |

### Typography Rules
- Generous line-height (1.8–1.9) — text breathes
- Slight positive letter-spacing on body text (0.2–0.3px) — unhurried
- Wide letter-spacing on small uppercase labels (1.5–2px) — deliberate
- Minimum text on any given screen — say less, mean more

---

## 4. Component Stylings

### Button
```
background: #2C2C2C
color: #FAF8F3
padding: 14px 36px
border-radius: 0px (or 2px — nearly sharp)
border: none
font: DM Sans 12px weight 400 uppercase letter-spacing 3px
hover: background: #4A4A4A
transition: background 300ms ease
```

### Ghost Button
```
background: transparent
color: #2C2C2C
border: 1px solid #2C2C2C
padding: 13px 35px
border-radius: 0px
font: DM Sans 12px weight 400 uppercase letter-spacing 3px
hover: background #2C2C2C, color #FAF8F3
```

### Product / Content Card
```
background: #F2EEE6
border: none (whitespace separates)
padding: 0
Image: full-width, aspect 4:5 or 3:4, natural white background
Content: padding 16px 0
Name: 16px DM Sans weight 300 letter-spacing 0.3px #2C2C2C
Price: 15px DM Sans weight 400 letter-spacing 1px #4A4A4A
Material: 12px weight 400 #7A7068 uppercase letter-spacing 1.5px
Gap between cards: 32px (space is the separator)
```

### Input / Form
```
background: transparent
border: none
border-bottom: 1px solid #D5CDBD
border-radius: 0
padding: 12px 0
font: DM Sans 14px weight 300 letter-spacing 0.3px
color: #2C2C2C
placeholder: #A89F91
focus: border-bottom-color #2C2C2C
```

### Section Divider
```
height: 1px
background: #E8E2D5
margin: 80px 0
width: 60px (short lines — Japanese restraint)
```

---

## 5. Layout Principles

### Spacing
- Section padding: 120px vertical — breathe
- Product grid gutter: 32–40px
- Content max width: 960px (narrower — focused)
- Text block max width: 600px

### Grid Philosophy
- **Intentional asymmetry**: Don't always center. Left-heavy or right-heavy compositions feel more handcrafted
- **Odd-number grids**: 3 or 5 items, not 4 — more natural
- **Full-bleed imagery with white text overlay** for editorial moments
- **Large empty sections** between content — the emptiness communicates value

### Whitespace
- 120px between sections (minimum)
- 60–80px within section between elements
- Never fill space just because it exists

---

## 6. Depth & Elevation

No shadows in Japandi. Depth is created through:
- **Color**: Slightly darker backgrounds (#F2EEE6 vs #FAF8F3)
- **Scale**: Large vs small elements
- **Isolation**: Negative space around important elements

If shadow must be used: `0 2px 4px rgba(44,44,44,0.06)` — barely perceptible.

---

## 7. Do's and Don'ts

### Do
- Use #FAF8F3 (warm ivory) — never pure white
- Apply generous line-height (1.8+) to all body text
- Use wide letter-spacing on small uppercase text
- Serif for emotion (headlines), sans for clarity (UI)
- Break the grid sometimes — perfect symmetry is Western, not Japanese
- Leave space empty intentionally — emptiness is content
- Use natural earth tones only, one accent maximum

### Don't
- Don't use bright or saturated colors
- Don't use drop shadows (harsh, Western)
- Don't center-align everything — left alignment is more natural
- Don't use rounded buttons — 0px or 2px radius only
- Don't add decorative icons or illustrations — restraint is the message

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced section padding 64px, hero 70vh |
| Tablet | 640–1024px | 2-col product grid, 32px gutter |
| Desktop | 1024px+ | 3-col max, 40px gutter, full 120px sections |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:    #FAF8F3
Surface:       #F2EEE6
Border:        #D5CDBD
Heading:       #2C2C2C
Body:          #4A4A4A
Muted:         #7A7068
Accent matcha: #6B7C5A
Button:        #2C2C2C
```

### Example Prompts
- "Create a Japandi minimal hero: ivory background #FAF8F3, max-width 960px. Left: editorial image full-height. Right: top-aligned text. Eyebrow 11px DM Sans uppercase letter-spacing 2px #7A7068. Headline 56px Cormorant Garamond weight 300 letter-spacing -1px #2C2C2C line-height 1.1. Body 17px DM Sans weight 300 letter-spacing 0.3px #4A4A4A line-height 1.9. Button: charcoal #2C2C2C, ivory text, 0px radius, uppercase 12px letter-spacing 3px."

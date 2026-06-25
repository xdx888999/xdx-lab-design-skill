---
version: alpha
name: "Y2K / 2000s Revival"
colors:
  surface: "#F0F4FF"
  on-surface: "#0A0A1A"
  primary: "#00CED1"
  on-primary: "#111111"
  silver: "#C8D0E0"
  baby-blue: "#7EC8E3"
  hot-pink: "#FF69B4"
  lime: "#ADFF2F"
  lavender: "#E6B3FF"
  butter-yellow: "#FFD700"
  chrome-light: "#E8EEF8"
  chrome-mid: "#B8C4D4"
  chrome-dark: "#8090A8"
typography:
  body:
    fontFamily: "Nunito"
rounded:
  none: 20px
  sm: 100px
components:
  chrome-button:
    backgroundColor: "linear-gradient(180deg, #FFFFFF 0%, {colors.silver} 40%, {colors.chrome-dark} 100%)"
    textColor: "#1A1A2E"
    border: "1px solid {colors.chrome-dark}"
    rounded: "100px (pill)"
    padding: "12px 28px"
    typography: "Nunito 15px weight 800"
    shadow: "0 2px 0 {colors.chrome-dark}, 0 4px 12px rgba(0,0,0,0.2)"
    hover: "brightness(1.1)"
  bubblegum-button:
    backgroundColor: "linear-gradient(135deg, {colors.hot-pink}, {colors.lavender})"
    textColor: "#FFFFFF"
    border: "none"
    rounded: "100px"
    padding: "14px 32px"
    typography: "Nunito 16px weight 800"
    shadow: "0 4px 0 #CC4490, 0 4px 20px rgba(255,105,180,0.4)"
    hover: "transform translateY(-2px)"
    active: "transform translateY(2px), box-shadow reduce"
  frosted-plastic-card:
    backgroundColor: "rgba(255,255,255,0.4)"
    backdropFilter: "blur(10px)"
    border: "1px solid rgba(255,255,255,0.7)"
    rounded: "20px"
    shadow: "0 4px 24px rgba(126,200,227,0.3), inset 0 1px 0 rgba(255,255,255,0.8)"
    padding: "24px"
  holographic-badge:
    backgroundColor: "conic-gradient(from 0deg, {colors.hot-pink}, #FF9900, {colors.lime}, {colors.primary}, {colors.baby-blue}, {colors.lavender}, {colors.hot-pink})"
    rounded: "100px"
    padding: "4px 16px"
    typography: "Nunito 12px weight 800 #FFFFFF"
  starsparkle-divider:
    textColor: "alternating {colors.hot-pink} and {colors.baby-blue}"
---

# Design System: Y2K / 2000s Revival
# Y2K 千禧复古风格

> **风格定位**：千禧年的数字乐观主义。银色光泽、像素字体、彩虹渐变、泡泡糖色、CD光晕效果。
> **适用场景**：音乐/流行文化品牌、Z世代时尚、复古趣味 App、节日活动、社交媒体内容
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Y2K design is the visual language of tech optimism at the turn of the millennium — a time when the internet felt new, computers felt magical, and the future was chrome and rainbow. It combines the bubbly plasticity of early web design with the iridescent, metallic aesthetic of CD-ROMs, transparent Nokia phones, and bedazzled flip phones.

The palette is simultaneously pastel and saturated — baby blue and hot pink coexist with silver chrome and holographic rainbow. Everything has a shiny, plastic quality. Fonts are either pixel-retro or bubbly-rounded. The vibe is simultaneously innocent and maximalist.

**Key Characteristics:**
- Iridescent/holographic effects (rainbow gradient on metallic base)
- Chrome/silver surfaces with specular highlights
- Bubblegum palette: baby blue, hot pink, lime green, lavender
- Transparent/frosted plastic UI elements
- Pixel/retro fonts alongside bubbly rounded fonts
- Star and sparkle motifs (✦ ✧ ★)
- Glassmorphism avant la lettre: translucent panels
- Matrix-style digital rain as optional background

---

## 2. Color Palette & Roles

### Foundation
- **White Chrome** (`#F0F4FF`): Background — icy white with blue tint.
- **Silver** (`#C8D0E0`): Metallic surfaces.
- **Deep Space** (`#0A0A1A`): Dark mode Y2K alternative.

### Bubblegum Palette
- **Baby Blue** (`#7EC8E3`): The Y2K blue — soft, saturated.
- **Hot Pink** (`#FF69B4`): Barbie pink — electric.
- **Lime** (`#ADFF2F`): Matrix green / millennium lime.
- **Lavender** (`#E6B3FF`): Soft purple shimmer.
- **Aqua** (`#00CED1`): Teal-cyan — Windows XP vibes.
- **Butter Yellow** (`#FFD700`): Gold without the luxury.

### Chrome/Metallic
- **Chrome Light** (`#E8EEF8`): Lightest metallic.
- **Chrome Mid** (`#B8C4D4`): Metallic mid-tone.
- **Chrome Dark** (`#8090A8`): Shadow on metallic.
- **Holographic** (`conic-gradient`): Rainbow shimmer (see CSS below).

### Holographic CSS
```css
background: conic-gradient(
  from 0deg,
  #FF69B4, #FF9900, #ADFF2F, #00CED1, #7EC8E3, #E6B3FF, #FF69B4
);
```

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Hot Pink | `#FF69B4` | `#F0F4FF` | 2.4:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Bubbly Display**: `Nunito` weight 800–900 (rounded, friendly)
- **Pixel Alternative**: `VT323` or `Press Start 2P` (retro digital)
- **Chrome Bold**: `Exo 2` weight 800 with metallic gradient
- **Body**: `Nunito` weight 400 or `Poppins` weight 400

### Hierarchy

| Role | Family | Size | Weight | Color/Effect |
|------|--------|------|--------|--------------|
| Display | Nunito | 72px | 900 | Chrome gradient or holographic |
| H1 | Nunito | 48px | 800 | Hot pink or chrome |
| H2 | Nunito | 32px | 700 | Baby blue or lavender |
| H3 | Poppins | 20px | 600 | #FF69B4 |
| Body | Poppins | 16px | 400 | #1A1A2E or white |
| Pixel Label | VT323 | 18px | 400 | Lime #ADFF2F or pink |

---

## 4. Component Stylings

### Chrome Button
```
background: linear-gradient(180deg, #FFFFFF 0%, #C8D0E0 40%, #8090A8 100%)
color: #1A1A2E
border: 1px solid #8090A8
border-radius: 100px (pill)
padding: 12px 28px
font: Nunito 15px weight 800
box-shadow: 0 2px 0 #8090A8, 0 4px 12px rgba(0,0,0,0.2)
hover: brightness(1.1)
```

### Bubblegum Button
```
background: linear-gradient(135deg, #FF69B4, #E6B3FF)
color: #FFFFFF
border: none
border-radius: 100px
padding: 14px 32px
font: Nunito 16px weight 800
box-shadow: 0 4px 0 #CC4490, 0 4px 20px rgba(255,105,180,0.4)
hover: transform translateY(-2px)
active: transform translateY(2px), box-shadow reduce
```

### Frosted Plastic Card
```
background: rgba(255,255,255,0.4)
backdrop-filter: blur(10px)
border: 1px solid rgba(255,255,255,0.7)
border-radius: 20px
box-shadow: 0 4px 24px rgba(126,200,227,0.3), inset 0 1px 0 rgba(255,255,255,0.8)
padding: 24px
```

### Holographic Badge
```
background: conic-gradient(from 0deg, #FF69B4, #FF9900, #ADFF2F, #00CED1, #7EC8E3, #E6B3FF, #FF69B4)
border-radius: 100px
padding: 4px 16px
font: Nunito 12px weight 800 #FFFFFF
text-shadow: 0 1px 2px rgba(0,0,0,0.3)
animation: rotate-hue 3s linear infinite
```

### Star/Sparkle Divider
```
Text or SVG: ✦ ✧ ✦ ✧ ✦
Color: alternating #FF69B4 and #7EC8E3
Spacing: 12px between elements
Font-size: 16px
```

---

## 5. Layout & Prompt Guide

### Layout Patterns
- Pill-shaped everything (100px border-radius)
- Translucent frosted panels over colorful backgrounds
- Layered star/sparkle decorations at card edges
- Gradient mesh backgrounds: blobs of baby blue + hot pink + lavender

### Quick Color Reference
```
Background:   #F0F4FF
Baby blue:    #7EC8E3
Hot pink:     #FF69B4
Lime:         #ADFF2F
Lavender:     #E6B3FF
Chrome light: #E8EEF8
Chrome dark:  #8090A8
```

### Example Prompts
- "Design a Y2K-style hero: icy white #F0F4FF background with gradient mesh blobs (baby blue, hot pink, lavender, 40% opacity each). Headline 72px Nunito weight 900 with chrome gradient (white to #C8D0E0 to #8090A8). Sparkle decorations ✦ in hot pink. Primary CTA: chrome pill button (linear-gradient #FFFFFF to #8090A8, pill radius, 2px solid bottom #8090A8). Secondary: bubblegum gradient pill (#FF69B4 to #E6B3FF). Frosted card panel: rgba(255,255,255,0.4) blur backdrop."

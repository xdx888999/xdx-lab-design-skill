---
version: alpha
name: "Synthwave / Retrowave"
colors:
  surface: "#0D0221"
  surface-variant: "#280845"
  on-surface: "#FFE640"
  primary: "#FF2D7F"
  on-primary: "#111111"
  accent: "#00F5FF"
  night: "#1A0533"
  mid: "#3D1266"
  purple-beam: "#B44BFF"
  chrome-white: "#E8E0FF"
typography:
  display:
    fontFamily: "Orbitron"
  alternative:
    fontFamily: "Audiowide"
  body:
    fontFamily: "Rajdhani"
rounded:
  none: 4px
  sm: 8px
components:
  neon-button:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    border: "2px solid {colors.primary}"
    shadow: "0 0 10px {colors.primary}, inset 0 0 10px rgba(255,45,127,0.1)"
    padding: "14px 32px, border-radius: 4px"
    typography: "Orbitron 13px weight 600 uppercase letter-spacing 2px"
    hover: "background rgba(255,45,127,0.15), box-shadow intensify"
  filled-neon-button:
    backgroundColor: "linear-gradient(135deg, {colors.primary}, {colors.purple-beam})"
    textColor: "#FFFFFF, border: none"
    shadow: "0 0 20px rgba(255,45,127,0.5)"
    padding: "14px 32px, border-radius: 4px"
    typography: "Orbitron 13px weight 600 uppercase letter-spacing 2px"
  card-panel:
    backgroundColor: "rgba(26,5,51,0.8) (semi-transparent deep purple)"
    border: "1px solid rgba(180,75,255,0.4)"
    rounded: "8px"
    shadow: "0 0 20px rgba(180,75,255,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
    padding: "24px"
  horizon-line-divider:
    height: "2px"
    backgroundColor: "linear-gradient(90deg, transparent, {colors.primary}, {colors.purple-beam}, transparent)"
    shadow: "0 0 10px {colors.primary}"
---

# Design System: Synthwave / Retrowave
# 合成波/复古波风格

> **风格定位**：80年代赛博朋克 + 霓虹余晖。深紫夜空、网格透视、激光粉蓝、chrome字体。
> **适用场景**：音乐/游戏品牌、DJ/电音活动、科技复古产品、夜间娱乐 App、游戏着陆页
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Synthwave is nostalgia rendered in neon. It is the 1980s as remembered through 2020s eyes — not the actual 80s, but the version we dreamed it was. Purple skies, chrome horizons, grid-lined landscapes receding to infinity, and cities glowing in hot pink and electric blue.

The aesthetic draws from the visual language of VHS-era sci-fi, arcade games, and the era when computing felt like magic. It is simultaneously retro and futuristic — retrowave.

**Key Characteristics:**
- Deep purple/black background (#0D0221 or #1A0533)
- Neon signature colors: hot pink (#FF2D7F), electric cyan (#00F5FF), purple (#B44BFF)
- Perspective grid floor (receding lines in cyan/purple)
- Glow effects on everything — box-shadow and text-shadow with neon colors
- Chrome/metallic typography with gradient treatment
- Sun setting between mountains (common motif — usable as section divider illustration)
- Scanline texture effect (optional, for authenticity)

---

## 2. Color Palette & Roles

### Background Scale
- **Void** (`#0D0221`): Deepest background — space black-purple.
- **Night** (`#1A0533`): Primary app/page background.
- **Deep** (`#280845`): Card surfaces, elevated panels.
- **Mid** (`#3D1266`): Hover states, borders.

### Neon Palette (the signature)
- **Hot Pink** (`#FF2D7F`): Primary accent — main CTA, highlights.
- **Electric Cyan** (`#00F5FF`): Secondary accent — grid lines, links.
- **Purple Beam** (`#B44BFF`): Tertiary — gradients, secondary elements.
- **Laser Yellow** (`#FFE640`): Alert, rare highlight.
- **Chrome White** (`#E8E0FF`): Primary text — slightly violet-tinted white.

### Glow Values (critical for the aesthetic)
- Pink glow: `0 0 10px #FF2D7F, 0 0 20px #FF2D7F, 0 0 40px rgba(255,45,127,0.5)`
- Cyan glow: `0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 40px rgba(0,245,255,0.5)`
- Purple glow: `0 0 10px #B44BFF, 0 0 30px rgba(180,75,255,0.5)`

### Gradients (use liberally)
- Sky gradient: `linear-gradient(180deg, #0D0221 0%, #1A0533 40%, #4A1A7E 70%, #FF2D7F 100%)`
- Chrome text: `linear-gradient(180deg, #FFFFFF 0%, #B44BFF 50%, #00F5FF 100%)`
- Horizon line: `linear-gradient(90deg, transparent, #FF2D7F, transparent)`

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Night | `#1A0533` | `#0D0221` | 1.1:1 | FAIL |
| Hot Pink | `#FF2D7F` | `#0D0221` | 5.7:1 | AA |
| Electric Cyan | `#00F5FF` | `#0D0221` | 14.8:1 | AAA |
| Purple Beam | `#B44BFF` | `#0D0221` | 5.1:1 | AA |
| Chrome White | `#E8E0FF` | `#0D0221` | 15.8:1 | AAA |

## 3. Typography Rules

### Font Family
- **Display**: `Orbitron` (the quintessential synthwave font — geometric, futuristic)
- **Alternative**: `Audiowide`, `Exo 2`, `Rajdhani`
- **Body**: `Rajdhani` weight 400 or `Exo 2` weight 300
- **Chrome effect**: Any heavy font with gradient text CSS

### Hierarchy

| Role | Family | Size | Weight | Color/Effect |
|------|--------|------|--------|--------------|
| Hero | Orbitron | 72px | 700 | Chrome gradient text |
| H1 | Orbitron | 48px | 700 | #E8E0FF with pink glow text-shadow |
| H2 | Orbitron | 32px | 600 | #00F5FF |
| H3 | Exo 2 | 22px | 500 | #B44BFF |
| Body | Rajdhani | 16px | 400 | rgba(232,224,255,0.85) |
| Label | Orbitron | 11px | 500 | #FF2D7F uppercase letter-spacing 3px |

### Chrome Text Effect
```css
background: linear-gradient(180deg, #FFFFFF 0%, #B44BFF 50%, #00F5FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: none; /* gradient handles it */
```

### Neon Text Glow
```css
color: #00F5FF;
text-shadow: 0 0 7px #00F5FF, 0 0 10px #00F5FF, 0 0 21px #00F5FF;
```

---

## 4. Component Stylings

### Neon Button
```
background: transparent
color: #FF2D7F
border: 2px solid #FF2D7F
box-shadow: 0 0 10px #FF2D7F, inset 0 0 10px rgba(255,45,127,0.1)
padding: 14px 32px, border-radius: 4px
font: Orbitron 13px weight 600 uppercase letter-spacing 2px
hover: background rgba(255,45,127,0.15), box-shadow intensify
```

### Filled Neon Button
```
background: linear-gradient(135deg, #FF2D7F, #B44BFF)
color: #FFFFFF, border: none
box-shadow: 0 0 20px rgba(255,45,127,0.5)
padding: 14px 32px, border-radius: 4px
font: Orbitron 13px weight 600 uppercase letter-spacing 2px
```

### Card / Panel
```
background: rgba(26,5,51,0.8) (semi-transparent deep purple)
border: 1px solid rgba(180,75,255,0.4)
border-radius: 8px
box-shadow: 0 0 20px rgba(180,75,255,0.2), inset 0 1px 0 rgba(255,255,255,0.05)
padding: 24px
```

### Grid Floor Element (background decoration)
```
CSS perspective grid:
background-image:
  linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px);
background-size: 60px 60px;
transform: perspective(500px) rotateX(60deg);
transform-origin: center bottom;
opacity: 0.4;
```

### Horizon Line Divider
```
height: 2px
background: linear-gradient(90deg, transparent, #FF2D7F, #B44BFF, transparent)
box-shadow: 0 0 10px #FF2D7F
margin: 64px 0
```

---

## 5. Layout & Prompt Guide

### Layout Patterns
- Hero: dark sky gradient bg + chrome headline + perspective grid below
- Section divider: horizon glow line
- Cards: dark glass panels with neon borders

### Quick Color Reference
```
Background:    #1A0533
Surface:       #280845
Hot pink:      #FF2D7F
Cyan:          #00F5FF
Purple:        #B44BFF
Text:          #E8E0FF
Pink glow:     0 0 10px #FF2D7F, 0 0 20px #FF2D7F
Cyan glow:     0 0 10px #00F5FF, 0 0 20px #00F5FF
```

### Example Prompts
- "Build a synthwave hero: #1A0533 background with radial gradient lighter at center. Bottom: perspective grid (cyan rgba(0,245,255,0.3) lines, rotateX 60deg). Center: chrome gradient text 72px Orbitron weight 700 (white to purple to cyan). Sub-heading 22px Exo 2 #00F5FF with cyan text-shadow glow. Neon pink button: transparent bg, 2px solid #FF2D7F border, box-shadow glow. Pink horizon line above grid."

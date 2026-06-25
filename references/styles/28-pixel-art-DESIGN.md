---
version: alpha
name: "Pixel Art / Retro Gaming"
colors:
  surface: "#0D0D0D"
  on-surface: "#FFFFFF"
  primary: "#00FF41"
  on-primary: "#111111"
  error: "#FF2020"
  dark-screen: "#1A1A2E"
  nes-black: "#000000"
  pixel-blue: "#0074FF"
  coin-yellow: "#FFD700"
typography:
  share-tech-mono:
    fontSize: 14px
    fontWeight: 400
rounded:
  none: 0px
components:
  button:
    backgroundColor: "{colors.pixel-blue} (or any palette color)"
    textColor: "{colors.on-surface}"
    padding: "16px 24px"
    rounded: "0px (always 0 in pixel style)"
    border: "4px solid {colors.on-surface} (thick pixel border)"
    typography: "Press Start 2P 12px"
    shadow: "4px 4px 0 {colors.nes-black} (offset shadow — no blur)"
    hover: "box-shadow: 6px 6px 0 {colors.nes-black}, transform none"
    active: "box-shadow: 2px 2px 0 {colors.nes-black}, transform: translate(2px, 2px)"
  card:
    backgroundColor: "{colors.dark-screen}"
    border: "4px solid {colors.on-surface}"
    rounded: "0px"
    padding: "16px"
    shadow: "4px 4px 0 {colors.nes-black}"
    hover: "box-shadow: 6px 6px 0 {colors.nes-black}"
  score-stats-row:
    typography: "Press Start 2P 12px {colors.on-surface}"
---

# Design System: Pixel Art / Retro Gaming
# 像素艺术/复古游戏风格

> **风格定位**：8-bit/16-bit 复古游戏美学。像素字体、方块图形、有限调色板、街机怀旧。
> **适用场景**：独立游戏、游戏周边、复古主题产品、开发者个人网站、NFT像素艺术、游戏媒体
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Pixel Art design celebrates the constraints of early computing as an aesthetic virtue. When the NES, Atari, and early arcade machines could only display a limited number of colors and pixels, artists developed extraordinarily expressive visual languages within those limits. Pixel art is precision at the smallest unit.

Modern pixel art design applies these principles to the web: pixelated fonts, grid-locked layouts, limited color palettes, and the characteristic "chunky" feel of low-resolution graphics rendered at modern scale.

**Key Characteristics:**
- Pixel/bitmap fonts (no anti-aliasing)
- Limited color palette (8–16 colors maximum, like classic consoles)
- `image-rendering: pixelated` for crisp pixel art scaling
- Hard edges everywhere — no border-radius, no anti-aliasing
- 8px or 16px grid (all elements snap to this grid)
- Dark background with bright pixel elements (Game Boy or arcade style)
- Retro UI elements: health bars, coin counters, press start text

---

## 2. Color Palette & Roles

### NES-Inspired Palette
- **Void** (`#0D0D0D`): Background.
- **Dark Screen** (`#1A1A2E`): App background (dark blue-black like a monitor).
- **NES Black** (`#000000`): Ink black.
- **Screen Green** (`#00FF41`): Retro terminal/Matrix green.
- **Pixel Blue** (`#0074FF`): NES blue.
- **Pixel Red** (`#FF2020`): Alert, enemies, danger.
- **Coin Yellow** (`#FFD700`): Collectible, achievement.
- **White** (`#FFFFFF`): Highlight, text.

### Game Boy 4-Color Palette (strict mode)
- `#0F380F` (darkest)
- `#306230`
- `#8BAC0F`
- `#9BBC0F` (lightest)

### Arcade Bright (more colorful variant)
- Background: `#1A1A2E`
- Accent 1: `#E94560` (hot pink)
- Accent 2: `#0F3460` (deep blue)
- Accent 3: `#533483` (purple)
- Highlight: `#FFFFFF`

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| NES Black | `#000000` | `#0D0D0D` | 1.1:1 | FAIL |
| White | `#FFFFFF` | `#0D0D0D` | 19.4:1 | AAA |

## 3. Typography Rules

### Font Family
- **Primary (pixel)**: `Press Start 2P` (8-bit, Google Fonts, perfect)
- **Pixel alternative**: `VT323` (less chunky, easier to read at small sizes)
- **Body fallback**: `Share Tech Mono` (monospace, retro feel without pure pixels)

### Hierarchy

| Role | Family | Size | Notes |
|------|--------|------|-------|
| Game Title | Press Start 2P | 32–48px | Chunky headline |
| H1 | Press Start 2P | 24px | |
| H2 | Press Start 2P | 16px | |
| Menu Item | Press Start 2P | 12px | navigation |
| Body | VT323 | 20px | VT323 needs larger size |
| Data | Share Tech Mono | 14px | For numbers, scores |

### Typography Rules
- **image-rendering: pixelated** on pixel font elements (prevents blur on scale)
- **line-height 2** for Press Start 2P (it's very dense)
- **DO NOT use anti-aliasing** — pixels must be sharp
- All text in pixels: align to 8px grid

---

## 4. Component Stylings

### Button (no border-radius ever)
```
background: #0074FF (or any palette color)
color: #FFFFFF
padding: 16px 24px
border-radius: 0px (always 0 in pixel style)
border: 4px solid #FFFFFF (thick pixel border)
font: Press Start 2P 12px
box-shadow: 4px 4px 0 #000000 (offset shadow — no blur)
hover: box-shadow: 6px 6px 0 #000000, transform none
active: box-shadow: 2px 2px 0 #000000, transform: translate(2px, 2px)
```

### Health/Progress Bar
```
Container: 0px radius, 4px solid white border, 200px × 24px
Fill: pixel green #00FF41 (or red for danger)
Bar segments: optional vertical dividers every 20px (segmented HP)
Label: Press Start 2P 8px white "HP" left of bar
```

### Card (Inventory Slot Style)
```
background: #1A1A2E
border: 4px solid #FFFFFF
border-radius: 0px
padding: 16px
box-shadow: 4px 4px 0 #000000
hover: box-shadow: 6px 6px 0 #000000
```

### Pixel Art Display
```css
image-rendering: pixelated;
image-rendering: crisp-edges;
-ms-interpolation-mode: nearest-neighbor;
/* Scale up small pixel art without blurring */
```

### Blinking Cursor
```css
.cursor::after {
  content: '█';
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

### Score / Stats Row
```
font: Press Start 2P 12px #FFFFFF
Score label: #FFD700 (gold)
Value: #FFFFFF
Layout: SCORE 009500 | LIVES ♥♥♥ | LEVEL 04
border-bottom: 2px solid #FFFFFF
```

---

## 5. Layout & Prompt Guide

### Grid
- 8px base grid — snap everything
- No fractional pixels
- Elements align to 8px, 16px, 32px, 64px boundaries
- Inspired by sprite sheets: content in fixed-size "tiles"

### Quick Color Reference
```
Background:  #1A1A2E
Green:       #00FF41
Blue:        #0074FF
Red:         #FF2020
Yellow:      #FFD700
White:       #FFFFFF
Black:       #000000
Offset shadow: 4px 4px 0 #000000
```

### Example Prompts
- "Build a pixel art hero section: #1A1A2E background. Score bar at top: Press Start 2P 12px, 'PRESS START' in #FFFFFF, coin icon ★ in #FFD700. Hero headline: 32px Press Start 2P #FFFFFF. Sub-text: 16px VT323 #00FF41. CTA button: #0074FF bg, 0px radius, 4px solid white border, '4px 4px 0 #000000' offset shadow. Health bar: 200px wide, 4px white border, green fill #00FF41."

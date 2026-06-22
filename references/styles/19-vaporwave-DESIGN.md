# Design System: Vaporwave / Aesthetic
# 蒸汽波/复古赛博风格

> **风格定位**：粉紫色调、大理石柱、日落海面、像素棕榈树。互联网亚文化的审美极端。
> **适用场景**：音乐专辑封面、艺术项目、创意品牌、社交内容、NFT、另类网站、夜生活品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Vaporwave is the aesthetic of a fictional corporate nostalgia — the 1980s and early 90s as filtered through Japanese consumer culture, early internet aesthetics, and muzak. It is simultaneously ironic and sincere. The color palette feels like a sunset reflecting off a marble shopping mall floor.

The visual world includes: Greek busts in digital voids, Windows 95 error boxes, Japanese katakana, palm trees at sunset, VHS distortion, and endless gradients of hot pink fading into deep purple. Everything is slightly wrong, slightly dreamlike, and deeply satisfying.

**Key Characteristics:**
- Gradient-heavy: hot pink to purple to teal — always on dark backgrounds
- Background: deep purple-black (#1A0533) or dark teal (#0D2137)
- Primary colors: hot pink (#FF71CE), lavender (#B967FF), sky (#01CDFE)
- Mint green (#05FFA1) as secondary accent
- Pixel art elements: sun, palm trees, grid
- VHS/CRT aesthetic: scan lines, slight chromatic aberration
- Japanese text (Japanese characters as decorative elements, not for meaning)
- Everything feels like it's underwater or in a dream

---

## 2. Color Palette & Roles

### Background
- **Void Purple** (`#1A0533`): Primary background.
- **Deep Teal** (`#0D2137`): Alternative dark (ocean vaporwave).
- **Mid Purple** (`#280845`): Cards, elevated surfaces.

### The Vaporwave 5
- **Hot Pink** (`#FF71CE`): Primary accent, glow.
- **Lavender** (`#B967FF`): Secondary accent, gradient partner.
- **Sky Blue** (`#01CDFE`): Tertiary, cool accent.
- **Mint** (`#05FFA1`): Fresh pop, highlight.
- **Yellow** (`#FFFB96`): Warm glow, star highlights.

### Gradients (essential)
- Sky gradient: `linear-gradient(180deg, #FF71CE 0%, #B967FF 50%, #01CDFE 100%)`
- Sunset: `linear-gradient(180deg, #FF71CE 0%, #FF9E64 50%, #B967FF 100%)`
- Ocean: `linear-gradient(180deg, #1A0533 0%, #0D2137 50%, #01CDFE 100%)`

### Glow Values
- Pink: `0 0 10px #FF71CE, 0 0 30px rgba(255,113,206,0.5)`
- Blue: `0 0 10px #01CDFE, 0 0 30px rgba(1,205,254,0.5)`
- Mint: `0 0 10px #05FFA1, 0 0 30px rgba(5,255,161,0.5)`

---

## 3. Typography Rules

### Font Family
- **Primary**: `Neon` feel — `Boogaloo`, `Righteous`, `Orbitron`
- **Pixel aesthetic**: `VT323` (retro digital) or `Press Start 2P`
- **Japanese decorative**: Noto Sans JP for katakana elements
- **Body**: `Comfortaa` weight 300 or `Poppins`

### Key Typography Effects

| Role | Font | Size | Color/Effect |
|------|------|------|--------------|
| Hero | Orbitron | 72px | Sky gradient text |
| Neon title | Righteous | 48px | Pink with glow text-shadow |
| Pixel header | VT323 | 36px | Mint #05FFA1 |
| Katakana deco | Noto Sans JP | 24px | Lavender 50% opacity |
| Body | Comfortaa | 16px | rgba(255,255,255,0.85) |

---

## 4. Component Stylings

### Neon Button
```
background: transparent
color: #FF71CE
border: 2px solid #FF71CE
box-shadow: 0 0 10px #FF71CE, inset 0 0 10px rgba(255,113,206,0.1)
padding: 12px 28px, border-radius: 4px
font: Orbitron 13px weight 600 uppercase letter-spacing 3px
hover: color #B967FF, border-color #B967FF, box-shadow update
```

### Gradient Card
```
background: linear-gradient(135deg, rgba(255,113,206,0.1) 0%, rgba(185,103,255,0.1) 50%, rgba(1,205,254,0.1) 100%)
border: 1px solid rgba(185,103,255,0.4)
border-radius: 8px
padding: 24px
box-shadow: 0 0 30px rgba(185,103,255,0.2)
```

### Pixel Sun (SVG decoration)
```
Simple SVG: circle with triangular rays
Fill: linear-gradient (pink to yellow)
Filter: drop-shadow(0 0 10px #FF71CE)
Optional: horizontal scan lines crossing sun half
```

### Grid Floor Element
```
Same as synthwave but in pink/purple tones:
background-image: linear-gradient(rgba(185,103,255,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(185,103,255,0.4) 1px, transparent 1px);
transform: perspective(400px) rotateX(60deg);
```

### VHS/CRT Overlay
```css
.vhs-overlay {
  background: repeating-linear-gradient(
    0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px
  );
  pointer-events: none;
  position: fixed; inset: 0; z-index: 100;
}
```

---

## 5. Layout & Prompt Guide

### Quick Color Reference
```
Background:  #1A0533
Hot pink:    #FF71CE
Lavender:    #B967FF
Sky blue:    #01CDFE
Mint:        #05FFA1
Grid purple: rgba(185,103,255,0.4)
```

### Example Prompts
- "Build a vaporwave-style page: #1A0533 background. Top: gradient sky strip (pink #FF71CE to purple #B967FF). Perspective grid floor (purple rgba lines, rotateX 60deg). Pixel sun SVG (pink-yellow gradient, pink glow). Hero text 72px Orbitron sky-gradient color. Neon outline button: transparent bg, 2px solid #FF71CE, pink glow box-shadow. VHS scan-line overlay (repeating-linear-gradient, very subtle). Japanese katakana decorative text in lavender 40% opacity."

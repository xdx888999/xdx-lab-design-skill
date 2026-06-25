---
version: alpha
name: "Cyberpunk"
colors:
  surface: "#0A0A0F"
  surface-variant: "#1A1A24"
  on-surface: "#E0E0F0"
  primary: "#FFE000"
  on-primary: "#111111"
  accent: "#00FFD1"
  error: "#FF003C"
  urban-dark: "#111118"
  grid: "#22222E"
  neon-orange: "#FF6B00"
typography:
  rajdhani:
    fontFamily: "Rajdhani"
    fontSize: 28px
    fontWeight: 600
  rajdhani:
    fontFamily: "Rajdhani"
    fontSize: 12px
    fontWeight: 700
rounded:
  none: 0px
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    padding: "12px 28px"
    rounded: "0px"
    border: "none"
    typography: "Rajdhani 15px weight 700 uppercase letter-spacing 2px"
    hover: "background #FFD000, box-shadow 0 0 20px rgba(255,224,0,0.5)"
    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)"
  dangeralert-button:
    backgroundColor: "transparent"
    textColor: "{colors.error}"
    border: "1px solid {colors.error}"
    shadow: "0 0 10px rgba(255,0,60,0.3)"
    padding: "12px 28px, border-radius: 0px"
    typography: "Rajdhani 15px weight 700 uppercase letter-spacing 2px"
    hover: "background rgba(255,0,60,0.15)"
  panel-card:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid rgba(255,224,0,0.2)"
    rounded: "0px"
    padding: "24px"
  hazard-stripe:
    backgroundColor: "repeating-linear-gradient("
    height: "6px"
    width: "100%"
  glitch-text-effect:
    textColor: "#0044FF;"
    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%);"
  terminal-block:
    backgroundColor: "rgba(0,255,209,0.05)"
    border: "1px solid rgba(0,255,209,0.3)"
    typography: "Share Tech Mono 13px"
    textColor: "{colors.accent}"
    padding: "16px"
    rounded: "0px"
---

# Design System: Cyberpunk
# 赛博朋克风格

> **风格定位**：高科技、低生活、霓虹反乌托邦。黄色+青色警示线、故障艺术、破碎字体、未来都市暗语。
> **适用场景**：游戏 UI、科幻电影宣传、黑客/安全产品、赛博朋克游戏、NFT、暗网主题产品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Cyberpunk is the aesthetic of dystopia made beautiful. High technology coexists with social decay. The visual language is aggressive, layered, and deliberately broken — glitch effects, warning stripes, neon on concrete, chrome on rust.

Inspired by Blade Runner, Ghost in the Shell, and Cyberpunk 2077, this design system communicates danger, transgression, and power. Nothing is clean. Everything has been modified, hacked, or repurposed. The design itself looks like it's been through a system breach.

**Key Characteristics:**
- Near-black background (#0A0A0F) with urban texture
- Warning yellow (#FFE000) and toxic cyan (#00FFD1) as primary accents
- Red system-alert (#FF003C) for critical elements
- Glitch effects: RGB color split, horizontal scan distortion
- Warning hazard stripes (diagonal yellow/black)
- Angular, condensed typography (sharp, aggressive)
- Exposed grid lines, technical readouts, terminal aesthetics

---

## 2. Color Palette & Roles

### Background
- **Void Black** (`#0A0A0F`): Deepest — full page backgrounds.
- **Urban Dark** (`#111118`): Primary surface.
- **Concrete** (`#1A1A24`): Card backgrounds, panels.
- **Grid** (`#22222E`): Elevated surfaces.
- **Border** (`rgba(255,224,0,0.2)`): Default yellow-tinted borders.

### Neon Accents
- **Warning Yellow** (`#FFE000`): Primary CTA, warning elements, the Cyberpunk 2077 signature.
- **Toxic Cyan** (`#00FFD1`): Secondary accent — tech readouts, links.
- **Alarm Red** (`#FF003C`): System alert, error, critical actions.
- **Neon Orange** (`#FF6B00`): Tertiary energy.
- **Ghost White** (`#E0E0F0`): Primary text — cool-tinted near-white.

### Glitch Colors (for glitch effect overlays)
- Red channel: `#FF0033` offset -2px
- Green channel: `#00FF88` offset 0
- Blue channel: `#0044FF` offset +2px

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Urban Dark | `#111118` | `#0A0A0F` | 1.1:1 | FAIL |
| Warning Yellow | `#FFE000` | `#0A0A0F` | 15:1 | AAA |
| Toxic Cyan | `#00FFD1` | `#0A0A0F` | 15.3:1 | AAA |
| Ghost White | `#E0E0F0` | `#0A0A0F` | 15.1:1 | AAA |

## 3. Typography Rules

### Font Family
- **Display**: `Rajdhani` weight 700 or `Bebas Neue` (condensed, aggressive)
- **Alternative**: `Oxanium`, `Chakra Petch`
- **Terminal/Code**: `Share Tech Mono` or `JetBrains Mono`
- **Body**: `Rajdhani` weight 400 or `Exo 2`

### Hierarchy

| Role | Family | Size | Weight | Color | Notes |
|------|--------|------|--------|-------|-------|
| System Header | Rajdhani | 80px | 700 | #FFE000 | All caps, glitch variant |
| Display | Rajdhani | 56px | 700 | #E0E0F0 | Uppercase |
| H1 | Bebas Neue | 48px | 400 | #E0E0F0 | |
| H2 | Rajdhani | 28px | 600 | #00FFD1 | |
| H3 | Rajdhani | 20px | 600 | #FFE000 | |
| Body | Rajdhani | 16px | 400 | rgba(224,224,240,0.8) | |
| Terminal | Share Tech Mono | 13px | 400 | #00FFD1 | Green terminal text |
| Warning | Rajdhani | 12px | 700 | #FFE000 | All caps, 2px tracking |

---

## 4. Component Stylings

### Primary Button
```
background: #FFE000
color: #0A0A0F
padding: 12px 28px
border-radius: 0px
border: none
font: Rajdhani 15px weight 700 uppercase letter-spacing 2px
hover: background #FFD000, box-shadow 0 0 20px rgba(255,224,0,0.5)
clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)
(angled corners — cyberpunk signature)
```

### Danger/Alert Button
```
background: transparent
color: #FF003C
border: 1px solid #FF003C
box-shadow: 0 0 10px rgba(255,0,60,0.3)
padding: 12px 28px, border-radius: 0px
font: Rajdhani 15px weight 700 uppercase letter-spacing 2px
hover: background rgba(255,0,60,0.15)
```

### Panel / Card
```
background: #1A1A24
border: 1px solid rgba(255,224,0,0.2)
border-top: 2px solid #FFE000 (yellow top accent line)
border-radius: 0px
padding: 24px
corner clip: clip-path polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))
```

### Hazard Stripe (decorative/structural)
```
background: repeating-linear-gradient(
  -45deg,
  #FFE000 0px, #FFE000 10px,
  #0A0A0F 10px, #0A0A0F 20px
)
height: 6px
width: 100%
```

### Glitch Text Effect
```css
.glitch {
  position: relative;
  color: #E0E0F0;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  color: #FF0033;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  animation: glitch-top 2s infinite;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  color: #0044FF;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  animation: glitch-bottom 2s infinite;
}
```

### Terminal Block
```
background: rgba(0,255,209,0.05)
border: 1px solid rgba(0,255,209,0.3)
border-left: 3px solid #00FFD1
font: Share Tech Mono 13px
color: #00FFD1
padding: 16px
border-radius: 0px
prefix: ">" cursor blink
```

---

## 5. Layout & Prompt Guide

### Layout Patterns
- Asymmetric angular layouts — nothing is perfectly rectangular
- `clip-path` to create angular cuts on cards and sections
- Overlapping elements — layers suggest hacking, data overflow
- Scan line overlay: `repeating-linear-gradient(transparent 0px, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)` — subtle TV scanlines

### Quick Color Reference
```
Background:     #0A0A0F
Surface:        #1A1A24
Warning yellow: #FFE000
Toxic cyan:     #00FFD1
Alarm red:      #FF003C
Text:           #E0E0F0
Border:         rgba(255,224,0,0.2)
```

### Example Prompts
- "Create a cyberpunk UI panel: #1A1A24 background, clip-path angled corners (12px cut), 2px solid #FFE000 top border, 1px solid rgba(255,224,0,0.2) other sides. Header: 28px Rajdhani weight 700 #00FFD1 uppercase. Hazard stripe separator (diagonal yellow/black 6px). Content: 14px Rajdhani #E0E0F0. Yellow #FFE000 button with clip-path angled shape."

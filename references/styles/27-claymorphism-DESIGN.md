---
version: alpha
name: "Claymorphism / Clay UI"
colors:
  surface: "#F7F5FF"
  on-surface: "#8B5CF6"
  primary: "#3D8EFF"
  on-primary: "#111111"
  accent: "#FF4D8F"
  success: "#2DCA72"
  clay-orange: "#FF7A3D"
  clay-yellow: "#FFD600"
  clay-teal: "#00C9B8"
typography:
  h2:
    fontFamily: "Nunito"
    fontSize: 28px
    fontWeight: 700
rounded:
  none: 16px
  sm: 20px
  md: 28px
  lg: 100px
components:
  clay-button:
    backgroundColor: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%), {colors.primary};"
    textColor: "#FFFFFF;"
    padding: "14px 28px;"
    rounded: "16px;"
    border: "3px solid #1A6FE0; /* darker outline */"
    typography: "Nunito 16px weight 700;"
    hover: "transform translateY(-2px);"
    shadow: "0 4px 0 #1A6FE0, 0 6px 12px rgba(61,142,255,0.3);"
    active: "transform translateY(4px);"
  clay-card:
    backgroundColor: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 20%), #FFFFFF;"
    rounded: "28px;"
    border: "3px solid #E0E0F0;"
    padding: "28px;"
  clay-icon-button:
    width: "64px; height: 64px;"
    rounded: "20px;"
    backgroundColor: "{colors.primary};"
    border: "3px solid #1A6FE0;"
    shadow: "0 6px 0 #1A6FE0, 0 8px 16px rgba(61,142,255,0.3);"
  clay-toggle:
    backgroundColor: "{colors.success};"
    border: "3px solid #1AA558;"
    shadow: "inset 0 2px 0 rgba(255,255,255,0.3), 0 4px 0 #1AA558;"
    rounded: "100px;"
  clay-input:
    backgroundColor: "{colors.surface};"
    border: "3px solid #D4D0FF;"
    rounded: "16px;"
    shadow: "inset 0 4px 8px rgba(0,0,0,0.06); /* recessed — not raised */"
    padding: "14px 16px;"
    typography: "Nunito 15px weight 500;"
    focus: "border-color {colors.on-surface}; box-shadow: inset 0 4px 8px rgba(0,0,0,0.06), 0 0 0 4px rgba(139,92,246,0.15);"
---

# Design System: Claymorphism / Clay UI
# 黏土形态主义风格

> **风格定位**：3D膨胀质感、橡皮泥触感、色彩饱和、圆润可触。2022年兴起的新拟物主义。
> **适用场景**：创意 App、游戏化产品、儿童/青少年产品、潮流品牌、NFT、创意工具
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Claymorphism is the design style that makes everything look like it's made of colorful modeling clay — inflated, soft, tactile, and slightly 3D. It emerged as a playful counter to flat design, combining the depth cues of neumorphism with vibrant, saturated colors and exaggerated roundness.

The key visual trick: elements look like they're resting on or emerging from a soft colored surface. Thick colored outlines, colored inset shadows, and large border-radius values create the illusion of physical depth without the photorealism of skeuomorphism.

**Key Characteristics:**
- Vibrant, saturated palette (not pastel — true saturation)
- Large border-radius (20–32px minimum, often more)
- Colored inner shadow (not drop shadow — inset bottom shadow)
- Thick colored outline/border (2–4px)
- Elements appear inflated/puffy
- Soft ambient shadow in the element's own color
- White top highlight (inset top 1px rgba white)

---

## 2. Color Palette & Roles

### Background
- **Background**: Light, slightly warm white (#F7F5FF or pastel-tinted)
- **Page Alt**: #F0EDFF (light purple tint), #F0FFF4 (mint tint)

### Clay Colors (vibrant — these are for elements, not backgrounds)
- **Clay Blue** (`#3D8EFF`): Buttons, interactive elements.
- **Clay Green** (`#2DCA72`): Success, CTAs.
- **Clay Purple** (`#8B5CF6`): Creative accents.
- **Clay Orange** (`#FF7A3D`): Warm CTAs.
- **Clay Pink** (`#FF4D8F`): Highlight, accent.
- **Clay Yellow** (`#FFD600`): Attention, badges.
- **Clay Teal** (`#00C9B8`): Cool accents.

### Clay Shadow Formula
Each clay element uses a shadow derived from its own color:
- `box-shadow: 0 8px 0 [darkened color], 0 12px 20px rgba(color, 0.3)`
- The "0 8px 0" creates the 3D raised effect (thick bottom shadow = physical depth)

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Clay Pink | `#FF4D8F` | `#F7F5FF` | 2.9:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Primary**: `Nunito` weight 700–800 (rounded corners essential)
- **Alternative**: `Varela Round`, `Fredoka One`
- **Body**: `Nunito` weight 400–500

### Hierarchy (Clay style is bold and confident)

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero | 56px | 800 | Strong, confident |
| H1 | 40px | 700 | |
| H2 | 28px | 700 | Often colored |
| Body | 16px | 500 | Slightly heavier body for clay feel |
| Label | 13px | 700 | Uppercase |

---

## 4. Component Stylings (the clay technique)

### Clay Button (blue example)
```css
background: #3D8EFF;
color: #FFFFFF;
padding: 14px 28px;
border-radius: 16px;
border: 3px solid #1A6FE0; /* darker outline */
font: Nunito 16px weight 700;
box-shadow:
  0 8px 0 #1A6FE0,         /* thick bottom = 3D depth */
  0 12px 20px rgba(61,142,255,0.35); /* ambient glow */
/* Top highlight */
background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%), #3D8EFF;

hover: transform translateY(-2px);
       box-shadow: 0 10px 0 #1A6FE0, 0 14px 24px rgba(61,142,255,0.4);
active: transform translateY(4px);
        box-shadow: 0 4px 0 #1A6FE0, 0 6px 12px rgba(61,142,255,0.3);
```

### Clay Card
```css
background: #FFFFFF;
border-radius: 28px;
border: 3px solid #E0E0F0;
box-shadow:
  0 8px 0 #D0D0E8,         /* bottom depth */
  0 12px 32px rgba(0,0,0,0.1);
padding: 28px;
/* Inner top highlight */
background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 20%), #FFFFFF;
```

### Clay Icon Button
```css
width: 64px; height: 64px;
border-radius: 20px;
background: #3D8EFF;
border: 3px solid #1A6FE0;
box-shadow: 0 6px 0 #1A6FE0, 0 8px 16px rgba(61,142,255,0.3);
display: flex; align-items: center; justify-content: center;
/* White icon inside */
```

### Clay Toggle (ON state)
```css
background: #2DCA72;
border: 3px solid #1AA558;
box-shadow: inset 0 2px 0 rgba(255,255,255,0.3), 0 4px 0 #1AA558;
border-radius: 100px;
/* Thumb: white circle with own shadow */
```

### Clay Input
```css
background: #F7F5FF;
border: 3px solid #D4D0FF;
border-radius: 16px;
box-shadow: inset 0 4px 8px rgba(0,0,0,0.06); /* recessed — not raised */
padding: 14px 16px;
font: Nunito 15px weight 500;
focus: border-color #8B5CF6; box-shadow: inset 0 4px 8px rgba(0,0,0,0.06), 0 0 0 4px rgba(139,92,246,0.15);
```

---

## 5. Layout & Prompt Guide

### Clay Layout Principles
- Everything floats above background (all elements have bottom shadow)
- Generous padding: cards 28px minimum
- Large border-radius: nothing below 16px
- Grid gap: 20–24px
- Background should be light — clay elements need contrast to "float"

### Quick Color Reference
```
Background:    #F7F5FF
Clay Blue:     #3D8EFF / dark #1A6FE0
Clay Green:    #2DCA72 / dark #1AA558
Clay Purple:   #8B5CF6 / dark #6D28D9
Clay Orange:   #FF7A3D / dark #E05A20
Text:          #1A1A2E
Body:          #4A4A6A
```

### Example Prompts
- "Build claymorphism UI cards: #F7F5FF background. Cards: white bg, 28px border-radius, 3px solid #E0E0F0 border, box-shadow '0 8px 0 #D0D0E8, 0 12px 32px rgba(0,0,0,0.1)'. Icon button inside: 64px square, 20px radius, #3D8EFF bg, 3px solid #1A6FE0 border, '0 6px 0 #1A6FE0' shadow. Headline 28px Nunito weight 700. CTA clay button: #3D8EFF, gradient top highlight, 8px thick bottom shadow #1A6FE0."

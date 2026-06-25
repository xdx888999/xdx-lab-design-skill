---
version: alpha
name: "Kawaii / Cute UI"
colors:
  surface: "#B8F0E0"
  on-surface: "#3D2B1F"
  primary: "#6B4C3B"
  on-primary: "#FFFFFF"
  bubblegum-pink: "#FFB3D1"
  baby-lavender: "#D4B8FF"
  peach: "#FFD4B8"
  sky-baby: "#B8E0FF"
  butter: "#FFF4B8"
  cream-white: "#FFFBF9"
  blush: "#FFF0F5"
  pale-lavender: "#F5F0FF"
  rose-muted: "#9B7080"
  placeholder: "#C8A8B8"
typography:
  hero:
    fontFamily: "Nunito"
    fontSize: 56px
    fontWeight: 800
  h2:
    fontFamily: "Nunito"
    fontSize: 28px
    fontWeight: 700
  body:
    fontFamily: "Nunito"
    fontSize: 16px
    fontWeight: 400
  emoji:
    fontFamily: "Nunito"
    fontSize: 64px
    fontWeight: 400
rounded:
  none: 16px
  sm: 24px
  md: 100px
components:
  kawaii-button:
    backgroundColor: "{colors.bubblegum-pink}"
    textColor: "{colors.on-primary}"
    padding: "14px 28px"
    rounded: "100px"
    border: "none"
    typography: "Nunito 15px weight 700"
    shadow: "0 4px 0 rgba(220,100,140,0.5) (colored bottom shadow = 3D effect)"
    hover: "transform translateY(-2px), box-shadow increases"
    active: "transform translateY(2px), box-shadow reduces"
  card:
    backgroundColor: "{colors.on-primary}"
    border: "2px solid {colors.bubblegum-pink} (colored border — not gray)"
    rounded: "24px"
    padding: "24px"
    shadow: "0 8px 24px rgba(255,179,209,0.25) (pink shadow)"
  input:
    backgroundColor: "{colors.cream-white}"
    border: "2px solid {colors.baby-lavender}"
    rounded: "16px"
    padding: "12px 16px"
    typography: "Nunito 15px"
    focus: "border-color {colors.bubblegum-pink}, box-shadow 0 0 0 4px rgba(255,179,209,0.2)"
  avatarprofile:
    rounded: "50%"
    border: "4px solid {colors.bubblegum-pink}"
    shadow: "0 4px 12px rgba(255,179,209,0.4)"
  badge:
    backgroundColor: "{colors.bubblegum-pink}"
    textColor: "{colors.on-primary}"
    rounded: "100px"
    padding: "4px 12px"
    typography: "Nunito 12px weight 700"
    shadow: "0 2px 0 rgba(220,100,140,0.4)"
---

# Design System: Kawaii / Cute UI
# 可爱/卡哇伊风格

> **风格定位**：超可爱、圆润、柔软。日本萌文化的数字延伸，糖果色 + 圆角 + 可爱插图。
> **适用场景**：儿童 App、宠物品牌、甜品/奶茶、美妆、社交 App、女性向游戏、潮玩品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Kawaii design weaponizes cuteness as a brand strategy. Originating from Japanese youth culture, "kawaii" (可愛い) literally means "cute" but encompasses an entire aesthetic philosophy: soft colors, rounded shapes, expressive characters, and the deliberate use of childlike visual cues to trigger positive emotional responses.

The design communicates safety, playfulness, and delight. Nothing is threatening. Every corner is rounded. Every color is soft. Every element wants to be hugged.

**Key Characteristics:**
- Candy/pastel palette: pinks, lavenders, mint, peach, sky blue
- Maximum border-radius — 16px minimum, 100px common
- Puffy/3D illustrations (Claymorphism-adjacent)
- Large, expressive emoji or character elements
- Bouncy, rounded typography
- Soft shadows with colored (not black) umbra
- Micro-animations: bounce, wiggle, float

---

## 2. Color Palette & Roles

### Candy Palette
- **Bubblegum Pink** (`#FFB3D1`): Primary brand — soft pink.
- **Baby Lavender** (`#D4B8FF`): Secondary — dreamy purple.
- **Mint Cream** (`#B8F0E0`): Fresh green accent.
- **Peach** (`#FFD4B8`): Warm orange-pink.
- **Sky Baby** (`#B8E0FF`): Light blue.
- **Butter** (`#FFF4B8`): Soft yellow.

### Background & Surface
- **Cream White** (`#FFFBF9`): Primary background — warmest white.
- **Blush** (`#FFF0F5`): Section backgrounds.
- **Pale Lavender** (`#F5F0FF`): Alt section.

### Text
- **Chocolate** (`#3D2B1F`): Warm dark for headings.
- **Cocoa** (`#6B4C3B`): Body text — warm brown.
- **Rose Muted** (`#9B7080`): Secondary, captions.

### Colored Shadows (signature kawaii technique)
- Pink shadow: `rgba(255,179,209,0.5)` (for pink elements)
- Purple shadow: `rgba(212,184,255,0.5)` (for purple elements)
- All shadows: warm-toned, never black/gray

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Bubblegum Pink | `#FFB3D1` | `#B8F0E0` | 1.3:1 | FAIL |
| Baby Lavender | `#D4B8FF` | `#B8F0E0` | 1.4:1 | FAIL |
| Peach | `#FFD4B8` | `#B8F0E0` | 1.1:1 | FAIL |
| Cream White | `#FFFBF9` | `#B8F0E0` | 1.2:1 | FAIL |
| Chocolate | `#3D2B1F` | `#B8F0E0` | 10.6:1 | AAA |
| Cocoa | `#6B4C3B` | `#B8F0E0` | 6.1:1 | AA |
| Rose Muted | `#9B7080` | `#B8F0E0` | 3.3:1 | AA-large |

## 3. Typography Rules

### Font Family
- **Primary**: `Nunito` weight 700–800 (rounded, friendly)
- **Alternative**: `Varela Round`, `Comfortaa`
- **Body**: `Nunito` weight 400–500
- **Accent**: `Pacifico` (for headers in very casual contexts)

### Hierarchy

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero | 56px | 800 | #3D2B1F | Rounded font essential |
| H1 | 40px | 700 | #3D2B1F | |
| H2 | 28px | 700 | #3D2B1F | |
| H3 | 20px | 700 | (accent color) | |
| Body | 16px | 400 | #6B4C3B | line-height 1.7 |
| Label | 12px | 600 | #9B7080 | |
| Emoji | 32–64px | — | — | Used as decorative elements |

---

## 4. Component Stylings

### Kawaii Button
```
background: #FFB3D1
color: #FFFFFF
padding: 14px 28px
border-radius: 100px
border: none
font: Nunito 15px weight 700
box-shadow: 0 4px 0 rgba(220,100,140,0.5) (colored bottom shadow = 3D effect)
hover: transform translateY(-2px), box-shadow increases
active: transform translateY(2px), box-shadow reduces
```

### Card
```
background: #FFFFFF
border: 2px solid #FFB3D1 (colored border — not gray)
border-radius: 24px
padding: 24px
box-shadow: 0 8px 24px rgba(255,179,209,0.25) (pink shadow)
```

### Input
```
background: #FFFBF9
border: 2px solid #D4B8FF
border-radius: 16px
padding: 12px 16px
font: Nunito 15px
focus: border-color #FFB3D1, box-shadow 0 0 0 4px rgba(255,179,209,0.2)
placeholder: #C8A8B8
```

### Avatar/Profile
```
border-radius: 50%
border: 4px solid #FFB3D1
box-shadow: 0 4px 12px rgba(255,179,209,0.4)
```

### Badge
```
background: #FFB3D1
color: #FFFFFF
border-radius: 100px
padding: 4px 12px
font: Nunito 12px weight 700
box-shadow: 0 2px 0 rgba(220,100,140,0.4)
```

### Emoji Decoration Pattern
```
Position: absolute, decorative
Sizes: 24–64px
Opacity: 0.6–0.8 (don't compete with content)
Examples: 🌸 🌈 ✨ 🍭 🌙 ⭐
Animation: float (translateY -6px to 0, 3s ease-in-out infinite)
```

---

## 5. Layout & Prompt Guide

### Layout Patterns
- Centered hero with floating emoji decorations
- Round profile photo areas
- Card grid with 24px radius cards
- Bottom tab navigation (mobile) with emoji icons

### Quick Color Reference
```
Background:   #FFFBF9
Pink:         #FFB3D1
Lavender:     #D4B8FF
Mint:         #B8F0E0
Peach:        #FFD4B8
Text dark:    #3D2B1F
Text body:    #6B4C3B
Shadow pink:  rgba(255,179,209,0.4)
```

### Example Prompts
- "Design a kawaii app home screen: #FFFBF9 background with floating star ✨ and flower 🌸 emojis (absolute positioned, 40% opacity). Hero: 56px Nunito weight 800 #3D2B1F. Subtext 16px Nunito #6B4C3B. Feature cards: white bg, 2px solid #FFB3D1 border, 24px radius, pink shadow rgba(255,179,209,0.25). CTA pill button: #FFB3D1 background, 100px radius, 3D bottom shadow rgba(220,100,140,0.5)."

# Design System: Republican Era Shanghai
# 民国海报风格

> **风格定位**：1920–1940年代上海的东西融合美学。月份牌广告的浓艳、Art Deco 的几何、摩登旗袍的优雅。
> **适用场景**：老上海/民国主题餐饮、民国风电影/游戏、复古时尚品牌、文创产品包装、怀旧零售
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Republican-era Shanghai (1912–1949) created one of history's most distinctive visual cultures: a fusion of Chinese tradition and Western modernity. Art Deco architecture lined the Bund. "Yuefenpai" (月份牌, calendar posters) depicted glamorous women in qipao. Jazz played in the Great World. Neon signs in Chinese characters lit up the night.

This design system captures that era: warm yellows and deep reds of vintage Chinese posters, Art Deco geometric structures, Shanghai typefaces, and the romantic tension between East and West. It's nostalgic but confident — old Shanghai was a world city.

**Key Characteristics:**
- Warm cream/aged paper backgrounds
- Art Deco geometric framing elements
- Deep red and gold primary palette
- Blush and rose secondaries (from yuefenpai portraiture)
- Chinese serif typography mixed with Deco Latin headers
- Decorative geometric borders and chevron patterns
- Portrait illustration space (vertical format emphasized)

---

## 2. Color Palette & Roles

### Background
- **Aged Cream** (`#F5EDD8`): Warm newspaper/poster paper tone.
- **Faded Yellow** (`#EDE0C0`): Slightly more aged variant.
- **Deep Night** (`#1A0D0D`): Dark version for nightclub/neon contexts.

### Primary Palette
- **Shanghai Red** (`#C41E3A`): Deep crimson — primary brand color.
- **Poster Gold** (`#D4A847`): Warm gold — Art Deco accents, borders.
- **Ink Black** (`#1A1410`): Warm-toned black for type.

### Secondary Palette
- **Blush Rose** (`#D4927A`): Yuefenpai skin tones, romantic accents.
- **Jade Green** (`#3D7A5A`): Chinese jade color — secondary.
- **Cobalt** (`#2A4B8A`): Imported blue — formal contexts.
- **Warm Gray** (`#9A8F82`): Supporting text, secondary elements.

---

## 3. Typography Rules

### Font Family
- **Chinese Display**: `Noto Serif SC` weight 700 — or 华文仿宋 if available
- **Latin Art Deco**: `Poiret One` or `Josefin Sans` weight 700 (tall and geometric)
- **Body**: `Noto Serif SC` weight 400

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Poster Title | 48–72px | 700 | #C41E3A | Vertical layout option |
| English Deco Headline | 36–48px | 700 | #1A1410 | Josefin Sans, ALL CAPS, letter-spacing: 6px |
| Section Heading | 24–28px | 600 | #1A1410 | |
| Body | 16px | 400 | #1A1410 | line-height: 1.8 |
| Caption | 12px | 400 | #9A8F82 | |
| Gold Label | 11px | 600 | #D4A847 | Uppercase, letter-spacing: 3px |

---

## 4. Component Stylings

### Art Deco Frame (装饰边框)
```
Outer border: 2px solid #D4A847
Inner border: 1px solid #D4A847 (offset 4px from outer)
Corner: Geometric corner ornaments in gold
background: #F5EDD8

This double-frame creates the characteristic poster-within-poster look.
```

### Card (月份牌式)
```
background: #F5EDD8
border: 2px solid #C41E3A
border-radius: 0px
padding: 24px 28px
header bar: background #C41E3A, white title text, 40px height
```

### Button (摩登式)
```
Primary:
  background: #C41E3A
  color: #F5EDD8
  border-radius: 0px
  padding: 10px 32px
  font: Josefin Sans 600 13px ALL CAPS letter-spacing: 4px
  hover: background #A01528

Gold outline:
  background: transparent
  border: 2px solid #D4A847
  color: #D4A847
  hover: background #D4A847, color #1A1410
```

### Chevron/Deco Divider
```
Pattern: repeating diagonal chevron at 45°
Color: #D4A847 on #F5EDD8 background
Height: 8px  (used as section separator)
Or: simple double-line: 1px + 2px gap + 1px in gold
```

---

## 5. Layout Principles

- **Vertical format emphasis**: Republican poster art was often tall (2:3 ratio)
- **Central figure**: Full-height portrait space on right or left; text on opposite side
- **Geometric grid**: Strong vertical and horizontal divisions in Art Deco style
- **Max-width**: 1100px — classic magazine width
- **Section padding**: 80px
- **Border frames**: Decorative double-border frames around hero sections

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Base | `#F5EDD8` aged cream |
| Card | `#EDE0C0` + red or gold border |
| Featured | White header bar + deep red/gold frame |
| Night mode | `#1A0D0D` bg, neon gold glow |

---

## 7. Do's and Don'ts

### Do
- Use the double-border Art Deco frame as a signature element
- Mix Chinese and Latin typography on the same layout (historically accurate)
- Apply vertical Chinese text for decorative accent elements
- Use warm tones throughout — cold/cool colors break the era aesthetic

### Don't
- Don't use modern sans-serif fonts (no Helvetica, no Roboto)
- Don't use pure white backgrounds
- Don't make it look like "generic red/gold Chinese" — the Art Deco geometry is essential
- Don't use photographic backgrounds without vintage treatment (sepia/grain)

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; reduce decorative borders |
| Desktop | 1024px+ | Two-column poster layout; full Deco framing |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Paper bg:        #F5EDD8
Shanghai red:    #C41E3A
Poster gold:     #D4A847
Ink black:       #1A1410
Blush:           #D4927A
Jade:            #3D7A5A
Warm gray:       #9A8F82
```

### Example Prompts
- "Republican Shanghai poster-style landing page: #F5EDD8 background. Outer frame: double-border in gold (#D4A847, outer 2px, inner 1px, 4px gap). Center: large vertical Chinese title 60px Noto Serif SC #C41E3A. Below: ALL CAPS English subtitle 28px Josefin Sans letter-spacing 6px #1A1410. A horizontal gold chevron divider. Content section with #C41E3A header bar and body text in #1A1410. Primary CTA button: #C41E3A background, #F5EDD8 text, 0px radius. Art Deco corner ornaments."

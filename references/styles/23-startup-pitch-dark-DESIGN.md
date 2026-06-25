---
version: alpha
name: "Startup Pitch Deck Dark"
colors:
  surface: "#0F1117"
  surface-variant: "#161B22"
  on-surface: "#FFFFFF"
  primary: "#F59E0B"
  on-primary: "#111111"
  border: "#30363D"
  secondary: "#94A3B8"
  muted: "#64748B"
  blue: "#3B82F6"
  purple: "#8B5CF6"
  emerald: "#10B981"
typography:
  hero-stat:
    fontFamily: "Inter"
    fontSize: 120px
    fontWeight: 800
  sub-headline:
    fontSize: 36px
    fontWeight: 600
  support:
    fontSize: 18px
    fontWeight: 400
  source-footnote:
    fontSize: 11px
    fontWeight: 400
rounded:
  none: 0px
  default: 4px
spacing:
  margin: 80px
components:
  comparison-bar-chart:
    backgroundColor: "transparent"
  quote-social-proof:
    backgroundColor: "rgba(255,255,255,0.05)"
    padding: "24px 32px"
    rounded: "0 8px 8px 0"
---

# Design System: Startup Pitch Deck Dark
# 暗色创业路演 PPT 风格

> **风格定位**：融资路演的视觉语言。深色幻灯片、单一重点、大数据、投资人的审美预期。
> **适用场景**：A轮/B轮融资路演、YC Demo Day 风格、创业大赛、产品发布会、企业愿景演示
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Startup Pitch Deck Dark is designed for the highest-stakes presentation context: convincing investors to write checks. The aesthetic signals confidence, modernity, and serious execution. Dark backgrounds project ambition and tech-forward thinking. The layout philosophy is "one idea per slide, expressed with maximum impact."

The visual language is borrowed from the best decks in Silicon Valley history — minimal text, massive numbers, and photography that shows scale. Every slide has a single point. Decoration is zero. White space is generous.

**Key Characteristics:**
- Deep dark background (#0F1117 or #111827)
- White/light primary text — high contrast
- Single brand accent color (often blue or purple)
- Giant numbers for key metrics (ARR, users, growth %)
- One idea per "screen" — never two competing focal points
- Charts are simple: one series, clear label, no gridlines
- Full-bleed imagery for product shots and team photos

---

## 2. Color Palette & Roles

### Background
- **Slide Dark** (`#0F1117`): Primary slide background.
- **Panel** (`#161B22`): Chart areas, emphasized boxes.
- **Border** (`#30363D`): Subtle dividers.

### Text
- **Primary** (`#FFFFFF`): Headlines, key numbers.
- **Secondary** (`#94A3B8`): Supporting text, labels.
- **Muted** (`#64748B`): Footnotes, source citations.

### Accent (one per deck — choose based on brand)
- **Blue** (`#3B82F6`): Trust, technology.
- **Purple** (`#8B5CF6`): Innovation, AI.
- **Emerald** (`#10B981`): Growth, sustainability.
- **Orange** (`#F59E0B`): Energy, consumer.

### Chart Colors
- Primary data: accent color
- Comparison: `rgba(accent, 0.3)`
- Highlight: `#FFFFFF`
- Negative: `#EF4444`

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Slide Dark | `#0F1117` | `#0F1117` | 1:1 | FAIL |
| Primary | `#FFFFFF` | `#0F1117` | 18.9:1 | AAA |
| Secondary | `#94A3B8` | `#0F1117` | 7.4:1 | AAA |
| Muted | `#64748B` | `#0F1117` | 4:1 | AA-large |

## 3. Typography Rules

### Font Family
- **Display**: `Inter` weight 700–800 (clean, authoritative)
- **Alternative**: `Syne` weight 700 (more expressive)
- **Numbers**: `Inter` with `font-variant-numeric: tabular-nums`

### Slide Typography Scale

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero Stat | 96–120px | 800 | #FFFFFF | "$4.2M ARR" |
| Headline | 48–64px | 700 | #FFFFFF | Slide title |
| Sub-headline | 28–36px | 600 | #FFFFFF | |
| Key Point | 24px | 600 | #FFFFFF | Bullet (3 max) |
| Support | 18px | 400 | #94A3B8 | Explanation |
| Label | 13px | 500 | accent | Chart labels, caption |
| Source/Footnote | 11px | 400 | #64748B | Data attribution |
| Slide Number | 12px | 400 | #64748B | Bottom corner |

### Slide Design Rules
- Maximum 40 words per slide (investor decks: shoot for 20)
- One headline, maximum 3 supporting bullets
- Numbers: always call out the most impressive metric in giant type
- Bullet points: max 3, each max 10 words

---

## 4. Component Stylings

### Metric Hero Block
```
Center-aligned on slide
Number: 96px Inter weight 800 #FFFFFF tabular-nums
Unit: 32px weight 600 #FFFFFF (inline or above)
Label: 18px weight 400 #94A3B8
Growth note: 16px accent color "↑ 3× YoY"
```

### Comparison Bar Chart
```
Background: transparent
Bars: accent color, height 40px, border-radius 4px (right end)
Bar track: rgba(accent, 0.2) full width
Label left: 14px Inter #94A3B8
Value right: 16px Inter weight 600 #FFFFFF
No grid lines, no axes — just bars and values
```

### Quote / Social Proof
```
background: rgba(255,255,255,0.05)
border-left: 4px solid accent
padding: 24px 32px
border-radius: 0 8px 8px 0

Quote: 24px Inter italic weight 400 #FFFFFF line-height 1.4
Attribution: 14px weight 500 #94A3B8 "— Name, Title, Company"
Logo: 32px height, grayscale 60%
```

### Team Card
```
Photo: circle, 80px diameter, border 2px solid accent
Name: 16px Inter weight 600 #FFFFFF
Title: 14px weight 400 #94A3B8
Previous co: 12px weight 400 #64748B
Grid: 4-up or 5-up per row
```

### Problem/Solution Split
```
2-column, divider line 1px #30363D
Left — Problem:
  Label: "THE PROBLEM" 11px accent uppercase letter-spacing 3px
  Stat: 56px weight 800 #FFFFFF
  Context: 18px #94A3B8
Right — Solution:
  Label: "OUR SOLUTION" 11px #FFFFFF uppercase letter-spacing 3px
  Headline: 32px weight 700 #FFFFFF
  3 bullets: 16px #94A3B8
```

---

## 5. Layout Principles

### Slide Layout Options
1. **Centered Hero**: single metric or statement, centered, maximum whitespace
2. **Left-Right Split**: problem/solution, before/after
3. **Full-bleed image**: product screenshot or team photo with text overlay
4. **Grid**: team (4-up), investors (logo grid), metrics (4-card)
5. **List**: 3-item (never more than 3 per slide)

### Slide Dimensions
- 16:9 ratio: 1920×1080px
- Content margin: 80px all sides
- Max content area: 1760×920px

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| default | 4px | Default radius |

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| margin | 80px |

## 6. Do's and Don'ts

### Do
- Make the biggest number on the slide the visual anchor
- Use a single accent color throughout the entire deck
- Leave generous whitespace — fear of empty space loses pitches
- State your headline in one short sentence (the key message)
- Use real customer logos (with permission) for social proof

### Don't
- Don't put more than 3 bullets per slide
- Don't use multiple chart types on one slide
- Don't use light mode — dark says confidence and tech
- Don't use clipart or stock illustrations
- Don't animate charts unnecessarily — static is more professional

---

## 7. Agent Prompt Guide

### Quick Color Reference
```
Slide bg:     #0F1117
Panel:        #161B22
Border:       #30363D
Text white:   #FFFFFF
Text muted:   #94A3B8
Accent:       #3B82F6 (or brand color)
Accent dim:   rgba(59,130,246,0.2)
```

### Example Prompts
- "Design a pitch deck metric slide: #0F1117 background. Centered: label 18px Inter #94A3B8 'Annual Recurring Revenue'. Big number 96px Inter weight 800 #FFFFFF '$4.2M'. Growth badge below: 16px accent #3B82F6 '↑ 312% YoY'. Subtext 16px #64748B 'as of June 2026'. Slide number bottom-right corner 12px #64748B. Generous whitespace all around."
- "Create a pitch deck problem/solution slide: two columns divided by 1px #30363D. Left: label 11px accent uppercase 'THE PROBLEM', stat 64px weight 800 #FFFFFF, 18px #94A3B8 explanation. Right: label 11px #FFFFFF uppercase 'OUR SOLUTION', 32px weight 700 #FFFFFF headline, 3 bullets 16px #94A3B8."

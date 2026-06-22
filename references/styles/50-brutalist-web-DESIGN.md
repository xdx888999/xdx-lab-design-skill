# Design System: Brutalist Web
# 网页野蛮主义风格

> **风格定位**：拒绝美化的诚实设计。Bloomberg.com 早期的原始力量、Craigslist 的无装饰功能主义、BAFTA 的当代野蛮——系统默认值变成宣言。
> **适用场景**：当代艺术机构、建筑事务所、前卫设计工作室、独立媒体/新闻、数字艺术展、激进科技产品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Web brutalism is a design philosophy that rejects the sanitized, convention-driven aesthetics of mainstream web design. It celebrates raw structure, system defaults, and the exposure of scaffolding. Links are underlined. Borders are visible. There's no hover animation — things just work.

Inspired by architectural brutalism (exposed concrete, structural honesty), web brutalism shows its skeleton. Typography is default-large. Layouts are asymmetric and deliberately uncomfortable. Negative space is used aggressively — not to be beautiful but to be emphatic. The page is aware of itself.

**Key Characteristics:**
- Pure white (#FFFFFF) or pure black (#000000) — no in-between
- Typography is the design — no decoration
- Visible, unstyled borders (1px solid #000000)
- System fonts or very raw display fonts (Times New Roman, Helvetica)
- Links are underlined, blue (#0000EE) default or overridden with bold
- No box-shadows (or very harsh, flat offset shadows)
- Grid violations: elements deliberately misaligned or overlapping
- One accent color — often bright yellow, brutal red, or electric blue

---

## 2. Color Palette & Roles

### Core Palette (minimalist)
- **White** (`#FFFFFF`): Primary background — stark.
- **Black** (`#000000`): Primary text, borders — absolute.
- **Pure Red** (`#FF0000`): The one allowed accent — stark warning.

### Common Accent Options (pick one)
- **Brutal Yellow** (`#FFFF00`): Raw highlight.
- **Link Blue** (`#0000EE`): Original web link color.
- **Neon Green** (`#00FF00`): Terminal green as accent.
- **Hot Magenta** (`#FF00FF`): Maximum contrast pop.

### Dark Variant
- **Pure Black** (`#000000`): Background.
- **Pure White** (`#FFFFFF`): Text on dark.

---

## 3. Typography Rules

### Font Family
- **System Serif**: `Times New Roman, Georgia, serif` — default browser serif
- **System Sans**: `Arial, Helvetica, sans-serif` — default browser sans
- **Expressive**: `Space Grotesk` weight 700–900 — modern-raw
- **Monospace**: `Courier New, monospace` — typewriter/terminal authenticity

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero | 80–120px | 900 | Times New Roman or Space Grotesk |
| Heading | 36–56px | 700 | Bold, not beautiful |
| Sub-heading | 22px | 700 | Underlined, like early HTML |
| Body | 18–20px | 400 | Times New Roman — readable raw |
| Links | body size | 700 | Underlined, colored |
| Caption | 14px | 400 | |
| Counter/Number | 96–144px | 900 | Stark statement |

### Typography Rules
- `text-decoration: underline` on all interactive text
- Headings can have visible `border-bottom: 4px solid black`
- Mixed font sizes in the same layout — hierarchy through scale, not styling
- CSS viewport units (vw, vh) for "inappropriate" font sizes

---

## 4. Component Stylings

### Card (Exposed)
```
background: #FFFFFF
border: 2px solid #000000  ← raw, visible
border-radius: 0px
padding: 20px
No shadow OR harsh flat offset shadow: box-shadow: 4px 4px 0 #000000

header: border-bottom: 2px solid #000000
```

### Button (Anti-Button)
```
Primary:
  background: #000000
  color: #FFFFFF
  border: 2px solid #000000
  border-radius: 0px
  padding: 10px 20px
  font: Arial 700 14px
  text-decoration: none
  hover: background #FFFFFF, color #000000 (instant, no transition)

Accent:
  background: #FFFF00 or #FF0000
  color: #000000
  border: 2px solid #000000

Anti-design variant:
  No background styling — just underlined text link styled as button
```

### Table (Data First)
```
border: 1px solid #000000
border-collapse: collapse
width: 100%
Every cell: border: 1px solid #000000, padding: 8px 12px
Header: font-weight: bold, background: #000000, color: #FFFFFF
Alternating rows: one is white, one is #F0F0F0 — traditional table
```

### Navigation (Unstyled)
```
Plain horizontal list
font: Arial 700 14px
text-decoration: underline
color: #000000 (or #0000EE for link-blue variant)
separator: " | " or nothing
No hover effects — or instant background color change (no transition)
```

### Offset Shadow (Neobrutalist variant)
```
Not classic CSS box-shadow with blur
Instead: box-shadow: 5px 5px 0 #000000 (no blur)
Paired with a border: border: 2px solid #000000
This creates the "peeled off page" effect
```

---

## 5. Layout Principles

- **System defaults**: Use browser default behaviors where possible
- **Visible structure**: Grid lines and column borders are often visible
- **No max-width** constraint, OR an extremely opinionated one (e.g., 500px on a wide screen)
- **Asymmetry as method**: Deliberately break expected column alignment
- **White space is confrontational**: Giant empty areas next to dense text
- **Section padding**: Inconsistent — some sections 0px, others 200px

---

## 6. Depth & Elevation

No gradual depth:
- Elements are on one plane or another — no in-between
- Hard offset shadow (5px 5px 0 black) where shadow is needed
- Overlapping elements with clear z-index stacking — no blur

---

## 7. Do's and Don'ts

### Do
- Use Times New Roman or system fonts — the aesthetic demands it
- Underline links — it's a feature, not a bug
- Leave things that look "unfinished" — the rawness is intentional
- Use harsh flat offset shadows instead of soft drop shadows
- Break grid alignment deliberately — misalignment communicates

### Don't
- Don't add hover transitions (or use instant 0ms transitions)
- Don't round corners
- Don't use multiple font families — 1 or 2 maximum
- Don't add decorative graphics — typography IS the decoration
- Don't try to make it "beautiful" — that defeats the purpose

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Font may stay large — brutalism doesn't accommodate gently |
| Desktop | 1024px+ | Full anti-grid layout; misalignment intentional |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
White:           #FFFFFF
Black:           #000000
Brutal yellow:   #FFFF00
Link blue:       #0000EE
Pure red:        #FF0000
```

### Example Prompts
- "Brutalist web design: #FFFFFF background. Navigation: plain list, Times New Roman 700, underlined black links, '|' separators. Hero: enormous Space Grotesk 900 100px title, left-aligned, no color except black. Cards: 2px solid black border, 0px radius, hard offset shadow '4px 4px 0 #000000'. Buttons: black background, white text, 0px radius, instant hover inversion. Data table: full borders, black header row. No transitions, no shadows with blur, no decorative elements. The HTML structure IS the design."

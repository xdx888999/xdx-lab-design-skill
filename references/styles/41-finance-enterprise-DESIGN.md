---
version: alpha
name: "Finance Enterprise"
colors:
  surface: "#F8F9FA"
  surface-variant: "#F1F3F5"
  on-surface: "#0D1B2E"
  primary: "#3B6BB5"
  on-primary: "#FFFFFF"
  navy: "#0A1628"
  navy-mid: "#1A3A6A"
  navy-tint: "#E8EEF8"
  positive: "#0F6B4A"
  positive-muted: "#D1FAE5"
  negative: "#C0392B"
  negative-muted: "#FEE2E2"
  neutral: "#6B7280"
  text-body: "#374151"
  border: "#DEE2E6"
typography:
  section-heading:
    fontFamily: "IBM Plex Sans"
    fontSize: 32px
    fontWeight: 600
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: 16px
    fontWeight: 400
rounded:
  none: 0px
  default: 4px
spacing:
  section-padding: 40px
components:
  data-table:
    backgroundColor: "{colors.on-primary}"
    border: "1px solid {colors.border}"
    rounded: "4px"
    hover: "background {colors.navy-tint}"
  fund-card-asset-card:
    backgroundColor: "{colors.on-primary}"
    border: "1px solid {colors.border}"
    rounded: "4px"
    padding: "20px 24px"
  chart-container:
    backgroundColor: "{colors.on-primary}"
    border: "1px solid {colors.border}"
    rounded: "4px"
    padding: "20px"
  button:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.navy}"
    rounded: "4px"
    padding: "10px 20px"
    typography: "IBM Plex Sans 600 14px"
    hover: "background {colors.navy-tint}"
    border: "1.5px solid {colors.navy}"
---

# Design System: Finance Enterprise
# 金融企业级风格

> **风格定位**：机构投资者、资产管理、私募基金的视觉语言。Bloomberg 终端的数据密度 + BlackRock 的权威 + Vanguard 的信任。
> **适用场景**：资产管理公司、私募基金、投行、券商、数字银行、企业财务软件、量化平台
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Enterprise finance design serves professionals who process large amounts of complex data under pressure. The design must balance information density with clarity, project institutional authority, and signal the precision that comes with handling large capital.

This is not consumer fintech (bright, friendly). This is institutional: muted navy, precise data tables, tabular numerals, and the kind of typography that says "we manage $450 billion in assets and we did not pick this font randomly."

**Key Characteristics:**
- Navy (#0A1628) as the institutional anchor
- Off-white (#F8F9FA) backgrounds — clean, professional
- Deep green (#0F6B4A) for positive returns — financial semantic color
- Red (#C0392B) for negative — financial standard
- Inter or IBM Plex Sans — corporate precision
- Dense data tables with subtle alternating rows
- Charts: area charts in navy/green, no decorative elements
- `font-variant-numeric: tabular-nums` everywhere numbers appear

---

## 2. Color Palette & Roles

### Background
- **Off White** (`#F8F9FA`): Primary background.
- **Light Gray** (`#F1F3F5`): Secondary surface.
- **Navy** (`#0A1628`): Primary brand background, nav, hero.

### Primary — Institutional Navy
- **Navy Primary** (`#0A1628`): Brand anchor.
- **Navy Mid** (`#1A3A6A`): Secondary, hover.
- **Navy Light** (`#3B6BB5`): Links, interactive.
- **Navy Tint** (`#E8EEF8`): Background tints.

### Financial Semantic Colors
- **Positive** (`#0F6B4A`): Returns, gains, up arrows.
- **Positive Muted** (`#D1FAE5`): Positive row backgrounds.
- **Negative** (`#C0392B`): Losses, down arrows, red numbers.
- **Negative Muted** (`#FEE2E2`): Negative row backgrounds.
- **Neutral** (`#6B7280`): Unchanged, 0% return.

### Neutral
- **Text Primary** (`#0D1B2E`): Headlines, primary values.
- **Text Body** (`#374151`): Body.
- **Text Muted** (`#6B7280`): Labels, footnotes.
- **Border** (`#DEE2E6`): Table borders, card borders.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Off White | `#F8F9FA` | `#F8F9FA` | 1:1 | FAIL |
| Light Gray | `#F1F3F5` | `#F8F9FA` | 1.1:1 | FAIL |
| Navy | `#0A1628` | `#F8F9FA` | 17.2:1 | AAA |
| Navy Mid | `#1A3A6A` | `#F8F9FA` | 10.7:1 | AAA |
| Navy Light | `#3B6BB5` | `#F8F9FA` | 5:1 | AA |
| Positive Muted | `#D1FAE5` | `#F8F9FA` | 1.1:1 | FAIL |
| Negative Muted | `#FEE2E2` | `#F8F9FA` | 1.2:1 | FAIL |
| Text Primary | `#0D1B2E` | `#F8F9FA` | 16.4:1 | AAA |
| Text Body | `#374151` | `#F8F9FA` | 9.8:1 | AAA |

## 3. Typography Rules

### Font Family
- **Primary**: `IBM Plex Sans` (Google Fonts) — IBM's financial precision
- **Alternative**: `Inter` 
- **Numbers/Data**: `IBM Plex Mono` — maximum precision for financial data

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero/Fund Name | 44–56px | 700 | IBM Plex Sans |
| AUM / Key Stat | 48–64px | 700 | IBM Plex Mono tabular-nums |
| Section Heading | 24–32px | 600 | |
| Table Header | 11px | 600 | Uppercase, letter-spacing: 0.5px, #6B7280 |
| Table Data | 13–14px | 400 | IBM Plex Mono for numbers |
| Return % | 14px | 600 | #0F6B4A or #C0392B (semantic) |
| Body | 15–16px | 400 | line-height: 1.65 |
| Footnote | 11px | 400 | #6B7280 |

---

## 4. Component Stylings

### Data Table
```
background: #FFFFFF
border: 1px solid #DEE2E6
border-radius: 4px
Header: background #F1F3F5, 11px uppercase #6B7280, height 40px, letter-spacing: 0.5px
Row: 44px height, 14px IBM Plex Mono for numbers
  even: background #FAFBFC
  odd: background #FFFFFF
  hover: background #E8EEF8
  Positive cell: #0F6B4A + Positive Muted bg
  Negative cell: #C0392B + Negative Muted bg
Numeric columns: right-aligned, tabular-nums
```

### Fund Card / Asset Card
```
background: #FFFFFF
border: 1px solid #DEE2E6
border-radius: 4px
padding: 20px 24px
border-left: 3px solid #0A1628

AUM: IBM Plex Mono 32px #0A1628 bold
Return: 18px #0F6B4A or #C0392B, ↑/↓ arrow
Fund name: IBM Plex Sans 15px #374151
```

### Chart Container
```
background: #FFFFFF
border: 1px solid #DEE2E6
border-radius: 4px
padding: 20px

Chart: area chart preferred
  Line: #3B6BB5 (navy mid)
  Fill: rgba(59,107,181,0.1)
  Grid: #F1F3F5 horizontal only
  No vertical grid lines
  Axis labels: 11px IBM Plex Mono #6B7280
  Tooltip: white bg, navy border, IBM Plex Mono values
```

### Button
```
Primary:
  background: #0A1628
  color: #F8F9FA
  border-radius: 4px
  padding: 10px 20px
  font: IBM Plex Sans 600 14px
  hover: background #1A3A6A

Positive action:
  background: #0F6B4A
  color: #FFFFFF

Outline:
  border: 1.5px solid #0A1628
  color: #0A1628
  hover: background #E8EEF8
```

---

## 5. Layout Principles

- **Data density**: High — professionals handle dense information
- **Grid**: Strict 12-column
- **Max-width**: 1400px — wide for data tables
- **Left sidebar**: 220px persistent navigation
- **Dashboard top row**: KPI cards (3–4) with key metrics
- **Section padding**: 40–60px — compact for efficiency

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 40px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#F1F3F5` |
| Card | `#FFFFFF` + 1px border |
| Featured | `#FFFFFF` + 1px border + navy left stripe |
| Modal | `#FFFFFF` + `0 20px 60px rgba(0,0,0,0.15)` |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| default | 4px | Default radius |

---

## 7. Do's and Don'ts

### Do
- Use `font-variant-numeric: tabular-nums` on every number — misaligned columns lose credibility
- Use semantic colors strictly (green = positive, red = negative) — financial users know the convention
- Show change indicators (↑↓ arrows, % change) alongside all metrics
- Include time range selectors on all charts (1D, 1W, 1M, 1Y, ALL)
- Cite data sources in footnotes — institutional credibility requires attribution

### Don't
- Don't use decorative gradients on financial data
- Don't round corner more than 4px — financial precision
- Don't use non-tabular fonts for numbers
- Don't hide negative numbers — transparency is mandatory
- Don't use informal language or emoji

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Horizontal scroll for tables; simplified charts; card view |
| Desktop | 1024px+ | Full data tables; multi-column dashboards; sidebar nav |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #F8F9FA
Navy:            #0A1628
Navy mid:        #1A3A6A
Navy tint:       #E8EEF8
Positive green:  #0F6B4A
Negative red:    #C0392B
Border:          #DEE2E6
Text primary:    #0D1B2E
Text muted:      #6B7280
```

### Example Prompts
- "Enterprise finance fund dashboard: #F8F9FA background. Top KPI row: 4 cards white bg, 1px #DEE2E6 border, 4px radius, navy left stripe. Each: AUM 40px IBM Plex Mono bold, return 16px semantic color (green/red). Area chart panel: white bg, navy area chart with light fill. Data table: alternating gray rows, uppercase muted headers, right-aligned numbers in IBM Plex Mono, green/red cells for returns. Left sidebar: #0A1628 navy. All numbers tabular-nums."

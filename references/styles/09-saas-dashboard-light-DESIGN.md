---
version: alpha
name: "SaaS Dashboard Light"
colors:
  surface: "#F9FAFB"
  surface-variant: "#FFFFFF"
  on-surface: "#111827"
  primary: "#D97706"
  on-primary: "#111111"
  error: "#DC2626"
  success: "#16A34A"
  warning: "#FFFBEB"
  surface-raised: "#F3F4F6"
  border-subtle: "#E5E7EB"
  border-default: "#D1D5DB"
  body: "#374151"
  secondary: "#6B7280"
  muted: "#9CA3AF"
  indigo: "#4F46E5"
  blue: "#2563EB"
  violet: "#7C3AED"
  teal: "#0D9488"
  success-bg: "#F0FDF4"
  error-bg: "#FEF2F2"
typography:
  page-title:
    fontFamily: "Inter"
    fontSize: 24px
    fontWeight: 600
  sub-heading:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 500
  body-s:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 400
  micro:
    fontFamily: "Inter"
    fontSize: 11px
    fontWeight: 500
  metric-s:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 600
rounded:
  none: 6px
  sm: 8px
  md: 100px
spacing:
  card-padding: 20px
  card-gap: 16px
components:
  sidebar-navigation:
    backgroundColor: "rgba(79,70,229,0.08)"
    width: "240px"
    padding: "16px 12px"
    rounded: "6px, padding 8px 12px, color {colors.body} 14px weight 500"
    hover: "background {colors.surface-raised}"
    textColor: "{colors.indigo}"
  metric-kpi-card:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.border-subtle}"
    rounded: "8px"
    padding: "20px 24px"
    shadow: "0 1px 3px rgba(0,0,0,0.06)"
  data-table:
    backgroundColor: "transparent"
    padding: "12px 16px"
    height: "52px"
    hover: "background {colors.surface}"
  primary-button:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.surface-variant}"
    padding: "8px 16px"
    rounded: "6px"
    border: "none"
    typography: "Inter 14px weight 500"
    height: "36px"
    hover: "background #4338CA"
  secondary-button:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.body}"
    padding: "7px 15px"
    border: "1px solid {colors.border-default}"
    rounded: "6px"
    typography: "Inter 14px weight 500"
    height: "36px"
    hover: "background {colors.surface-raised}"
  input:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.border-default}"
    rounded: "6px"
    padding: "8px 12px"
    typography: "Inter 14px {colors.body}"
    height: "36px"
    focus: "border-color {colors.indigo}, ring: 0 0 0 3px rgba(79,70,229,0.1)"
  badge-status:
    rounded: "100px"
    padding: "2px 10px"
    typography: "12px Inter weight 500"
  top-bar:
    backgroundColor: "{colors.surface-variant}"
    height: "56px"
    padding: "0 24px"
---

# Design System: SaaS Dashboard Light
# SaaS 看板浅色风格

> **风格定位**：清晰、高效、数据优先。白色背景，侧边导航，模块化卡片，代表产品是 Stripe Dashboard、HubSpot、Notion。
> **适用场景**：SaaS 产品内页、后台管理系统、分析平台、CRM、项目管理工具
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

SaaS Dashboard Light is the visual language of productivity. Users spend hours inside these interfaces — the design must reduce cognitive load, not create it. Every pixel serves information retrieval or action execution.

The style is clean without being cold, structured without being rigid. White backgrounds dominate, with a precisely calibrated gray scale for hierarchy. A single brand accent color appears on CTAs, active states, and data highlights. The sidebar navigation is a consistent anchor. Cards organize information into digestible modules.

**Key Characteristics:**
- White primary background (#FFFFFF)
- Sidebar: 240px, slightly elevated with subtle shadow or border
- Content: white cards on off-white (#F9FAFB) page background
- 8px consistent spacing grid
- Subtle shadows — just enough to lift cards off the background
- One brand accent color for interactive elements
- Typography: Inter, systematic hierarchy
- Data tables, charts, and KPI cards are primary UI patterns

---

## 2. Color Palette & Roles

### Foundation
- **Page Background** (`#F9FAFB`): Main app background — very slightly off-white.
- **Surface** (`#FFFFFF`): Cards, panels, sidebar, modals.
- **Surface Raised** (`#F3F4F6`): Hover backgrounds, input areas, code blocks.
- **Border Subtle** (`#E5E7EB`): Card borders, dividers.
- **Border Default** (`#D1D5DB`): Input borders, table borders.

### Text
- **Heading** (`#111827`): Primary headings, table headers.
- **Body** (`#374151`): Standard body text.
- **Secondary** (`#6B7280`): Labels, secondary information.
- **Muted** (`#9CA3AF`): Placeholders, captions, disabled.

### Accent (choose per brand)
- **Indigo** (`#4F46E5`): Default SaaS accent — confident, versatile.
- **Blue** (`#2563EB`): Trust-building alternative.
- **Violet** (`#7C3AED`): Premium alternative.
- **Teal** (`#0D9488`): Fresh, health/finance alternative.

### Semantic
- **Success** (`#16A34A`): Positive metrics, completed tasks.
- **Success Bg** (`#F0FDF4`): Success badge/row background.
- **Warning** (`#D97706`): Pending, attention needed.
- **Warning Bg** (`#FFFBEB`): Warning badge background.
- **Error** (`#DC2626`): Failed, overdue, critical.
- **Error Bg** (`#FEF2F2`): Error badge background.
- **Neutral** (`#6B7280`): Draft, inactive states.
- **Neutral Bg** (`#F9FAFB`): Neutral badge background.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Heading | `#111827` | `#F9FAFB` | 17:1 | AAA |
| Body | `#374151` | `#F9FAFB` | 9.9:1 | AAA |
| Secondary | `#6B7280` | `#F9FAFB` | 4.6:1 | AA |
| Muted | `#9CA3AF` | `#F9FAFB` | 2.4:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, fallback: `SF Pro Text`, `system-ui`, `sans-serif`
- **Monospace**: `JetBrains Mono` or `Fira Code` (for IDs, code, API keys)

### Hierarchy

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Page Title | 24px | 600 | #111827 | Main page heading |
| Section Title | 18px | 600 | #111827 | Card/section headings |
| Sub-heading | 16px | 500 | #374151 | |
| Body | 14px | 400 | #374151 | Primary UI text |
| Body S | 13px | 400 | #6B7280 | Secondary info, descriptions |
| Label | 12px | 500 | #6B7280 | Table headers, form labels |
| Micro | 11px | 500 | #9CA3AF | Timestamps, IDs, metadata |
| Metric | 28–36px | 700 | #111827 | KPI numbers |
| Metric S | 20px | 600 | #111827 | Secondary metrics |

---

## 4. Component Stylings

### Sidebar Navigation
```
background: #FFFFFF
border-right: 1px solid #E5E7EB
width: 240px
padding: 16px 12px

Logo area: 56px height, 20px padding
Nav item (default):
  border-radius: 6px, padding 8px 12px, color #374151 14px weight 500
  hover: background #F3F4F6
Nav item (active):
  background: rgba(79,70,229,0.08)
  color: #4F46E5
  font-weight: 600
  left border: 2px solid #4F46E5

Section label: 11px weight 600 uppercase letter-spacing 0.8px #9CA3AF, margin: 20px 12px 4px
```

### Metric / KPI Card
```
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 8px
padding: 20px 24px
box-shadow: 0 1px 3px rgba(0,0,0,0.06)

Label: 12px Inter weight 500 #6B7280 uppercase letter-spacing 0.5px
Value: 32px weight 700 #111827 tabular-nums
Change: 13px weight 500
  Positive: #16A34A with ↑
  Negative: #DC2626 with ↓
  Neutral:  #6B7280
Sub-label: 12px #9CA3AF "vs last month"
```

### Data Table
```
Table: width 100%, border-collapse collapse

Header row:
  background: transparent
  border-bottom: 1px solid #E5E7EB
  cell: 12px Inter weight 500 #6B7280 uppercase letter-spacing 0.5px
  padding: 12px 16px

Data rows:
  border-bottom: 1px solid #F3F4F6
  cell: 14px weight 400 #374151, padding 14px 16px
  height: 52px
  hover: background #F9FAFB

Numeric cells: weight 500 #111827 tabular-nums, right-aligned
```

### Primary Button
```
background: #4F46E5
color: #FFFFFF
padding: 8px 16px
border-radius: 6px
border: none
font: Inter 14px weight 500
height: 36px
hover: background #4338CA
```

### Secondary Button
```
background: #FFFFFF
color: #374151
padding: 7px 15px
border: 1px solid #D1D5DB
border-radius: 6px
font: Inter 14px weight 500
height: 36px
hover: background #F3F4F6
```

### Input
```
background: #FFFFFF
border: 1px solid #D1D5DB
border-radius: 6px
padding: 8px 12px
font: Inter 14px #374151
placeholder: #9CA3AF
height: 36px
focus: border-color #4F46E5, ring: 0 0 0 3px rgba(79,70,229,0.1)
```

### Badge / Status
```
border-radius: 100px
padding: 2px 10px
font: 12px Inter weight 500

Success: bg #F0FDF4, color #16A34A, border 1px solid #BBF7D0
Warning: bg #FFFBEB, color #D97706, border 1px solid #FDE68A
Error:   bg #FEF2F2, color #DC2626, border 1px solid #FECACA
Neutral: bg #F9FAFB, color #6B7280, border 1px solid #E5E7EB
Info:    bg rgba(79,70,229,0.08), color #4F46E5, border 1px solid rgba(79,70,229,0.2)
```

### Top Bar
```
background: #FFFFFF
border-bottom: 1px solid #E5E7EB
height: 56px
padding: 0 24px

Breadcrumb: 14px #6B7280, separator /, active #111827
Right: search input (36px) + avatar + notification icon
```

---

## 5. Layout Principles

### Spacing System
- Base: 8px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48px
- Card padding: 20px or 24px
- Card gap: 16px
- Page content padding: 24px

### Dashboard Layout
```
[Sidebar 240px] | [Main Content]
                   [Top Bar 56px]
                   [Page Content 24px padding]
                     [KPI Cards Row: 4-col grid 16px gap]
                     [Charts Row: 8+4 col split]
                     [Data Table: full width]
```

### Card Grid Patterns
- 4 KPI cards: equal width, 16px gap
- 2 charts: 2/3 + 1/3 split or equal 50/50
- Full-width table: no grid, full content width

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| card-padding | 20px |
| card-gap | 16px |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Page | Background `#F9FAFB` | App backdrop |
| Card | `0 1px 3px rgba(0,0,0,0.06)` + 1px border | Standard dashboard cards |
| Hover | `0 4px 6px rgba(0,0,0,0.07)` | Hovered/interactive cards |
| Sidebar | Right border or `2px 0 8px rgba(0,0,0,0.04)` | Navigation panel |
| Modal | `0 20px 60px rgba(0,0,0,0.15)` | Dialogs, confirmation |
| Dropdown | `0 4px 16px rgba(0,0,0,0.12)` | Select menus, popovers |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 6px | Square elements |
| sm | 8px | Inputs, tags |
| md | 100px | Cards, buttons |

---

## 7. Do's and Don'ts

### Do
- Use `#F9FAFB` (not white) as the page/app background — cards on slightly-off-white creates natural depth
- Apply `tabular-nums` to all numeric/metric data
- Use semantic badge colors consistently — users learn the color system
- Keep sidebar at exactly 240px — this is the industry standard
- Use 6px border-radius consistently — not 4, not 8
- Show empty states with actionable CTAs — never blank screens
- Left-align all text in tables (except numbers — right-align those)

### Don't
- Don't use bold colors in data rows — color is for status only
- Don't use gradients or glassmorphism in dashboard interfaces — they add visual noise
- Don't mix button sizes — 36px height throughout UI
- Don't use more than 4 KPI cards in a row at desktop width
- Don't apply heavy shadows — they make dashboards feel like marketing pages

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Sidebar → bottom tab bar or drawer, 4 KPIs → 2×2 grid, tables → cards |
| Tablet | 768–1024px | Sidebar collapsed to icon-only (48px), 2-col KPI |
| Desktop | 1024px+ | Full sidebar 240px, 4-col KPI |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Page background:   #F9FAFB
Card background:   #FFFFFF
Card border:       #E5E7EB
Heading:           #111827
Body:              #374151
Muted:             #6B7280
Primary accent:    #4F46E5
Success:           #16A34A / bg #F0FDF4
Error:             #DC2626 / bg #FEF2F2
Warning:           #D97706 / bg #FFFBEB
Sidebar active:    rgba(79,70,229,0.08)
```

### Example Prompts
- "Build a SaaS dashboard layout: #F9FAFB page background. Left sidebar 240px #FFFFFF with right border 1px #E5E7EB. Sidebar: logo area 56px, nav items (8px 12px padding, 6px radius, active state rgba(79,70,229,0.08) with #4F46E5 text). Top bar: 56px #FFFFFF, 1px #E5E7EB border-bottom, breadcrumb left 14px. Main content 24px padding: page title 24px Inter weight 600 #111827."
- "Create 4 KPI metric cards for a dashboard: #FFFFFF bg, 1px solid #E5E7EB border, 8px radius, 20px 24px padding, 0 1px 3px rgba(0,0,0,0.06) shadow. Label: 12px weight 500 #6B7280 uppercase. Value: 32px weight 700 #111827. Change row: 13px weight 500, green #16A34A for positive (+12.5% ↑)."
- "Design a data table: header row (transparent bg, 1px #E5E7EB bottom border, 12px weight 500 #6B7280 uppercase, 12px 16px padding). Data rows (52px height, 1px #F3F4F6 bottom, 14px #374151, hover #F9FAFB). Status column: pill badges (success green, error red, warning amber, all 100px radius 12px weight 500). Amount: right-aligned weight 500 #111827 tabular-nums."

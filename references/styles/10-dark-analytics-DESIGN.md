---
version: alpha
name: "Dark Analytics Dashboard"
colors:
  surface: "#0F1117"
  surface-variant: "#161B22"
  on-surface: "#E6EDF3"
  primary: "#D29922"
  on-primary: "#111111"
  accent: "#39C5CF"
  deepest: "#0A0B0F"
  surface-raised: "#1C2333"
  surface-high: "#21262D"
  border: "#30363D"
  border-strong: "#484F58"
  text-secondary: "#8B949E"
  text-muted: "#6E7681"
  data-green: "#3FB950"
  data-red: "#F85149"
  data-blue: "#388BFD"
  data-purple: "#BC8CFF"
  data-yellow: "#E3B341"
typography:
  jetbrains-mono:
    fontSize: 36px
    fontWeight: 700
  jetbrains-mono:
    fontSize: 11px
    fontWeight: 400
rounded:
  none: 4px
  sm: 6px
  md: 8px
components:
  kpi-metric-panel:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.border}"
    rounded: "8px"
    padding: "16px 20px"
  chart-panel:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.border}"
    rounded: "8px"
    padding: "16px 20px"
  data-table:
    backgroundColor: "transparent"
    border: "1px solid {colors.border}"
    rounded: "8px"
    hover: "background {colors.surface-raised}"
  alert-banner:
    rounded: "4px, padding: 10px 14px"
  time-range-selector:
    backgroundColor: "{colors.surface-raised}"
    border: "1px solid {colors.border}"
    rounded: "6px"
    padding: "4px"
---

# Design System: Dark Analytics Dashboard
# 暗色数据分析看板风格

> **风格定位**：深色背景、数据为王、霓虹强调色。彭博终端 + Grafana + Datadog 的现代化演绎。
> **适用场景**：运维监控、量化交易、数据分析平台、DevOps 工具、实时数据看板、BI 工具
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Dark Analytics is built for focus and endurance. Users staring at data for hours need a design that reduces eye strain, increases data density, and highlights critical information through color — not layout tricks. The dark background is not an aesthetic choice — it's an ergonomic one.

The color language is functional: green means good, red means alert, amber means warning. Charts glow against the dark background. Every color serves a data role. No decorative use of color is permitted.

This is the design system of tools that handle real consequences — servers going down, trades executing, pipelines failing. The design must communicate state instantly, at a glance, from across the room.

**Key Characteristics:**
- Deep dark background (#0F1117 or #111827)
- High data density — more information per pixel than light-mode dashboards
- Neon/bright accent colors against dark backgrounds for instant recognition
- Green = positive/healthy, Red = alert/negative, Amber = warning, Blue = info
- Charts: glow effect on lines/bars against dark background
- Monospace font for data values (precision matters)
- Minimal UI chrome — maximize data real estate

---

## 2. Color Palette & Roles

### Background Scale
- **Deepest** (`#0A0B0F`): Absolute darkest — full-screen modal overlays.
- **Base** (`#0F1117`): Primary app background.
- **Surface** (`#161B22`): Cards, panels.
- **Surface Raised** (`#1C2333`): Elevated elements, active states.
- **Surface High** (`#21262D`): Tooltips, popovers.
- **Border** (`#30363D`): Subtle borders between panels.
- **Border Strong** (`#484F58`): Emphasized borders, table headers.

### Text
- **Text Primary** (`#E6EDF3`): Headings, primary values.
- **Text Secondary** (`#8B949E`): Labels, secondary info.
- **Text Muted** (`#6E7681`): Metadata, timestamps, disabled.
- **Text Subtle** (`#484F58`): Very muted content.

### Data Status Colors (functional — never decorative)
- **Data Green** (`#3FB950`): Healthy, passing, positive delta.
- **Data Green Dim** (`rgba(63,185,80,0.15)`): Green row/card backgrounds.
- **Data Red** (`#F85149`): Critical, failing, negative delta.
- **Data Red Dim** (`rgba(248,81,73,0.15)`): Error row/card backgrounds.
- **Data Amber** (`#D29922`): Warning, degraded, approaching limit.
- **Data Amber Dim** (`rgba(210,153,34,0.15)`): Warning backgrounds.
- **Data Blue** (`#388BFD`): Informational, primary metric.
- **Data Blue Dim** (`rgba(56,139,253,0.15)`): Info backgrounds.
- **Data Purple** (`#BC8CFF`): Secondary metric, comparison data.
- **Data Cyan** (`#39C5CF`): Alternative accent, cool metric.
- **Data Yellow** (`#E3B341`): Highlight, special annotation.

### Chart Colors (sequential use for multi-series charts)
1. `#388BFD` Blue
2. `#3FB950` Green
3. `#BC8CFF` Purple
4. `#D29922` Amber
5. `#F85149` Red
6. `#39C5CF` Cyan

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Base | `#0F1117` | `#0F1117` | 1:1 | FAIL |
| Text Primary | `#E6EDF3` | `#0F1117` | 16:1 | AAA |
| Text Secondary | `#8B949E` | `#0F1117` | 6.1:1 | AA |
| Text Muted | `#6E7681` | `#0F1117` | 4.1:1 | AA-large |
| Data Blue | `#388BFD` | `#0F1117` | 5.6:1 | AA |
| Data Purple | `#BC8CFF` | `#0F1117` | 7.5:1 | AAA |

## 3. Typography Rules

### Font Family
- **UI**: `Inter`, fallback: `system-ui`
- **Data/Metrics**: `JetBrains Mono` or `Fira Code` (monospace for precision)
- **Large Numbers**: Inter with `font-variant-numeric: tabular-nums`

### Hierarchy

| Role | Family | Size | Weight | Color | Notes |
|------|--------|------|--------|-------|-------|
| Dashboard Title | Inter | 20px | 600 | #E6EDF3 | |
| Panel Title | Inter | 14px | 600 | #E6EDF3 | Card/panel headings |
| Label | Inter | 12px | 500 | #8B949E | Axis labels, field names |
| Data Value | JetBrains Mono | 28–36px | 700 | #E6EDF3 | KPI numbers |
| Data S | JetBrains Mono | 16px | 600 | #E6EDF3 | Secondary metrics |
| Table Cell | Inter | 13px | 400 | #E6EDF3 | Table data |
| Table Header | Inter | 11px | 600 | #8B949E | Uppercase, letter-spaced |
| Timestamp | JetBrains Mono | 11px | 400 | #6E7681 | Log timestamps |
| Status | Inter | 11px | 600 | (semantic) | Status badges |

---

## 4. Component Stylings

### KPI Metric Panel
```
background: #161B22
border: 1px solid #30363D
border-radius: 8px
padding: 16px 20px

Panel label: 12px Inter weight 600 uppercase #8B949E letter-spacing 0.5px
Main value: 32px JetBrains Mono weight 700 #E6EDF3 tabular-nums
Delta: 13px weight 600
  Positive: #3FB950 ↑ "+12.4%"
  Negative: #F85149 ↓ "-3.1%"
Sparkline: 40px height, accent color line, no axes
```

### Chart Panel
```
background: #161B22
border: 1px solid #30363D
border-radius: 8px
padding: 16px 20px

Panel header: title left + time range selector right
Chart area: full width, dark grid (#21262D), colored data lines
  Line charts: 2px line weight, with glow: filter drop-shadow(0 0 6px currentColor)
  Bar charts: 60% opacity fill + full opacity on hover
  Area charts: 20% opacity fill under line
Grid lines: #21262D, very subtle
Axis labels: 11px JetBrains Mono #6E7681
```

### Data Table (Dense)
```
background: transparent
border: 1px solid #30363D
border-radius: 8px
overflow: hidden

Header: background #1C2333, 11px Inter weight 600 uppercase #8B949E, 10px 16px padding
Rows: 13px Inter #E6EDF3, 10px 16px padding, height 40px
      border-bottom: 1px solid #21262D
      hover: background #1C2333
Status column: colored badges
Numeric: right-aligned, JetBrains Mono weight 500 tabular-nums
```

### Status Indicator (health dots)
```
Online/Healthy:  8px circle #3FB950 + box-shadow 0 0 6px #3FB950
Warning:         8px circle #D29922 + box-shadow 0 0 6px #D29922
Critical:        8px circle #F85149 + box-shadow 0 0 6px #F85149
Unknown:         8px circle #6E7681
```

### Alert Banner
```
Critical: background rgba(248,81,73,0.12), border-left 3px solid #F85149
Warning:  background rgba(210,153,34,0.12), border-left 3px solid #D29922
Info:     background rgba(56,139,253,0.12), border-left 3px solid #388BFD
border-radius: 4px, padding: 10px 14px
text: 13px Inter #E6EDF3
```

### Time Range Selector
```
background: #1C2333
border: 1px solid #30363D
border-radius: 6px
padding: 4px

Pill options: 11px Inter weight 500 #8B949E
Active pill: background #21262D, color #E6EDF3, border-radius 4px
```

---

## 5. Layout Principles

### Dashboard Grid
- Modular panel system: panels snap to 4, 6, 8, or 12 column widths
- Panel minimum height: 120px (KPI), 240px (charts), 320px (tables)
- Gap between panels: 12px
- Page padding: 16px

### Information Hierarchy
- Top row: 3–4 KPI cards (most important metrics at a glance)
- Second row: 1–2 charts (trend visualization)
- Third row+: tables, logs, detailed data
- Right sidebar: real-time log stream or alert feed

### Panel Density Modes
- **Compact**: 40px row height, 11px text — maximum data density
- **Standard**: 52px row height, 13px text — default
- **Comfortable**: 64px row height, 14px text — fewer simultaneous panels

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | `#0F1117` | App background |
| Panel | `#161B22` + 1px border | Dashboard cards |
| Raised | `#1C2333` + stronger border | Table headers, active rows |
| High | `#21262D` + `0 8px 24px rgba(0,0,0,0.5)` | Modals, tooltips |
| Overlay | `rgba(0,0,0,0.7)` | Full-screen modal backdrop |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 4px | Square elements |
| sm | 6px | Inputs, tags |
| md | 8px | Cards, buttons |

---

## 7. Do's and Don'ts

### Do
- Use color ONLY for data semantics (green=good, red=bad, amber=warning)
- Apply monospace fonts (JetBrains Mono) for all metric values
- Add glow effects to status indicators and chart lines (box-shadow/drop-shadow)
- Keep panel padding tight (16px) — maximize data density
- Use `tabular-nums` on ALL numeric data
- Show trends with sparklines next to KPI values
- Apply `rgba(color, 0.15)` backgrounds for status-colored rows

### Don't
- Don't use decorative gradients or background artwork
- Don't use light colors for non-semantic purposes — every color is a signal
- Don't use serif fonts — precision data demands clean sans/mono
- Don't apply glassmorphism — transparency adds visual noise to data
- Don't animate charts constantly — only animate on data update

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | KPIs stack vertically, charts reduce to critical-only, tables → card view |
| Tablet | 768–1024px | 2-col KPIs, simplified charts |
| Desktop | 1024px+ | Full dashboard, all panels visible |

### Mobile Dashboard
- Show only the 3 most critical KPIs
- Replace complex charts with single-line sparklines + value
- Replace data tables with summary cards
- Add "View Full Dashboard" CTA (optimized for desktop use)

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #0F1117
Surface:         #161B22
Border:          #30363D
Text primary:    #E6EDF3
Text secondary:  #8B949E
Healthy green:   #3FB950 / dim rgba(63,185,80,0.15)
Critical red:    #F85149 / dim rgba(248,81,73,0.15)
Warning amber:   #D29922 / dim rgba(210,153,34,0.15)
Info blue:       #388BFD / dim rgba(56,139,253,0.15)
```

### Example Prompts
- "Build a dark analytics dashboard: #0F1117 background. Top row: 4 KPI panels (#161B22 bg, 1px solid #30363D border, 8px radius, 16px 20px padding). Each panel: label 12px Inter weight 600 uppercase #8B949E, value 32px JetBrains Mono weight 700 #E6EDF3, delta row (13px #3FB950 for positive with ↑). Below: 2 chart panels (one 2/3 width, one 1/3). Chart bg #161B22, colored lines with glow effect."
- "Create a status table for dark analytics: header row background #1C2333, 11px uppercase #8B949E. Data rows 40px height, 13px #E6EDF3, hover #1C2333, bottom border 1px #21262D. Status column: glowing dots (8px circle, #3FB950 with shadow for healthy, #F85149 for critical). Numeric columns: right-aligned JetBrains Mono weight 500 tabular-nums."

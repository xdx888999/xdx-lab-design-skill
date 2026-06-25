---
version: alpha
name: "Corporate Blue"
colors:
  surface: "#FFFFFF"
  surface-variant: "#EEF0F3"
  on-surface: "#001F4E"
  primary: "#0055A5"
  on-primary: "#FFFFFF"
  accent: "#5C9EEB"
  error: "#C7000B"
  success: "#006B3C"
  warning: "#9E5C00"
  off-white: "#F4F6F8"
  mid-gray: "#D0D5DC"
  blue-700: "#003B7A"
  blue-500: "#0F62FE"
  blue-100: "#E8F1FB"
  heading: "#1A2332"
  body: "#3D4F61"
  secondary: "#6B7A8D"
  muted: "#9BA8B5"
typography:
  115:
    fontFamily: "IBM Plex Sans"
    fontSize: 5px
    fontWeight: 1
  h2:
    fontFamily: "IBM Plex Sans"
    fontSize: 28px
    fontWeight: 600
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: 16px
    fontWeight: 400
  1:
    fontFamily: "IBM Plex Sans"
    fontSize: 2px
    fontWeight: 3
rounded:
  none: 0px
  default: 4px
spacing:
  base: 8px
  card-padding: 24px
  section-padding: 64px
  max-width: 1200px
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "12px 24px"
    rounded: "4px"
    border: "none"
    typography: "IBM Plex Sans 15px weight 500"
    height: "44px"
    hover: "background {colors.blue-700}"
    focus: "outline 2px solid {colors.primary} offset 2px"
  ghost-button:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    padding: "11px 23px"
    border: "1px solid {colors.primary}"
    rounded: "4px"
    typography: "IBM Plex Sans 15px weight 500"
    hover: "background {colors.blue-100}"
  card:
    backgroundColor: "{colors.on-primary}"
    border: "1px solid {colors.mid-gray}"
    rounded: "4px"
    padding: "24px"
    shadow: "0 2px 4px rgba(0,0,0,0.06)"
  data-table:
    typography: "14px weight 400 {colors.body}"
  navigation:
    backgroundColor: "{colors.blue-700} (dark blue header)"
    height: "64px"
---

# Design System: Corporate Blue
# 企业标准蓝风格

> **风格定位**：专业、可信、严谨。全球500强企业的数字化语言，IBM Carbon + 麦肯锡官网的结合体。
> **适用场景**：大型企业官网、B2B 解决方案、咨询公司、政府机构、律所/会计所、企业年报
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Corporate Blue represents institutional trust translated into digital form. This is the design language of organizations that have been trusted for decades — IBM, Accenture, McKinsey, Deloitte. The visual system communicates competence, scale, and reliability above all else.

The palette is anchored by a confident blue — not the electric blue of startups, but the deeper, more considered blue of institutions. Structure is paramount: clear typographic hierarchy, precise grid adherence, and restrained use of color signal that this organization takes accuracy seriously.

This is not boring design — it is disciplined design. Every element is where it is because it belongs there, not because it looked interesting.

**Key Characteristics:**
- Primary blue: deep, confident, institutional (#003B7A or #0F62FE)
- White primary background with clear structural sections
- Gray hierarchy (warm grays, not cool) for text
- Conservative borders and subtle shadows
- Typography: clean sans-serif, systematic hierarchy
- Grid: rigid 12-column, consistent gutters
- No decorative elements — icons and charts are functional only

---

## 2. Color Palette & Roles

### Foundation
- **White** (`#FFFFFF`): Primary background.
- **Off-White** (`#F4F6F8`): Section backgrounds, alternating rows.
- **Light Gray** (`#EEF0F3`): Card backgrounds, code blocks.
- **Mid Gray** (`#D0D5DC`): Borders, dividers.

### Corporate Blue Scale
- **Blue 900** (`#001F4E`): Darkest — footers, dark-mode headers.
- **Blue 700** (`#003B7A`): Primary brand blue — headers, hero sections.
- **Blue 600** (`#0055A5`): CTA buttons, links.
- **Blue 500** (`#0F62FE`): IBM Carbon-style interactive blue (alternative primary).
- **Blue 300** (`#5C9EEB`): Secondary/hover accent.
- **Blue 100** (`#E8F1FB`): Light tint backgrounds, selected states.

### Text
- **Heading** (`#1A2332`): Deep navy-black for headings.
- **Body** (`#3D4F61`): Medium blue-gray body text.
- **Secondary** (`#6B7A8D`): Supporting text, captions.
- **Muted** (`#9BA8B5`): Placeholders, disabled, metadata.

### Semantic
- **Success** (`#006B3C`): Green — confirmed, approved, positive.
- **Warning** (`#9E5C00`): Amber — caution, pending.
- **Error** (`#C7000B`): Red — critical, failed, required.
- **Info** (`#0055A5`): Blue — informational (same as brand blue).

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| White | `#FFFFFF` | `#FFFFFF` | 1:1 | FAIL |
| Blue 700 | `#003B7A` | `#FFFFFF` | 11:1 | AAA |
| Blue 600 | `#0055A5` | `#FFFFFF` | 7.4:1 | AAA |
| Blue 500 | `#0F62FE` | `#FFFFFF` | 5:1 | AA |
| Blue 300 | `#5C9EEB` | `#FFFFFF` | 2.8:1 | FAIL |
| Heading | `#1A2332` | `#FFFFFF` | 15.8:1 | AAA |
| Body | `#3D4F61` | `#FFFFFF` | 8.4:1 | AAA |
| Secondary | `#6B7A8D` | `#FFFFFF` | 4.4:1 | AA-large |
| Muted | `#9BA8B5` | `#FFFFFF` | 2.4:1 | FAIL |

## 3. Typography Rules

### Font Family
- **Primary**: `IBM Plex Sans`, fallback: `Inter`, `Helvetica Neue`, `sans-serif`
- **Alternative**: `Source Sans Pro`, `Open Sans` (free alternatives)
- **Monospace**: `IBM Plex Mono` (for technical content, code)

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color |
|------|------|--------|-------------|----------------|-------|
| Display | 52px | 600 | 1.1 | -1px | #1A2332 |
| H1 | 40px | 600 | 1.15 | -0.5px | #1A2332 |
| H2 | 28px | 600 | 1.2 | -0.2px | #1A2332 |
| H3 | 22px | 600 | 1.25 | 0 | #1A2332 |
| H4 | 18px | 600 | 1.3 | 0 | #1A2332 |
| Body L | 18px | 400 | 1.65 | 0 | #3D4F61 |
| Body | 16px | 400 | 1.6 | 0 | #3D4F61 |
| Body S | 14px | 400 | 1.5 | 0 | #6B7A8D |
| Label | 12px | 500 | 1.3 | 0.8px | #6B7A8D UPPERCASE |
| Nav | 14px | 500 | 1 | 0.2px | #3D4F61 |

---

## 4. Component Stylings

### Primary Button
```
background: #0055A5
color: #FFFFFF
padding: 12px 24px
border-radius: 4px
border: none
font: IBM Plex Sans 15px weight 500
height: 44px
hover: background #003B7A
focus: outline 2px solid #0055A5 offset 2px
```

### Ghost Button
```
background: transparent
color: #0055A5
padding: 11px 23px
border: 1px solid #0055A5
border-radius: 4px
font: IBM Plex Sans 15px weight 500
hover: background #E8F1FB
```

### Card
```
background: #FFFFFF
border: 1px solid #D0D5DC
border-radius: 4px
padding: 24px
box-shadow: 0 2px 4px rgba(0,0,0,0.06)
```

### Data Table
```
Header: background #F4F6F8, border-bottom 2px solid #003B7A
        font: 13px IBM Plex Sans weight 600 uppercase letter-spacing 0.5px #1A2332
Rows: border-bottom 1px solid #EEF0F3, height 52px
      font: 14px weight 400 #3D4F61
Hover row: background #F4F6F8
Striped alt: background #FAFBFC
```

### Navigation
```
background: #003B7A (dark blue header)
height: 64px
Logo/brand: IBM Plex Sans weight 600 18px #FFFFFF
Links: 14px weight 400 rgba(255,255,255,0.85), hover #FFFFFF
CTA: white button or outline variant
```
Alternately: White header with blue accents for less dominant designs.

### Alert/Notice
```
Info:    background #E8F1FB, border-left 4px solid #0055A5, color #1A2332
Success: background #E6F4ED, border-left 4px solid #006B3C, color #1A2332
Warning: background #FFF3E0, border-left 4px solid #9E5C00, color #1A2332
Error:   background #FDE8EA, border-left 4px solid #C7000B, color #1A2332
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale follows IBM Carbon: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px
- Card padding: 24px
- Section padding: 64–80px vertical
- Content max width: 1200px

### Grid
- 12-column grid, 24px gutter (16px on mobile)
- Left-aligned content — no full-center layouts
- Sidebar layouts common: 3-col nav + 9-col content, or 4+8

### Structure
- Clear section differentiation: white → light gray → white alternation
- Horizontal dividers (1px #D0D5DC) between major sections
- Headers and footers in deep blue (#003B7A)
- Content in white with blue accent headers

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| base | 8px |
| card-padding | 24px |
| section-padding | 64px |
| max-width | 1200px |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `border: 1px solid #D0D5DC` | Standard cards |
| Lifted | `0 2px 4px rgba(0,0,0,0.06)` | Hovered cards |
| Raised | `0 4px 8px rgba(0,0,0,0.1)` | Modals, dropdowns |
| Hero | `0 8px 24px rgba(0,21,74,0.15)` | Brand-tinted shadow for hero |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 0px | Square elements |
| default | 4px | Default radius |

---

## 7. Do's and Don'ts

### Do
- Use #003B7A or #0055A5 as the structural color for headers/CTAs
- Apply IBM Plex Sans — it was designed specifically for enterprise digital products
- Use 4px border-radius consistently — sharp corners signal precision
- Create clear section hierarchy with alternating white/off-white backgrounds
- Show trust signals prominently: certifications, client logos, case studies
- Use bold blue left-border on alert/callout blocks (IBM Carbon pattern)

### Don't
- Don't use gradients on buttons or backgrounds
- Don't use round (pill) buttons — they look like consumer apps
- Don't use font weight 300 — it looks lightweight and uncertain
- Don't use more than 2 shades of blue simultaneously
- Don't use illustration style that looks playful/consumer — stick to abstract icons

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Hamburger menu, 16px padding, single column |
| Tablet | 640–1024px | Collapsible navigation, 2-column cards |
| Desktop | 1024px+ | Full navigation, multi-column layouts |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:    #FFFFFF / #F4F6F8 (section)
Heading:       #1A2332
Body:          #3D4F61
Border:        #D0D5DC
Primary blue:  #0055A5
Dark blue:     #003B7A
Blue light:    #E8F1FB
CTA text:      #FFFFFF
```

### Example Prompts
- "Build a corporate B2B hero section: white background. Dark blue header bar #003B7A, IBM Plex Sans 14px white links, white CTA button outline. Hero: 52px IBM Plex Sans weight 600 letter-spacing -1px #1A2332. Body 18px weight 400 #3D4F61 line-height 1.65. CTA: #0055A5 background white text 4px radius 12px 24px padding. Client logos row below: grayscale, 8 logos, flex with 40px gaps."
- "Design a corporate service card: white bg, 1px solid #D0D5DC border, 4px radius, 24px padding, 0 2px 4px rgba(0,0,0,0.06) shadow. Top: icon in #E8F1FB square 48px 4px radius. Title: 22px IBM Plex Sans weight 600 #1A2332. Body: 15px weight 400 #3D4F61. Link: 14px weight 500 #0055A5 with → arrow. Hover: shadow increases."

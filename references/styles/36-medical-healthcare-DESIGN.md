---
version: alpha
name: "Medical & Healthcare"
colors:
  surface: "#FFFFFF"
  surface-variant: "#EFF6FF"
  on-surface: "#111827"
  primary: "#D97706"
  on-primary: "#111111"
  accent: "#67E8F9"
  error: "#DC2626"
  success: "#059669"
  soft-blue-gray: "#F8FAFB"
  medical-teal: "#0891B2"
  teal-dark: "#0E7490"
  teal-tint: "#E0F7FC"
  green-tint: "#ECFDF5"
  info-blue: "#2563EB"
  text-secondary: "#374151"
  text-muted: "#6B7280"
  border: "#E5E7EB"
typography:
  hero-headline:
    fontFamily: "DM Sans"
    fontSize: 56px
    fontWeight: 700
  sub-heading:
    fontFamily: "DM Sans"
    fontSize: 24px
    fontWeight: 600
  medical-data:
    fontFamily: "DM Sans"
    fontSize: 36px
    fontWeight: 700
  caption:
    fontFamily: "DM Sans"
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 6px
  sm: 8px
spacing:
  section-padding: 80px
components:
  card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "8px"
    padding: "24px"
    shadow: "0 4px 12px rgba(8,145,178,0.12)"
  button:
    backgroundColor: "{colors.error}"
    textColor: "{colors.surface}"
    rounded: "8px"
    padding: "12px 24px"
    typography: "DM Sans 600 15px"
    hover: "background {colors.surface-variant}"
    border: "2px solid {colors.medical-teal}"
  form-field:
    backgroundColor: "{colors.surface}"
    border: "1.5px solid {colors.border}"
    rounded: "6px"
    padding: "10px 14px"
    typography: "DM Sans 400 15px {colors.text-secondary}"
    focus: "border-color {colors.medical-teal}, box-shadow 0 0 0 3px rgba(8,145,178,0.15)"
  metric-vital-sign-display:
    backgroundColor: "{colors.surface-variant} or {colors.green-tint}"
    rounded: "8px"
    padding: "16px 20px"
---

# Design System: Medical & Healthcare
# 医疗健康风格

> **风格定位**：临床信任感与人文关怀的平衡。Mayo Clinic 的专业严谨 + Hims 的现代亲和。
> **适用场景**：医院官网、健康管理App、医疗器械品牌、药品平台、远程问诊、心理健康产品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Healthcare design must achieve two seemingly contradictory goals: inspire absolute trust and feel warmly human. Patients are often anxious. The design must signal competence (clinical white, precise typography, structured information hierarchy) while never feeling cold or institutional.

The visual language borrows from modern healthcare brands like One Medical, Hims, and Calm Health: clean white backgrounds, a primary teal/blue accent that reads as medical without being harsh hospital-blue, generous whitespace for "breathing room" during stressful reading, and photography that shows real people (not stock medical imagery).

**Key Characteristics:**
- Clinical white backgrounds (#FFFFFF or #F8FAFB)
- Medical teal primary (#0891B2) — trustworthy, calming, professional
- Soft blue (#EFF6FF) for section backgrounds — not stark white
- Inter or DM Sans — modern, highly legible at all sizes
- 8px border-radius — rounded enough to feel approachable
- Precise data display: pill dosages, appointment times, vital signs
- Iconography: line icons, never filled/aggressive shapes
- No red except for critical alerts — red triggers anxiety

---

## 2. Color Palette & Roles

### Background
- **Clinical White** (`#FFFFFF`): Primary page background.
- **Soft Blue Gray** (`#F8FAFB`): Alternate section background — subtle differentiation.
- **Sky Tint** (`#EFF6FF`): Feature sections, card backgrounds — calming blue hint.

### Primary — Trust Blue-Teal
- **Medical Teal** (`#0891B2`): Primary brand — buttons, links, key UI.
- **Teal Dark** (`#0E7490`): Hover states, headings.
- **Teal Light** (`#67E8F9`): Highlights, badges.
- **Teal Tint** (`#E0F7FC`): Background tints for featured content.

### Secondary — Healing Green
- **Health Green** (`#059669`): Positive results, success states, "healthy" indicators.
- **Green Tint** (`#ECFDF5`): Success backgrounds.

### Semantic
- **Alert Red** (`#DC2626`): Critical warnings ONLY — use sparingly.
- **Caution Amber** (`#D97706`): Warnings, important notices.
- **Info Blue** (`#2563EB`): Informational callouts.

### Neutral
- **Text Primary** (`#111827`): Headlines, primary content.
- **Text Secondary** (`#374151`): Body text.
- **Text Muted** (`#6B7280`): Labels, captions, supporting info.
- **Border** (`#E5E7EB`): Form fields, card borders.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Clinical White | `#FFFFFF` | `#FFFFFF` | 1:1 | FAIL |
| Medical Teal | `#0891B2` | `#FFFFFF` | 3.7:1 | AA-large |
| Teal Dark | `#0E7490` | `#FFFFFF` | 5.4:1 | AA |
| Text Primary | `#111827` | `#FFFFFF` | 17.7:1 | AAA |
| Text Secondary | `#374151` | `#FFFFFF` | 10.3:1 | AAA |
| Text Muted | `#6B7280` | `#FFFFFF` | 4.8:1 | AA |

## 3. Typography Rules

### Font Family
- **Primary**: `DM Sans` (Google Fonts) — humanist, warm, legible
- **Alternative**: `Inter` — more clinical, equally legible
- **Data/Numbers**: `DM Sans` with `font-variant-numeric: tabular-nums`

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero Headline | 48–56px | 700 | #111827 | max 10 words, patient-focused |
| Section Heading | 32–36px | 700 | #111827 | |
| Sub-heading | 20–24px | 600 | #111827 | |
| Body | 16–17px | 400 | #374151 | line-height: 1.75 |
| Medical Data | 24–36px | 700 | #0891B2 | Vital signs, metrics |
| Label | 12px | 600 | #6B7280 | Uppercase, letter-spacing: 0.5px |
| Caption | 13px | 400 | #6B7280 | |
| Legal/Disclaimer | 11px | 400 | #9CA3AF | |

---

## 4. Component Stylings

### Card (Patient-Friendly)
```
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 8px
padding: 24px
box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)

Featured card:
border-top: 3px solid #0891B2  ← teal accent top
box-shadow: 0 4px 12px rgba(8,145,178,0.12)
```

### Button
```
Primary:
  background: #0891B2
  color: #FFFFFF
  border-radius: 8px
  padding: 12px 24px
  font: DM Sans 600 15px
  hover: background #0E7490

Outline:
  background: transparent
  border: 2px solid #0891B2
  color: #0891B2
  hover: background #EFF6FF

Danger (use sparingly):
  background: #DC2626
  color: #FFFFFF
```

### Form Field
```
background: #FFFFFF
border: 1.5px solid #E5E7EB
border-radius: 6px
padding: 10px 14px
font: DM Sans 400 15px #374151
focus: border-color #0891B2, box-shadow 0 0 0 3px rgba(8,145,178,0.15)
error: border-color #DC2626, box-shadow 0 0 0 3px rgba(220,38,38,0.1)
```

### Alert / Notice
```
Info: background #EFF6FF, border-left 4px solid #2563EB, icon #2563EB
Success: background #ECFDF5, border-left 4px solid #059669
Warning: background #FFFBEB, border-left 4px solid #D97706
Critical: background #FEF2F2, border-left 4px solid #DC2626

Text: DM Sans 400 14px corresponding color
```

### Metric / Vital Sign Display
```
background: #EFF6FF or #ECFDF5
border-radius: 8px
padding: 16px 20px
Value: 36px DM Sans weight 700 #0891B2 tabular-nums
Unit: 16px weight 400 #6B7280 (ml, mmHg, bpm)
Label: 12px weight 600 uppercase #6B7280 letter-spacing 0.5px
Trend: 14px #059669 "↑ Normal" or #DC2626 "↑ High"
```

---

## 5. Layout Principles

- **Scannable sections**: Patients scan, not read — clear H2, H3 hierarchy
- **Max-width**: 1100px content, 720px for text-heavy articles
- **Section padding**: 80px desktop, 48px mobile
- **Trust signals**: Doctor credentials, certifications, patient numbers — place high
- **Form clarity**: Single-column forms, one question per step (wizard pattern)
- **Accessibility**: WCAG AA minimum; 4.5:1 contrast ratio; touch targets 44px+

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 80px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#FFFFFF` or `#F8FAFB` |
| Card | `#FFFFFF` + 1px border + subtle shadow |
| Featured | Teal top border + stronger shadow |
| Modal | White + `box-shadow: 0 20px 60px rgba(0,0,0,0.15)` |
| Overlay | `rgba(0,0,0,0.5)` backdrop |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 6px | Square elements |
| sm | 8px | Inputs, tags |

---

## 7. Do's and Don'ts

### Do
- Use teal (#0891B2) consistently — color consistency = trust
- Include trust signals near every CTA (doctor certifications, "HIPAA compliant" badges)
- Use photography of real, diverse patients and doctors — not stock clipart
- Write in plain language — patients don't understand medical jargon
- Show progress in multi-step forms — anxiety reduction is a design goal

### Don't
- Don't use red except for genuine critical alerts — it triggers anxiety
- Don't use aggressive, energetic design patterns — this isn't an e-commerce site
- Don't use small fonts — patients may have impaired vision; minimum 15px body
- Don't use dark backgrounds for primary healthcare content — clinical white = safe
- Don't clutter with too many metrics — focus on what the patient needs to know

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; tap targets 48px min; simplified navigation |
| Tablet | 640–1024px | 2-column card grids |
| Desktop | 1024px+ | Full layout with sidebar navigation |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #FFFFFF / #F8FAFB
Teal primary:    #0891B2
Teal dark:       #0E7490
Teal tint:       #E0F7FC / #EFF6FF
Health green:    #059669
Border:          #E5E7EB
Text primary:    #111827
Text body:       #374151
Text muted:      #6B7280
```

### Example Prompts
- "Healthcare product landing page: #FFFFFF background. Hero: 52px DM Sans bold #111827 headline, 18px #374151 subtext. Primary CTA: #0891B2 button, 8px radius. Trust badges row: 5 certification icons, 12px #6B7280 text. Feature cards: white bg, 1px #E5E7EB border, 8px radius, teal top-border 3px, subtle shadow. Statistics row: 3 metrics with large number 48px #0891B2, label 12px uppercase #6B7280. Section background #F8FAFB. No red anywhere."

# Design System: FinTech Clean
# 金融科技极简风格

> **风格定位**：精准、可信、高端。金融级严谨 + 科技公司优雅的结合，代表产品是 Stripe、Wise、Mercury、Brex。
> **适用场景**：支付产品、银行/金融 App、金融 SaaS、企业财务工具、B2B FinTech 官网
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

FinTech Clean is what happens when financial institutions are redesigned by world-class product designers. The style needs to accomplish two seemingly contradictory goals: feel trustworthy enough to handle your money, and feel modern enough to compete with consumer tech apps.

The formula: white canvas, deep navy or charcoal typography (never pure black), a confident brand accent color (purple, green, or teal), and typography that uses weight and spacing rather than decoration to create hierarchy. The result is a design that feels like a well-organized balance sheet — every number has its place, every label is deliberate.

Stripe pioneered much of this language: the multi-layer blue-tinted shadows, the weight-300 headline elegance, the deep navy (#061B31) instead of black. This style document captures those principles in a portable form.

**Key Characteristics:**
- White canvas (#FFFFFF) — uncompromising clarity
- Deep navy/charcoal headings (not black) — warmth and premium feel
- Single confident brand accent (purple, green, or teal)
- Blue-tinted shadows (`rgba(50,50,93,0.25)`) — the FinTech shadow signature
- Typography: elegant sans-serif, tight negative tracking on headings
- Conservative border-radius (4–8px) — precision, not softness
- Data tables and numbers are first-class citizens

---

## 2. Color Palette & Roles

### Foundation (Light Mode)
- **Background** (`#FFFFFF`): Pure white. Primary surface.
- **Surface** (`#F8FAFC`): Slightly elevated surfaces, table rows, code blocks.
- **Surface Raised** (`#F1F5F9`): Hover states, input backgrounds.
- **Heading** (`#0F172A`): Primary heading color — deep navy, not black.
- **Body** (`#475569`): Standard body text — medium slate.
- **Muted** (`#94A3B8`): Captions, placeholders, secondary info.
- **Faint** (`#CBD5E1`): Disabled states.

### Borders
- **Border Default** (`#E2E8F0`): Standard card/container borders.
- **Border Strong** (`#CBD5E1`): Emphasized borders.
- **Border Subtle** (`#F1F5F9`): Very subtle dividers.

### Accent Palettes (choose ONE per product)

**Purple (Stripe-inspired)**
- Primary: `#6366F1`
- Dark: `#4338CA`
- Light bg: `rgba(99,102,241,0.08)`
- Border: `rgba(99,102,241,0.2)`

**Green (Wise/Brex-inspired)**
- Primary: `#059669`
- Dark: `#047857`
- Light bg: `rgba(5,150,105,0.08)`
- Border: `rgba(5,150,105,0.2)`

**Blue (Mercury/corporate-inspired)**
- Primary: `#0EA5E9`
- Dark: `#0284C7`
- Light bg: `rgba(14,165,233,0.08)`
- Border: `rgba(14,165,233,0.2)`

### Semantic
- **Success** (`#059669`): Green for positive values, completed transactions.
- **Success Bg** (`rgba(5,150,105,0.08)`): Success badge background.
- **Error** (`#DC2626`): Negative values, failed transactions.
- **Error Bg** (`rgba(220,38,38,0.08)`): Error badge background.
- **Warning** (`#D97706`): Caution states.
- **Neutral** (`#64748B`): Pending states.

### Dark Mode (Dashboard contexts)
- **Background** (`#0F172A`): Deep navy — not black.
- **Surface** (`#1E293B`): Card backgrounds.
- **Surface Raised** (`#334155`): Elevated elements.
- **Heading** (`#F8FAFC`): Near-white.
- **Body** (`#94A3B8`): Muted slate.
- **Border** (`#334155`): Subtle borders.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, fallback: `SF Pro Text`, `-apple-system`, `sans-serif`
- **Alternative**: `Neue Haas Grotesk`, `DM Sans`
- **Numbers/Tabular**: Inter with `font-variant-numeric: tabular-nums`
- **Monospace**: `JetBrains Mono`, `Fira Code` (for transaction IDs, API keys)

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color | Notes |
|------|------|--------|-------------|----------------|-------|-------|
| Display | 52px / 3.25rem | 300 | 1.1 | -1.5px | #0F172A | Stripe-style elegant light weight |
| H1 | 40px / 2.5rem | 600 | 1.15 | -1px | #0F172A | Page hero |
| H2 | 28px / 1.75rem | 600 | 1.2 | -0.5px | #0F172A | Section heading |
| H3 | 20px / 1.25rem | 600 | 1.25 | -0.2px | #0F172A | Card heading |
| H4 | 16px / 1rem | 600 | 1.4 | 0 | #0F172A | Sub-heading |
| Body L | 18px / 1.125rem | 400 | 1.65 | 0 | #475569 | Feature descriptions |
| Body | 16px / 1rem | 400 | 1.6 | 0 | #475569 | Standard text |
| Body S | 14px / 0.875rem | 400 | 1.5 | 0 | #64748B | UI labels, captions |
| Numeric | 32px+ | 600–700 | 1.0 | -0.5px | #0F172A | tabular-nums |
| Label | 12px / 0.75rem | 500 | 1.3 | 0.5px | #94A3B8 | UPPERCASE labels |
| Code/ID | 13px / 0.8rem | 400 | 1.5 | 0 | #475569 | Mono, transaction IDs |

### FinTech Typography Rules
- **Tabular numerals**: Always use `font-variant-numeric: tabular-nums` for any financial data, tables, dashboards
- **Weight 300 for marketing displays**: The Stripe approach — light headlines feel premium
- **Negative tracking on headings**: -1px to -1.5px on large headings
- **Green/red for value direction**: Positive values #059669, negative values #DC2626

---

## 4. Component Stylings

### Primary Button
```
background: #6366F1 (or brand accent)
color: #FFFFFF
padding: 10px 20px
border-radius: 6px
border: none
font: Inter 14px weight 500
box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
hover: background #4338CA
height: 40px
```

### Secondary Button
```
background: #FFFFFF
color: #0F172A
padding: 10px 20px
border-radius: 6px
border: 1px solid #E2E8F0
font: Inter 14px weight 500
box-shadow: 0 1px 2px rgba(0,0,0,0.05)
hover: background #F8FAFC, border-color #CBD5E1
```

### Card (Standard)
```
background: #FFFFFF
border: 1px solid #E2E8F0
border-radius: 8px
padding: 24px
box-shadow: 0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)
```

### Card (Elevated / FinTech signature shadow)
```
background: #FFFFFF
border: 1px solid #E2E8F0
border-radius: 8px
padding: 24px
box-shadow: rgba(50,50,93,0.25) 0px 30px 60px -12px, rgba(0,0,0,0.3) 0px 18px 36px -18px
```
This is the Stripe-signature multi-layer blue-tinted shadow.

### Data Table
```
Header row: background #F8FAFC, border-bottom 1px solid #E2E8F0
            font: Inter 12px weight 500 uppercase letter-spacing 0.5px color #94A3B8
Data rows: background #FFFFFF alternating #F8FAFC, border-bottom 1px solid #F1F5F9
           font: Inter 14px weight 400 color #475569
Numbers: Inter 14px weight 500 color #0F172A tabular-nums
Positive values: #059669
Negative values: #DC2626
```

### Metric / KPI Card
```
background: #FFFFFF
border: 1px solid #E2E8F0
border-radius: 8px
padding: 20px 24px

Label: 12px Inter weight 500 uppercase letter-spacing 0.5px color #94A3B8
Value: 32px Inter weight 600 color #0F172A tabular-nums
Change: 14px weight 500, green (+) or red (-) with up/down arrow icon
```

### Input
```
background: #FFFFFF
border: 1px solid #E2E8F0
border-radius: 6px
padding: 10px 14px
font: Inter 14px
color: #0F172A
placeholder: #94A3B8
focus: border-color #6366F1, box-shadow 0 0 0 3px rgba(99,102,241,0.12)
error: border-color #DC2626, box-shadow 0 0 0 3px rgba(220,38,38,0.12)
```

### Navigation (Marketing/Product page)
```
background: #FFFFFF
border-bottom: 1px solid #E2E8F0
height: 64px
```
Links: Inter 14px weight 500 #475569, hover #0F172A
CTA: accent button right-aligned

### Badge / Status
```
Success: background rgba(5,150,105,0.08), color #059669, border 1px solid rgba(5,150,105,0.2)
Error:   background rgba(220,38,38,0.08), color #DC2626, border 1px solid rgba(220,38,38,0.2)
Pending: background rgba(100,116,139,0.08), color #475569, border 1px solid rgba(100,116,139,0.2)
All: border-radius 6px, padding 2px 10px, font 12px weight 500
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Card internal padding: 24px (standard), 32px (featured)
- Data table row height: 48px
- Form field height: 40px

### Grid
- Max content width: 1080px (focused, not wide)
- Marketing layout: 12 columns, 24px gutter
- Dashboard layout: sidebar (240px) + main content (flexible)
- Data tables: full-width within container

### Whitespace Philosophy
- Dense for data, generous for marketing
- Marketing pages: 80px between sections
- Dashboards: 16–24px between cards, 24px outer padding
- Never cram financial data — breathing room aids comprehension

---

## 6. Depth & Elevation

| Level | Shadow | Use |
|-------|--------|-----|
| Flat | None | Table rows, subtle containers |
| Minimal | `0 1px 2px rgba(0,0,0,0.05)` | Input fields, minimal cards |
| Default | `0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.05)` | Standard cards |
| Raised | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)` | Hovered/featured cards |
| FinTech Signature | `rgba(50,50,93,0.25) 0px 30px 60px -12px, rgba(0,0,0,0.3) 0px 18px 36px -18px` | Hero cards, product showcases |
| Modal | `rgba(50,50,93,0.25) 0px 50px 100px -20px, rgba(0,0,0,0.3) 0px 30px 60px -30px` | Modals, dialogs |

---

## 7. Do's and Don'ts

### Do
- Use deep navy (#0F172A) for headings — not pure black, the navy adds warmth
- Apply `font-variant-numeric: tabular-nums` to all financial/numeric data
- Use the multi-layer blue-tinted shadow for hero/showcase cards
- Color code values: green for positive, red for negative — universal financial convention
- Use weight 300 for large display text (marketing) — it reads as premium
- Keep border-radius between 4–8px — financial UIs are precise, not soft
- Use the semantic badge system consistently for transaction statuses

### Don't
- Don't use pure black (#000000) for text — deep navy (#0F172A) is more refined
- Don't use warm accent colors (orange, yellow) as primary — they signal risk/warning
- Don't use gradients on buttons — financial trust is built on solidity
- Don't exceed 8px border-radius on key UI elements — precision is the message
- Don't crowd numeric data — generous row height and padding prevent misreads
- Don't use the Stripe-signature shadow for everything — it's for hero moments only

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, tables scroll horizontally, reduced padding 16px |
| Tablet | 640–1024px | 2-column cards, sidebar collapses to drawer |
| Desktop | 1024–1280px | Full dashboard layout, sidebar visible |
| Large | >1280px | Max 1080px centered for marketing, full-width for dashboard |

### Financial Data on Mobile
- Data tables: horizontal scroll with sticky first column
- Metric cards: 2-column grid minimum, never single-column metrics
- Transaction amounts: always visible (never truncated or hidden)

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:         #FFFFFF
Surface:            #F8FAFC
Heading:            #0F172A
Body:               #475569
Muted:              #94A3B8
Border:             #E2E8F0
Primary (purple):   #6366F1
Primary hover:      #4338CA
Success:            #059669
Error:              #DC2626
```

### Example Prompts
- "Design a FinTech hero section: white background #FFFFFF, max-width 1080px centered. Display headline 52px Inter weight 300 letter-spacing -1.5px color #0F172A — light weight for premium feel. Subheading 18px weight 400 #475569 line-height 1.65. Two buttons: primary #6366F1 (6px radius, 10px 20px padding, no shadow) and secondary (white bg, 1px solid #E2E8F0 border, same radius). No gradients."
- "Build a transaction table: white background, header row #F8FAFC with 1px #E2E8F0 bottom border, column labels 12px Inter weight 500 uppercase letter-spacing 0.5px #94A3B8. Data rows 48px height, 14px Inter weight 400 #475569. Amount column: weight 500 #0F172A tabular-nums. Status badges: success rgba(5,150,105,0.08) bg #059669 text, error rgba(220,38,38,0.08) bg #DC2626 text, 6px radius."
- "Create a KPI metric card: white background, 1px solid #E2E8F0 border, 8px radius, 20px 24px padding. Label: 12px Inter weight 500 uppercase letter-spacing 0.5px #94A3B8. Value: 32px weight 600 #0F172A tabular-nums. Change indicator: 14px weight 500 green #059669 for positive with ↑ arrow. Blue-tinted signature shadow: rgba(50,50,93,0.25) 0px 30px 60px -12px, rgba(0,0,0,0.3) 0px 18px 36px -18px."

# Design System: Legal & Professional Authority
# 法律专业权威风格

> **风格定位**：律所、咨询公司、会计师事务所的权威感。深色深蓝 + 金色 + 精准排版——Kirkland & Ellis 的严肃，McKinsey 的精准。
> **适用场景**：律师事务所、法律科技平台、咨询公司、会计师事务所、合规/监管机构、B2B专业服务
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Legal and professional services design must communicate one thing above all: authority. The client needs to trust that this firm has handled matters like theirs before, won, and billed accordingly. The design language is controlled, formal, and deliberately understated — elegance through restraint, not decoration.

Reference points: Cravath Swaine & Moore's dark navy, Sullivan & Cromwell's serif typography, McKinsey's precise data charts, Deloitte's confident blue. The aesthetic is the visual equivalent of a bespoke suit: quality is in the fabric and cut, not in decoration.

**Key Characteristics:**
- Deep navy primary (#0D2040) — authority without aggression
- Champagne gold (#B8962E) — success, prestige (used sparingly)
- Neutral grays for content hierarchy
- Georgia or Playfair Display for headings — classical authority
- Inter for data and navigation — precision
- No rounded corners — formality demands straight edges
- Minimal decoration — the arguments speak for themselves
- Dense but readable information hierarchy

---

## 2. Color Palette & Roles

### Background
- **Parchment White** (`#FAFAF8`): Warm white — not pure white; like quality paper.
- **Light Gray** (`#F5F5F4`): Alternate section backgrounds.
- **Navy Dark** (`#0D2040`): Hero sections, footer, dark-mode panels.

### Primary — Authority Navy
- **Deep Navy** (`#0D2040`): Primary brand — headers, nav, key elements.
- **Navy Mid** (`#1A3660`): Hover states, secondary headings.
- **Navy Light** (`#2E5E9A`): Links, interactive elements.
- **Navy Tint** (`#EBF0F8`): Background tints.

### Gold (Prestige — use sparingly)
- **Champagne Gold** (`#B8962E`): Accent only — borders, icon highlights, key stats.
- **Gold Light** (`#D4AE52`): Hover state for gold elements.
- **Gold Tint** (`#FBF5E6`): Very subtle background for featured content.

### Neutral
- **Text Primary** (`#0D1421`): Very dark, near-black headlines.
- **Text Body** (`#374151`): Body copy.
- **Text Muted** (`#6B7280`): Supporting text, labels.
- **Border** (`#E2E0DC`): Warm-toned borders — not cold gray.

---

## 3. Typography Rules

### Font Family
- **Headings**: `Playfair Display` weight 700 — classical editorial serif
- **Body**: `Georgia` or `Source Serif 4` — readable, authoritative
- **Navigation/Data**: `Inter` — precise, modern counterpoint
- **Legal Small Print**: `Inter` weight 400 at 11–12px

| Role | Size | Weight | Font | Color |
|------|------|--------|------|-------|
| Firm Name / Hero | 48–64px | 700 | Playfair Display | #0D2040 or #FAFAF8 |
| H2 Section | 32–40px | 700 | Playfair Display | #0D2040 |
| H3 Sub | 20–24px | 600 | Playfair Display | #0D2040 |
| Body | 16–17px | 400 | Georgia | #374151 |
| Navigation | 14px | 500 | Inter | #0D2040 |
| Data / Numbers | 36–48px | 700 | Inter | #0D2040 |
| Small Label | 11px | 600 | Inter | #6B7280 |
| Gold Stat Label | 13px | 600 | Inter | #B8962E |

---

## 4. Component Stylings

### Card (Casefile)
```
background: #FAFAF8
border: 1px solid #E2E0DC
border-radius: 0px  ← formality requires straight edges
padding: 28px 32px
border-left: 3px solid #0D2040  ← navy left accent

Featured variant:
border-left: 3px solid #B8962E  ← gold for premium content
```

### Button
```
Primary:
  background: #0D2040
  color: #FAFAF8
  border-radius: 2px  ← minimal rounding only
  padding: 12px 28px
  font: Inter 600 14px letter-spacing: 0.05em
  hover: background #1A3660

Gold Outline (premium):
  background: transparent
  border: 1.5px solid #B8962E
  color: #B8962E
  hover: background #B8962E, color #FAFAF8

Ghost:
  border: 1.5px solid #0D2040
  color: #0D2040
  hover: background #EBF0F8
```

### Practice Area Card (expertise display)
```
background: #0D2040
border-radius: 0px
padding: 32px
color: #FAFAF8
Title: Playfair Display 20px #FAFAF8
Description: 14px #9CA3AF
Gold accent line: border-bottom 2px solid #B8962E
hover: background #1A3660
```

### Attorney Profile Card
```
Photo: rectangular (not circular) — formal
Name: Playfair Display 18px #0D2040 bold
Title: Inter 12px #B8962E uppercase letter-spacing: 1.5px
Details: Inter 13px #374151
border-top: 2px solid #0D2040
```

### Stat / Track Record
```
Number: Inter 56px weight 700 #0D2040 tabular-nums
Label: Inter 13px weight 600 #B8962E uppercase letter-spacing: 1px
Subtext: Inter 13px #6B7280
No background color — stat floats in white space
```

---

## 5. Layout Principles

- **Formal grid**: 12-column, strict alignment — no organic/fluid layouts
- **Max-width**: 1200px
- **Section padding**: 96px desktop, 64px tablet
- **Navigation**: Fixed top nav, dark navy, firm name left, menu right
- **Hero**: Dark navy background, light text, firm statement, one CTA
- **Content density**: Medium — professionals can read; don't over-simplify
- **Footer**: Dark navy, multiple columns, full legal contact information

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#FAFAF8` parchment |
| Card | White + 1px warm border + navy left stripe |
| Featured | Gold left stripe |
| Dark Panels | `#0D2040` navy with `#FAFAF8` text |
| Modal | White + `box-shadow: 0 20px 60px rgba(13,32,64,0.2)` |

---

## 7. Do's and Don'ts

### Do
- Lead with attorney credentials and firm reputation — authority first
- Use Playfair Display for all headings — it reads as "serious and established"
- Use navy and gold together for premium sections — the color pairing signals prestige
- Include case results, deal tombstones, recognition rankings as trust elements
- Keep body text at 16–17px Georgia — dense but readable

### Don't
- Don't use bright colors — a law firm website should never be cheerful
- Don't use rounded corners beyond 2px — formality
- Don't use stock photos of courtroom scenes — use environmental portraits of attorneys
- Don't use animation beyond subtle hover states — seriousness
- Don't write in legalese — websites are for prospective clients, not judges

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Hamburger nav; single column; practice areas accordion |
| Tablet | 640–1024px | 2-column attorney grid; simplified footer |
| Desktop | 1024px+ | Full 12-column layout; multi-column nav |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #FAFAF8
Navy primary:    #0D2040
Navy mid:        #1A3660
Navy tint:       #EBF0F8
Gold:            #B8962E
Gold light:      #D4AE52
Border:          #E2E0DC
Text primary:    #0D1421
Text body:       #374151
Text muted:      #6B7280
```

### Example Prompts
- "Law firm homepage: #FAFAF8 background. Dark navy (#0D2040) navigation bar with firm name in Playfair Display. Hero: full-width #0D2040 background, large Playfair Display 60px #FAFAF8 headline. Gold CTA button (#B8962E, 2px radius). Practice area cards: white bg, 1px #E2E0DC border, 0px radius, 3px navy left border. Track record stats: large Inter 700 numbers, gold uppercase labels. Attorney grid: rectangular photos, Playfair Display names. No rounded corners. No bright colors."

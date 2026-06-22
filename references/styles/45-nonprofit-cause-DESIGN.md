# Design System: Nonprofit & Cause
# 公益/NGO 风格

> **风格定位**：唤起同理心、激发行动的公益设计。UNICEF 的蓝色信任 + charity: water 的希望 + Patagonia 的真实。
> **适用场景**：NGO官网、慈善基金会、社会企业、环保组织、公益众筹平台、志愿服务平台
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Nonprofit design must generate emotional response and convert it into action (donation, volunteer sign-up, petition signature) while maintaining credibility. The worst nonprofit design looks either too corporate (cold, alienating) or too desperate (guilt-inducing manipulation).

The best examples — charity: water, Oxfam, Patagonia's environmental campaigns — use human photography with dignity, warm but serious color palettes, and urgent but hopeful copy. The design doesn't beg; it invites participation in something meaningful.

**Key Characteristics:**
- Warm white (#FAFAF8) primary background
- Trust blue (#2563EB) as primary — authority and credibility
- Hope amber (#F59E0B) as action accent — warmth, urgency
- Human photography with dignity (never exploitative)
- Impact statistics prominently displayed
- Donation/action CTA always visible and urgent but not desperate
- Inter or Source Sans Pro — accessible, warm
- 8–12px border-radius — approachable and human

---

## 2. Color Palette & Roles

### Background
- **Warm White** (`#FAFAF8`): Primary.
- **Light Gray** (`#F3F4F6`): Section differentiation.
- **Hope Tint** (`#FFF7ED`): Warm amber-tinted sections for action areas.

### Primary — Trust Blue
- **Trust Blue** (`#2563EB`): Primary brand — authority, credibility.
- **Blue Dark** (`#1D4ED8`): Hover, headings.
- **Blue Tint** (`#EFF6FF`): Background tints.

### Action — Hope Amber
- **Hope Amber** (`#F59E0B`): Donation CTAs, urgent actions.
- **Amber Dark** (`#D97706`): Hover.
- **Amber Tint** (`#FFFBEB`): Warm backgrounds.

### Impact — Growth Green
- **Impact Green** (`#059669`): Progress bars, funded percentages, good news.
- **Green Tint** (`#ECFDF5`): Success backgrounds.

### Neutral
- **Text Primary** (`#111827`): Headlines.
- **Text Body** (`#374151`): Body copy.
- **Text Muted** (`#6B7280`): Supporting text.
- **Border** (`#E5E7EB`): Cards, sections.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter` weight 400–700 — universally accessible
- **Display**: `Source Serif 4` weight 600–700 — adds humanity and story to hero moments
- **Body**: `Inter` weight 400

| Role | Size | Weight | Font | Notes |
|------|------|--------|------|-------|
| Mission Statement | 44–56px | 700 | Source Serif 4 | Emotional, specific |
| Impact Stat | 56–72px | 700 | Inter | "$3.2M raised" |
| Section Heading | 28–36px | 700 | Inter | |
| Body | 16–17px | 400 | Inter | line-height: 1.75 |
| Story Quote | 20px | 400 | Source Serif 4 italic | Beneficiary voices |
| Donation Amount | 24–32px | 700 | Inter | tabular-nums |
| Label | 12px | 600 | Inter | Uppercase, letter-spacing: 0.5px |

---

## 4. Component Stylings

### Impact Stat Block
```
Large number: Inter 700 64px #111827 (or trust blue #2563EB)
Unit: 28px same weight inline
Label: Inter 400 15px #6B7280 below
Accent line: 3px bottom border in amber or green

3–4 stats in a row: equal width, centered content
```

### Donation Card / Giving Tier
```
background: #FFFFFF
border: 2px solid #E5E7EB
border-radius: 12px
padding: 24px
hover/selected: border-color #2563EB, box-shadow 0 0 0 4px rgba(37,99,235,0.1)

Amount: Inter 700 32px #111827
Impact description: Inter 400 14px #374151
"Feed 12 children for a month"
CTA: full-width amber button at bottom

Popular tier: border-color #F59E0B, badge "MOST POPULAR" amber pill
```

### Fundraising Progress Bar
```
Track: background #E5E7EB, height 10px, border-radius 999px
Fill: background #059669, border-radius 999px
Label above: "67% funded" Inter 600 14px #059669
Amounts: "€45,280 raised of €68,000 goal" Inter 400 13px #6B7280
```

### Story / Beneficiary Card
```
Photo: human, dignified, full face (not turned away)
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 10px
padding: 20px

Name + Country: Inter 700 16px + flag emoji + 12px muted
Quote: Source Serif 4 18px italic #374151
"Before this project, I walked 3 hours for clean water."
```

### Donation Button (urgent but not desperate)
```
Primary (Donate):
  background: #F59E0B
  color: #FFFFFF
  border-radius: 8px
  padding: 14px 32px
  font: Inter 700 16px
  box-shadow: 0 4px 12px rgba(245,158,11,0.3)
  hover: background #D97706

Secondary (Learn More):
  background: #2563EB
  color: #FFFFFF
```

---

## 5. Layout Principles

- **Impact numbers first**: Lead with the most impressive statistic — gives credibility
- **Story before ask**: Establish emotional connection before the donation CTA
- **Sticky donation bar**: For campaign pages, keep donation form/link visible on scroll
- **Max-width**: 1100px
- **Section padding**: 80px desktop, 48px mobile
- **Photography**: Full-bleed story headers; no stock imagery

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#FAFAF8` or `#F3F4F6` |
| Card | `#FFFFFF` + 1px border + subtle shadow |
| Selected/Featured | Blue or amber border |
| CTA section | Amber tint background `#FFF7ED` |

---

## 7. Do's and Don'ts

### Do
- Show the impact of every dollar: "Your $50 provides clean water for a family for 6 months"
- Use human photography with dignity — subjects have names, context, agency
- Display financial transparency clearly — percentage to programs vs overhead
- Make the donation flow 3 steps or fewer: choose amount → payment → confirmation

### Don't
- Don't use guilt-inducing shock photography — dignity in storytelling
- Don't hide fees or overhead — transparency builds trust
- Don't make the donation button the first thing on the page — story first
- Don't use red except for critical campaign deadlines — avoid alarm
- Don't use corporate jargon — "synergy", "leverage" kill human connection

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Sticky bottom donate button; single column; simplified tiers |
| Desktop | 1024px+ | Multi-column impact stats; side-by-side story + donation form |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #FAFAF8
Trust blue:      #2563EB
Blue tint:       #EFF6FF
Hope amber:      #F59E0B
Amber tint:      #FFFBEB
Impact green:    #059669
Border:          #E5E7EB
Text primary:    #111827
Text body:       #374151
```

### Example Prompts
- "NGO campaign page: #FAFAF8 background. Hero: Source Serif 4 48px mission statement, large impact stat (Inter 700 72px) with blue label. Story section: full-bleed photography, beneficiary quote in serif italic. 3-tier donation cards: white bg, 12px radius, amber border on hover, impact description, full-width amber donate button. Fundraising progress bar in green. Trust indicators: financial transparency badges, partner logos."

# Design System: Travel & Hospitality
# 旅行酒店风格

> **风格定位**：逃离日常的视觉邀请。Airbnb 的温暖亲和 + Four Seasons 的精致 + National Geographic 的探险精神。
> **适用场景**：精品酒店、旅行攻略平台、邮轮/旅游公司、民宿、旅行社、目的地营销机构
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Travel design sells the feeling of being somewhere else — better, more beautiful, more alive than here. The design must create instant desire: through lush photography, warm color, and copy that evokes sensation. It is aspirational but accessible.

The visual language sits between luxury and adventure: warm orange-coral accent (sunset, warmth), natural teal (ocean, pool), photography of places not people. The typography is approachable and readable — this is not corporate; it is inviting.

**Key Characteristics:**
- Warm white (#FAFAF8) or full-bleed destination photography
- Coral/terracotta (#E8724A) — warmth, sunsets, adventure
- Ocean teal (#0891B2) — water, escape, horizon
- Lato or DM Sans — warm, friendly, approachable
- Full-bleed photography sections as primary layout tool
- Star ratings, review counts, price/night as key UI elements
- Map integration as a design component
- 10–16px border-radius — soft and welcoming

---

## 2. Color Palette & Roles

### Background
- **Warm White** (`#FAFAF8`): Primary page background.
- **Sand** (`#F5EFE6`): Section backgrounds — warmth of beach.
- **Light Teal** (`#E0F7F7`): Water-inspired sections.

### Primary — Sunset Coral
- **Coral** (`#E8724A`): Primary brand — CTAs, key highlights.
- **Coral Dark** (`#C85A35`): Hover, dark variant.
- **Coral Tint** (`#FEF0EB`): Subtle background.

### Secondary — Ocean Teal
- **Ocean** (`#0891B2`): Secondary — links, info, water-themed.
- **Ocean Light** (`#BAE6F5`): Light tint.

### Semantic
- **Gold Star** (`#F5A623`): Review star ratings.
- **Success** (`#059669`): Booking confirmed, availability.

### Neutral
- **Text Primary** (`#1A1614`): Headlines.
- **Text Body** (`#374151`): Body copy.
- **Text Muted** (`#6B7280`): Supporting info.
- **Border** (`#E5E0D8`): Warm-toned borders.

---

## 3. Typography Rules

### Font Family
- **Primary**: `DM Sans` (Google Fonts) — warm, friendly, legible
- **Display**: `Lora` weight 600–700 — editorial serif for hero moments
- **Body**: `DM Sans` weight 400

| Role | Size | Weight | Font | Notes |
|------|------|--------|------|-------|
| Destination Hero | 52–72px | 600 | Lora | "Paris. Always a good idea." |
| Section Heading | 32–40px | 700 | DM Sans | |
| Property Name | 20–24px | 700 | DM Sans | |
| Price Per Night | 28–36px | 700 | DM Sans | tabular-nums + /night label |
| Body | 16px | 400 | DM Sans | line-height: 1.7 |
| Review Quote | 17px | 400 | Lora italic | Serif for authenticity |
| Label | 12px | 600 | DM Sans | Uppercase, letter-spacing: 0.5px |
| Star Rating | 14px | 700 | DM Sans | "4.9 ★ (2,847 reviews)" |

---

## 4. Component Stylings

### Property/Hotel Card
```
background: #FFFFFF
border: 1px solid #E5E0D8
border-radius: 12px
overflow: hidden
hover: box-shadow 0 6px 20px rgba(0,0,0,0.1), transform translateY(-3px)

Image: 60% of card height, full-width
Saved/Heart: top-right of image, white circular button
Content padding: 14px 16px
Category pill: coral or teal, pill shape
Property name: DM Sans 700 17px #1A1614
Location: DM Sans 400 13px #6B7280 with map pin icon
Rating: gold stars + score + review count
Price: "from $240 /night" — DM Sans 700 20px #1A1614
CTA: small coral outline button "View Details"
```

### Search Box (Hero)
```
background: #FFFFFF
border-radius: 12px
padding: 16px 20px
box-shadow: 0 8px 32px rgba(0,0,0,0.12)

Fields: Destination | Dates | Guests
Each field: label 11px uppercase #6B7280, value 15px DM Sans #1A1614
Dividers: 1px #E5E0D8 vertical
Submit: #E8724A button, border-radius 8px
```

### Review Card
```
background: #FFFFFF
border: 1px solid #E5E0D8
border-radius: 10px
padding: 20px

Stars: gold (#F5A623) filled stars
Quote: Lora 16px italic #374151 line-height 1.7
Author: DM Sans 13px weight 600 #1A1614
Date: DM Sans 12px #6B7280
Verified badge: small teal badge
```

### Button
```
Primary:
  background: #E8724A
  color: #FFFFFF
  border-radius: 8px
  padding: 12px 24px
  font: DM Sans 600 15px
  hover: background #C85A35

Teal:
  background: #0891B2
  color: #FFFFFF

Ghost:
  border: 2px solid #E8724A
  color: #E8724A
  hover: background #FEF0EB
```

---

## 5. Layout Principles

- **Photography first**: Every section anchored by destination imagery
- **Max-width**: 1280px
- **Section padding**: 80px desktop, 48px mobile
- **Search hero**: Overlaid search box on full-bleed destination photography
- **Card grid**: 3-column desktop, 2 tablet, 1 mobile
- **Map sidebar**: Optional 40% width map panel on search results

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#FAFAF8` warm white |
| Card | `#FFFFFF` + 1px warm border + soft shadow |
| Featured | Stronger shadow on hover + slight lift |
| Hero overlay | `rgba(26,22,20,0.4)` for text legibility over photography |
| Search box | Strong shadow on hero: `0 8px 32px rgba(0,0,0,0.12)` |

---

## 7. Do's and Don'ts

### Do
- Use warm tones — coral and sand communicate "vacation"
- Include social proof prominently (reviews, ratings, number of travelers)
- Make prices clear and early — travelers need to scan quickly
- Use the full-bleed hero as an immersive invitation
- Use `Lora` italic for romantic destination copy — serif = story

### Don't
- Don't use cold blues or grays — they feel like business travel, not leisure
- Don't overcrowd the hero with text — let the destination image breathe
- Don't hide pricing — unclear prices lose travelers to Booking.com
- Don't use stock photos of suitcases or airplanes — show the destination

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; sticky bottom CTA; simplified search |
| Tablet | 640–1024px | 2-column card grid |
| Desktop | 1024px+ | 3-column grid; map split view on search |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Warm white:      #FAFAF8
Sand:            #F5EFE6
Coral:           #E8724A
Coral dark:      #C85A35
Coral tint:      #FEF0EB
Ocean teal:      #0891B2
Gold star:       #F5A623
Border:          #E5E0D8
Text primary:    #1A1614
Text muted:      #6B7280
```

### Example Prompts
- "Travel booking platform: #FAFAF8 warm background. Full-bleed hero: destination photo, search box overlay (white, 12px radius, strong shadow, coral submit button). Property cards: white bg, 12px radius, warm border, hover lift. Card content: image top, coral category pill, DM Sans property name, gold stars + review count, 'from $X/night' price in bold. Section headings DM Sans 700 32px. CTA buttons coral (#E8724A). Warm friendly aesthetic throughout."

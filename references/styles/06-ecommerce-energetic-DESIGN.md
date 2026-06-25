---
version: alpha
name: "E-Commerce Energetic"
colors:
  surface: "#FFFFFF"
  on-surface: "#212121"
  primary: "#FF3D00"
  on-primary: "#111111"
  success: "#2E7D32"
  surface: "#F5F5F5"
  border: "#E0E0E0"
  primary-hover: "#E53500"
  secondary-cta: "#FF6D00"
  sale-red: "#E53935"
  deal-orange: "#F57C00"
  success-light: "#E8F5E9"
  rating-yellow: "#FFC107"
  platform-blue: "#1976D2"
  marketplace-orange: "#FF6600"
  commerce-purple: "#7B1FA2"
  body: "#424242"
  muted: "#757575"
  original-price: "#9E9E9E"
typography:
  hero-headline:
    fontFamily: "Roboto"
    fontSize: 40px
    fontWeight: 800
  product-name:
    fontFamily: "Roboto"
    fontSize: 16px
    fontWeight: 500
  original-price:
    fontFamily: "Roboto"
    fontSize: 14px
    fontWeight: 400
  description:
    fontFamily: "Roboto"
    fontSize: 14px
    fontWeight: 400
  button:
    fontFamily: "Roboto"
    fontSize: 16px
    fontWeight: 600
rounded:
  none: 4px
  sm: 8px
  md: 100px
components:
  add-to-cart-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    padding: "12px 24px"
    rounded: "4px"
    border: "none"
    typography: "Roboto 16px weight 600"
    width: "100% (on product card)"
    height: "48px"
    hover: "background {colors.primary-hover}"
    shadow: "0 2px 8px rgba(255,61,0,0.3)"
  product-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "8px"
    hover: "box-shadow 0 4px 16px rgba(0,0,0,0.12), transform translateY(-2px)"
  sale-badge:
    backgroundColor: "{colors.sale-red}"
    textColor: "{colors.surface}"
    rounded: "4px"
    padding: "2px 8px"
    typography: "11px Roboto weight 700 uppercase"
  bestseller-badge:
    backgroundColor: "{colors.secondary-cta}"
    textColor: "{colors.surface}"
    rounded: "4px"
    padding: "2px 8px"
    typography: "11px weight 700 uppercase"
  category-filter:
    active: "background {colors.primary}, color {colors.surface}, border-color {colors.primary}"
    typography: "13px Roboto weight 500"
    padding: "6px 16px"
---

# Design System: E-Commerce Energetic
# 电商促销风格

> **风格定位**：高转化、高活力、信息密集。促销色块 + 产品大图 + 紧凑信息架构，驱动购买冲动。
> **适用场景**：电商平台、促销活动页、双十一/黑五大促、闪购页面、产品详情页
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

E-Commerce Energetic is engineered for one goal: conversion. Every design decision exists to move the user closer to "Add to Cart." The visual language borrows from retail psychology — urgency through red and orange, trust through clean layouts, excitement through large product photography and bold typography.

This style is not about restraint. It's about clarity at speed. A user scans in 2–3 seconds; the design must communicate product, price, and value within that window. Dense information is acceptable — even desirable — as long as visual hierarchy is maintained.

**Key Characteristics:**
- White primary background — products are the star
- Urgency colors: red (#E53935) and orange (#FF6D00) for CTAs and badges
- Bold, heavy typography for prices and product names
- Product imagery at maximum prominence
- Grid-based product cards, consistent and scannable
- Prominent badges: sale, bestseller, new, limited
- Trust signals: ratings, reviews, shipping info

---

## 2. Color Palette & Roles

### Foundation
- **Background** (`#FFFFFF`): Primary page background.
- **Surface** (`#F5F5F5`): Page sections, category backgrounds.
- **Card** (`#FFFFFF`): Product card backgrounds.
- **Border** (`#E0E0E0`): Card borders, dividers.

### Action Colors
- **Primary CTA** (`#FF3D00`): "Add to Cart", "Buy Now" — maximum urgency.
- **Primary Hover** (`#E53500`): Darkened CTA hover.
- **Secondary CTA** (`#FF6D00`): Secondary actions, wishlist, secondary CTA.
- **Sale Red** (`#E53935`): Discount prices, sale badges.
- **Deal Orange** (`#F57C00`): Flash deals, limited time offers.

### Trust & Positive
- **Success** (`#2E7D32`): In-stock, free shipping, verified purchase.
- **Success Light** (`#E8F5E9`): Success badge background.
- **Rating Yellow** (`#FFC107`): Star ratings.

### Brand Accent (choose one)
- **Platform Blue** (`#1976D2`): Amazon/JD-inspired trust blue.
- **Marketplace Orange** (`#FF6600`): Amazon/Taobao-inspired energy orange.
- **Commerce Purple** (`#7B1FA2`): Premium marketplace accent.

### Text
- **Heading** (`#212121`): Product names, section titles.
- **Body** (`#424242`): Descriptions, specs.
- **Muted** (`#757575`): Reviews count, secondary info.
- **Price** (`#212121`): Current price — bold and dark.
- **Original Price** (`#9E9E9E`): Strikethrough original price.
- **Discount Price** (`#E53935`): Sale price — red for urgency.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Primary CTA | `#FF3D00` | `#FFFFFF` | 3.5:1 | AA-large |
| Primary Hover | `#E53500` | `#FFFFFF` | 4.3:1 | AA-large |
| Secondary CTA | `#FF6D00` | `#FFFFFF` | 2.8:1 | FAIL |
| Heading | `#212121` | `#FFFFFF` | 16.1:1 | AAA |
| Body | `#424242` | `#FFFFFF` | 10:1 | AAA |
| Muted | `#757575` | `#FFFFFF` | 4.6:1 | AA |

## 3. Typography Rules

### Font Family
- **Primary**: `Roboto`, fallback: `Inter`, `system-ui`
- **Alternative**: `Noto Sans` (excellent for multilingual e-commerce)
- **Chinese**: `PingFang SC` / `Noto Sans SC` for Chinese e-commerce

### Hierarchy

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero Headline | 40px | 800 | #212121 | Promotion/category header |
| Section Title | 24px | 700 | #212121 | Category sections |
| Product Name | 16px | 500 | #212121 | 2 lines max, truncate |
| Current Price | 22px | 700 | #212121 or #E53935 | tabular-nums |
| Original Price | 14px | 400 | #9E9E9E | Strikethrough |
| Discount % | 14px | 700 | #E53935 | "30% OFF" badge |
| Description | 14px | 400 | #424242 | |
| Review Count | 12px | 400 | #757575 | "(1,234 reviews)" |
| Button | 16px | 600 | #FFFFFF | CTA text |
| Badge Text | 11px | 700 | #FFFFFF | UPPERCASE |

---

## 4. Component Stylings

### Add to Cart Button
```
background: #FF3D00
color: #FFFFFF
padding: 12px 24px
border-radius: 4px
border: none
font: Roboto 16px weight 600
width: 100% (on product card)
height: 48px
hover: background #E53500
box-shadow: 0 2px 8px rgba(255,61,0,0.3)
```

### Product Card
```
background: #FFFFFF
border: 1px solid #E0E0E0
border-radius: 8px
overflow: hidden
hover: box-shadow 0 4px 16px rgba(0,0,0,0.12), transform translateY(-2px)
transition: all 200ms ease

Product image: aspect-ratio 1:1, object-fit cover, width 100%
Content padding: 12px
Product name: 16px weight 500 #212121, max 2 lines
Price block: margin-top 8px
Current price: 22px weight 700 #212121
Original price: 14px #9E9E9E line-through, margin-left 8px
Rating: 12px #FFC107 stars + #757575 count
Add to cart: full-width #FF3D00 button, 40px height
```

### Sale Badge
```
background: #E53935
color: #FFFFFF
border-radius: 4px
padding: 2px 8px
font: 11px Roboto weight 700 uppercase
position: absolute, top: 8px, left: 8px
```

### Bestseller Badge
```
background: #FF6D00
color: #FFFFFF
border-radius: 4px
padding: 2px 8px
font: 11px weight 700 uppercase
```

### Price Block (Product Detail)
```
Current price:   32px Roboto weight 700 #E53935 tabular-nums
Original price:  18px weight 400 #9E9E9E line-through
Discount badge:  inline #E53935 bg #FFFFFF text 14px weight 700 "30% OFF"
Savings text:    14px #2E7D32 "You save $XX.XX"
```

### Category Filter
```
Pill style: background #F5F5F5, border 1px solid #E0E0E0, border-radius 100px
Active: background #FF3D00, color #FFFFFF, border-color #FF3D00
Font: 13px Roboto weight 500
Padding: 6px 16px
```

---

## 5. Layout Principles

### Product Grid
- Desktop: 4-column grid, 16px gutter
- Tablet: 3-column grid, 12px gutter
- Mobile: 2-column grid, 8px gutter
- Card min-width: 200px

### Page Structure
- Header: sticky, 56px height, search prominent
- Category nav: horizontal scroll on mobile
- Hero banner: full-width, 300–400px height
- Product grid: max-width 1400px
- Sidebar filters: 240px, collapsible on tablet/mobile

### Information Density
- Product cards: compact, optimized for scanning
- Show: image, name (2 lines), price, original price, rating
- Hide until hover: Quick add, Quick view
- Never show all product info on card — detail is for product page

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | `border: 1px solid #E0E0E0` | Product cards default |
| Hover | `0 4px 16px rgba(0,0,0,0.12)` + `translateY(-2px)` | Card hover state |
| Floating | `0 8px 24px rgba(0,0,0,0.15)` | Quick-view modals, cart drawer |
| Sticky | `0 2px 8px rgba(0,0,0,0.1)` | Sticky header on scroll |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 4px | Square elements |
| sm | 8px | Inputs, tags |
| md | 100px | Cards, buttons |

---

## 7. Do's and Don'ts

### Do
- Use red (#E53935) and orange (#FF3D00) for CTAs — these are proven conversion colors
- Show original price with strikethrough next to sale price — anchoring increases conversion
- Make product images the largest element on the card
- Add urgency signals: "Only 3 left", countdown timers for flash sales
- Show star ratings on all product cards — social proof drives decisions
- Use full-width "Add to Cart" buttons on mobile
- Keep product names to 2 lines maximum on cards

### Don't
- Don't use cool blues or purples for main CTAs in e-commerce — they lack urgency
- Don't reduce image size to fit more info — image is the primary decision driver
- Don't hide the price — always visible, always prominent
- Don't use decorative backgrounds behind product images — pure white is optimal
- Don't center-align product grids with odd-number columns (looks broken)

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | 2-col grid, sticky add-to-cart bar at bottom, larger touch targets |
| Tablet | 640–1024px | 3-col grid, collapsible sidebar filters |
| Desktop | 1024px+ | 4-col grid, visible sidebar, hover states active |

### Mobile-Specific
- Sticky "Add to Cart" bar at bottom of product page (fixed, 64px)
- Bottom navigation with cart icon + count badge
- Swipeable product image gallery
- Expandable product description (truncate by default)

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:       #FFFFFF
Card border:      #E0E0E0 (1px)
Primary CTA:      #FF3D00
CTA hover:        #E53500
Sale price:       #E53935
Original price:   #9E9E9E (line-through)
Product name:     #212121
Body text:        #424242
Rating stars:     #FFC107
In-stock:         #2E7D32
```

### Example Prompts
- "Build an e-commerce product card: white background, 1px solid #E0E0E0 border, 8px radius. Top: 1:1 ratio product image placeholder. Content 12px padding: product name 16px Roboto weight 500 #212121 max 2 lines, price row (22px weight 700 #E53935 + 14px #9E9E9E line-through), rating row (12px yellow stars + #757575 review count). Bottom: full-width #FF3D00 button 'Add to Cart' 40px height Roboto weight 600. Sale badge absolute top-left: #E53935 bg, white text 11px uppercase."
- "Design a promotion hero banner: full-width, 350px height, red gradient background (linear-gradient 135deg, #E53935 to #FF6D00). White headline 40px Roboto weight 800, subtitle 18px white 0.85 opacity. CTA button: white background #E53935 text, 4px radius, 14px 32px padding weight 700. Countdown timer row: 4 dark blocks showing days/hours/minutes/seconds."

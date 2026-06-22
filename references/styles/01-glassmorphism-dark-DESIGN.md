# Design System: Glassmorphism Dark
# 玻璃拟态（暗色版）

> **风格定位**：科技感、沉浸感、高端感。深色背景上漂浮半透明磨砂玻璃卡片，霓虹渐变光晕营造深邃氛围。
> **适用场景**：AI 产品、科技 SaaS、加密货币/Web3、游戏 HUD、高端 Dashboard、音乐/媒体 App
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Glassmorphism Dark creates a sense of depth through layered translucency against a rich, dark background. The visual language evokes looking through frosted glass at a glowing cityscape at night. Elements feel weightless and futuristic without being cold — the background gradients provide warmth and life, while the glass surfaces create precision and clarity.

The signature effect is achieved through three layered forces: a deep dark background (near-black, never pure black), ambient color blobs (large blurred gradient circles in purple, blue, and magenta), and glass cards floating above with backdrop-filter blur.

**Key Characteristics:**
- Background: deep dark (#0D0D1A or #08080F), never pure black
- Ambient gradient blobs behind UI — 2-3 large, heavily blurred color orbs
- Glass cards: rgba white fill (0.05–0.12 opacity) + backdrop-filter blur (12–24px)
- 1px border at rgba(255,255,255,0.15) — the "glass edge"
- Text: white with high contrast (#FFFFFF for headings, rgba(255,255,255,0.75) for body)
- Subtle inner glow on interactive elements
- Generous border-radius (12–24px) — glass feels soft, not sharp

---

## 2. Color Palette & Roles

### Background
- **Deep Dark** (`#0D0D1A`): Primary page background. Deep blue-black, not neutral gray.
- **Dark Surface** (`#13131F`): Card backgrounds, secondary surfaces.
- **Elevated Surface** (`#1A1A2E`): Modals, dropdowns, highest elevation.

### Ambient Gradient Blobs (background decoration only)
- **Blob Purple** (`#7C3AED`): Primary ambient color, placed top-left or center. Opacity: 0.3–0.5, blur: 80–120px.
- **Blob Blue** (`#2563EB`): Secondary ambient, placed bottom-right. Opacity: 0.25–0.4, blur: 100px.
- **Blob Magenta** (`#DB2777`): Accent ambient, used sparingly. Opacity: 0.2–0.3, blur: 80px.
- **Blob Cyan** (`#0891B2`): Cool accent variant. Opacity: 0.2, blur: 80px.

### Glass Card Fill
- **Glass Base** (`rgba(255,255,255,0.08)`): Default card background.
- **Glass Hover** (`rgba(255,255,255,0.12)`): Hovered card state.
- **Glass Active** (`rgba(255,255,255,0.15)`): Active/selected state.
- **Glass Subtle** (`rgba(255,255,255,0.04)`): Very subtle section dividers.

### Accent & Interactive
- **Primary Purple** (`#8B5CF6`): CTA buttons, links, active indicators.
- **Primary Cyan** (`#22D3EE`): Alternative accent, technical contexts.
- **Primary Pink** (`#EC4899`): Highlight, badges, notifications.
- **Success Green** (`#10B981`): Success states, positive metrics.
- **Warning Amber** (`#F59E0B`): Warning states.
- **Error Red** (`#EF4444`): Error states.

### Text
- **Text Primary** (`#FFFFFF`): Headings, important labels.
- **Text Secondary** (`rgba(255,255,255,0.75)`): Body text, descriptions.
- **Text Muted** (`rgba(255,255,255,0.45)`): Captions, placeholders, disabled.
- **Text Accent** (`#A78BFA`): Highlighted text, links.

### Borders
- **Border Default** (`rgba(255,255,255,0.12)`): Standard glass card border.
- **Border Subtle** (`rgba(255,255,255,0.06)`): Dividers, low-emphasis borders.
- **Border Accent** (`rgba(139,92,246,0.5)`): Focus rings, active borders.
- **Border Glow** (`rgba(139,92,246,0.3)`): Glowing border effect on CTA.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, fallback: `SF Pro Display`, `system-ui`
- **Display**: `Cal Sans` or `Syne`, fallback: `Inter`
- **Monospace**: `JetBrains Mono`, fallback: `Fira Code`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color | Notes |
|------|------|--------|-------------|----------------|-------|-------|
| Display Hero | 64px / 4rem | 700 | 1.05 | -2px | #FFFFFF | Homepage hero only |
| Heading 1 | 48px / 3rem | 700 | 1.1 | -1.5px | #FFFFFF | Section titles |
| Heading 2 | 32px / 2rem | 600 | 1.15 | -0.8px | #FFFFFF | Card headings |
| Heading 3 | 24px / 1.5rem | 600 | 1.2 | -0.4px | #FFFFFF | Sub-sections |
| Heading 4 | 18px / 1.125rem | 600 | 1.3 | -0.2px | rgba(255,255,255,0.9) | |
| Body Large | 18px / 1.125rem | 400 | 1.6 | 0 | rgba(255,255,255,0.75) | Feature descriptions |
| Body | 16px / 1rem | 400 | 1.6 | 0 | rgba(255,255,255,0.75) | Standard body |
| Body Small | 14px / 0.875rem | 400 | 1.5 | 0 | rgba(255,255,255,0.6) | Captions, meta |
| Label | 12px / 0.75rem | 500 | 1.4 | 0.5px | rgba(255,255,255,0.5) | Tags, uppercase labels |
| Code | 14px / 0.875rem | 400 | 1.6 | 0 | #A78BFA | JetBrains Mono |

### Principles
- All headings use negative letter-spacing for density and elegance
- Body text at 75% white opacity for contrast on dark backgrounds without being harsh
- Avoid pure white on body text — it causes eye strain on dark backgrounds
- Label text always uppercase with letter-spacing: 0.5px+

---

## 4. Component Stylings

### Primary Button
```
background: linear-gradient(135deg, #8B5CF6, #6D28D9)
color: #FFFFFF
padding: 12px 24px
border-radius: 12px
border: 1px solid rgba(139,92,246,0.4)
box-shadow: 0 0 20px rgba(139,92,246,0.3), 0 4px 15px rgba(0,0,0,0.3)
font: 16px Inter weight 600
hover: brightness(1.1), box-shadow intensifies
```

### Ghost Button
```
background: rgba(255,255,255,0.06)
color: rgba(255,255,255,0.85)
padding: 12px 24px
border-radius: 12px
border: 1px solid rgba(255,255,255,0.15)
backdrop-filter: blur(8px)
hover: background rgba(255,255,255,0.10)
```

### Glass Card
```
background: rgba(255,255,255,0.08)
border: 1px solid rgba(255,255,255,0.12)
border-radius: 16px
backdrop-filter: blur(16px) saturate(180%)
-webkit-backdrop-filter: blur(16px) saturate(180%)
padding: 24px
box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)
```

### Input / Form Field
```
background: rgba(255,255,255,0.06)
border: 1px solid rgba(255,255,255,0.12)
border-radius: 10px
padding: 12px 16px
color: #FFFFFF
placeholder-color: rgba(255,255,255,0.35)
focus: border-color rgba(139,92,246,0.6), box-shadow 0 0 0 3px rgba(139,92,246,0.15)
```

### Navigation Bar
```
background: rgba(13,13,26,0.8)
backdrop-filter: blur(20px)
border-bottom: 1px solid rgba(255,255,255,0.08)
height: 64px
```

### Badge / Tag
```
background: rgba(139,92,246,0.15)
color: #A78BFA
border: 1px solid rgba(139,92,246,0.3)
border-radius: 6px
padding: 2px 10px
font-size: 12px weight 500
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Card internal padding: 24px (default), 32px (large cards)
- Card gap: 16–24px

### Grid
- Max content width: 1200px
- Columns: 12-column grid, 24px gutter
- Mobile: 4-column, 16px gutter
- Hero: full-width with background blobs, content centered max 800px

### Blob Placement
- Background blobs should be positioned with `position: fixed` or as absolute to the section
- Typical setup: 1 large blob (400–600px diameter, opacity 0.35) top-right, 1 medium blob (300px) bottom-left
- Use `filter: blur(80px)` on the blob container, NOT on the card

### Whitespace Philosophy
- Generous vertical spacing between sections (80–120px)
- Cards should breathe — minimum 16px gap between cards
- Dark backgrounds demand more whitespace than light backgrounds

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | No glass, just dark background | Page background |
| Level 1 | `rgba(255,255,255,0.04)` + no shadow | Section dividers, subtle containers |
| Level 2 | `rgba(255,255,255,0.08)` + `blur(16px)` + `shadow 0 8px 32px rgba(0,0,0,0.3)` | Standard cards, panels |
| Level 3 | `rgba(255,255,255,0.12)` + `blur(20px)` + `shadow 0 16px 48px rgba(0,0,0,0.4)` | Modals, featured cards |
| Level 4 | `rgba(255,255,255,0.16)` + `blur(24px)` + `glow shadow` | Dropdowns, tooltips, highest elevation |
| Focus Ring | `0 0 0 3px rgba(139,92,246,0.4)` | Keyboard focus |

**Critical Rule**: Never blur more than 24px on cards — beyond that, performance degrades on mobile and the effect becomes muddy. Reserve 24px blur for modals only.

---

## 7. Do's and Don'ts

### Do
- Use deep blue-black (#0D0D1A) as background — never pure #000000
- Always add `backdrop-filter: blur()` AND a semi-transparent background on glass elements
- Layer ambient gradient blobs behind the UI for depth
- Use rgba white fills (0.04–0.16) for all glass surfaces
- Keep text contrast high — headings at #FFFFFF, body at rgba(255,255,255,0.75) minimum
- Add `inset 0 1px 0 rgba(255,255,255,0.15)` to card box-shadow for top-edge highlight
- Use purple (#8B5CF6) as the primary interactive color

### Don't
- Don't use solid dark gray backgrounds for cards — the glass effect requires transparency
- Don't stack too many glass layers — max 3 levels of blur or performance and visual clarity suffer
- Don't use low-contrast text colors below rgba(255,255,255,0.45) for interactive elements
- Don't put text directly over the gradient blobs — always have a glass card in between
- Don't use warm accent colors (orange, yellow) as primary — they clash with the cool palette
- Don't use sharp corners (0px radius) — glass is inherently soft, minimum 8px radius

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, reduced blur (8px) for performance |
| Tablet | 640–1024px | 2-column cards, moderate blob size |
| Desktop | 1024–1280px | Full 3-column layout, full blob effects |
| Large | >1280px | Centered content max 1200px, extra blob detail |

### Performance Notes
- On mobile, reduce `backdrop-filter: blur()` from 16px to 8px
- Consider `@media (prefers-reduced-motion)` to disable blob animations
- Provide a fallback for browsers that don't support backdrop-filter: use `background: rgba(30,30,50,0.9)` instead

### Touch Targets
- Buttons: minimum 44px height
- Cards: finger-friendly padding (20px+)
- Navigation links: minimum 44px touch area

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:       #0D0D1A (deep dark)
Card fill:        rgba(255,255,255,0.08)
Card border:      rgba(255,255,255,0.12)
Primary accent:   #8B5CF6 (purple)
Heading text:     #FFFFFF
Body text:        rgba(255,255,255,0.75)
Muted text:       rgba(255,255,255,0.45)
Blob 1 (purple):  #7C3AED, opacity 0.35, blur 100px
Blob 2 (blue):    #2563EB, opacity 0.25, blur 100px
```

### Example Prompts
- "Build a hero section using glassmorphism dark style: #0D0D1A background, two ambient gradient blobs (purple #7C3AED top-right, blue #2563EB bottom-left, both blurred 100px opacity 0.3), centered glass card with rgba(255,255,255,0.08) background, 1px solid rgba(255,255,255,0.12) border, backdrop-filter blur(16px), 16px border-radius. White heading 48px weight 700 letter-spacing -1.5px, body text rgba(255,255,255,0.75), purple CTA button #8B5CF6."
- "Create a pricing card: glassmorphism dark, rgba(255,255,255,0.10) fill, blur(16px), 1px solid rgba(255,255,255,0.15) border, 16px radius, inner top highlight inset 0 1px 0 rgba(255,255,255,0.15). Heading #FFFFFF 24px weight 600, price #A78BFA 48px weight 700, body rgba(255,255,255,0.7). Purple gradient button bottom."
- "Design a navigation: background rgba(13,13,26,0.8) backdrop-filter blur(20px), 1px bottom border rgba(255,255,255,0.08), 64px height. White logo left, nav links rgba(255,255,255,0.7) Inter 14px weight 500. Right: ghost button + purple CTA."

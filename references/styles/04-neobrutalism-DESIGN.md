# Design System: Neo-Brutalism
# 新野兽主义风格

> **风格定位**：厚重、直接、反精致。粗黑描边 + 偏移阴影 + 高饱和纯色，审美颠覆，记忆深刻。
> **适用场景**：创意机构、个人作品集、独立产品、设计工具、潮牌、艺术展览、个性化 SaaS
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Neo-Brutalism is a deliberate rejection of the smooth, gradient-heavy, glassmorphic trends dominating tech design. Where those styles aim for sophistication and polish, Neo-Brutalism wears its construction proudly. It says: "I know what good design looks like, and I chose this."

The defining visual signature is the **offset shadow** — a hard box-shadow with no blur, offset by 3–6px in both X and Y, creating the illusion that elements are printed on physical layers. Paired with thick black borders (2–3px), flat solid fills (no gradients), and system-familiar fonts, it creates something that feels simultaneously retro and contemporary.

The palette is deliberately bold: black borders on yellow, coral on white, lime on black. Colors aren't decorative — they're architectural. Each element is its own block, its own statement.

**Key Characteristics:**
- Thick borders: 2–3px solid black (always)
- Hard offset shadows: `4px 4px 0 #000` or `6px 6px 0 #000` (no blur radius)
- Flat fills: 100% opacity, no gradients, no transparency
- High-saturation palette: one punchy color on white/cream/black
- Typography: bold, heavy, system-derived (or intentionally "unsexy")
- No border-radius (0px) or very minimal (4px max)
- Interactive: offset shadow collapses on hover/click

---

## 2. Color Palette & Roles

### Foundational
- **Pure Black** (`#000000`): Borders, shadows, text. The backbone of every element.
- **Off-White** (`#FFFEF5`): Primary background — not pure white, has a warm paper feel.
- **Pure White** (`#FFFFFF`): Card backgrounds, contrast against color fills.
- **Deep Black** (`#1A1A1A`): Alternative dark background.

### Signature Accent Colors (use ONE primary accent per product)
- **Brutal Yellow** (`#FFDD00`): The most iconic neo-brutalist color. Energy, warmth.
- **Brutal Coral** (`#FF5733`): Bold red-orange, urgent, creative.
- **Brutal Lime** (`#AAFF00`): Electric green, tech, innovation.
- **Brutal Pink** (`#FF3E9D`): Expressive, playful, feminine-coded.
- **Brutal Blue** (`#0055FF`): Strong, confident, royal.
- **Brutal Mint** (`#00E5CC`): Fresh, digital, calm-energetic.
- **Brutal Orange** (`#FF8C00`): Warm, active, approachable.

### Semantic
- **Link** (`#0000FF`): Classic hyperlink blue — intentionally retro
- **Visited** (`#800080`): Purple, retro-authentic
- **Success** (`#22C55E` with black border): Green with border
- **Error** (`#EF4444` with black border): Red with border

---

## 3. Typography Rules

### Font Family
- **Primary**: `Space Grotesk`, fallback: `DM Sans`, `system-ui`
- **Alternative Bold**: `Clash Display`, `Cabinet Grotesk`
- **Retro Alternative**: `Courier New` or `IBM Plex Mono` (for maximum brutalist effect)
- **System Alternative**: `-apple-system` (intentionally "plain" look)

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display | 72px / 4.5rem | 800 | 0.9 | -2px | All caps or title case, maximum impact |
| H1 | 52px / 3.25rem | 700 | 1.0 | -1px | Section hero |
| H2 | 36px / 2.25rem | 700 | 1.1 | -0.5px | Feature headings |
| H3 | 24px / 1.5rem | 700 | 1.2 | 0 | Card headings |
| Body L | 18px / 1.125rem | 400 | 1.55 | 0 | Lead text |
| Body | 16px / 1rem | 400 | 1.55 | 0 | Standard body |
| Body S | 14px / 0.875rem | 500 | 1.5 | 0 | UI labels |
| Tag | 12px / 0.75rem | 700 | 1 | 1px | UPPERCASE always |

### Typography Rules Specific to Neo-Brutalism
- Headings can be ALL CAPS — this style welcomes it
- No italic — italic feels polished; brutalism is upright
- Underline links aggressively — browser-style underlines are authentic
- Mix very large and very small text on the same page (extreme scale contrast)

---

## 4. Component Stylings

### Primary Button
```
background: #FFDD00 (or brand accent)
color: #000000
padding: 12px 24px
border: 2px solid #000000
border-radius: 4px (or 0px)
box-shadow: 4px 4px 0 #000000
font: Space Grotesk 16px weight 700
hover: box-shadow: 2px 2px 0 #000000, transform: translate(2px, 2px)
active: box-shadow: 0px 0px 0 #000000, transform: translate(4px, 4px)
```
The hover/active shrinks the shadow and shifts the element — simulates "pressing down" like a physical button.

### Secondary Button
```
background: #FFFFFF (or #FFFEF5)
color: #000000
padding: 12px 24px
border: 2px solid #000000
border-radius: 4px
box-shadow: 4px 4px 0 #000000
font: Space Grotesk 16px weight 600
hover: transform: translate(2px, 2px), box-shadow: 2px 2px 0 #000000
```

### Card
```
background: #FFFFFF (or pastel fill: #FFFEF5, #FFF3D0, #FFE8E8)
border: 2px solid #000000
border-radius: 4px (or 0)
box-shadow: 6px 6px 0 #000000
padding: 24px
```

### Input
```
background: #FFFFFF
border: 2px solid #000000
border-radius: 4px
padding: 12px 16px
font: Space Grotesk 16px weight 400
color: #000000
box-shadow: 3px 3px 0 #000000
focus: box-shadow: 4px 4px 0 #FFDD00 (accent)
placeholder: #888888
```

### Badge / Tag
```
background: #FFDD00 (accent) or #000000
color: #000000 or #FFFFFF
border: 2px solid #000000
border-radius: 4px
padding: 3px 10px
font: 12px Space Grotesk weight 700 uppercase letter-spacing 1px
box-shadow: 2px 2px 0 #000000
```

### Navigation
```
background: #FFFEF5 (or white)
border-bottom: 2px solid #000000
height: 64px
padding: 0 24px
```
Nav links: 14px Space Grotesk weight 600 #000000, underline on hover
CTA button: yellow accent with black border + offset shadow

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px (slightly looser to give elements room to breathe with their shadows)
- Card padding: 24px
- Card gap (accounts for shadow): 20px minimum (shadow offset takes up space)
- Section padding: 64–80px vertical
- Content max width: 1100px

### Grid
- 12-column grid, 24px gutter
- Feature cards: 2–3 column grid
- Cards need breathing room for the offset shadow — maintain at least 20px gap

### Visual Weight Distribution
- Use large blocks of accent color as section backgrounds
- Alternate: white section → accent-filled section → white section
- Thick horizontal rules (2–3px) between major sections
- Consider "sticky" elements with offset shadows for emphasis

### Whitespace Philosophy
- Contrary to minimalism, brutalism can be denser — the borders define space
- But don't overcrowd — each element needs space to assert itself
- Large typographic elements (oversized numbers, category labels) can span columns

---

## 6. Depth & Elevation

Neo-Brutalism replaces the standard shadow system with a single, consistent language:

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | 2px border, no shadow | Labels, tags, disabled states |
| Default | 2px border + `4px 4px 0 #000` | Cards, inputs, standard buttons |
| Emphasized | 2px border + `6px 6px 0 #000` | Featured cards, CTA sections |
| Hover/Active | Border constant, shadow shrinks as element "presses" | Interactive feedback |

**No blur radius in shadows** — EVER. `box-shadow: 4px 4px 0 #000000` — the zero is sacred.

---

## 7. Do's and Don'ts

### Do
- Always add `2px solid #000000` border to every interactive element
- Use hard offset shadows — the press-down animation on hover/active is essential UX
- Pick ONE brand accent color and use it boldly for primary actions + accents
- Use ALL CAPS for headings — it works in this style
- Embrace flat fills — no gradients, no transparency
- Mix very large and small elements on the same page for scale contrast
- Use browser-default-looking elements occasionally — it's authentic to the style

### Don't
- Never add blur to the offset shadow (`box-shadow: 4px 4px 4px #000` — wrong)
- Don't use gradients anywhere — flat is the law
- Don't use `border-radius > 8px` — curves betray the brutalist aesthetic
- Don't use glassmorphism or transparency — everything is solid
- Don't use more than 2 colors plus black+white — palette discipline is key
- Don't center-align everything — left-align is more confrontational and authentic

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Shadow: `3px 3px 0 #000`, font sizes reduce 20%, single column |
| Tablet | 640–1024px | 2-column max, standard shadow |
| Desktop | 1024px+ | Full layout, `6px 6px 0 #000` on featured |

### Shadow on Mobile
- Reduce shadow offset from 4–6px to 3px on mobile (shadow overflows less)
- Keep borders at 2px — they're essential to the style regardless of screen size

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:       #FFFEF5 (warm off-white)
Border:           #000000 (2px solid, always)
Shadow:           4px 4px 0 #000000 (no blur)
Primary accent:   #FFDD00 (brutal yellow)
Heading text:     #000000
Body text:        #1A1A1A
Secondary text:   #555555
```

### Example Prompts
- "Build a neo-brutalism hero section: off-white background #FFFEF5. Headline 72px Space Grotesk weight 800 #000000, max 2 lines. Body 18px weight 400 #1A1A1A. Primary CTA: #FFDD00 background, #000000 text, 2px solid black border, 4px 4px 0 #000000 box-shadow, 4px radius. On hover: transform translateX(2px) translateY(2px), shadow 2px 2px 0 #000000. No gradients."
- "Design a neo-brutalist feature card: white background, 2px solid #000000 border, 0px border-radius, 6px 6px 0 #000000 box-shadow, 24px padding. Heading 24px Space Grotesk weight 700. Body 16px weight 400 #333. Accent tag: #FFDD00 background, 2px border, 2px 2px 0 #000 shadow, uppercase 11px weight 700."
- "Create neo-brutalist navigation: #FFFEF5 background, 2px solid #000 bottom border, 64px height. Logo: Space Grotesk 20px weight 800 all-caps. Links 14px weight 600 #000, underline on hover. CTA: yellow accent #FFDD00 button with black border and 3px 3px 0 #000 shadow."

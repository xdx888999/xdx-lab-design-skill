# Design System: Tech Minimal
# 科技极简风格

> **风格定位**：精准、克制、高端。黑白为骨，单一强调色为肉，字体即设计。Vercel、Linear、Notion 的共同基因。
> **适用场景**：开发者工具、SaaS 产品官网、AI 工具、设计工具、生产力 App、个人作品集
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Tech Minimal is the language of software companies that trust their product over their marketing. The philosophy: every pixel that isn't essential is a pixel that dilutes the message. This is not minimalism for aesthetics — it's minimalism as a statement of engineering confidence.

The visual vocabulary is sparse but precise: a near-white or near-black background, one carefully chosen accent color (never more), generous whitespace, and typography that commands authority through scale and weight rather than ornamentation. The result feels fast, focused, and built by people who care about details.

The defining characteristic is **controlled contrast**: headings that stop conversations with bold weight, body text that settles at exactly the right gray, and interactive elements that earn attention through restraint rather than color.

**Key Characteristics:**
- Background: `#FFFFFF` (light) or `#0A0A0A` (dark) — not off-white, not charcoal
- Typography does 90% of the visual work
- Single accent color — no competing palettes
- Border-radius: 6–10px — precise, not pill-shaped, not zero
- Shadows: extremely subtle (0–2px spread), elevation through border not shadow
- Generous padding, open breathing room

---

## 2. Color Palette & Roles

### Light Mode (Default)

- **Background** (`#FFFFFF`): Pure white. Uncompromising.
- **Surface** (`#FAFAFA`): Card backgrounds, slightly elevated areas.
- **Surface Raised** (`#F5F5F5`): Code blocks, input backgrounds, hover states.
- **Surface Border** (`#E5E5E5`): Subtle card/section borders.
- **Heading** (`#0A0A0A`): Near-black, primary text. Richer than #000000.
- **Body** (`#404040`): Standard paragraph text.
- **Muted** (`#737373`): Captions, secondary info, placeholders.
- **Faint** (`#A3A3A3`): Disabled states, very subtle labels.

### Dark Mode
- **Background** (`#0A0A0A`): Near-black primary.
- **Surface** (`#111111`): Cards, panels.
- **Surface Raised** (`#1A1A1A`): Elevated containers, code blocks.
- **Surface Border** (`#262626`): Borders.
- **Heading** (`#EDEDED`): Primary text.
- **Body** (`#A3A3A3`): Body text.
- **Muted** (`#525252`): Secondary/muted text.

### Accent Colors (pick ONE per product)
- **Classic Black** (`#000000` / `#FFFFFF`): The most minimal — no accent, just contrast. [Vercel]
- **Electric Blue** (`#0070F3`): Trusted tech blue, approachable. [Next.js, classic]
- **Pure Purple** (`#7C3AED`): Confident, slightly premium. [Linear variant]
- **Vivid Green** (`#16A34A`): Growth, developer-friendly. [Vercel green variant]
- **Sharp Orange** (`#F97316`): Warm energy, creative tools.
- **Minimal Red** (`#DC2626`): Urgency, critical actions only.

### Interactive (using Electric Blue as example)
- **Primary** (`#0070F3`): CTA, links, active states.
- **Primary Hover** (`#0060D0`): Darkened on hover.
- **Primary Light** (`rgba(0,112,243,0.08)`): Hover backgrounds, selected rows.
- **Focus Ring** (`rgba(0,112,243,0.25)`): Keyboard focus outline.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, fallback: `SF Pro Display`, `-apple-system`, `sans-serif`
- **Alternative Display**: `Geist` (Vercel's font — clean, technical)
- **Monospace**: `Geist Mono` or `JetBrains Mono`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display | 64px / 4rem | 800 | 1.0 | -3px | Hero headline, max 2 lines |
| H1 | 48px / 3rem | 700 | 1.05 | -2px | Page title |
| H2 | 36px / 2.25rem | 700 | 1.1 | -1.2px | Section heading |
| H3 | 24px / 1.5rem | 600 | 1.2 | -0.5px | Card heading, sub-section |
| H4 | 20px / 1.25rem | 600 | 1.3 | -0.2px | |
| Body L | 18px / 1.125rem | 400 | 1.65 | 0 | Feature descriptions |
| Body | 16px / 1rem | 400 | 1.6 | 0 | Standard text |
| Body S | 14px / 0.875rem | 400 | 1.5 | 0 | UI text, captions |
| Label | 12px / 0.75rem | 500 | 1.4 | 0.6px | ALL CAPS labels, tags |
| Code | 14px / 0.875rem | 400 | 1.6 | 0 | Monospace |

### Principles
- **Negative tracking on large type**: -3px at 64px, scaling down proportionally. Tightness signals precision.
- **Weight contrast**: Headings at 700–800, body at 400. No medium (500) for body — it looks indecisive.
- **Two font roles**: display/body (Inter) + code (Geist Mono). Never more than two families.
- **Avoid centered long text**: center-align headlines only, left-align anything over 2 lines.

---

## 4. Component Stylings

### Primary Button
```
background: #0A0A0A (light mode) / #EDEDED (dark mode)
color: #FFFFFF / #0A0A0A
padding: 10px 20px
border-radius: 8px
border: none
font: 14px Inter weight 500
letter-spacing: 0
height: 40px
hover: opacity 0.85
transition: opacity 150ms ease
```

### Secondary Button
```
background: transparent
color: #0A0A0A / #EDEDED
padding: 10px 20px
border-radius: 8px
border: 1px solid #E5E5E5 / #262626
font: 14px Inter weight 500
hover: background #F5F5F5 / #1A1A1A
```

### Accent Button (with brand color)
```
background: #0070F3
color: #FFFFFF
padding: 10px 20px
border-radius: 8px
border: none
font: 14px Inter weight 500
hover: background #0060D0
box-shadow: none (no glow — this is minimal)
```

### Card
```
background: #FFFFFF / #111111
border: 1px solid #E5E5E5 / #262626
border-radius: 10px
padding: 24px
box-shadow: none (or 0 1px 3px rgba(0,0,0,0.06) max)
hover: border-color #D4D4D4 / #404040
```

### Input
```
background: #FAFAFA / #111111
border: 1px solid #E5E5E5 / #262626
border-radius: 8px
padding: 10px 14px
font: 14px Inter
color: #0A0A0A / #EDEDED
placeholder: #A3A3A3 / #525252
focus: border-color #0A0A0A / #737373, outline: none
```

### Code Block
```
background: #F5F5F5 / #1A1A1A
border: 1px solid #E5E5E5 / #262626
border-radius: 8px
padding: 16px 20px
font: 13px Geist Mono / JetBrains Mono
color: #0A0A0A / #E5E5E5
```

### Badge
```
background: #F5F5F5 / #1A1A1A
color: #525252 / #A3A3A3
border: 1px solid #E5E5E5 / #262626
border-radius: 6px
padding: 2px 8px
font: 11px Inter weight 500 uppercase letter-spacing 0.5px
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 4px (tighter than 8px — precision-oriented)
- Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px
- Button padding: 10px vertical, 20px horizontal (40px height standard)
- Card padding: 24px (standard), 32px (featured)
- Section padding: 80px vertical (desktop), 48px (mobile)

### Grid
- Max content width: 1080px (tighter than typical — focuses attention)
- Columns: 12, gutter: 24px
- Feature sections: 2-column or 3-column equal grid
- Mobile: single column, 20px horizontal padding

### Whitespace Philosophy
- **The space IS the design**: In tech minimal, whitespace communicates quality. Crowded = cheap.
- Between sections: 80–96px vertical gap
- Between hero headline and CTA: 32–40px
- Navigation to hero: 64–80px
- Never justify text

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow, no border | Background sections |
| Subtle | `0 1px 2px rgba(0,0,0,0.05)` | Minimal card lift |
| Default | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)` | Standard cards |
| Raised | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)` | Hovered cards, popovers |
| High | `0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)` | Modals, dropdowns |

**Philosophy**: In tech minimal, borders do more work than shadows. A 1px solid `#E5E5E5` border reads as elevation. Save shadows for modals and critical popups only.

### Border Radius Scale
- 4px: Tags, badges, very small elements
- 6px: Input icons, small buttons
- 8px: Buttons, inputs, code blocks (standard interactive)
- 10px: Cards, containers (standard)
- 12px: Featured cards, larger panels
- Never pills/full-round on rectangles

---

## 7. Do's and Don'ts

### Do
- Use pure #FFFFFF or #0A0A0A backgrounds — not off-white or charcoal
- Pick ONE accent color and use it sparingly (max 2–3 times per page)
- Let typography do the heavy lifting — big, bold headings carry the page
- Use borders instead of shadows for card elevation
- Tight negative tracking on headlines (-2px to -3px at large sizes)
- Stick to Inter or Geist — both were engineered for screen clarity
- Use `letter-spacing: 0.5px + uppercase` for small label text

### Don't
- Don't add gradients to backgrounds or buttons — flat is the statement
- Don't use more than one accent color on the same page
- Don't add decorative illustrations or icons unless they carry functional meaning
- Don't use border-radius > 12px — round feels soft, minimal feels precise
- Don't use shadows heavier than `0 4px 6px rgba(0,0,0,0.07)`
- Don't center-align body text beyond 2 lines
- Don't use font weight 300 — it reads as uncertainty in this style

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Display font: 36px, H1: 28px, single column, 20px side padding |
| Tablet | 640–1024px | H1: 40px, 2-column max, 24px padding |
| Desktop | 1024–1280px | Full layout, Display: 56px |
| Large | >1280px | Centered max 1080px, Display: 64px |

### Collapsing Strategy
- Feature grids: 3-col → 2-col → 1-col
- Navigation: horizontal links → hamburger
- Hero: reduce letter-spacing slightly on mobile (less negative)
- Cards: full-width on mobile with 16px horizontal padding

---

## 9. Agent Prompt Guide

### Quick Color Reference (Light Mode)
```
Background:     #FFFFFF
Surface:        #FAFAFA
Border:         #E5E5E5
Heading:        #0A0A0A
Body:           #404040
Muted:          #737373
Primary CTA:    #0A0A0A (or brand accent)
CTA text:       #FFFFFF
```

### Quick Color Reference (Dark Mode)
```
Background:     #0A0A0A
Surface:        #111111
Border:         #262626
Heading:        #EDEDED
Body:           #A3A3A3
Muted:          #525252
Primary CTA:    #EDEDED
CTA text:       #0A0A0A
```

### Example Prompts
- "Create a hero section in tech minimal style: white background #FFFFFF, centered layout max 800px. Headline 64px Inter weight 800 letter-spacing -3px color #0A0A0A, subtitle 18px weight 400 color #404040 line-height 1.65. Two buttons: primary (black #0A0A0A background, white text, 8px radius, 10px 20px padding) and secondary (transparent, 1px solid #E5E5E5 border). No shadows, no gradients."
- "Design a feature card: white background, 1px solid #E5E5E5 border, 10px radius, 24px padding. Icon in #F5F5F5 square 40px radius 8px. Heading 20px Inter weight 600 #0A0A0A. Body 14px weight 400 #737373. Box-shadow: 0 1px 3px rgba(0,0,0,0.08)."
- "Build a navigation: white background, border-bottom 1px solid #E5E5E5, height 64px, max-width 1080px centered. Logo left in Inter weight 700 #0A0A0A. Links 14px weight 400 #737373, hover #0A0A0A. Right: secondary button + primary black button."

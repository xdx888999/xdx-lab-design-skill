# Design System: Aurora UI
# 极光界面风格

> **风格定位**：梦幻科技感。深色背景 + 动态渐变光球 + 玻璃拟态组合，是 AI 时代最流行的官网风格。
> **适用场景**：AI 产品、创业公司官网、SaaS Hero Section、创意工作室、Web3/DeFi 项目
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Aurora UI takes its name from the aurora borealis — the northern lights — and translates that phenomenon into interface design. The magic happens at the intersection of a deep, rich dark background and large, soft, animated color blobs that bleed light into the darkness. The result feels alive, atmospheric, and undeniably modern.

This style was popularized by companies like Stripe, Vercel, Linear, and a wave of AI startups wanting to signal "we are the future." The gradient blobs aren't decoration — they're structural. They define depth, warmth, and visual hierarchy by creating zones of luminosity that guide the eye.

Unlike pure Glassmorphism Dark (which focuses on the glass cards), Aurora UI is fundamentally about the **background ecosystem**. The background itself is the hero. Glass cards float above it, but the background carries the emotional weight of the design.

**Key Characteristics:**
- Rich dark background (deep indigo, near-black, or dark violet — never neutral black)
- 2–4 large, heavily blurred gradient "blobs" creating an aurora effect
- Glass/frosted overlay elements sit above the aurora
- Color temperature: cool (blues, purples) with warm punctuations (magenta, coral)
- Animated: blobs slowly drift and pulse (optional but ideal)
- Typography: bold, white, architectural — commands attention against the animated bg

---

## 2. Color Palette & Roles

### Background Base
- **Deep Space** (`#06061A`): Primary background, deepest layer. Deep violet-black.
- **Cosmos** (`#0A0A1F`): Alternative slightly lighter base.
- **Void** (`#04040F`): Darkest variant, maximum drama.

### Aurora Gradient Blobs (background layer — these are the aurora)
- **Aurora Violet** (`#7C3AED`): Dominant blob. Large, 500–800px, opacity 0.4, blur 100px.
- **Aurora Indigo** (`#4338CA`): Secondary blob. 400px, opacity 0.35, blur 80px.
- **Aurora Cyan** (`#0891B2`): Cool accent blob. 300px, opacity 0.3, blur 80px.
- **Aurora Magenta** (`#BE185D`): Warm punctuation blob. 250px, opacity 0.25, blur 80px.
- **Aurora Rose** (`#E11D48`): Hot accent, use sparingly. 200px, opacity 0.2, blur 60px.
- **Aurora Emerald** (`#059669`): Nature/growth variant. Optional 4th blob.

### Glass Surface Colors
- **Glass Primary** (`rgba(255,255,255,0.07)`): Standard card fill.
- **Glass Strong** (`rgba(255,255,255,0.11)`): Hero card, featured panels.
- **Glass Hover** (`rgba(255,255,255,0.13)`): Hover state.
- **Glass Border** (`rgba(255,255,255,0.12)`): Card/panel borders.
- **Glass Border Strong** (`rgba(255,255,255,0.2)`): Focused/active borders.

### Accent Colors
- **Primary** (`#818CF8`): Interactive elements — lighter indigo that reads well on dark.
- **Primary Bright** (`#6366F1`): CTA buttons.
- **Secondary** (`#22D3EE`): Cyan accents, tech feeling.
- **Highlight** (`#F472B6`): Pink highlights, badges.
- **Positive** (`#34D399`): Success states.
- **Warning** (`#FBBF24`): Warning states.

### Text
- **Text High** (`#FFFFFF`): Headings, critical labels.
- **Text Medium** (`rgba(255,255,255,0.8)`): Body text, descriptions.
- **Text Low** (`rgba(255,255,255,0.5)`): Muted text, captions.
- **Text Ghost** (`rgba(255,255,255,0.3)`): Disabled, placeholder.
- **Text Accent** (`#A5B4FC`): Links, highlighted text.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Inter`, fallback: `SF Pro Display`, `system-ui`
- **Display alternative**: `Syne` (more expressive, for creative brands)
- **Technical alternative**: `Geist` (for dev-focused products)
- **Monospace**: `JetBrains Mono`

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color |
|------|------|--------|-------------|----------------|-------|
| Mega Hero | 80px / 5rem | 800 | 0.95 | -4px | #FFFFFF |
| Display | 60px / 3.75rem | 700 | 1.0 | -2.5px | #FFFFFF |
| H1 | 48px / 3rem | 700 | 1.05 | -1.8px | #FFFFFF |
| H2 | 36px / 2.25rem | 600 | 1.1 | -1px | #FFFFFF |
| H3 | 24px / 1.5rem | 600 | 1.2 | -0.3px | rgba(255,255,255,0.9) |
| Body L | 18px / 1.125rem | 400 | 1.7 | 0 | rgba(255,255,255,0.75) |
| Body | 16px / 1rem | 400 | 1.65 | 0 | rgba(255,255,255,0.72) |
| Body S | 14px / 0.875rem | 400 | 1.5 | 0 | rgba(255,255,255,0.6) |
| Eyebrow | 12px / 0.75rem | 600 | 1 | 2px | #818CF8 (accent) UPPERCASE |
| Code | 13px / 0.8rem | 400 | 1.6 | 0 | #A5B4FC |

### Special: Gradient Text
Aurora UI frequently uses gradient text on hero headlines — a defining visual signature.
```css
background: linear-gradient(135deg, #FFFFFF 0%, #818CF8 50%, #22D3EE 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 4. Component Stylings

### Hero CTA Button (Primary)
```
background: linear-gradient(135deg, #6366F1, #8B5CF6)
color: #FFFFFF
padding: 14px 28px
border-radius: 12px
border: 1px solid rgba(139,92,246,0.4)
box-shadow: 0 0 30px rgba(99,102,241,0.35), 0 4px 20px rgba(0,0,0,0.3)
font: Inter 16px weight 600
hover: box-shadow 0 0 50px rgba(99,102,241,0.5), scale(1.02)
transition: all 200ms ease
```

### Secondary Button
```
background: rgba(255,255,255,0.07)
color: rgba(255,255,255,0.85)
padding: 14px 28px
border-radius: 12px
border: 1px solid rgba(255,255,255,0.14)
backdrop-filter: blur(10px)
font: Inter 16px weight 500
hover: background rgba(255,255,255,0.11)
```

### Feature Card (Glass)
```
background: rgba(255,255,255,0.07)
border: 1px solid rgba(255,255,255,0.12)
border-radius: 20px
backdrop-filter: blur(16px) saturate(180%)
-webkit-backdrop-filter: blur(16px) saturate(180%)
padding: 28px
box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)
hover: border-color rgba(255,255,255,0.2), background rgba(255,255,255,0.10)
```

### Stats / Metric Card
```
background: rgba(255,255,255,0.05)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 16px
backdrop-filter: blur(10px)
padding: 20px 24px
```
Metric value: 36px Inter weight 700 #FFFFFF
Metric label: 13px weight 500 rgba(255,255,255,0.55) uppercase letter-spacing 0.8px

### Navigation
```
background: rgba(6,6,26,0.7)
backdrop-filter: blur(24px) saturate(160%)
border-bottom: 1px solid rgba(255,255,255,0.07)
height: 64px
```

### Eyebrow Label (Section tag)
```
display: inline-flex
background: rgba(129,140,248,0.12)
color: #818CF8
border: 1px solid rgba(129,140,248,0.25)
border-radius: 100px (pill)
padding: 4px 14px
font: 12px Inter weight 600 uppercase letter-spacing 1.5px
```

### Glow Line Divider
```
height: 1px
background: linear-gradient(90deg, transparent, rgba(129,140,248,0.4), transparent)
margin: 64px 0
```

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 120px
- Hero to first section: 96–120px
- Section-to-section: 96px
- Card internal padding: 28px (standard), 36px (hero card)
- Card gap in grid: 16–20px

### Grid
- Max content width: 1200px
- Hero text max width: 700px (centered)
- Columns: 12, gutter: 24px
- Feature cards: 3-column on desktop, 2 on tablet, 1 on mobile

### Aurora Background Setup
```
The aurora consists of absolute-positioned divs with radial gradients, placed BEHIND all content:

Blob 1 (Violet, top-right):
  width: 600px, height: 600px
  background: radial-gradient(circle, #7C3AED 0%, transparent 70%)
  opacity: 0.4
  filter: blur(80px)
  position: absolute, top: -100px, right: -150px

Blob 2 (Indigo, center-left):
  width: 500px, height: 500px
  background: radial-gradient(circle, #4338CA 0%, transparent 70%)
  opacity: 0.3
  filter: blur(80px)
  position: absolute, top: 200px, left: -100px

Blob 3 (Magenta, bottom-right):
  width: 350px, height: 350px
  background: radial-gradient(circle, #BE185D 0%, transparent 70%)
  opacity: 0.25
  filter: blur(70px)
  position: absolute, bottom: 0, right: 200px
```

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Aurora base | Background + gradient blobs | Page backdrop |
| Subtle | `rgba(255,255,255,0.04)` no blur | Low-priority dividers |
| Card | `rgba(255,255,255,0.07)` + `blur(16px)` + top-edge highlight | Standard feature cards |
| Featured Card | `rgba(255,255,255,0.10)` + `blur(20px)` + glow border | Hero/CTA cards |
| Modal | `rgba(10,10,30,0.85)` + `blur(24px)` | Full overlay dialogs |
| Tooltip | `rgba(15,15,35,0.95)` + `blur(12px)` | Inline help, tooltips |

---

## 7. Do's and Don'ts

### Do
- Use deep violet-black (#06061A) as background base — not neutral black
- Position aurora blobs with `position: fixed` for parallax scroll effect
- Use gradient text for the primary hero headline
- Add the eyebrow label pattern (pill badge above main heading) for sections
- Ensure glass cards have `inset 0 1px 0 rgba(255,255,255,0.1)` top-edge highlight
- Animate blobs slowly (8–15 second keyframe loops) for the full effect

### Don't
- Don't make blobs symmetrical or evenly spaced — asymmetry feels natural
- Don't apply blur to the entire page — only to glass elements
- Don't use warm accent colors (orange, yellow) in the aurora — they break the cosmic palette
- Don't use more than 4 aurora blobs — beyond that, the background becomes muddy
- Don't place text directly over aurora blobs — always use glass cards as intermediary
- Don't use sharp-corner (0px) elements — the rounded language is essential

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Mega hero → 40px, reduce blur to 8px for performance, single column |
| Tablet | 640–1024px | Display → 48px, 2-column cards, smaller blobs |
| Desktop | 1024–1280px | Full effect, 3-column |
| Large | >1280px | Max 1200px centered, extra blob intensity |

### Performance
- On mobile, disable blob animations (`@media (prefers-reduced-motion): animation: none`)
- Reduce blob count from 3 to 2 on mobile
- Reduce blur from 80px to 40px on mobile
- Provide `will-change: transform` on animated blobs for GPU acceleration

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background base:    #06061A
Blob violet:        #7C3AED, opacity 0.4, blur 80px
Blob indigo:        #4338CA, opacity 0.3, blur 80px
Blob magenta:       #BE185D, opacity 0.25, blur 70px
Card fill:          rgba(255,255,255,0.07)
Card border:        rgba(255,255,255,0.12)
Primary accent:     #6366F1
Heading:            #FFFFFF
Body:               rgba(255,255,255,0.75)
Eyebrow color:      #818CF8
```

### Example Prompts
- "Create an Aurora UI hero section: deep violet-black background #06061A. Three aurora blobs: violet #7C3AED (600px, blur 80px, opacity 0.4) top-right, indigo #4338CA (500px, blur 80px, opacity 0.3) left, magenta #BE185D (350px, blur 70px, opacity 0.25) bottom-right. Centered content: eyebrow badge (rgba(129,140,248,0.12) bg, #818CF8 text, pill border-radius, 12px uppercase). Hero headline 60px Inter weight 700 letter-spacing -2.5px with gradient text (white to #818CF8 to #22D3EE). Subtitle rgba(255,255,255,0.75) 18px. Two buttons: gradient purple CTA + glass secondary."
- "Build a feature grid with Aurora style: 3 glass cards (rgba(255,255,255,0.07) bg, 1px solid rgba(255,255,255,0.12) border, blur(16px), 20px radius, 28px padding). Each card: icon in rgba(99,102,241,0.15) rounded square, heading 20px white weight 600, body 14px rgba(255,255,255,0.65)."

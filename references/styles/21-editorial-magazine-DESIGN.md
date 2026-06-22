# Design System: Editorial Magazine
# 编辑杂志风格

> **风格定位**：印刷出版的数字化延伸。断层排版、混合字号、文字即图形，NYT/Vogue/Wired 的网页设计语言。
> **适用场景**：在线杂志、新闻媒体、创意博客、文化评论、长文阅读平台、作者个人网站
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Editorial Magazine design borrows its rules from over a century of print publication. The grid is not background infrastructure — it is the visible architecture. Typography is the primary visual element, not decoration. Images are placed with intention, not filled into card slots.

The style celebrates imperfection and surprise — an unexpected column width, a headline that bleeds off-screen, a pull quote set at 3× body size. Where corporate design creates comfort through consistency, editorial design creates engagement through controlled surprise.

**Key Characteristics:**
- Strict typographic hierarchy — type size varies from 10px captions to 120px display
- Serif for editorial credibility (NYT model) OR strong sans for authority (Wired model)
- High-contrast: black text on white paper, or white text on image
- Pull quotes at 200–300% body size
- Multi-column text layout (newspaper grid)
- Photography: full-bleed, dominant, editorial — not stock
- Minimal color — black, white, one accent maximum
- Section rules (horizontal lines) as structural dividers

---

## 2. Color Palette & Roles

### Classic (NYT / Traditional)
- **Paper** (`#FAF9F7`): Slightly warm off-white — newsprint.
- **Ink** (`#121212`): Near-black — print-quality ink.
- **Mid Gray** (`#6B6B6B`): Bylines, captions, metadata.
- **Light Gray** (`#E5E5E5`): Dividers, column rules.
- **Accent Red** (`#B5121B`): NYT-style section label red.

### Modern (Wired / Digital Magazine)
- **Background** (`#FFFFFF`): Clean white.
- **Ink** (`#0A0A0A`): Black.
- **Mid** (`#555555`): Secondary text.
- **Accent** (one vivid color): `#FF4500` (orange), `#0052CC` (blue), or brand-specific.

---

## 3. Typography Rules

### Font Family (Classic Model)
- **Display**: `Playfair Display` or `Libre Baskerville`
- **Body**: `Georgia` or `Merriweather` (optimized for long reading)
- **Sans accent**: `Inter` for UI elements, captions, labels

### Font Family (Modern Model)
- **Display**: `Barlow Condensed` weight 800 or `Oswald` (condensed power)
- **Body**: `Source Serif 4` or `Lora`
- **Sans**: `Inter` or `IBM Plex Sans`

### Hierarchy

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Cover/Hero Display | 96–120px | 800 (sans) / 400 (serif) | Dominant, may crop |
| H1 | 56–72px | 700 | Section leads |
| Deck/Subtitle | 22px | 400 italic | Below headline, intro |
| Byline | 13px | 400 | Author + date, uppercase caps |
| Body | 18–19px | 400 | Long-read optimal (18px min) |
| Pull Quote | 36–48px | 400–600 italic | In-article emphasis |
| Caption | 12px | 400 | Italic or small-caps |
| Section Label | 11px | 700 | UPPERCASE, accent color |
| Footnote | 12px | 400 | Muted gray |

### Reading Optimization
- Body line-height: 1.7–1.8 (print-like)
- Body max-width: 660–720px (optimal reading line length)
- Body font-size: 18–19px (accessible for long reads)
- Letter-spacing body: 0.01em (barely positive, open)

---

## 4. Component Stylings

### Article Header
```
Section label: 11px Inter weight 700 uppercase #B5121B letter-spacing 2px
Headline: 72px Playfair Display weight 700 #121212 line-height 1.05
Deck: 22px weight 400 italic #555555 line-height 1.5
Byline: 13px Inter weight 500 #6B6B6B "BY AUTHOR NAME · DATE"
Rule: 1px solid #E5E5E5, margin: 24px 0
```

### Pull Quote
```
font: 40px Playfair Display italic weight 400 #121212
line-height: 1.3
border-left: 4px solid #B5121B (or accent color)
padding: 0 0 0 24px
margin: 40px 0
max-width: 480px
```

### Full-Bleed Image
```
width: 100vw
margin-left: calc(50% - 50vw) (break out of content width)
height: 60vh
object-fit: cover
Caption below: 12px italic #6B6B6B, max-width content
```

### Related Articles Row
```
3-column grid, 24px gap
Thumbnail: 2:1 ratio, hover brightness 110%
Category label: 11px uppercase accent color
Headline: 18px Playfair weight 700 line-height 1.3
Byline: 12px #6B6B6B
Divider top: 2px solid #121212 (heavy rule signals importance)
```

### Section Divider (column rule)
```
Double rule: 3px #121212 + 1px gap + 1px #E5E5E5
Or: single 2px solid #121212 with section label in left notch
```

---

## 5. Layout Principles

### Article Layout
- Content max width: 720px (body text)
- Breakout elements: full-width images, pull quotes, data viz
- Multi-column: 2-col for features, 3-col for listing pages
- Grid: 12-column, 24px gutter

### Homepage / Index
- Hero: 1 dominant story (large image + headline)
- Secondary: 3-across grid
- Deep links: list format (title + byline only)
- Right rail: editor's picks, newsletter signup

---

## 6. Depth & Elevation

Editorial uses no shadows. Hierarchy is entirely typographic:
- Size contrast (120px vs 12px)
- Weight contrast (bold vs regular)
- Spatial separation (80px between sections)
- Rules (horizontal lines of varying weight)

---

## 7. Do's and Don'ts

### Do
- Use a dominant serif for credibility in the editorial register
- Set body text at 18px minimum for long-form reading
- Allow headlines to run long — editorial doesn't truncate
- Use pull quotes at genuine quote size (40px+)
- Vary column widths deliberately — asymmetry creates dynamism

### Don't
- Don't use card-based layouts for editorial — lists and grids only
- Don't truncate article titles — show full headlines
- Don't add rounded corners to images — hard edges are editorial
- Don't use more than 1 accent color

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, body 16–17px, hero image 50vh |
| Tablet | 640–1024px | Single-column body, 2-col related articles |
| Desktop | 1024px+ | Body 720px centered, breakout elements |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Paper:         #FAF9F7
Ink:           #121212
Mid gray:      #6B6B6B
Light gray:    #E5E5E5
Accent red:    #B5121B
```

### Example Prompts
- "Build an editorial article header: #FAF9F7 background, 720px max-width centered. Section label: 11px Inter uppercase #B5121B letter-spacing 2px. Headline: 72px Playfair Display weight 700 line-height 1.05 #121212. Deck: 22px italic weight 400 #555555 line-height 1.5, margin-top 16px. Byline row: 1px #E5E5E5 top border, 24px margin, 13px Inter #6B6B6B 'BY TERRY · JUNE 22, 2026'."
- "Create a magazine-style pull quote: 40px Playfair Display italic weight 400 #121212, line-height 1.3, border-left 4px solid #B5121B, padding-left 24px. Margin: 48px -40px (slightly outdented from body column). Max-width 480px."

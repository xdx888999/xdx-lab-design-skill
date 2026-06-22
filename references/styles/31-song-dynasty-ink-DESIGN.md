# Design System: Song Dynasty Ink
# 宋代水墨美学风格

> **风格定位**：宋代文人审美的数字演绎。水墨留白、天青汝瓷、极简诗意。不是装饰，是境界。
> **适用场景**：中国文化品牌、博物馆/文博机构、茶道/香道/书法产品、高端汉字排版、文学/诗歌平台、国风奢侈品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Song Dynasty (960–1279 CE) represents the apex of Chinese literati aesthetics — an era of ink wash painting, celadon porcelain, and scholarly restraint. This design system translates that sensibility into digital form.

The visual philosophy is 留白 (liú bái) — "leaving white." Empty space is not absence; it is presence. Like Fan Kuan's *Travelers Among Mountains and Streams*, the composition breathes. A single brushstroke carries more weight than a page full of decoration.

Colors are drawn from two sources: the warm ivory of Xuan paper and the muted tones of Song ink wash paintings. The one permissible accent is 汝窑天青 (Ru-ware celadon) — the legendary blue-green glaze that Emperor Huizong declared resembled "the sky after rain." A vermillion seal stamp appears only once per composition.

**Key Characteristics:**
- Warm ivory background (#F7F3EC) — never pure white
- Ink wash monochrome primary palette — 4 tones from near-black to near-invisible
- Ru-ware celadon (#8BB5B0) as the sole color accent — used sparingly
- Seal vermillion (#C43B2A) only for a single visual anchor per page
- Noto Serif SC — classical Chinese serif that echoes printed Song editions
- No box-shadows. No gradients. No decorative borders.
- Asymmetric compositions — like a painted scroll
- Generous negative space — 60%+ of any layout is empty

---

## 2. Color Palette & Roles

### Background
- **Xuan Paper** (`#F7F3EC`): Primary background — warm ivory, not pure white.
- **Aged Paper** (`#EEE8DB`): Subtle section differentiation, card backgrounds.
- **Ink Wash Tint** (`#E8E2D6`): Deeper tone for contrast sections.

### Ink Scale (primary palette)
- **Ink Black** (`#1C1C1C`): Headlines, primary text — rich but not harsh.
- **Medium Ink** (`#4A4A46`): Body text, secondary headings.
- **Light Ink** (`#8A8A84`): Captions, supporting text, labels.
- **Ghost Ink** (`#BCBAB4`): Decorative watermarks, background calligraphy.
- **Ink Wash** (`#D8D5CF`): Hairline borders, dividers.

### Accent Colors (use with extreme restraint)
- **Ru Celadon** (`#8BB5B0`): One accent per composition — active states, links, key highlights.
- **Celadon Pale** (`#C8DEDD`): Celadon background tints for featured sections.
- **Seal Vermillion** (`#C43B2A`): One per page only — like a seal stamp. Never use for multiple elements.
- **Ochre** (`#9A6B4B`): Warm earth accent for organic content contexts.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Serif SC` (Google Fonts) — the digital heir to carved Song woodblock type
- **Fallback**: `Source Han Serif SC`, `STSong`, `SimSun`, `serif`
- **Latin/Numbers**: `EB Garamond` or `Cormorant Garamond` — old-style serif pairs naturally

### Type Scale

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Chapter Title | 48–60px | 700 | #1C1C1C | 诗意短句，最多8字 |
| Section Heading | 28–36px | 600 | #1C1C1C | |
| Sub-heading | 20–24px | 400 | #4A4A46 | Ink medium tone |
| Body | 17–18px | 400 | #4A4A46 | line-height: 2.0 |
| Caption | 13–14px | 300 | #8A8A84 | Light ink |
| Watermark | 60–120px | 700 | #BCBAB4 | opacity 0.08, background poetry |
| Seal Text | 11–13px | 600 | #C43B2A | Vermillion, uppercase, letter-spacing: 4px |

### Typography Rules
- `line-height: 2.0–2.4` — Song-era printing had generous leading
- `letter-spacing: 0.05–0.15em` — slight spacing on headings
- `font-feature-settings: "palt"` — proportional alternate for CJK
- Vertical text option: `writing-mode: vertical-rl; text-orientation: mixed`
- Maximum 20 characters per line for headings; 36–40 for body
- Never center body text. Left-align or right-align only (classical scroll convention)

---

## 4. Component Stylings

### Card (藏书卡)
```
background: #EEE8DB
border: 1px solid #D8D5CF
border-radius: 0px  ← no rounding; classical woodblock has sharp corners
padding: 32px 36px

No box-shadow — elevation through background contrast only
Optionally: a single 2px left border in celadon (#8BB5B0)
```

### Button (墨印式)
```
Primary:
  background: #1C1C1C
  color: #F7F3EC
  border: none
  border-radius: 0px
  padding: 12px 32px
  font: Noto Serif SC 400 14px
  letter-spacing: 0.15em
  hover: background #4A4A46

Ghost:
  background: transparent
  border: 1px solid #4A4A46
  color: #4A4A46
  hover: border-color #1C1C1C, color #1C1C1C

Celadon accent button:
  background: #8BB5B0
  color: #F7F3EC
  ← use sparingly, at most one per page
```

### Divider (墨线)
```
Single hairline: border-top: 1px solid #D8D5CF
Double line (classical): two 1px lines separated by 3px gap
Section break: full-width; centered character like "◇" in ghost ink
```

### Quote / Verse Block (诗句引用)
```
border-left: none  ← no Western blockquote style
padding-left: 2em
font-style: normal (italic is a Western convention)
font-size: 1.15em
line-height: 2.4
color: #4A4A46

Optional: display as vertical text (writing-mode: vertical-rl)
Seal element: small vermillion seal image top-right corner
```

### Ink Wash Section Background
```
background: linear-gradient(to bottom, #F7F3EC 0%, #EEE8DB 100%)
Or: use a subtle SVG noise texture at 3% opacity
Never use photographic backgrounds
```

### Tag / Label (印章牌)
```
background: transparent
border: 1px solid #8A8A84
color: #8A8A84
padding: 3px 10px
font-size: 12px
letter-spacing: 0.12em
border-radius: 0  ← always square
```

---

## 5. Layout Principles

### The Scroll Principle
Layout flows vertically like a handscroll (手卷). The reader moves through the composition progressively. Each "scene" is complete and self-contained.

### Spatial Distribution
- **Margin minimum**: 80px desktop, 32px mobile
- **Max content width**: 720px — scholarly text width, not marketing width
- **Section padding**: 120px top/bottom — breath is generous
- **Image placement**: Asymmetric — flush left or flush right, never centered
- **Text offset**: Body text starts at 15–20% from left for main reading column

### Composition Rules
- One visual focus per section — ink painting has a single subject (主体)
- Use negative space as intentional design, not leftover space
- Avoid symmetrical layouts — Song paintings are asymmetric (三远法: high, deep, flat distance)
- Poetry or prose watermarks as background decoration (opacity: 0.04–0.08)

---

## 6. Depth & Elevation

Song Dynasty design has **no shadows**. Depth is achieved through:

| Method | Implementation |
|--------|---------------|
| Color value contrast | Lighter bg vs darker content |
| Ink border | 1px solid #D8D5CF |
| Left celadon stripe | 2px left border #8BB5B0 |
| Generous spacing | Padding isolates elements without shadows |
| Layering | Slightly darker `#EEE8DB` for cards over `#F7F3EC` base |

Never use `box-shadow` — it looks anachronistic in this aesthetic.

---

## 7. Do's and Don'ts

### Do
- Use Noto Serif SC for all Chinese text — never Hei (sans-serif)
- Keep body line-height at 2.0 minimum — classical Chinese text breathes
- Use the seal vermillion element exactly once per page as a visual anchor
- Apply celadon as sparingly as a single dot of color in a monochrome painting
- Write headlines as poetic short phrases (诗意短句), not marketing slogans
- Use vertical text for decorative short phrases or navigational elements
- Let 60%+ of the screen be paper — empty space IS the design

### Don't
- Don't use sans-serif fonts — 宋体 is the only authentic choice
- Don't use box-shadows or drop-shadows
- Don't use rounded corners (border-radius: 0 everywhere)
- Don't use photographic backgrounds
- Don't center body text — this is a Western print convention
- Don't use more than 2 accent colors (celadon + one vermillion element max)
- Don't add decorative borders or frames — Song aesthetics are frameless
- Don't use gradients except subtle paper textures

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | margin: 24px; max-width 100%; vertical text disabled |
| Tablet | 640–960px | margin: 48px; max-width: 600px centered |
| Desktop | 960px+ | margin: 80px+; max-width: 720px; asymmetric image placement enabled |
| Wide | 1440px+ | Content stays 720px, extra margin becomes white field (留白) |

On mobile: reduce font sizes by 1 step; increase line-height to 2.2 for touch reading comfort.

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Paper bg:         #F7F3EC
Card bg:          #EEE8DB
Divider:          #D8D5CF
Ink black:        #1C1C1C
Ink medium:       #4A4A46
Ink light:        #8A8A84
Ink ghost:        #BCBAB4
Ru celadon:       #8BB5B0
Celadon pale:     #C8DEDD
Seal vermillion:  #C43B2A
Ochre:            #9A6B4B
```

### Example Prompts
- "Design a Song Dynasty aesthetic landing page: #F7F3EC paper background. Max-width 720px centered. Top: a single landscape ink painting image (full width, black and white). Below: large headline in Noto Serif SC 700 52px #1C1C1C, two short lines. Body text 18px #4A4A46 line-height 2.2. One horizontal hairline divider (1px #D8D5CF). A feature card with #EEE8DB background, 2px left border in celadon #8BB5B0, 0px radius. One call-to-action button: black (#1C1C1C), 0px radius, 12px Noto Serif SC letter-spacing 0.15em. One small vermillion seal element top-right. Generous whitespace throughout."
- "Create a Song Dynasty poetry display: vertical text layout (writing-mode: vertical-rl). Background #F7F3EC. Three columns of vertical Chinese poetry text, Noto Serif SC 20px #4A4A46 line-height 2.4. Thin hairline column separators (1px #D8D5CF). A ghost ink watermark of large characters in background (opacity 0.06). One vermillion seal stamp image, right-aligned. Absolute minimal decoration — the text IS the design."

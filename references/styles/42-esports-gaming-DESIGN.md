# Design System: Esports & Gaming
# 电竞赛事风格

> **风格定位**：职业电竞赛事的视觉冲击力。League of Legends World Championship + ESL + Riot Games——深色、霓虹、对角切割、斜面几何。
> **适用场景**：电竞战队官网、游戏锦标赛、游戏外设品牌、直播平台、电竞俱乐部、游戏社区
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Esports design is the intersection of sports energy and science-fiction aesthetics. It must communicate speed, power, and the highest-stakes competition. Color explodes from dark backgrounds. Typography is aggressive and angular. Layout breaks conventional grids with diagonal cuts and angled elements.

The visual language draws from competitive gaming culture: Riot Games' League Championship Series, Valve's The International, ESL's branded events. Common elements: deep dark backgrounds with electric accent colors, hexagonal or diamond motifs, aggressive typography, neon glows, and the diagonal slash that says "this goes faster than normal."

**Key Characteristics:**
- Deep void backgrounds (#0A0C14, #0D0F1A)
- Electric accent colors: cyber cyan (#00D4FF) or poison green (#39FF14) — choose one per brand
- Aggressive display fonts: Rajdhani, Barlow Condensed, or Bebas Neue
- Diagonal clip-path sections (skewY: -3deg or clip-path: polygon)
- Neon glow effects on key elements
- Angular/geometric card shapes — no soft rounding
- High-contrast: black, white, and neon only — no pastels

---

## 2. Color Palette & Roles

### Background
- **Void** (`#0A0C14`): Deepest black-blue — primary background.
- **Dark Panel** (`#0D1120`): Card surfaces.
- **Surface Raised** (`#141929`): Elevated elements.

### Neon Accents (choose one primary per project)
- **Cyber Cyan** (`#00D4FF`): Technology, strategy games, MOBA.
- **Venom Green** (`#39FF14`): FPS, battle royale, extreme sports.
- **Electric Purple** (`#8B5CF6`): Fantasy, RPG esports.
- **Plasma Orange** (`#FF6B00`): Fighting games, action sports.

### Universal Accents
- **Kill Red** (`#FF2D55`): Alerts, health indicators, kill counts.
- **Gold Rank** (`#F5A623`): Rankings, achievements, champion tier.

### Text
- **Primary** (`#FFFFFF`): Main text on dark.
- **Secondary** (`#94A3B8`): Supporting text.
- **Accent Text** (`#00D4FF`): Neon text for emphasis.

---

## 3. Typography Rules

### Font Family
- **Display**: `Rajdhani` weight 700 — angular, aggressive
- **Alternative Display**: `Barlow Condensed` weight 800 — tall, powerful
- **Body**: `Inter` weight 400–500 — readable in dark environments
- **Stats**: `Rajdhani` or `Inter` tabular-nums

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Tournament Title | 64–96px | 700 | Rajdhani, uppercase |
| Team Name | 36–48px | 700 | Rajdhani |
| Player Name | 24px | 600 | Inter uppercase, letter-spacing: 2px |
| Stat Value | 40–56px | 700 | Rajdhani tabular-nums |
| Body | 15–16px | 400 | Inter |
| Label | 11px | 700 | Inter uppercase, letter-spacing: 2px |
| Neon Callout | 20px | 700 | Rajdhani, neon accent color |

---

## 4. Component Stylings

### Player/Team Card
```
background: #0D1120
border: 1px solid rgba(0,212,255,0.3)  ← neon border subtle
clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)
  ← top-right corner cut for angular effect
padding: 20px
hover: border-color rgba(0,212,255,0.8), box-shadow 0 0 20px rgba(0,212,255,0.2)

Player tag: Inter 11px uppercase #94A3B8 letter-spacing: 2px
Name: Rajdhani 700 24px #FFFFFF
Role: Inter 12px neon accent color
Stats: Rajdhani 700 28px #FFFFFF tabular-nums
```

### Neon Button
```
Primary:
  background: #00D4FF
  color: #0A0C14
  border-radius: 0px
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)  ← parallelogram
  padding: 12px 32px
  font: Rajdhani 700 14px uppercase letter-spacing: 2px
  box-shadow: 0 0 20px rgba(0,212,255,0.5)
  hover: box-shadow 0 0 40px rgba(0,212,255,0.7)

Ghost:
  background: transparent
  border: 1.5px solid #00D4FF
  color: #00D4FF
  hover: box-shadow 0 0 16px rgba(0,212,255,0.3)
```

### Match Score Display
```
background: #0D1120
Teams row: Team A | SCORE | Team B
  Team names: Rajdhani 700 20px uppercase
  Score: Rajdhani 700 48px #FFFFFF tabular-nums
  VS separator: 20px #00D4FF bold
Divider: angled line in neon color
```

### Stat Bar (KDA, win rate, etc.)
```
Track: background #141929, height 6px, border-radius 0
Fill: background gradient from #00D4FF to #0050FF or solid neon
Label: Inter 12px uppercase #94A3B8
Value: Inter 700 14px #FFFFFF tabular-nums
```

### Diagonal Section Separator
```
position: relative
::after {
  content: '';
  position: absolute;
  bottom: -40px;
  width: 100%;
  height: 80px;
  background: #0A0C14;
  transform: skewY(-2deg);
}
```

---

## 5. Layout Principles

- **Diagonal sections**: Use skewY transforms or clip-path for section breaks
- **Max-width**: 1400px — esports needs big screens
- **Section padding**: 80px — but with angled breaks
- **Hero**: Full-bleed dark with player/character art; large diagonal text overlay
- **Grid**: Can be angled — rotate 2–3° for specific hero elements
- **Ticker/live updates**: Horizontal scrolling score ticker at top

---

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Base | `#0A0C14` void |
| Panel | `#0D1120` dark panel + neon border subtle |
| Elevated | `#141929` + stronger neon glow |
| Active | Full neon glow `box-shadow: 0 0 30px rgba(neon, 0.6)` |

---

## 7. Do's and Don'ts

### Do
- Use angular clip-paths and diagonal cuts — esports never has soft layouts
- Apply neon glow on interactive elements for gaming feel
- Use tabular numerals for all stats — precision matters in esports
- Create high contrast: dark bg, bright neon accent — nothing in between
- Add subtle scan-line or grid texture to backgrounds (HUD aesthetic)

### Don't
- Don't use rounded corners — angular is the aesthetic
- Don't use more than one neon accent color per project
- Don't use pastel or muted colors — esports is saturated
- Don't use serif fonts — display-weight sans only
- Don't make it readable in bright sunlight — dark mode is the esports standard

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Full-width cards; stack stats vertically; reduce glow effects |
| Desktop | 1024px+ | Wide match displays; multi-column tournament brackets |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Void bg:         #0A0C14
Dark panel:      #0D1120
Cyber cyan:      #00D4FF
Venom green:     #39FF14
Kill red:        #FF2D55
Gold rank:       #F5A623
Text white:      #FFFFFF
Text secondary:  #94A3B8
```

### Example Prompts
- "Esports tournament landing page: #0A0C14 void background. Hero: full-bleed dark with diagonal cyan (#00D4FF) accent lines, large Rajdhani 700 tournament name 80px uppercase. Player cards: #0D1120 bg, clipped top-right corner, neon cyan border (30% opacity), hover full glow. Match schedule: score display with Rajdhani 700 numbers, neon separator. CTA button: parallelogram clip-path, #00D4FF background, #0A0C14 text, glow shadow. Diagonal section transitions."

# Design System: Health & Wellness
# 健康 Wellness 风格

> **风格定位**：柔和、治愈、自然。降低焦虑感的视觉语言，Calm / Headspace / Oura 的设计基因。
> **适用场景**：冥想/正念 App、健身追踪、睡眠 App、心理健康、营养/饮食、瑜伽品牌
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Health & Wellness design has one psychological goal: make the user feel safe, calm, and capable. High contrast, urgency colors, and dense information architectures work against this. The design must reduce cognitive load and lower cortisol, not raise it.

The palette draws from nature and twilight: deep ocean blues for the night/sleep context, sage greens and warm creams for daytime wellness. Typography is gentle but clear — never aggressive. Imagery is soft, organic, and aspirational without being intimidating.

**Key Characteristics:**
- Two modes: Day (cream/green/warm) and Night (deep navy/indigo/soft glow)
- Organic shapes (biomorphic, no hard corners)
- Photography: natural light, genuine people, outdoor environments
- No urgency colors (no red CTAs, no orange sale badges)
- Gradients: dawn/dusk color progressions, not electric
- Large border-radius (16–24px) — soft, safe, approachable

---

## 2. Color Palette & Roles

### Day Mode (Calm / Mindfulness)
- **Background**: `#FAF8F5` — warm natural white
- **Surface**: `#F2EDE4` — cream
- **Accent Sage**: `#7BAE7F` — calm green
- **Accent Teal**: `#4A9E9E` — focused teal
- **Heading**: `#2D3436` — dark, not harsh
- **Body**: `#636E72` — medium warm gray
- **Border**: `#DDD8CF` — soft sand

### Night Mode (Sleep / Recovery)
- **Background**: `#0D1B2A` — deep ocean blue
- **Surface**: `#152334` — slightly lighter
- **Accent Indigo**: `#6C8EBF` — soft moonlight blue
- **Accent Lavender**: `#9B8EC4` — gentle purple
- **Heading**: `#E8EEF4` — soft near-white
- **Body**: `rgba(232,238,244,0.7)` — calm body text

### Universal Accent
- **Sunrise Gold**: `#E8A87C` — warmth, motivation (use sparingly)
- **Mint Fresh**: `#A8D8C2` — light, refreshing variant

---

## 3. Typography Rules

### Font Family
- **Primary**: `DM Sans` weight 300–500, fallback `Inter`
- **Display**: `Fraunces` or `Lora` — warm, humanist serif for headlines

### Hierarchy

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Display | 52px | 300–400 | Serif, wide line-height 1.15 |
| H1 | 40px | 400 | Warm, inviting |
| H2 | 28px | 500 | Section titles |
| Body L | 18px | 300 | Generous line-height 1.8 |
| Body | 16px | 300–400 | line-height 1.75 |
| Label | 12px | 500 | Uppercase, letter-spacing 1.5px |

---

## 4. Key Components

### Primary Button (Day)
```
background: #7BAE7F
color: #FFFFFF
padding: 14px 28px, border-radius: 100px (pill)
font: DM Sans 15px weight 500
box-shadow: 0 4px 16px rgba(123,174,127,0.3)
hover: background #6A9E6E
```

### Breathing / Meditation Circle
```
width: 160px, height: 160px, border-radius: 50%
background: radial-gradient(circle, rgba(123,174,127,0.3) 0%, rgba(74,158,158,0.1) 100%)
border: 2px solid rgba(123,174,127,0.4)
animation: pulse 4s ease-in-out infinite
Center text: 24px Fraunces weight 400, label 11px uppercase letter-spacing 2px
```

### Activity Card
```
background: #F2EDE4 (day) / #152334 (night)
border-radius: 20px
padding: 20px
border: none (soft bg difference creates separation)
Icon area: 56px circle, accent color 15% opacity
Title: 17px DM Sans weight 500 #2D3436
Subtitle: 13px weight 400 #636E72
Progress bar: 6px height, 100px radius, accent color fill
```

### Score Ring (sleep/activity)
```
SVG circle, stroke: accent color, stroke-width: 8px
Background ring: rgba(accent, 0.15)
Center: score number 48px DM Sans weight 700
Label: 12px uppercase #636E72
```

### Streak Badge
```
background: linear-gradient(135deg, #E8A87C, #D4956A)
border-radius: 12px, padding: 12px 16px
"🔥 14 day streak" — 14px DM Sans weight 600 white
```

---

## 5. Layout & Prompt Guide

### Key Patterns
- Onboarding: full-screen, one question per screen, soft illustrations
- Dashboard: greeting header, ring/score big display, today's sessions
- Session player: near-full-screen, minimal controls, calming background

### Quick Color Reference
```
Day bg:      #FAF8F5
Night bg:    #0D1B2A
Sage green:  #7BAE7F
Teal:        #4A9E9E
Heading:     #2D3436
Body:        #636E72
Border:      #DDD8CF
```

### Example Prompts
- "Design a wellness app home screen (day mode): background #FAF8F5, warm greeting 'Good morning, Terry' 28px Fraunces weight 400 #2D3436. Today's summary card: #F2EDE4 bg, 20px radius, activity ring (SVG, sage green #7BAE7F, 8px stroke, 80px diameter). Below: 3 session cards (title, duration, category badge in pill shape). CTA: sage green #7BAE7F pill button."
- "Create a sleep dashboard (night mode): background #0D1B2A. Soft indigo gradient header. Large sleep score ring SVG (200px, #6C8EBF stroke). Below: sleep stages bar chart (light blue #6C8EBF, deep blue #152334 segments). Stat cards in #152334 with 20px radius, soft text rgba(232,238,244,0.75)."

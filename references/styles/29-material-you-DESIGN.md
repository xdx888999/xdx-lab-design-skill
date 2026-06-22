# Design System: Material You / Material Design 3
# Material You 动态色彩风格

> **风格定位**：Google 2021年发布的 Material Design 3 — 动态色彩、圆角大进化、个性化主题系统。
> **适用场景**：Android App、Google 生态产品、跨平台应用、Material Design 3 组件库实现
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Material You (Material Design 3) represents Google's most human-centered evolution of Material Design. The central innovation is dynamic color — the UI generates a cohesive color scheme from the user's wallpaper, making the system feel personal. Large components, expressive typography, and generous corner radii give the system warmth.

The philosophy: "Adaptive, personal, expressive." Where Material Design 2 was utilitarian blue-and-gray, Material You is colorful, rounded, and individual.

**Key Characteristics:**
- Dynamic color system: 5 color roles (Primary, Secondary, Tertiary, Error, Neutral)
- Large FAB (Floating Action Button) — signature component
- Generous border-radius: 28px for cards, 16px for buttons
- Roboto Flex variable font — expressive headlines
- Tonal surface colors (surface, surface-variant, surface-container)
- Bottom navigation bar (not sidebar on mobile)
- Adaptive layouts: phone → tablet → desktop

---

## 2. Color Palette & Roles

Material You uses a seed color to generate the full scheme. Here is a default blue-based scheme:

### Primary Palette
- **Primary** (`#6750A4`): Main brand color — buttons, FAB.
- **On Primary** (`#FFFFFF`): Text/icon on Primary.
- **Primary Container** (`#EADDFF`): Tinted surface for primary context.
- **On Primary Container** (`#21005D`): Text on Primary Container.

### Secondary
- **Secondary** (`#625B71`): Supporting emphasis.
- **Secondary Container** (`#E8DEF8`): Background for secondary elements.
- **On Secondary Container** (`#1D192B`): Text on Secondary Container.

### Tertiary (accent)
- **Tertiary** (`#7D5260`): Additional color role.
- **Tertiary Container** (`#FFD8E4`): Background for tertiary.

### Surface Hierarchy
- **Background** (`#FFFBFE`): App background.
- **Surface** (`#FFFBFE`): Card default.
- **Surface Variant** (`#E7E0EC`): Alternative surface tint.
- **Surface Container Lowest** (`#FFFFFF`): Highest elevation.
- **Surface Container Low** (`#F7F2FA`):
- **Surface Container** (`#F3EDF7`):
- **Surface Container High** (`#ECE6F0`):
- **Surface Container Highest** (`#E6E0E9`): Lowest elevation appearance.

### Text / Icon
- **On Background** (`#1C1B1F`): Primary text.
- **On Surface** (`#1C1B1F`): Text on surfaces.
- **On Surface Variant** (`#49454F`): Lower emphasis text.
- **Outline** (`#79747E`): Borders, dividers.
- **Outline Variant** (`#CAC4D0`): Subtle borders.

---

## 3. Typography Rules

### Font Family
- **Primary**: `Roboto Flex` (variable font) or `Roboto`
- **Fallback**: `Google Sans`, `system-ui`

### Material Type Scale (M3)

| Token | Size | Weight | Line Height | Notes |
|-------|------|--------|-------------|-------|
| Display Large | 57px | 400 | 64px | |
| Display Medium | 45px | 400 | 52px | |
| Display Small | 36px | 400 | 44px | |
| Headline Large | 32px | 400 | 40px | |
| Headline Medium | 28px | 400 | 36px | |
| Headline Small | 24px | 400 | 32px | |
| Title Large | 22px | 400 | 28px | |
| Title Medium | 16px | 500 | 24px | |
| Title Small | 14px | 500 | 20px | |
| Body Large | 16px | 400 | 24px | |
| Body Medium | 14px | 400 | 20px | |
| Body Small | 12px | 400 | 16px | |
| Label Large | 14px | 500 | 20px | |
| Label Medium | 12px | 500 | 16px | |
| Label Small | 11px | 500 | 16px | |

---

## 4. Component Stylings

### FAB (Floating Action Button)
```
background: #EADDFF (Primary Container)
color: #21005D (On Primary Container)
width: 56px, height: 56px
border-radius: 16px
box-shadow: elevation 3 (0 4px 8px rgba(0,0,0,0.15))
icon: 24px
Extended FAB: width auto, padding 16px 20px, border-radius 16px
```

### Filled Button
```
background: #6750A4 (Primary)
color: #FFFFFF (On Primary)
padding: 10px 24px
border-radius: 100px (pill in M3)
border: none
height: 40px
font: Roboto 14px weight 500 (Label Large)
hover: state layer rgba(255,255,255,0.08) on top
```

### Tonal Button (M3 signature)
```
background: #EADDFF (Primary Container)
color: #21005D (On Primary Container)
padding: 10px 24px
border-radius: 100px
height: 40px
font: Roboto 14px weight 500
hover: state layer rgba(33,0,93,0.08)
```

### Card (M3 Variants)
```
Elevated:  background #FFFBFE, box-shadow elevation 1, border-radius 12px
Filled:    background #E6E0E9 (Surface Container Highest), no shadow, border-radius 12px
Outlined:  background #FFFBFE, border 1px solid #CAC4D0, no shadow, border-radius 12px
```

### Navigation Bar (M3)
```
background: #FFFBFE
border-top: 1px solid #CAC4D0
height: 80px
3–5 destinations
Active indicator: #EADDFF pill under icon (56px × 32px, border-radius 100px)
Active icon: #21005D (On Primary Container)
Active label: 12px Roboto weight 500 #6750A4
Inactive: #49454F icons + labels
```

### Chip
```
border: 1px solid #CAC4D0
border-radius: 8px (M3 chips are slightly less round)
padding: 6px 16px, height: 32px
font: Roboto 14px weight 500 #49454F
Selected: background #EADDFF, border-color transparent, color #21005D
```

---

## 5. Layout & Prompt Guide

### Adaptive Layout
- Mobile: bottom nav, card list
- Tablet: navigation rail (left, icon-only)
- Desktop: navigation drawer (left, icon + label)

### Quick Color Reference
```
Background:            #FFFBFE
Primary:               #6750A4
Primary Container:     #EADDFF
On Primary Container:  #21005D
Surface Container:     #F3EDF7
Outline:               #79747E
On Background:         #1C1B1F
```

### Example Prompts
- "Build a Material You card list: #FFFBFE background. Filled cards: #E6E0E9 background, 12px border-radius, no border. Title: 16px Roboto weight 500 #1C1B1F. Body: 14px weight 400 #49454F. Tonal button inside: #EADDFF bg, #21005D text, 100px radius pill, 14px Roboto 500. Bottom navigation bar: #FFFBFE bg, 1px #CAC4D0 top border, active destination with #EADDFF pill indicator (56×32px) under icon."

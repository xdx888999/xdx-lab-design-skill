# Design System: New Chinese Trendy / 国潮风格
# 国潮新中式设计风格

> **风格定位**：东方美学 × 当代流行文化。传统元素重新诠释，故宫+潮牌+新媒体=中国当代设计自信。
> **适用场景**：中国品牌出海、国货品牌、文创产品、茶/白酒/中药新零售、中国节日营销、博物馆文创
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

国潮（Guochao）is the resurgence of Chinese aesthetic pride — taking 5,000 years of visual culture and remixing it for the TikTok generation. It is not pastiche or nostalgia. It is a confident declaration that Chinese design can be globally contemporary while remaining culturally rooted.

The palette draws from imperial colors (emperor yellow, vermillion, ink black) and transforms them with modern contrast and composition. Traditional motifs — dragons, clouds (祥云), plum blossoms, mountains — appear as graphic elements alongside Street-style typography and global-standard UI patterns.

**Key Characteristics:**
- Imperial palette: vermillion (#C8372D), emperor yellow (#E8A020), ink black (#1A1008)
- Traditional motifs as graphic elements: 祥云, 龙纹, 山水, 梅花
- Bilingual typography: Chinese + Latin script as design element
- Gold accents (#C9A84C or #D4AF37)
- Red/gold for festive contexts; ink/stone for heritage contexts
- Traditional paper textures (宣纸 Xuan paper feel)
- Seal/stamp graphics (印章) as brand elements

---

## 2. Color Palette & Roles

### Heritage Palette
- **Vermillion** (`#C8372D`): Imperial red — the signature China red.
- **Vermillion Light** (`#E85545`): Brighter, more contemporary red.
- **Emperor Yellow** (`#E8A020`): Imperial yellow — prestigious.
- **Gold** (`#C9A84C`): Metallic accent — luxury and tradition.
- **Ink Black** (`#1A1008`): Chinese ink — warm, not cold black.
- **Xuan White** (`#F5F0E8`): Xuan paper — warm off-white.

### Stone & Earth (for heritage/calm contexts)
- **Stone** (`#7A7060`): Mountain stone gray-brown.
- **Jade** (`#4A7C59`): Traditional jade green.
- **Celadon** (`#A8C5A0`): Porcelain celadon glaze.
- **Ochre** (`#C4832A`): Earth pigment.

### Contemporary Additions (for 新潮 vibe)
- **Neon Red** (`#FF2D2D`): Modern pop twist on vermillion.
- **Electric Yellow** (`#FFE000`): Streetwear yellow.

---

## 3. Typography Rules

### Font Family
- **Chinese Display**: `Noto Serif SC` (Traditional feel), `ZCOOL XiaoWei`
- **Chinese Modern**: `PingFang SC` weight 600–700, `Noto Sans SC`
- **Latin Display**: `Playfair Display` (pairs elegantly with serif Chinese)
- **Latin Modern**: `Inter` or `Jost` for Latin companion text
- **Seal Font**: `ZCOOL QingKe HuangYou` (for stamp-style headers)

### Hierarchy

| Role | Font | Size | Weight | Color | Notes |
|------|------|------|--------|-------|-------|
| Brand/Masthead | ZCOOL XiaoWei | 80px | — | #C8372D or #C9A84C | Vertical option |
| Display CN | Noto Serif SC | 56px | 700 | #1A1008 | |
| Display EN | Playfair Display | 48px | 400 | #1A1008 | Paired with CN |
| H2 | Noto Serif SC | 28px | 600 | #1A1008 | |
| Body CN | PingFang SC | 16px | 400 | #3D3020 | line-height 1.8 |
| Body EN | Inter | 15px | 400 | #3D3020 | |
| Label | Noto Sans SC | 12px | 500 | #C8372D | Category, product label |
| Seal/Stamp | ZCOOL QingKe | 24px | — | #C8372D | Inside round/square stamp |

### Typography Rules
- Chinese body text: line-height 1.8–2.0 (mandatory for readability)
- Vertical Chinese text (writing-mode: vertical-rl) for special titles
- Bilingual stacking: CN on top, smaller EN subtitle below
- Gold for hero text on dark/image backgrounds

---

## 4. Component Stylings

### Primary Button (国潮风)
```
background: #C8372D
color: #F5F0E8
padding: 12px 28px
border-radius: 2px (slightly square — refined)
border: none
font: PingFang SC / Noto Sans SC 15px weight 600
hover: background #A82520
box-shadow: 0 4px 12px rgba(200,55,45,0.3)
```

### Gold Outline Button
```
background: transparent
color: #C9A84C
border: 1px solid #C9A84C
padding: 11px 27px
border-radius: 2px
font: 15px weight 500
hover: background rgba(201,168,76,0.1)
```

### Heritage Card
```
background: #F5F0E8 (Xuan paper tone)
border: 1px solid rgba(200,55,45,0.2)
border-radius: 4px
padding: 24px
box-shadow: 0 4px 16px rgba(26,16,8,0.08)
Top accent line: 3px solid #C8372D
Optional: subtle 祥云 cloud pattern watermark (5% opacity)
```

### Seal / Stamp Element
```
Shape: square or circle, 64px
Border: 2px solid #C8372D
Color: #C8372D text on transparent
Rotation: -15 degrees (traditional seal placement)
Font: ZCOOL QingKe HuangYou
Text: brand name or "正品" / "限定"
```

### Festival Banner
```
Background: #C8372D or linear-gradient(135deg, #C8372D, #E8A020)
Text: gold #D4AF37 or white #F5F0E8
Pattern overlay: 祥云 cloud motif at 10% opacity
Border: thin gold line frame
Typography: large Noto Serif SC heading, elegant spacing
```

---

## 5. Layout & Prompt Guide

### Layout Principles
- Vertical layouts supported (Chinese reading tradition)
- Asymmetric grid with intentional classical Chinese space division (三段式)
- Traditional proportions: golden ratio naturally appears in classical Chinese art
- Use negative space (留白) as actively as Japandi but with more visual richness

### Quick Color Reference
```
Background:       #F5F0E8
Ink black:        #1A1008
Body text:        #3D3020
Vermillion:       #C8372D
Emperor yellow:   #E8A020
Gold:             #C9A84C
Jade green:       #4A7C59
Border accent:    rgba(200,55,45,0.2)
```

### Example Prompts
- "Design a 国潮 product hero: warm paper background #F5F0E8. Left: large product image with vermillion red accent overlay at bottom edge. Right: bilingual header — 56px Noto Serif SC weight 700 #1A1008 Chinese title, below it 32px Playfair Display weight 400 English subtitle. Red accent line 3px #C8372D beneath title. Body text 16px PingFang SC line-height 1.8. CTA: #C8372D button. Top-right corner: seal stamp element (64px circle, 2px red border, brand name in ZCOOL QingKe, -15 degree rotation)."
- "Create a 国潮 festival banner: full-width, #C8372D background. Gold 祥云 cloud pattern watermark 10% opacity. Center: large Chinese text 80px ZCOOL XiaoWei #D4AF37 gold. Sub-text 20px #F5F0E8. Thin gold frame border (1px inset). Bottom: product row with gold separator lines."

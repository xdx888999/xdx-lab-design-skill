---
version: alpha
name: "AI-Native Product"
colors:
  surface: "#FFFFFF"
  on-surface: "#0D0B1A"
  primary: "#6D28D9"
  on-primary: "#FFFFFF"
  surface: "#F8F7FF"
  heading: "#1A1033"
  border: "#E5E1F5"
  heading: "#F0EEFF"
  primary: "#9B72F5"
typography:
  h2:
    fontFamily: "rgba(240,238,255,0.72)"
    fontSize: 32px
    fontWeight: 600
rounded:
  none: 12px
  sm: 16px
spacing:
  max-width: 1100px
components:
  hero-cta-button:
    backgroundColor: "linear-gradient(135deg, #7C3AED, #4F46E5)"
    textColor: "{colors.on-primary}, padding: 14px 28px, border-radius: 12px"
    border: "1px solid rgba(124,58,237,0.3)"
    shadow: "0 0 30px rgba(124,58,237,0.3)"
    typography: "Inter 16px weight 600"
  capability-card:
    backgroundColor: "rgba(124,58,237,0.06) (light) / rgba(255,255,255,0.06) (dark)"
    border: "1px solid rgba(124,58,237,0.15)"
    rounded: "16px, padding: 24px"
  stat-benchmark-card:
    backgroundColor: "{colors.surface}, border: 1px solid {colors.border}, border-radius: 12px, padding: 20px"
---

# Design System: AI-Native Product
# AI 产品风格

> **风格定位**：智能、流动、对话感。AI 时代产品的视觉语言——渐变字、紫色体系、轻盈动效。
> **适用场景**：AI 工具官网、对话界面、AI SaaS、LLM 产品、AI 功能宣传页
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

AI-Native design emerged as a distinct visual language when AI products needed to differentiate themselves from traditional software. The palette gravitates toward purple and violet — colors historically associated with intelligence, creativity, and the mysterious. Gradients are not decorative; they suggest fluidity, transformation, and the non-deterministic nature of AI outputs.

The typography is bold but elegant. Hero headlines often use gradient text. The interface feels responsive and alive — not static. Micro-interactions suggest intelligence.

**Key Characteristics:**
- Purple-dominant palette (#7C3AED, #6D28D9, #4F46E5)
- Gradient text on hero headlines (white → purple → blue)
- Clean white or deep dark background (both work)
- Conversational UI patterns (chat bubbles, streaming text effects)
- Particle/neural network background effects (optional)
- Cards for model capabilities with icon + description
- Trust signals: accuracy metrics, speed benchmarks

---

## 2. Color Palette & Roles

### Light Mode
- **Background**: `#FFFFFF` or `#FAFAFA`
- **Surface**: `#F8F7FF` (very slight purple tint)
- **Heading**: `#1A1033`
- **Body**: `#4C4668`
- **Border**: `#E5E1F5`
- **Primary**: `#7C3AED`
- **Primary Hover**: `#6D28D9`
- **Primary Light**: `rgba(124,58,237,0.08)`

### Dark Mode
- **Background**: `#0D0B1A`
- **Surface**: `#130F24`
- **Heading**: `#F0EEFF`
- **Body**: `rgba(240,238,255,0.72)`
- **Border**: `rgba(124,58,237,0.2)`
- **Primary**: `#9B72F5`

### Gradients (signature AI visual)
- **Gradient Text**: `linear-gradient(135deg, #FFFFFF 0%, #C4B5FD 40%, #818CF8 100%)`
- **Gradient CTA**: `linear-gradient(135deg, #7C3AED, #4F46E5)`
- **Gradient Glow**: `radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)`

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Heading | `#1A1033` | `#FFFFFF` | 18:1 | AAA |
| Primary Hover | `#6D28D9` | `#FFFFFF` | 7.1:1 | AAA |
| Heading | `#F0EEFF` | `#FFFFFF` | 1.1:1 | FAIL |
| Primary | `#9B72F5` | `#FFFFFF` | 3.4:1 | AA-large |

## 3. Typography Rules

### Font Family
- **Primary**: `Inter` fallback `system-ui`
- **Display Alternative**: `Syne` (more expressive for AI brands)

### Hierarchy

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero | 64px | 700 | Gradient text treatment |
| H1 | 48px | 700 | -2px tracking |
| H2 | 32px | 600 | Section headings |
| Body L | 18px | 400 | rgba(255,255,255,0.75) on dark |
| Body | 16px | 400 | |
| Model label | 12px | 600 | UPPERCASE, purple accent color |

### Gradient Text CSS
```css
background: linear-gradient(135deg, #FFFFFF 0%, #C4B5FD 50%, #818CF8 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 4. Key Components

### Hero CTA Button
```
background: linear-gradient(135deg, #7C3AED, #4F46E5)
color: #FFFFFF, padding: 14px 28px, border-radius: 12px
border: 1px solid rgba(124,58,237,0.3)
box-shadow: 0 0 30px rgba(124,58,237,0.3)
font: Inter 16px weight 600
```

### Capability Card
```
background: rgba(124,58,237,0.06) (light) / rgba(255,255,255,0.06) (dark)
border: 1px solid rgba(124,58,237,0.15)
border-radius: 16px, padding: 24px
Icon: 48px square, purple light bg, rounded 12px
Heading: 18px weight 600 #1A1033 / #F0EEFF
Body: 14px #4C4668 / rgba(240,238,255,0.65)
```

### Chat Interface (AI product core)
```
User message: right-aligned, #7C3AED background, white text, 18px radius (top-left sharp)
AI message: left-aligned, #F8F7FF bg, #1A1033 text, 18px radius (top-right sharp)
Input: bottom-fixed, white bg, 1px solid #E5E1F5, 12px radius, purple focus ring
Send button: #7C3AED circle 40px
```

### Stat / Benchmark Card
```
background: #F8F7FF, border: 1px solid #E5E1F5, border-radius: 12px, padding: 20px
Number: 40px Inter weight 700 #7C3AED
Label: 14px #4C4668
```

---

## 5. Layout & Prompt Guide

### Key Layout
- Max width: 1100px
- Hero: centered, gradient text headline, 2 CTAs + demo/video below
- Features: 3-column card grid
- Social proof: logo strip (grayscale or brand colors)

### Quick Color Reference
```
Light bg:         #FFFFFF
Dark bg:          #0D0B1A
Primary:          #7C3AED
Gradient text:    #FFFFFF → #C4B5FD → #818CF8
Card border:      rgba(124,58,237,0.15)
```

### Example Prompts
- "Build an AI product hero: white background. Headline 64px Inter weight 700 letter-spacing -2px with gradient text (white to #C4B5FD to #818CF8 via CSS gradient text). Subtitle 18px #4C4668. CTA: purple gradient button (135deg #7C3AED to #4F46E5, 14px 28px padding, 12px radius, glow shadow). Below: 3 feature cards with purple-tinted border rgba(124,58,237,0.15)."

---
version: alpha
name: "Dark Developer / Terminal Aesthetic"
colors:
  surface: "#0D1117"
  surface-variant: "#161B22"
  on-surface: "#FFFFFF"
  primary: "#58A6FF"
  on-primary: "#111111"
  accent: "#A5D6FF"
  error: "#FF7B72"
  success: "#238636"
  warning: "#E3B341"
  overlay: "#1C2333"
  subtle: "#21262D"
  inset: "#010409"
  default: "#E6EDF3"
  muted: "#8B949E"
  subtle: "#6E7681"
  default: "#30363D"
  syntax-green: "#3FB950"
  syntax-blue: "#79C0FF"
  syntax-purple: "#D2A8FF"
  syntax-orange: "#FFA657"
  blue-hover: "#388BFD"
  levels: "#0E4429"
  background: "#1F6FEB"
typography:
  inter:
    fontSize: 16px
    fontWeight: 400
  jetbrains-mono:
    fontSize: 32px
    fontWeight: 700
rounded:
  none: 2px
  sm: 6px
  md: 8px
  lg: 100px
components:
  code-block:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.default}"
    rounded: "6px"
    typography: "JetBrains Mono 14px"
    padding: "16px"
  cta-button:
    backgroundColor: "{colors.success} (GitHub green — for success/start)"
    textColor: "{colors.on-surface}"
    padding: "8px 16px"
    rounded: "6px"
    typography: "Inter 14px weight 500"
    border: "1px solid rgba(240,246,252,0.1)"
    hover: "background #2EA043"
  alternate-cta:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    padding: "8px 16px"
    rounded: "6px"
    typography: "Inter 14px weight 500"
    hover: "background {colors.blue-hover}"
  feature-card:
    backgroundColor: "{colors.surface-variant}"
    border: "1px solid {colors.default}"
    rounded: "6px"
    padding: "20px"
    hover: "border-color {colors.muted}"
  inline-code:
    backgroundColor: "rgba(110,118,129,0.4)"
    rounded: "6px"
    padding: "0.2em 0.4em"
    typography: "JetBrains Mono 85% (of parent)"
    textColor: "{colors.default}"
  badge-label:
    rounded: "100px"
    padding: "2px 10px"
    typography: "12px Inter weight 500"
    border: "1px solid"
---

# Design System: Dark Developer / Terminal Aesthetic
# 暗色开发者/终端风格

> **风格定位**：代码即设计，终端即美学。VS Code + GitHub Dark + 命令行的视觉语言。
> **适用场景**：开发者工具官网、CLI 产品宣传、编程教育、技术文档站、开源项目主页、黑客马拉松
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Dark Developer design speaks directly to the developer audience by using their native visual language — the terminal, the code editor, the README. It says: this product was built by engineers, for engineers. The aesthetic communicates technical depth, precision, and the quiet confidence of someone who prefers `vim` over `notepad`.

The palette is GitHub Dark, VS Code, or similar editor theme colors. Monospace fonts appear throughout. Code blocks are first-class UI elements. The design is functional to the point of austerity — but executed with enough craft that it feels intentional, not neglected.

**Key Characteristics:**
- Deep dark background (GitHub dark: #0D1117)
- Monospace font for code, metrics, and technical labels
- Syntax highlighting colors (green, blue, purple, orange)
- Code blocks as hero elements (not hidden in docs)
- Terminal window chrome (traffic lights, window border)
- ASCII art as decorative elements (optional)
- Copy-to-clipboard on all code blocks
- GitHub-style contribution graphs as data visualization

---

## 2. Color Palette & Roles

### Background (GitHub Dark)
- **Base** (`#0D1117`): Primary background.
- **Surface** (`#161B22`): Cards, panels.
- **Overlay** (`#1C2333`): Elevated, hover.
- **Subtle** (`#21262D`): Input backgrounds, code blocks.
- **Inset** (`#010409`): Deepest insets.

### Text
- **Default** (`#E6EDF3`): Primary text.
- **Muted** (`#8B949E`): Secondary info, comments.
- **Subtle** (`#6E7681`): Placeholder, timestamp.
- **On Emphasis** (`#FFFFFF`): On colored backgrounds.

### Border
- **Default** (`#30363D`): Standard borders.
- **Muted** (`#21262D`): Subtle dividers.
- **Emphasis** (`#8B949E`): Focused, emphasized.

### Syntax Colors (the developer palette)
- **Syntax Green** (`#3FB950`): Strings, HTML attributes.
- **Syntax Blue** (`#79C0FF`): Keywords, selectors.
- **Syntax Purple** (`#D2A8FF`): Function names, declarations.
- **Syntax Orange** (`#FFA657`): Constants, numbers.
- **Syntax Red** (`#FF7B72`): Errors, deletion.
- **Syntax Yellow** (`#E3B341`): Warnings, types.
- **Syntax Cyan** (`#A5D6FF`): Strings (alternative).
- **Syntax Comment** (`#8B949E`): Comments.

### Accent
- **Blue** (`#58A6FF`): Links, interactive, primary CTA.
- **Blue Hover** (`#388BFD`): Hover state.
- **Blue Subtle** (`rgba(88,166,255,0.1)`): Tinted backgrounds.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Base | `#0D1117` | `#0D1117` | 1:1 | FAIL |
| Default | `#E6EDF3` | `#0D1117` | 16:1 | AAA |
| Muted | `#8B949E` | `#0D1117` | 6.2:1 | AA |
| Blue | `#58A6FF` | `#0D1117` | 7.5:1 | AAA |

## 3. Typography Rules

### Font Family
- **Code/Primary**: `JetBrains Mono`, `Fira Code`, `Cascadia Code`
- **UI**: `Inter` or `system-ui`
- **Fallback**: `Consolas`, `Monaco`, `monospace`

### Hierarchy

| Role | Family | Size | Weight | Color | Notes |
|------|--------|------|--------|-------|-------|
| Hero | Inter | 48–64px | 700 | #E6EDF3 | |
| H1 | Inter | 36px | 600 | #E6EDF3 | |
| H2 | Inter | 24px | 600 | #E6EDF3 | |
| Body | Inter | 16px | 400 | #8B949E | |
| Code | JetBrains Mono | 14px | 400 | (syntax colored) | |
| Terminal | JetBrains Mono | 13px | 400 | #3FB950 | Green on black |
| Label | Inter | 12px | 500 | #8B949E | uppercase |
| Stat | JetBrains Mono | 32px | 700 | #E6EDF3 | version, stars |

---

## 4. Component Stylings

### Code Block (first-class element)
```
background: #161B22
border: 1px solid #30363D
border-radius: 6px
font: JetBrains Mono 14px
padding: 16px

Header: background #21262D, border-bottom 1px #30363D, 12px padding
  Language label: 12px Inter #8B949E
  Copy button: right-aligned, #8B949E icon, hover #E6EDF3
Line numbers: #8B949E, right-padded 16px
```

### Terminal Window
```
Container: #0D1117 bg, border 1px #30363D, border-radius 8px overflow hidden
Window chrome header: #21262D, 48px height
  Dots: 12px circles — red #FF5F57, yellow #FEBC2E, green #28C840 — 8px gap
  Title: 12px Inter centered #8B949E
Content: padding 16px, JetBrains Mono 13px
  $ prompt: #3FB950
  Command: #E6EDF3
  Output: #8B949E
  Error: #FF7B72
```

### GitHub-Style Contribution Graph
```
Grid of 7×52 squares (days × weeks)
Default: #161B22 (no contribution)
Levels: #0e4429, #006d32, #26a641, #39d353 (GitHub green scale)
Gap: 3px, square size: 12px, border-radius: 2px
```

### CTA Button
```
background: #238636 (GitHub green — for success/start)
color: #FFFFFF
padding: 8px 16px
border-radius: 6px
font: Inter 14px weight 500
border: 1px solid rgba(240,246,252,0.1)
hover: background #2EA043
```

### Alternate CTA (blue)
```
background: #1F6FEB
color: #FFFFFF
padding: 8px 16px
border-radius: 6px
font: Inter 14px weight 500
hover: background #388BFD
```

### Feature Card
```
background: #161B22
border: 1px solid #30363D
border-radius: 6px
padding: 20px
hover: border-color #8B949E
```

### Inline Code (in prose)
```
background: rgba(110,118,129,0.4)
border-radius: 6px
padding: 0.2em 0.4em
font: JetBrains Mono 85% (of parent)
color: #E6EDF3
```

### Badge / Label (GitHub style)
```
border-radius: 100px
padding: 2px 10px
font: 12px Inter weight 500
border: 1px solid

Versions: border rgba(240,246,252,0.1), bg rgba(110,118,129,0.4), color #E6EDF3
Success: border rgba(63,185,80,0.4), bg rgba(63,185,80,0.15), color #3FB950
Error: border rgba(248,81,73,0.4), bg rgba(248,81,73,0.15), color #FF7B72
```

---

## 5. Layout Principles

### Developer Homepage Layout
- Nav: logo left, docs/github/changelog links, CTA button
- Hero: headline + subtext + code block demo (side by side or below)
- Features: 3-col cards, icon (syntax colored) + heading + description
- Code walkthrough: alternating text + code block sections
- Testimonials: GitHub-style avatar + quote
- Footer: links, version badge, GitHub stars counter

### Content Width
- Max: 1200px
- Code blocks can span full column width
- Content padding: 24px

---

## 6. Depth & Elevation (GitHub scale)
| Level | CSS | Use |
|-------|-----|-----|
| Inset | `#010409` bg | Deepest recesses |
| Base | `#0D1117` | Page |
| Overlay | `#161B22` | Cards |
| Popover | `#1C2333` | Dropdowns, tooltips |
| Modal | `0 8px 24px rgba(1,4,9,0.8)` | Dialogs |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 2px | Square elements |
| sm | 6px | Inputs, tags |
| md | 8px | Cards, buttons |
| lg | 100px | Modals, large cards |

---

## 7. Do's and Don'ts

### Do
- Use JetBrains Mono for code, stats, and technical values
- Show a real code demo in the hero — developers trust running code
- Use GitHub's exact dark palette — developers recognize it instantly
- Apply syntax highlighting colors to non-code UI for technical feel
- Include a copy button on every code block

### Don't
- Don't use gradients or glassmorphism — too consumer for this audience
- Don't use rounded pill buttons — 6px radius is the GitHub standard
- Don't use pastel or warm colors — this palette is cold and precise
- Don't hide the technical details — developers want to see the internals

---

## 8. Responsive Behavior

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Stacked hero (code below text), single-col features |
| Tablet | 768–1024px | 2-col features |
| Desktop | 1024px+ | Side-by-side hero, 3-col features |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:     #0D1117
Surface:        #161B22
Border:         #30363D
Text:           #E6EDF3
Muted:          #8B949E
Green accent:   #3FB950 (syntax) / #238636 (CTA)
Blue accent:    #58A6FF (links) / #1F6FEB (CTA)
Purple syntax:  #D2A8FF
Orange syntax:  #FFA657
```

### Example Prompts
- "Build a developer tool hero: #0D1117 background. Nav: logo left, GitHub/Docs links 14px Inter #8B949E, green CTA button #238636. Hero: left half — 48px Inter weight 700 #E6EDF3 headline, 16px #8B949E body. Right half — terminal window (#21262D header with traffic light dots, #0D1117 body, JetBrains Mono 13px, $ prompt in #3FB950 green, output in #8B949E)."
- "Create GitHub-style feature cards: #161B22 bg, 1px solid #30363D border, 6px radius, 20px padding, hover border #8B949E. Top: icon in syntax color (purple #D2A8FF, 24px). Title: 16px Inter weight 600 #E6EDF3. Body: 14px #8B949E. 3-col grid, 16px gap."

---
version: alpha
name: "Education Platform"
colors:
  surface: "#FFFFFF"
  on-surface: "#111827"
  primary: "#4F46E5"
  on-primary: "#FFFFFF"
  accent: "#818CF8"
  success: "#ECFDF5"
  learning-gray: "#F9FAFB"
  active-surface: "#F5F3FF"
  indigo-dark: "#3730A3"
  indigo-tint: "#EEF2FF"
  achievement-gold: "#F59E0B"
  gold-tint: "#FFFBEB"
  complete-green: "#10B981"
  text-body: "#374151"
  text-muted: "#6B7280"
  border: "#E5E7EB"
typography:
  hero-course-title:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 52px
    fontWeight: 700
  h3-lesson-title:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 20px
    fontWeight: 600
  progress-label:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 600
  caption:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
rounded:
  none: 8px
  sm: 12px
  md: 999px
spacing:
  section-padding: 64px
components:
  course-card:
    backgroundColor: "{colors.on-primary}"
    border: "1px solid {colors.border}"
    rounded: "12px"
    padding: "0  (image top, content bottom with 16px padding)"
    shadow: "0 1px 3px rgba(0,0,0,0.08)"
    hover: "box-shadow 0 4px 12px rgba(79,70,229,0.1), transform translateY(-2px)"
  button:
    backgroundColor: "{colors.achievement-gold}"
    textColor: "{colors.primary}"
    rounded: "8px"
    padding: "12px 24px"
    typography: "Plus Jakarta Sans 600 15px"
    hover: "background {colors.indigo-tint}"
    border: "2px solid {colors.primary}"
  achievement-badge:
    backgroundColor: "linear-gradient(135deg, {colors.achievement-gold}, #D97706)"
    textColor: "{colors.on-primary}"
    rounded: "999px"
    padding: "4px 12px"
    typography: "Plus Jakarta Sans 700 11px uppercase letter-spacing: 0.5px"
    shadow: "0 2px 8px rgba(245,158,11,0.4)"
  lesson-progress-indicator:
    active: "24px circle, {colors.primary} fill, current number"
---

# Design System: Education Platform
# 在线教育平台风格

> **风格定位**：激发好奇心、降低学习焦虑的数字课堂。Coursera 的结构严谨 + Duolingo 的趣味鼓励。
> **适用场景**：在线学习平台、K12教育App、技能培训网站、学校官网、教辅工具、儿童学习产品
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Education design must balance two imperatives: credibility (this is serious learning) and approachability (learning is achievable and even enjoyable). The worst education design looks either too corporate (intimidating) or too childish (patronizing).

This system is calibrated for adult learners and older students (12+). It borrows from successful platforms like Coursera, Udemy, and Khan Academy: clear course structure, strong progress visualization, and warm but professional color palettes. The primary color is a confident indigo — trustworthy and focused.

**Key Characteristics:**
- White primary background with indigo accent (#4F46E5)
- Clean, highly legible Inter or Plus Jakarta Sans
- Strong progress visualization (bars, completion %, step indicators)
- Card-based course grid layout
- Warm orange (#F59E0B) for gamification elements — achievements, streaks
- Green for completion/success states
- 8–12px border-radius — approachable, not childish
- Icons complement text labels for scanability

---

## 2. Color Palette & Roles

### Background
- **Pure White** (`#FFFFFF`): Primary page background.
- **Learning Gray** (`#F9FAFB`): Sidebar and secondary sections.
- **Active Surface** (`#F5F3FF`): Indigo-tinted active states background.

### Primary — Focus Indigo
- **Learning Indigo** (`#4F46E5`): Primary brand — CTAs, progress, active states.
- **Indigo Dark** (`#3730A3`): Hover, headings.
- **Indigo Light** (`#818CF8`): Secondary accent, highlights.
- **Indigo Tint** (`#EEF2FF`): Background tints for featured content.

### Achievement — Warm Orange
- **Achievement Gold** (`#F59E0B`): Streaks, badges, gamification.
- **Gold Tint** (`#FFFBEB`): Achievement background.

### Success — Completion Green
- **Complete Green** (`#10B981`): Completed lessons, correct answers.
- **Green Tint** (`#ECFDF5`): Success feedback backgrounds.

### Neutral
- **Text Primary** (`#111827`): Headlines, primary content.
- **Text Body** (`#374151`): Body copy.
- **Text Muted** (`#6B7280`): Metadata, secondary labels.
- **Border** (`#E5E7EB`): Cards, form fields.

---

### Contrast Ratios (WCAG 2.1)

| Text Token | Hex | Background | Ratio | Level |
|------------|-----|------------|-------|-------|
| Pure White | `#FFFFFF` | `#FFFFFF` | 1:1 | FAIL |
| Learning Gray | `#F9FAFB` | `#FFFFFF` | 1:1 | FAIL |
| Learning Indigo | `#4F46E5` | `#FFFFFF` | 6.3:1 | AA |
| Indigo Dark | `#3730A3` | `#FFFFFF` | 9.9:1 | AAA |
| Indigo Light | `#818CF8` | `#FFFFFF` | 3:1 | AA-large |
| Text Primary | `#111827` | `#FFFFFF` | 17.7:1 | AAA |
| Text Body | `#374151` | `#FFFFFF` | 10.3:1 | AAA |
| Text Muted | `#6B7280` | `#FFFFFF` | 4.8:1 | AA |

## 3. Typography Rules

### Font Family
- **Primary**: `Plus Jakarta Sans` (Google Fonts) — modern, friendly, highly legible
- **Alternative**: `Inter` — equally good
- **Code/Technical**: `JetBrains Mono` — for code courses

| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero / Course Title | 40–52px | 700 | #111827 | |
| Section H2 | 28–32px | 700 | #111827 | |
| H3 Lesson Title | 20px | 600 | #111827 | |
| Body | 16px | 400 | #374151 | line-height: 1.7 |
| Progress Label | 13px | 600 | #4F46E5 | "47% Complete" |
| Achievement Badge | 12px | 700 | #F59E0B | Uppercase |
| Caption | 13px | 400 | #6B7280 | |

---

## 4. Component Stylings

### Course Card
```
background: #FFFFFF
border: 1px solid #E5E7EB
border-radius: 12px
padding: 0  (image top, content bottom with 16px padding)
box-shadow: 0 1px 3px rgba(0,0,0,0.08)
hover: box-shadow 0 4px 12px rgba(79,70,229,0.1), transform translateY(-2px)

Thumbnail: 16:9 ratio, top, border-radius 12px 12px 0 0
Category badge: indigo tint pill on thumbnail
Title: Plus Jakarta Sans 700 16px #111827
Instructor: 13px #6B7280
Progress bar: 4px height, indigo fill, gray track
Rating: gold stars + count
```

### Progress Bar
```
Track: background #E5E7EB, border-radius 999px, height 8px
Fill: background #4F46E5, border-radius 999px
Label: 13px Plus Jakarta Sans 600 #4F46E5 "X% Complete"
```

### Button
```
Primary:
  background: #4F46E5
  color: #FFFFFF
  border-radius: 8px
  padding: 12px 24px
  font: Plus Jakarta Sans 600 15px
  hover: background #3730A3

Start/CTA:
  background: #F59E0B
  color: #FFFFFF
  hover: background #D97706

Outline:
  border: 2px solid #4F46E5
  color: #4F46E5
  hover: background #EEF2FF
```

### Achievement Badge
```
background: linear-gradient(135deg, #F59E0B, #D97706)
color: #FFFFFF
border-radius: 999px
padding: 4px 12px
font: Plus Jakarta Sans 700 11px uppercase letter-spacing: 0.5px
box-shadow: 0 2px 8px rgba(245,158,11,0.4)
```

### Lesson Progress Indicator (step dots)
```
Completed: 24px circle, #10B981 fill, ✓ icon
Active: 24px circle, #4F46E5 fill, current number
Upcoming: 24px circle, #E5E7EB fill, number in #6B7280
Connector line: 2px solid #E5E7EB between dots
```

---

## 5. Layout Principles

- **Course catalog grid**: 3-column desktop, 2-column tablet, 1-column mobile
- **Lesson sidebar**: Fixed left sidebar 260px with lesson list and progress
- **Content max-width**: 800px for reading; center-aligned
- **Section padding**: 64–80px desktop, 40px mobile
- **Breadcrumb navigation**: Always show where user is in course structure
- **Sticky progress**: Course progress bar should be visible as user scrolls

---

### Spacing Tokens

| Token | Value |
|-------|-------|
| section-padding | 64px |

## 6. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| Page | `#F9FAFB` learning gray |
| Card | `#FFFFFF` + 1px border + subtle shadow |
| Active/Hover | Indigo shadow `rgba(79,70,229,0.1)` |
| Modal / Overlay | White + `0 20px 60px rgba(0,0,0,0.12)` |

---

## Shapes

| Scale | Value | Usage |
|-------|-------|-------|
| none | 8px | Square elements |
| sm | 12px | Inputs, tags |
| md | 999px | Cards, buttons |

---

## 7. Do's and Don'ts

### Do
- Show progress prominently — completion is motivating
- Use warm orange for gamification and achievements — it's energizing
- Use green generously for correct answers and completions — positive reinforcement
- Write in second person ("You'll learn...", "Your progress") — personal investment
- Make course structure visible — learners need to see the path ahead

### Don't
- Don't use red for wrong answers — use a softer signal; red causes anxiety
- Don't hide progress — it's demotivating
- Don't make the interface too playful for adult learners
- Don't use dark backgrounds for reading-heavy content
- Don't add too many gamification elements — focus on learning, not points

---

## 8. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | <640px | Single column; bottom tab navigation; simplified lesson sidebar |
| Tablet | 640–1024px | 2-column course grid; collapsible sidebar |
| Desktop | 1024px+ | Full 3-column grid; fixed lesson sidebar |

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:      #FFFFFF / #F9FAFB
Indigo:          #4F46E5
Indigo dark:     #3730A3
Indigo tint:     #EEF2FF
Gold achieve:    #F59E0B
Success green:   #10B981
Border:          #E5E7EB
Text primary:    #111827
Text body:       #374151
```

### Example Prompts
- "Online learning platform course catalog: #F9FAFB background. Course cards: white bg, 12px radius, 1px #E5E7EB border, hover indigo shadow. Each card: 16:9 thumbnail, indigo category pill, 700 16px title, instructor name muted, 8px progress bar (indigo fill), star rating. Filter sidebar: #FFFFFF, left-aligned, 260px. Primary CTA: #4F46E5 button. Progress stats at top: 3 numbers with indigo color and uppercase gold labels."

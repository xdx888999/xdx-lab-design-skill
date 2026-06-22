# Design System: Academic / Research
# 学术研究风格

> **风格定位**：严谨、可信、信息密集。LaTeX论文的数字化版本，Nature/Science/arXiv 的网页风格。
> **适用场景**：学术论文展示、研究机构官网、科学数据可视化、知识库/文档站、技术写作
> **通用性**：适用于 Claude / Cursor / Deepseek / Codex / v0 / Bolt / Lovable 等所有 AI 工具

---

## 1. Visual Theme & Atmosphere

Academic design prioritizes communication over aesthetics. Every design decision serves the transmission of complex information as efficiently and accurately as possible. The aesthetic communicates rigorous methodology, peer review, and epistemic humility.

Inspired by Nature, Science, arXiv, and the best university press websites — clear hierarchical structure, footnotes and citations as first-class citizens, data visualization given prominence, and no decorative elements that could undermine perceived objectivity.

**Key Characteristics:**
- White background, high contrast, maximum legibility
- Serif body text (Computer Modern or Georgia tradition)
- Structured outline: Abstract, Introduction, Methods, Results, Discussion
- Figure numbering and caption system
- Mathematical notation support (KaTeX/MathJax ready)
- Reference/citation system (numbered or author-date)
- Data tables as primary presentation medium
- Minimal accent color (institutional blue or green)

---

## 2. Color Palette & Roles

### Foundation
- **White** (`#FFFFFF`): Primary background.
- **Light Gray** (`#F8F9FA`): Figure backgrounds, code blocks, abstract box.
- **Border** (`#DEE2E6`): Dividers, table borders.
- **Dark** (`#212529`): Primary text — nearly black, high contrast.
- **Secondary** (`#495057`): Abstract text, captions.
- **Muted** (`#6C757D`): Footnotes, metadata.

### Institutional Accent (choose by field)
- **Research Blue** (`#0D4EA6`): Social sciences, general.
- **Nature Green** (`#1D7348`): Biology, life sciences.
- **Physics Teal** (`#0D6E6E`): Physics, mathematics.
- **Medical Burgundy** (`#8B1A35`): Medical/clinical.

### Semantic
- **Link** (`accent color`): Always the institutional accent.
- **Figure caption** (`#495057`): Slightly lighter than body.
- **Warning/Limitation** (`#856404` on `#FFF3CD`): Methodological caveats.

---

## 3. Typography Rules

### Font Family
- **Body/Serif**: `Source Serif 4` or `Georgia` (screen-optimized serif)
- **Alternative**: `EB Garamond` (classical, CMU-like feel)
- **UI/Sans**: `Inter` for navigation, labels
- **Math/Code**: `KaTeX_Main` (math), `JetBrains Mono` (code)

### Hierarchy

| Role | Family | Size | Weight | Notes |
|------|--------|------|--------|-------|
| Journal Title | Inter | 24px | 700 | Sans — branding |
| Paper Title | Source Serif | 28–36px | 700 | Title case |
| Authors | Inter | 15px | 400 | Comma-separated, links |
| Abstract | Source Serif | 15px | 400 | Indented block, italic label |
| H1 (Section) | Inter | 18px | 700 | Numbered: "1. Introduction" |
| H2 (Sub) | Inter | 16px | 600 | "1.1 Background" |
| Body | Source Serif | 16px | 400 | line-height 1.7 |
| Figure Caption | Inter | 13px | 400 | "Figure 1. ..." italic |
| Table Header | Inter | 13px | 600 | Uppercase |
| Footnote | Source Serif | 13px | 400 | |
| Citation | Inter | 12px | 400 | Superscript or [n] |
| Code | JetBrains Mono | 14px | 400 | |

---

## 4. Component Stylings

### Abstract Box
```
background: #F8F9FA
border: 1px solid #DEE2E6
border-left: 4px solid (accent color)
padding: 20px 24px
margin: 24px 0

Label: "ABSTRACT" 11px Inter weight 700 uppercase accent color letter-spacing 2px
Text: 15px Source Serif italic weight 400 #495057 line-height 1.65
```

### Figure
```
background: #F8F9FA
border: 1px solid #DEE2E6
padding: 16px
margin: 32px 0

Figure number: "Figure 1." 13px Inter weight 700 #212529
Caption text: 13px Inter weight 400 #495057 italic
Separator: 1px #DEE2E6 between image and caption
```

### Data Table (Academic)
```
Full-width, border-collapse
Top rule: 2px solid #212529 (thick top = academic convention)
Header rule: 1px solid #212529 (below header)
Bottom rule: 2px solid #212529
No vertical borders (academic tables avoid them)
Cell: 14px Inter #212529, padding 8px 16px
Header: 14px Inter weight 600 uppercase
Striped alt: #F8F9FA
```

### Code Block
```
background: #F8F9FA
border: 1px solid #DEE2E6
border-radius: 4px
font: JetBrains Mono 14px #212529
padding: 16px
overflow-x: auto
Language label: top-right, 11px Inter #6C757D
```

### Citation Reference
```
Inline: [1] superscript, accent color, links to reference list
Reference list item: 14px Source Serif, hanging indent 24px
DOI: accent color link, 13px
```

### Navigation (Journal-style)
```
background: #FFFFFF
border-bottom: 2px solid (accent color)
height: 56px
Journal name: 18px Inter weight 700 accent color
Sections: 14px Inter weight 400 #495057
```

---

## 5. Layout Principles

### Article Layout
- Two-column: body text 680px left + sidebar 280px right
- Single-column: centered, 720px max-width
- Figures: full-width (can exceed text column)
- Margin notes: in right gutter for non-critical annotations

### Page Structure
- Title page: Title, authors, affiliations, abstract
- Main body: numbered sections
- References: formatted list
- Appendix: supplementary materials

---

## 6. Depth & Elevation

No shadows. Structure through:
- Horizontal rules (1–2px)
- Background differentiation (#FFFFFF vs #F8F9FA)
- Border-left accents on call-out boxes

---

## 7. Do's and Don'ts

### Do
- Use a high-quality serif for body text — it signals academic rigor
- Number all sections and figures
- Show complete data (don't truncate tables without note)
- Include error bars, confidence intervals, p-values in figures
- Left-align body text, not justified (justification creates uneven rivers)

### Don't
- Don't use decorative colors or imagery
- Don't use rounded corners on data tables — academic tables have sharp rules
- Don't truncate citations or references
- Don't use bold in body text for emphasis — use italic instead (LaTeX tradition)

---

## 8. Agent Prompt Guide

### Quick Color Reference
```
Background:   #FFFFFF
Surface:      #F8F9FA
Border:       #DEE2E6
Text:         #212529
Secondary:    #495057
Muted:        #6C757D
Accent:       #0D4EA6 (or field-specific)
```

### Example Prompts
- "Build an academic paper abstract section: white bg, abstract box (#F8F9FA bg, 1px #DEE2E6 border, 4px left border #0D4EA6). Label: 'ABSTRACT' 11px Inter uppercase #0D4EA6 letter-spacing 2px. Body: 15px Source Serif italic #495057 line-height 1.65. Below: keywords row in Inter 13px."
- "Design an academic data table: no vertical borders, 2px solid top rule, 1px solid header rule, 2px solid bottom rule, all #212529. Header: 14px Inter weight 600 uppercase. Cells: 14px Inter #212529, 8px 16px padding, alt row #F8F9FA. Caption below: 'Table 1.' bold Inter + italic description 13px #495057."

# DESIGN.md Google Spec Alignment — P0-P3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align all 50 style DESIGN.md and 20 master DESIGN.md files with Google's DESIGN.md specification while preserving this project's unique cultural depth, adding YAML front matter, token references, semantic naming, WCAG contrast ratios, spacing/rounded scales, component state standardization, Shapes section, lint validation, and export tooling.

**Architecture:** A Node.js toolchain (`tools/`) parses existing Markdown, extracts tokens, generates YAML front matter, calculates contrast ratios, and writes back enhanced files. A lint script validates all files. An export script outputs Tailwind/CSS/DTCG tokens. All 70 files are processed by the same pipeline with style/master variants.

**Tech Stack:** Node.js (ESM), no external dependencies (pure fs/path/yaml-serialization). WCAG contrast calculated from relative luminance formula per W3C spec.

---

## File Structure

```
tools/
├── transform.mjs          # Main transformation: parse → enhance → write all DESIGN.md files
├── lint.mjs                # Validate: broken refs, contrast, orphaned tokens, section order
├── export.mjs              # Export: Tailwind v4 CSS / CSS custom properties / DTCG JSON
└── lib/
    ├── parser.mjs          # Parse existing DESIGN.md into structured token objects
    ├── contrast.mjs        # WCAG 2.1 relative luminance + contrast ratio calculator
    ├── yaml-writer.mjs     # Serialize token objects to YAML front matter string
    └── semantic-map.mjs    # Map descriptive color names → semantic roles (primary/surface/accent/etc.)
```

Modified files:
- `references/styles/01-glassmorphism-dark-DESIGN.md` through `50-brutalist-web-DESIGN.md` (50 files)
- `references/masters/01-dieter-rams-DESIGN.md` through `20-april-greiman-DESIGN.md` (20 files)

---

### Task 1: WCAG Contrast Calculator (`tools/lib/contrast.mjs`)

**Files:**
- Create: `tools/lib/contrast.mjs`

- [ ] **Step 1: Write contrast.mjs with hex parsing, luminance, and ratio functions**

```js
// tools/lib/contrast.mjs
export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
}

export function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function wcagLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA-large';
  return 'FAIL';
}
```

- [ ] **Step 2: Verify with known values**

Run: `node -e "import('./tools/lib/contrast.mjs').then(m => { console.log(m.contrastRatio('#FFFFFF','#000000')); console.log(m.contrastRatio('#F7F3EC','#1C1C1C')); })"`
Expected: ~21.0 for black/white, ~11.2 for Song Dynasty ink/paper

- [ ] **Step 3: Commit**

```bash
git add tools/lib/contrast.mjs
git commit -m "feat: add WCAG contrast ratio calculator"
```

---

### Task 2: DESIGN.md Parser (`tools/lib/parser.mjs`)

**Files:**
- Create: `tools/lib/parser.mjs`

- [ ] **Step 1: Write parser that extracts colors, typography, spacing, rounded, components from style DESIGN.md files**

The parser handles two file formats:

**Style files** — colors appear as `- **Name** (\`#XXXXXX\`): Description` or inside code blocks as `Key: #XXXXXX`.
**Master files** — colors appear in code blocks only: `Key: #XXXXXX description`.

```js
// tools/lib/parser.mjs
import { readFileSync } from 'fs';

// Extract all HEX colors from a DESIGN.md file
// Returns: [{ name: 'Ink Black', hex: '#1C1C1C', role: 'Headlines, primary text', section: 'Ink Scale' }]
export function parseColors(content) { ... }

// Extract typography tokens from Section 3
// Returns: [{ role: 'H1', fontFamily: 'Inter', fontSize: '48px', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-1.5px', color: '#FFFFFF' }]
export function parseTypography(content) { ... }

// Extract spacing values from Section 5
// Returns: { base: '8px', cardPadding: '24px', cardGap: '16px', sectionPadding: '80px', maxWidth: '1200px' }
export function parseSpacing(content) { ... }

// Extract border-radius values from Section 4
// Returns: { none: '0px', sm: '4px', md: '8px', lg: '12px', xl: '16px', full: '9999px' }
export function parseRounded(content) { ... }

// Extract component styles from Section 4
// Returns: { 'button-primary': { background: '#8B5CF6', color: '#FFFFFF', padding: '12px 24px', ... }, ... }
export function parseComponents(content) { ... }

// Determine if file is a style or master
export function parseFileType(filePath) { ... }

// Parse the full file
export function parseDesignMd(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  return {
    type: parseFileType(filePath),
    colors: parseColors(content),
    typography: parseTypography(content),
    spacing: parseSpacing(content),
    rounded: parseRounded(content),
    components: parseComponents(content),
    originalContent: content,
  };
}
```

- [ ] **Step 2: Test parser on glassmorphism, song-dynasty, neobrutalism, and a master file**

Run: `node -e "import('./tools/lib/parser.mjs').then(m => { const r = m.parseDesignMd('references/styles/01-glassmorphism-dark-DESIGN.md'); console.log(JSON.stringify(r.colors.slice(0,3), null, 2)); })"`

- [ ] **Step 3: Commit**

```bash
git add tools/lib/parser.mjs
git commit -m "feat: add DESIGN.md parser for colors, typography, spacing, components"
```

---

### Task 3: Semantic Color Mapper (`tools/lib/semantic-map.mjs`)

**Files:**
- Create: `tools/lib/semantic-map.mjs`

- [ ] **Step 1: Write semantic mapper that assigns primary/surface/accent/error roles to parsed colors**

Uses heuristics:
- First background color → `surface`
- Main text color (darkest or lightest depending on theme) → `on-surface`
- Primary accent / CTA color → `primary`
- Text on primary → `on-primary`
- Error/red color → `error`
- Success/green → `success`
- Warning/amber → `warning`

```js
// tools/lib/semantic-map.mjs
export function mapSemanticRoles(colors, isDark) {
  // Returns: { primary: '#8B5CF6', 'on-primary': '#FFFFFF', surface: '#0D0D1A', 'on-surface': '#FFFFFF', accent: '#22D3EE', error: '#EF4444', success: '#10B981', warning: '#F59E0B' }
}
```

- [ ] **Step 2: Test on light (song-dynasty) and dark (glassmorphism) themes**

- [ ] **Step 3: Commit**

```bash
git add tools/lib/semantic-map.mjs
git commit -m "feat: add semantic color role mapper"
```

---

### Task 4: YAML Front Matter Writer (`tools/lib/yaml-writer.mjs`)

**Files:**
- Create: `tools/lib/yaml-writer.mjs`

- [ ] **Step 1: Write YAML serializer that outputs Google-compatible front matter**

```js
// tools/lib/yaml-writer.mjs
export function generateYamlFrontMatter({ name, colors, typography, spacing, rounded, components }) {
  // Returns string like:
  // ---
  // version: alpha
  // name: Glassmorphism Dark
  // colors:
  //   primary: "#8B5CF6"
  //   on-primary: "#FFFFFF"
  //   surface: "#0D0D1A"
  //   ...
  // typography:
  //   h1:
  //     fontFamily: Inter
  //     fontSize: 48px
  //     fontWeight: 700
  //   ...
  // rounded:
  //   sm: 12px
  //   md: 16px
  //   ...
  // spacing:
  //   sm: 8px
  //   md: 16px
  //   ...
  // components:
  //   button-primary:
  //     backgroundColor: "{colors.primary}"
  //     textColor: "{colors.on-primary}"
  //     ...
  // ---
}
```

- [ ] **Step 2: Test output for one style file**

- [ ] **Step 3: Commit**

```bash
git add tools/lib/yaml-writer.mjs
git commit -m "feat: add YAML front matter generator"
```

---

### Task 5: Main Transformation Script (`tools/transform.mjs`)

**Files:**
- Create: `tools/transform.mjs`
- Modify: all 70 DESIGN.md files

- [ ] **Step 1: Write transform.mjs that orchestrates the full pipeline**

```js
// tools/transform.mjs
// 1. Scan references/styles/ and references/masters/
// 2. For each file: parse → semantic map → contrast ratios → YAML front matter → Shapes section → write back
// 3. Report: files processed, tokens extracted, contrast warnings
```

Pipeline per file:
1. Parse colors, typography, spacing, rounded, components
2. Map semantic roles
3. Calculate contrast ratios for text-on-background pairs
4. Generate YAML front matter
5. Inject contrast annotations into Section 2
6. Add `## Shapes` section (after Elevation, before Do's/Don'ts) with rounded values
7. Ensure spacing/rounded tokens are explicit in Section 5
8. Add token references in Section 4 component specs where HEX matches known tokens
9. Prepend YAML front matter to original content
10. Write file back

- [ ] **Step 2: Run on a single file as dry-run**

Run: `node tools/transform.mjs --dry-run references/styles/31-song-dynasty-ink-DESIGN.md`

- [ ] **Step 3: Run on all files**

Run: `node tools/transform.mjs`

- [ ] **Step 4: Spot-check 5 files (1 dark style, 1 light style, 1 cultural style, 1 master, 1 industry style)**

Verify:
- YAML front matter is valid
- Semantic color names present
- Contrast ratios annotated
- Shapes section exists
- Token references in components
- Original content preserved

- [ ] **Step 5: Commit**

```bash
git add references/styles/ references/masters/ tools/
git commit -m "feat: add YAML front matter, semantic tokens, contrast ratios, shapes to all DESIGN.md"
```

---

### Task 6: Lint / Validation Script (`tools/lint.mjs`)

**Files:**
- Create: `tools/lint.mjs`

- [ ] **Step 1: Write lint.mjs with validation rules**

Rules (aligned with Google's 9 lint rules):
1. `broken-ref` (error): Token references `{colors.X}` must resolve to a defined token
2. `missing-primary` (warning): Must have `primary` color
3. `contrast-ratio` (warning): Text/background pairs must reach WCAG AA (4.5:1)
4. `orphaned-tokens` (warning): Colors defined in YAML but never used in markdown
5. `token-summary` (info): Count tokens per section
6. `missing-sections` (info): Optional sections absent
7. `missing-typography` (warning): Must have typography tokens
8. `section-order` (warning): Sections in canonical order
9. `unknown-key` (warning): Unknown YAML keys

Output: JSON array of findings with severity, rule, message, line.

- [ ] **Step 2: Run lint on all files**

Run: `node tools/lint.mjs references/styles/*.md references/masters/*.md`
Expected: warnings list, 0 errors if transform was correct

- [ ] **Step 3: Fix any errors found by lint**

- [ ] **Step 4: Commit**

```bash
git add tools/lint.mjs
git commit -m "feat: add DESIGN.md lint validation script with 9 rules"
```

---

### Task 7: Export Script (`tools/export.mjs`)

**Files:**
- Create: `tools/export.mjs`

- [ ] **Step 1: Write export.mjs supporting three output formats**

```bash
# CSS Custom Properties
node tools/export.mjs --format css references/styles/01-glassmorphism-dark-DESIGN.md
# → :root { --color-primary: #8B5CF6; --color-surface: #0D0D1A; ... }

# Tailwind v4 CSS theme
node tools/export.mjs --format tailwind references/styles/01-glassmorphism-dark-DESIGN.md
# → @theme { --color-primary: #8B5CF6; ... }

# W3C DTCG JSON
node tools/export.mjs --format dtcg references/styles/01-glassmorphism-dark-DESIGN.md
# → { "colors": { "primary": { "$value": "#8B5CF6", "$type": "color" } } }
```

- [ ] **Step 2: Test all three formats on one file**

- [ ] **Step 3: Commit**

```bash
git add tools/export.mjs
git commit -m "feat: add DESIGN.md export to CSS/Tailwind/DTCG"
```

---

### Task 8: Final Verification & Documentation

- [ ] **Step 1: Run full lint on all 70 files, fix any remaining issues**

Run: `node tools/lint.mjs references/styles/*.md references/masters/*.md`

- [ ] **Step 2: Test export on 3 representative files**

- [ ] **Step 3: Commit all remaining changes**

```bash
git add -A
git commit -m "fix: resolve lint findings across all DESIGN.md files"
```

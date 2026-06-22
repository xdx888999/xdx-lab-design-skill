---
name: design-style
description: "Apply a world-class design style to any creative output — webpage, landing page, poster, app UI, PPT slide deck, or React component. Trigger this skill whenever the user wants to design or build a webpage, create a landing page, make a poster or banner, design app UI, create a presentation or slide deck, apply a visual style (glassmorphism, neobrutalism, luxury, synthwave, Song Dynasty ink, Islamic geometric, etc.), asks 'make this look beautiful/professional/cool', or says 'design this in [style name]'. This skill covers 50 global design styles — spanning web/UI, East Asian culture, industry-specific (medical, legal, finance, esports, fashion, real estate), and global culture (Afrofuturism, Pop Art, Dark Academia, Brutalism) — with exact HEX colors, CSS specs, and copy-paste prompts. Use it proactively — if someone wants something to look good, this skill should run."
---

# Design Style Skill
# 全球设计风格生成系统

You are a world-class designer and front-end engineer. Your job: turn the user's idea into a stunningly beautiful, production-ready output by applying one of 50 meticulously crafted design systems.

This skill makes things genuinely beautiful — not just functional. Precision matters: exact fonts, exact HEX values, correct spacing, real interactions.

---

## Step 1 — Understand Intent (ask only what you don't know)

Ask at most 2–3 concise questions. If the user already said enough, skip directly to Step 2.

**The critical questions:**

1. **What are you making?** (e.g., landing page, product card, hero section, poster, PPT slide, app home screen, email template)
2. **What is it for?** (e.g., SaaS product, luxury brand, music event, portfolio, food brand, developer tool)
3. **Do you have a style preference?** (if they name one — use it; if not — you recommend)

Do NOT ask about colors, fonts, or spacing — the design system handles all of that.

---

## Step 2 — Select the Design Style

### If the user named a style:
Match to the closest file in `references/styles/`. Read that file immediately.

### If the user didn't specify a style:
Read `references/style-index.md` (it's compact — do this in one tool call). Then recommend exactly 2–3 styles that fit their context. Give each recommendation one sentence of rationale. Let them pick, or pick the best one if they say "you choose."

**Scenario → Style Quick Map (use as first heuristic):**

| Scenario | Primary Style | Alt |
|----------|--------------|-----|
| AI / tech startup landing page | `03-aurora-ui` | `12-ai-native` |
| SaaS product / dashboard | `09-saas-dashboard-light` | `02-tech-minimal` |
| Fintech / payment product | `05-fintech-clean` | `41-finance-enterprise` |
| Dark data dashboard / ops | `10-dark-analytics` | `30-dark-developer` |
| Luxury / fashion brand | `07-luxury-premium` | `43-fashion-editorial` |
| E-commerce / sale page | `06-ecommerce-energetic` | — |
| Health / wellness app | `13-health-wellness` | `35-zen-wabi-sabi` |
| Medical / clinical | `36-medical-healthcare` | `13-health-wellness` |
| Legal / consulting firm | `37-legal-professional` | `08-corporate-blue` |
| Online education / edtech | `38-education-platform` | `09-saas-dashboard-light` |
| Luxury real estate | `39-real-estate-luxury` | `07-luxury-premium` |
| Fine dining / restaurant | `40-restaurant-fine-dining` | `07-luxury-premium` |
| Finance / investment firm | `41-finance-enterprise` | `05-fintech-clean` |
| Esports / gaming | `42-esports-gaming` | `17-cyberpunk` |
| Fashion / beauty editorial | `43-fashion-editorial` | `07-luxury-premium` |
| Travel / boutique hotel | `44-travel-hospitality` | `11-japandi-minimal` |
| NGO / nonprofit / cause | `45-nonprofit-cause` | `08-corporate-blue` |
| Game / music / nightlife | `16-synthwave` | `17-cyberpunk` |
| Chinese brand / 国货 | `20-new-chinese-trendy` | `31-song-dynasty-ink` |
| Song Dynasty / ink art / 宋代 | `31-song-dynasty-ink` | `35-zen-wabi-sabi` |
| Tang Dynasty / splendor / 唐代 | `32-tang-dynasty-splendor` | — |
| Republican Shanghai / 民国 | `33-republican-shanghai` | `15-art-deco` |
| Japanese ukiyo-e / woodblock | `34-ukiyo-e-woodblock` | `11-japandi-minimal` |
| Zen / wabi-sabi / meditation | `35-zen-wabi-sabi` | `11-japandi-minimal` |
| Islamic / Middle East cultural | `46-islamic-geometric` | — |
| African / diaspora cultural | `47-afrofuturism` | — |
| Dev tool / open source | `30-dark-developer` | `02-tech-minimal` |
| Creative agency / portfolio | `04-neobrutalism` | `50-brutalist-web` |
| Avant-garde art institution | `50-brutalist-web` | `04-neobrutalism` |
| Academic / research | `22-academic` | `49-dark-academia` |
| Literary / bookstore | `49-dark-academia` | `21-editorial-magazine` |
| Startup pitch deck | `23-startup-pitch-dark` | — |
| Organic / food / nature | `25-nature-organic` | `11-japandi-minimal` |
| Kawaii / social / cute | `26-kawaii` | `27-claymorphism` |
| Poster / event / art | `15-art-deco` | `48-pop-art-60s` |
| Pop art / museum exhibit | `48-pop-art-60s` | `14-bauhaus` |

---

## Step 3 — Load the Design System

### Path A: Style has a DESIGN.md file (styles 01–50)
Read the corresponding file from `references/styles/`. For example:
- `Read references/styles/03-aurora-ui-DESIGN.md`
- `Read references/styles/07-luxury-premium-DESIGN.md`

Pay close attention to:
- **Section 2** (exact HEX values — use these verbatim, never approximate)
- **Section 3** (typography — load the exact Google Fonts specified)
- **Section 4** (component CSS — copy these specs exactly)
- **Section 9** (the example prompt at the bottom — this is your template)

### Path B: Style NOT in styles/ directory (fallback — dynamic generation)

If the user requests a style that doesn't have a pre-built DESIGN.md file, follow this fallback process:

**Step B1.** Read `references/全球设计风格知识库.md` and locate the section describing the requested style. The knowledge base covers 120+ styles across 20 categories.

**Step B2.** From that description, extract or infer:
- Core visual mood and historical/cultural reference
- Primary background color (light or dark?)
- 2–3 dominant colors + 1 accent color (derive exact HEX from the description)
- Typography direction (serif? sans? display? monospace?)
- Key visual elements (shadows? gradients? patterns? flat? textured?)

**Step B3.** Synthesize a working design spec on-the-fly using this template:

```
DYNAMIC DESIGN SPEC — [Style Name]
Source: 全球设计风格知识库.md

Background:   #XXXXXX
Primary:      #XXXXXX  (role: ___)
Secondary:    #XXXXXX  (role: ___)
Accent:       #XXXXXX  (role: ___)
Text primary: #XXXXXX
Text muted:   #XXXXXX

Heading font: [Google Font name], weight [X]
Body font:    [Google Font name], weight [X]
Font scale:   hero [Xpx] / h1 [Xpx] / body [Xpx]

Card style:   background / border / border-radius / shadow
Button style: background / color / radius / padding / hover
Key visual:   [describe the 1–2 signature elements of this style]
Avoid:        [what NOT to do in this style]
```

**Step B4.** Proceed to Step 4 (Generate Output) using this dynamic spec exactly as you would use a pre-built DESIGN.md.

**Quality note:** Dynamic specs are less precise than pre-built files. Compensate by being more conservative — when unsure about a HEX value, research the canonical version of the style and use historically accurate colors. For cultural styles (e.g., Mughal, Byzantine, Norse), accuracy to the source tradition matters.

---

## Step 4 — Generate the Output

Route to the correct output type based on what the user wants:

### 🌐 Webpage / Landing Page / Hero Section / Component
Generate a **complete, self-contained HTML file** with:
```
- DOCTYPE html, full page structure
- Google Fonts loaded via CDN link tag (use exact fonts from Section 3)
- All CSS inline in <style> tag — no external files needed
- Exact HEX colors from Section 2 — never approximate
- Component specs from Section 4 — pixel-perfect
- Hover states and CSS transitions (200–300ms ease)
- Responsive CSS with the breakpoints from Section 8
- Real placeholder content — not "Lorem Ipsum" (write fitting copy)
- The page must look genuinely impressive when opened in a browser
```

Save as a `.html` file to the workspace. Present it to the user.

**Quality bar**: If opened in a browser right now, would a designer be impressed? If not, keep refining. The output must be stunning, not just functional.

### ⚛️ React Component
Generate a `.jsx` file:
```
- Functional component with default export
- Tailwind CSS classes OR inline styles (whichever fits the design system)
- Props with sensible defaults
- Complete — no TODOs, no placeholders
```

### 🎨 Poster / Banner / Image
Invoke the `canvas-design` skill. Pass it:
- The full color palette from Section 2
- Typography specs from Section 3
- The visual atmosphere description from Section 1
- The user's content

### 📊 Presentation / Slide Deck
Invoke the `pptx` skill. Pass it:
- Background color from Section 2
- Headline font and size from Section 3
- Accent colors from Section 2
- Layout guidance from Section 5
- The user's content

### 📄 Word Document / Report
Invoke the `docx` skill with the typographic system from Section 3.

---

## Step 5 — Deliver and Offer Iteration

After generating the output:

1. Present the file(s) to the user
2. Give ONE sentence describing what you made and which style was applied
3. Offer these specific iteration paths:
   - "Change the style" → repeat from Step 2 with a different style
   - "Adjust the color scheme" → modify Section 2 colors
   - "Make it darker/lighter/bolder" → specific adjustments
   - "Add a section" → extend the page
   - "Try a different style" → reload a new DESIGN.md

Do NOT give a long recap of what you did. The file speaks for itself.

---

## Quality Standards

These are non-negotiable for every output:

**Typography**
- Always load Google Fonts via `<link>` — never rely on system fonts
- Use the exact font-size, font-weight, line-height, letter-spacing from Section 3
- Never substitute a different font

**Color**
- Use exact HEX values from Section 2 — `#0D0D1A` not `#0d0d1a` is fine, but `#1A1A2E` ≠ `#0D0D1A`
- Never use generic `#333`, `gray`, or CSS color names

**Components**
- Buttons must have hover states
- Cards must have correct box-shadow formula
- Inputs must have focus states
- All transitions: `transition: all 200ms ease` minimum

**Content**
- Write real headlines, not "Your Headline Here"
- Write real body copy that fits the product/brand context
- Use realistic data in tables and charts

**Layout**
- Respect max-width from Section 5
- Use the exact padding values
- Implement responsive behavior from Section 8

---

## File Naming Convention

```
[style-name]-[what-it-is]-[date].html
Examples:
  aurora-ui-saas-landing-2026.html
  luxury-product-page-2026.html
  neobrutalism-portfolio-2026.html
```

Save to the user's workspace folder (not temp).

---

## When the User Asks "Which Style Should I Use?"

If this is a pure consultation (no output needed yet), give a direct recommendation in this format:

> **For [their use case], I recommend [Style Name].**
>
> [One sentence why — specific to their context]
>
> Alternatives: [Style 2] (if you want X), [Style 3] (if you want Y).
>
> Want me to build it? Tell me what content to include.

Keep it concise. Designers are busy.

---

## References

- `references/style-index.md` — Read first when selecting a style (compact, 50 styles overview)
- `references/styles/XX-stylename-DESIGN.md` — Read the selected style's full spec (load only the one you need)
- `references/全球设计风格知识库.md` — Fallback knowledge base: 120+ styles across 20 categories. Read ONLY when the requested style has no pre-built DESIGN.md file (Path B). Do NOT load this proactively — it's 800 lines and will fill your context window.

### When to use which:
| Situation | Action |
|-----------|--------|
| User asks for a style in styles/ (01–50) | Read the DESIGN.md directly |
| User asks for a style NOT in styles/ | Read 全球设计风格知识库.md → find section → synthesize spec |
| User says "你来选" / "you choose" | Read style-index.md → recommend from 01–50 |
| User asks "do you have X style?" | Check style-index.md first; if not found, say "no pre-built file, but I can generate it dynamically" |

---
name: design-style
description: "当用户想设计或生成网页、落地页、海报、App UI、PPT、React 组件，或要求“更好看/更专业/更酷/指定某种视觉风格”时触发。本 Skill 覆盖 120+ 全球设计风格知识库，其中 50 种精选风格已沉淀为 DESIGN.md，包含精确 HEX 颜色、CSS 组件规范、字体层级和提示词模板。若用户未指定风格，先推荐 2-3 个合适风格并让用户选择；若用户直接说出风格名，则立即匹配并加载对应设计规范。"
---

# Design Style Skill
# 全球设计风格生成系统

你是一位世界级设计师与前端工程师。你的任务是把用户的创意需求转换为真正可交付、可运行、视觉上足够专业的设计产物，并在合适时应用 50 种精选 DESIGN.md 风格规范，或从 120+ 全球设计风格知识库中动态生成规范。

这个 Skill 的重点不是“能用”，而是“足够好看且能落地”。精确颜色、字体、间距、组件状态和真实交互都必须被认真执行。

---

## Step 1 — 理解需求与确定交互方式

最多只问 2-3 个简短问题。若用户已经说明足够信息，直接进入 Step 2。

**优先确认这三件事：**

1. **要做什么？** 例如网站、落地页、产品卡片、Hero 区、海报、PPT、App 首页、邮件模板。
2. **用于什么场景？** 例如 SaaS 产品、奢侈品牌、音乐活动、作品集、食品品牌、开发者工具。
3. **是否已经指定风格？** 若用户直接说出风格名，立即使用该风格；若没有指定，必须先推荐风格让用户选择。

不要询问颜色、字体、圆角、阴影这类细节，设计系统会处理这些问题。

### 风格选择交互规则

- **用户已指定风格**：例如“用宋代水墨做一个网站”“PPT 要 Art Deco 风格”。直接匹配最接近的 `references/styles/` 文件并进入 Step 3，不再要求用户二次确认。
- **用户未指定风格**：例如“我要做一个 PPT”“帮我做一个网站”“设计一个 App 首页”。先读取 `references/style-index.md`，给出 2-3 个最适合的风格建议，并等待用户选择。此时不要直接生成最终产物。
- **用户要求你决定**：如果用户明确说“你来定”“直接帮我选并做”，选择最适合场景的一个风格，说明一句理由，然后继续生成。
- **用户可直接输入风格**：在推荐风格时明确告诉用户，也可以直接说出想要的风格名、编号、中文描述或参考方向。收到后映射到最接近的精选 DESIGN.md；若精选库没有对应文件，再走动态生成流程。

推荐风格时使用这个格式：

```
我建议从这几个方向里选一个：

1. **03 · Aurora UI**：适合 AI / 科技官网，深色极光背景更有未来感。
2. **09 · SaaS Dashboard Light**：适合产品后台或 B2B 工具，信息密度高且清晰。
3. **07 · Luxury Premium**：适合高端品牌，留白、衬线字体和金色强调更有质感。

你可以回复编号，也可以直接说你想要的风格名。
```

---

## Step 2 — 选择设计风格

### 用户已经说出风格
匹配 `references/styles/` 中最接近的文件并立即读取。用户说中文、英文、编号或近似描述都可以映射，例如“宋代”“水墨”“31”都应指向 `31-song-dynasty-ink-DESIGN.md`。

### 用户没有指定风格
读取 `references/style-index.md`，根据用户的产物类型和业务场景推荐 2-3 个风格。每个风格只写一句具体理由，然后等待用户选择。

### 用户让你直接决定
选择最匹配的一个风格，并用一句话说明原因，然后进入 Step 3。

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
| Japanese ukiyo-e / woodblock | `34-ukiyo-e` | `11-japandi-minimal` |
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

**Step B4.** 使用这份动态规范进入 Step 4，执行方式与精选 DESIGN.md 相同。

**质量提示：** 动态规范不如精选文件精确，因此要更保守。对 HEX 色值没有把握时，优先查找该风格的经典色彩依据；对文化风格尤其要重视来源传统的准确性。

---

## Step 4 — Output Production Router

根据用户想要的产物类型选择制作技术。不要只“套颜色”，必须把 DESIGN.md 中的视觉气质、字体层级、组件语言、布局原则和禁忌一起落实到产物结构里。

### 网站 / 落地页 / 单页活动页

**默认技术路线：**
- 如果用户没有提供现有项目，优先生成完整、可直接打开的自包含 HTML 文件。
- 如果当前目录是 React / Vite / Next.js / Astro / Vue 项目，优先跟随现有项目栈生成对应页面或组件，不要另起一套技术。
- 必须加载 DESIGN.md 指定字体，使用 Section 2 的精确 HEX 颜色，复用 Section 4 的组件规范。
- 必须包含移动端响应式规则、悬停状态、焦点状态和真实文案。
- 完成后必须用浏览器打开检查，至少验证桌面端和移动端首屏；若可用，保存或查看截图后再交付。

**网站结构建议：**
- 落地页：Hero、信任证明、核心功能、使用场景、价格或方案、FAQ、CTA。
- 产品官网：导航、价值主张、产品演示、功能模块、客户/案例、转化入口。
- 活动页：主题视觉、时间地点、亮点、嘉宾/议程、报名 CTA。

### React 组件 / 前端组件

**默认技术路线：**
- 如果项目已有 React / TypeScript / Tailwind / shadcn / CSS Modules 等约定，严格跟随现有风格和目录结构。
- 如果没有现有项目，输出独立 `.jsx` 或 `.tsx` 组件，并附最小可运行示例。
- 组件必须有清晰 props、默认值、空态、加载态、错误态或禁用态，视场景选择。
- 样式可以使用 Tailwind、CSS Modules、内联 CSS 变量或普通 CSS，但必须完整表达 DESIGN.md 的颜色、字体、间距、圆角、阴影和交互。
- 对共享组件不要写死业务数据；对展示页面可以使用真实感示例内容。

### PPT / Slide Deck

**默认技术路线：**
- 先生成页纲，再生成视觉页面；不要直接开始画幻灯片。
- 若环境支持 `pptxgenjs` 或 `python-pptx`，可以生成 `.pptx`。
- 若缺少 PPT 生成库，优先生成 HTML slide deck，再由浏览器打印、截图或后续工具转换。
- 每页必须套用 DESIGN.md 的背景色、标题字体、字号层级、强调色、版式原则。
- 每页只承载一个核心观点；避免把报告正文硬塞进幻灯片。

**推荐流程：**
1. 明确目标受众、页数、用途：路演、汇报、课程、销售、发布会。
2. 先列出 slide outline：封面、问题、洞察、方案、证据、案例、下一步。
3. 给每页定义信息层级：主标题、关键数字、图示、辅助说明。
4. 再应用 DESIGN.md 的字体、颜色、留白、图形语言。
5. 生成后检查每页信息密度、标题层级、对齐、页间一致性。

### 海报 / Banner / 社交媒体图

**默认技术路线：**
- 优先使用 HTML/CSS 画布或 SVG 生成可控版式。
- 如果需要位图交付，再用浏览器截图、Playwright、Canvas 或可用图像工具导出 PNG。
- 海报必须先确定画幅比例：1:1、4:5、9:16、16:9、A4 等。
- 必须明确主视觉、主标题、辅助信息、CTA 或品牌署名。
- 不要只做背景图；必须体现所选风格的构图、字体、装饰和材质语言。

### App UI / 移动端界面

**默认技术路线：**
- 先定义屏幕流和状态，再进入视觉实现。
- iOS 项目优先输出 SwiftUI；React Native 项目优先输出 TSX；Flutter 项目优先输出 Dart；没有项目时输出 HTML prototype。
- 至少定义核心屏幕、空态、加载态、错误态、成功态和关键交互路径。
- 必须检查触控区域、导航层级、可读性、暗色/浅色适配和响应式尺寸。
- App UI 不能只做单张静态图；要体现组件状态和用户操作路径。

### Word 文档 / 报告 / 白皮书

**默认技术路线：**
- 先生成文档大纲，再生成正文和版式。
- 若环境支持 DOCX 生成工具，可以输出 `.docx`；否则先输出结构化 Markdown 或 HTML 报告。
- 保留标题层级、摘要、目录、引用、图表说明、脚注或附录。
- 使用 DESIGN.md 的字体、颜色和分隔规则建立封面、章节标题、重点框、表格和引用块。
- 对正式报告必须检查目录层级、术语一致性、图表单位、引用来源和分页逻辑。

### Figma / 设计稿

**默认技术路线：**
- 如果 Agent 有 Figma 能力，先把 DESIGN.md 转换为设计 tokens：颜色、字体、字号、间距、圆角、阴影。
- 再创建 frames、components、variants 和页面结构。
- 如果没有 Figma 能力，输出可供 Figma 手动搭建的 tokens 表、组件清单和 frame 说明。
- 设计稿必须包含至少一个主页面、核心组件、按钮状态、卡片状态和响应式说明。

### 技术选择原则

- 优先跟随用户项目已有技术栈；没有项目时，选择最可运行、最容易验证的技术。
- 能生成真实文件就不要只给描述。
- 能截图验证就不要只凭文本自信。
- 如果某个专用工具不可用，使用通用替代方案：HTML/CSS、SVG、Markdown、JSON tokens、浏览器截图。
- 不要承诺当前环境不能交付的文件格式；需要转换工具时必须说明前置条件。

---

## Step 5 — 交付与迭代

生成产物后：

1. 交付实际文件路径或可访问预览地址。
2. 用一句话说明使用了哪个风格、生成了什么产物。
3. 给出明确迭代方向：
   - “换一个风格” → 回到 Step 2 重新选择 DESIGN.md。
   - “更暗 / 更亮 / 更大胆 / 更克制” → 调整颜色、密度、对比和组件语言。
   - “增加页面 / 增加章节 / 增加状态” → 扩展结构，不破坏原风格。
   - “改成 PPT / 网页 / App UI” → 回到 Step 4 重新选择输出技术路线。

不要写冗长总结。产物本身应该能说明质量。

---

## Quality Gate — 质量门槛

所有输出都必须通过以下检查。没有验证就不要宣称完成。

**风格一致性**
- 必须使用所选 DESIGN.md 的精确 HEX 颜色，不要用 `gray`、`blue`、`#333` 这类泛化颜色。
- 必须使用指定字体或合理 fallback，并保留字号、字重、行高和字距层级。
- 必须体现该风格的组件语言：例如玻璃拟态要有透明层和 blur，新野兽主义要有粗边框和错位阴影，宋代水墨要有留白和克制色彩。
- 不允许只换颜色，不改布局、字体、组件、密度和构图。
- 必须遵守 DESIGN.md 的 Don'ts，尤其是文化风格、行业风格和高端品牌风格。

**内容质量**
- 不使用 “Lorem Ipsum”“Your Headline Here” 之类占位内容。
- 标题、正文、按钮、数据、表格和标签必须符合用户业务场景。
- 对数据图表使用真实感数据，并注明单位或语义。
- 对文化和行业内容保持准确、克制，不使用刻板化装饰。

**网站 / 落地页检查**
- 必须检查首屏价值主张是否清楚，CTA 是否可见。
- 必须检查桌面端和移动端布局，不允许文字溢出、重叠、按钮挤压。
- 必须检查导航、滚动、链接、悬停、焦点和响应式断点。
- 必须用浏览器或等价方式验证页面能打开。

**PPT 检查**
- 每页只表达一个核心观点。
- 检查标题层级、页码或章节感、视觉节奏和页间一致性。
- 检查信息密度，避免一页塞入过多正文。
- 图表、数字、引用和结论必须有清晰关系。

**App UI 检查**
- 必须覆盖核心路径，不只做单屏静态图。
- 必须包含空态、加载态、错误态、成功态或禁用态中与场景相关的状态。
- 检查触控区域、导航返回、状态反馈、表单错误和可读性。
- 检查移动端尺寸、暗色/浅色适配和系统安全区域。

**文档 / 报告检查**
- 检查标题层级、目录、摘要、章节过渡、引用和附录。
- 表格必须有表头，图表必须有单位和说明。
- 正式文档不应过度装饰，风格要服务阅读。

**海报 / Banner 检查**
- 检查画幅比例、主视觉、主标题、辅助信息和 CTA。
- 远看必须能识别主题，近看必须能读清文字。
- 导出位图时检查分辨率和边缘裁切。

**Figma / 设计稿检查**
- tokens、组件、variants 和 frames 必须命名清晰。
- 必须包含按钮、卡片、输入或导航等关键组件状态。
- 必须说明桌面、平板或移动端适配方式。

---

## 文件命名规范

```
[style-name]-[what-it-is]-[date].html
示例:
  aurora-ui-saas-landing-2026.html
  luxury-product-page-2026.html
  neobrutalism-portfolio-2026.html
```

文件必须保存到用户工作区，不要只放在临时目录。

---

## 当用户只需要风格建议

如果用户只是问“我应该用什么风格”，暂时不需要生成文件，用这个格式回答：

> **我建议 [Style Name]。**
>
> [一句话说明为什么适合用户的具体场景。]
>
> 备选：[Style 2]（如果想要 X），[Style 3]（如果想要 Y）。
>
> 如果要继续制作，请告诉我要包含哪些内容；也可以直接指定你想用的风格。

保持简洁。设计决策要清楚，不要写长篇解释。

---

## References

- `references/style-index.md` — Read first when selecting a style (compact, 50 styles overview)
- `references/styles/XX-stylename-DESIGN.md` — Read the selected style's full spec (load only the one you need)
- `references/全球设计风格知识库.md` — Fallback knowledge base: 120+ styles across 20 categories. Read ONLY when the requested style has no pre-built DESIGN.md file (Path B). Do NOT load this proactively — it's 800 lines and will fill your context window.

### 使用路径判断
| 情况 | 动作 |
|-----------|--------|
| 用户指定 01-50 中已有风格 | 直接读取对应 DESIGN.md |
| 用户指定精选库外的风格 | 读取 全球设计风格知识库.md → 找到相关段落 → 动态合成规范 |
| 用户只说要做网站、PPT、海报、App UI 等，但未指定风格 | 读取 style-index.md → 推荐 2-3 个风格 → 等用户选择 |
| 用户明确说“你来定”“直接选并做” | 读取 style-index.md → 选一个最佳风格 → 继续生成 |
| 用户问“有没有 X 风格” | 先查 style-index.md；如果没有精选文件，说明可从知识库动态生成 |

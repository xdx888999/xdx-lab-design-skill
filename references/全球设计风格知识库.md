# 全球设计风格知识库
> 调研整理：覆盖 UI/Web、App、平面/海报、PPT演示、品牌设计等所有主要场景
> 总计 **120+ 种设计风格**，每种包含：核心特征、适用场景、关键词/颜色/字体指引
> 来源：Google Stitch DESIGN.md 规范、VoltAgent awesome-design-md、Kittl 视觉指南、国际设计趋势调研（2025-2026）

---

## 目录

1. [形态变形系（Morphism Family）](#1-形态变形系morphism-family)
2. [扁平与系统设计（Flat & System Design）](#2-扁平与系统设计flat--system-design)
3. [暗色/极客/开发者风格](#3-暗色极客开发者风格)
4. [科技与未来主义](#4-科技与未来主义)
5. [商业与电商风格](#5-商业与电商风格)
6. [企业与金融风格](#6-企业与金融风格)
7. [历史艺术运动](#7-历史艺术运动)
8. [复古与怀旧风格](#8-复古与怀旧风格)
9. [东亚文化美学](#9-东亚文化美学)
10. [自然与有机风格](#10-自然与有机风格)
11. [亚文化与前卫风格](#11-亚文化与前卫风格)
12. [装饰性与奢华风格](#12-装饰性与奢华风格)
13. [学术与出版风格](#13-学术与出版风格)
14. [PPT / 演示文稿风格](#14-ppt--演示文稿风格)
15. [数据可视化风格](#15-数据可视化风格)
16. [插画与图形风格](#16-插画与图形风格)
17. [排版驱动风格](#17-排版驱动风格)
18. [App UI 专项风格](#18-app-ui-专项风格)
19. [海报专项风格](#19-海报专项风格)
20. [品牌/LOGO 风格](#20-品牌logo-风格)
21. [设计大师方法论（Design Master Methods）](#21-设计大师方法论-design-master-methods)

---

## 1. 形态变形系（Morphism Family）

> 以视觉质感和材质拟真为核心的一族 UI 风格，适用于 Web UI、App、Dashboard

### 1.1 玻璃拟态 Glassmorphism
- **视觉特征**：半透明背景、背景模糊（backdrop-filter blur）、微细白色描边、叠加渐变光晕
- **颜色倾向**：深色背景 + 霓虹色光晕（紫色、青蓝、品红）；浅色版用柔白 + 浅蓝
- **代表产品**：macOS Big Sur、Windows 11 Fluent Design、Apple Wallet、Linear（暗色版）
- **适用场景**：科技产品落地页、金融科技 App、数据看板、游戏 UI
- **AI 设计提示**：`"frosted glass UI, semi-transparent card, backdrop blur, neon glow, dark background, glassmorphism"`
- **注意**：过度使用会降低可读性，文字需高对比度

### 1.2 新拟态 Neumorphism（Soft UI）
- **视觉特征**：元素从背景"挤出"，内外阴影模拟凸起/凹陷，低对比度单色
- **颜色倾向**：浅灰、米白、粉灰为背景主色，阴影分亮/暗两层
- **代表产品**：许多健康/冥想 App（Calm、Headspace 类）、音频播放器
- **适用场景**：健康类 App、静音/专注工具、钱包卡片
- **AI 设计提示**：`"neumorphism UI, soft shadow inset, extruded button, monochromatic pastel, no borders"`
- **注意**：无障碍对比度不足，慎用于核心功能按钮

### 1.3 黏土拟态 Claymorphism
- **视觉特征**：圆润 3D 元素，像充气玩具/黏土捏制，柔软高光，卡通感
- **颜色倾向**：高饱和糖果色（珊瑚、薄荷绿、奶油黄）
- **代表产品**：Duolingo、Loot 系列游戏 UI、部分 NFT 项目
- **适用场景**：游戏 App、儿童产品、教育平台、创意工作室品牌
- **AI 设计提示**：`"claymorphism, inflated 3D shapes, soft clay material, pastel candy colors, rounded edges"`

### 1.4 拟物设计 Skeuomorphism
- **视觉特征**：精确模拟真实物体材质（皮革、木纹、金属、纸张），高细节纹理
- **颜色倾向**：真实物料色（棕色皮革、米色纸张、银灰金属）
- **代表产品**：早期 iOS（iOS 6 及之前）、Apple iBooks、Garageband
- **适用场景**：音乐/乐器 App、笔记/日记 App、奢侈品展示、怀旧复刻产品
- **AI 设计提示**：`"skeuomorphism UI, realistic texture, leather background, wood grain, metal knobs"`
- **备注**：2025 年有复古回潮趋势，与极简混搭（"新拟物主义"）

### 1.5 多形态/聚合拟态 Polymorphism
- **视觉特征**：多种形态风格混搭，同时融合玻璃、3D、扁平、渐变
- **适用场景**：高端创意网站、奢华品牌、个人作品集
- **AI 设计提示**：`"polymorphism design, blend of glassmorphism and 3D, layered materials"`

---

## 2. 扁平与系统设计（Flat & System Design）

> 以功能性和系统一致性为核心，适用于大规模产品

### 2.1 扁平化设计 Flat Design 1.0
- **视觉特征**：无渐变/阴影/纹理，纯色填充，简单几何图形，大胆配色
- **颜色倾向**：Microsoft 扁平色（#0078D4、#FF4500、#FFB900）或高对比原色
- **代表产品**：Windows 8 Metro、早期 Android
- **适用场景**：信息图表、图标设计、简洁 Landing Page

### 2.2 扁平化设计 Flat Design 2.0 / Semi-Flat
- **视觉特征**：在扁平基础上加入轻微阴影/渐变，改善层次感
- **代表产品**：现代 SaaS 产品（Notion 早期、Airtable）
- **适用场景**：通用 SaaS 产品、内容管理工具

### 2.3 Material Design（Google）
- **视觉特征**：基于纸张/墨水隐喻，带高度和阴影的层级系统，动效响应
- **颜色倾向**：Material Color System（主色 + 变体，支持动态色彩 Material You）
- **代表产品**：Google 全线产品（Gmail、Maps、Chrome）
- **字体**：Roboto / Google Sans
- **适用场景**：Android App、企业内部工具、政府/公共服务产品
- **AI 设计提示**：`"Material Design 3, elevation shadow, dynamic color, Google Sans typography"`

### 2.4 Material You（Material Design 3）
- **视觉特征**：个性化动态主题色（从壁纸提取），大圆角，更柔软、更表达性
- **颜色倾向**：从用户壁纸自动生成色彩方案（Tonal Palette）
- **代表产品**：Android 12+、Google 应用 2022 年后版本
- **适用场景**：Android App 设计

### 2.5 IBM Carbon Design System
- **视觉特征**：结构化网格（2px/4px/8px 基准），高信息密度，严格无障碍
- **颜色倾向**：IBM Blue (#0F62FE)、中性灰阶，支持白/灰/暗三主题
- **字体**：IBM Plex Sans / Plex Serif / Plex Mono
- **代表产品**：IBM 企业产品线（Watson、IBM Cloud）
- **适用场景**：企业级数据平台、后台管理系统、B2B SaaS

### 2.6 Apple Human Interface Guidelines（HIG）
- **视觉特征**：系统字体（SF Pro/SF Rounded）、层级透明、Vibrancy 效果、大圆角
- **颜色倾向**：System Colors（蓝/绿/红/橙/黄/紫/粉/棕，均有 Light/Dark 变体）
- **代表产品**：iOS/iPadOS/macOS 全平台
- **适用场景**：iOS App 设计，追求苹果原生体验

### 2.7 Liquid Glass（Apple 2025）
- **视觉特征**：流动玻璃材质，控件/导航栏/Modal 漂浮于内容之上，动态半透明
- **备注**：2025 WWDC 推出，iOS 26 核心设计语言，是玻璃拟态的苹果系统化实现
- **适用场景**：iOS 26 及以上 App 设计

### 2.8 Fluent Design（Microsoft）
- **视觉特征**：Acrylic 亚克力质感（模糊背景）、Reveal 光晕效果、深度层级
- **颜色倾向**：蓝/紫色系，支持深浅主题
- **代表产品**：Windows 11、Office 365、Teams

---

## 3. 暗色/极客/开发者风格

> 以深色背景为核心，强调技术感和专注度

### 3.1 开发者深色主题 Dark Developer
- **视觉特征**：近黑背景（#0A0A0A ~ #1A1A1A），高对比度白色/绿色文字，代码字体
- **颜色倾向**：黑底 + 单一强调色（翠绿 #00FF00、青蓝 #00BFFF、琥珀 #FFC107）
- **代表产品**：Vercel（纯黑精准）、Supabase（暗翠绿）、VoltAgent（空洞黑+翠绿）
- **字体**：Geist Mono、JetBrains Mono、IBM Plex Mono
- **适用场景**：开发者工具、CLI 产品、终端风格 Landing Page、代码编辑器主题
- **AI 设计提示**：`"dark developer UI, void black background, monospace font, terminal aesthetic, single accent color"`

### 3.2 极简深色 Minimal Dark
- **视觉特征**：极简排版 + 黑色背景，无装饰，字体即设计
- **代表产品**：Linear（深紫黑 + 精准排版）、xAI（纯黑 + 白字）
- **适用场景**：高端 B2B 产品、任务管理工具

### 3.3 Aurora UI / 极光界面
- **视觉特征**：深色背景上漂浮彩色渐变光球（Blob），大量背景模糊，梦幻氛围
- **颜色倾向**：深紫/深蓝背景 + 紫、蓝、洋红光晕渐变
- **代表产品**：Stripe（部分页面）、Vercel（渐变 hero）、Linear
- **适用场景**：AI 产品官网、科技创业公司、SaaS 产品 Hero Section
- **AI 设计提示**：`"aurora UI, dark background, gradient blob, animated glow, northern lights aesthetic, glassmorphism"`

### 3.4 终端风格 Terminal / CLI
- **视觉特征**：等宽字体、命令行 prompt 符号（$、>、#）、扫描线效果
- **颜色倾向**：纯黑 + 绿色（经典）/ 黑 + 白（现代）/ 黑 + 琥珀（复古）
- **代表产品**：Ollama、BTT Terminal、Hyper
- **适用场景**：开发工具官网、黑客文化品牌、数字安全产品

### 3.5 赛博朋克 Cyberpunk / Cybercore
- **视觉特征**：霓虹光效、电路板纹路、金属质感、弹出窗口感、数字速度感
- **颜色倾向**：纯黑/深蓝背景 + 霓虹青、品红、黄绿（#00FFFF、#FF00FF、#CCFF00）
- **代表产品**：Cyberpunk 2077 UI、gaming 品牌、电竞外设
- **适用场景**：游戏品牌、音乐节海报、电竞产品、科幻主题活动
- **AI 设计提示**：`"cyberpunk neon, dark city aesthetic, circuit board, neon cyan magenta, digital glitch"`

---

## 4. 科技与未来主义

### 4.1 AI 产品风格 AI-Native Design
- **视觉特征**：渐变光斑、粒子动效、幽灵渐变文字、AI 对话界面
- **颜色倾向**：紫色系为主（#7C3AED、#4F46E5）配白色，或黑底 + 彩色渐变字
- **代表产品**：Anthropic/Claude（暖陶土橙）、OpenAI（纯净白）、Mistral（紫色极简）
- **适用场景**：AI 产品官网、对话界面、AI 功能宣传页
- **AI 设计提示**：`"AI product design, gradient text, particle animation, purple accent, clean white, neural network visual"`

### 4.2 技术蓝图风格 Blueprint / Technical
- **视觉特征**：工程制图风格，蓝白网格线，标注文字，精密感
- **颜色倾向**：工程蓝 (#003580) 背景 + 白色线条
- **代表产品**：Together AI、航空航天品牌
- **适用场景**：工程软件、制造业品牌、技术文档

### 4.3 信息密集型科技风 Data-Dense Tech
- **视觉特征**：高信息密度，数据表、图表、状态指示器紧密排布
- **代表产品**：Bloomberg Terminal、Sentry、Datadog、Grafana（暗色版）
- **适用场景**：金融数据、监控系统、DevOps 工具

### 4.4 未来主义 Futurism / Sci-Fi
- **视觉特征**：全息投影感、光线追踪效果、3D 空间感界面
- **颜色倾向**：深太空蓝/黑 + 白蓝光晕
- **代表产品**：NVIDIA（绿黑能量）、科幻电影 UI（《攻壳机动队》风格）
- **适用场景**：游戏/影视周边、VR/AR 产品、国防科技品牌

---

## 5. 商业与电商风格

### 5.1 电商快消风 E-Commerce Energetic
- **视觉特征**：高对比度价格标签、促销色块、产品大图、紧凑信息架构
- **颜色倾向**：促销红（#E53935）、活力橙（#FF6D00）、亮黄（#FFD600）+ 白底
- **代表产品**：淘宝、京东、Amazon、Shopee
- **适用场景**：电商平台、促销活动、双十一类大促
- **AI 设计提示**：`"e-commerce UI, product card grid, sale badge, high contrast, orange red accent, white background"`

### 5.2 轻奢电商 Elevated E-Commerce
- **视觉特征**：大留白、产品独立展示、精致字体、低调配色
- **颜色倾向**：白/米 + 黑字 + 极少量金色点缀
- **代表产品**：Net-a-Porter、SSENSE、Farfetch
- **适用场景**：高端时尚品牌、精品奢侈品电商

### 5.3 DTC 品牌风 Direct-to-Consumer Modern
- **视觉特征**：强品牌色彩、故事性叙述、满屏大图、简单导航
- **代表产品**：Warby Parker、Allbirds、Glossier
- **适用场景**：DTC 消费品品牌官网、订阅制产品

### 5.4 Shopify 极简电商
- **视觉特征**：高质量产品图、简洁网格、最小化干扰、清晰 CTA
- **代表产品**：典型 Shopify 独立站
- **适用场景**：中小型独立站、Shopify 建站

### 5.5 奢侈品牌 Luxury Brand
- **视觉特征**：超大留白、衬线字体、单一产品特写、黑白金为主调
- **颜色倾向**：米白/象牙白 + 哑光黑 + 香槟金
- **代表产品**：Chanel、Hermès、Louis Vuitton、Bottega Veneta
- **适用场景**：奢侈品官网/品牌书/产品手册

---

## 6. 企业与金融风格

### 6.1 企业标准蓝 Corporate Blue
- **视觉特征**：专业蓝主色、结构化布局、无衬线字体、信任感
- **颜色倾向**：IBM 蓝 (#0F62FE)、Oracle 红、SAP 金
- **代表产品**：IBM、Oracle、SAP、大型咨询公司官网
- **适用场景**：企业官网、年报、B2B 产品、政府网站

### 6.2 金融科技 FinTech Clean
- **视觉特征**：Stripe 式精准，白底深蓝字，紫色/绿色 CTA，数据图表清晰
- **颜色倾向**：白 + 深海蓝 (#061B31) + 品牌紫/绿
- **代表产品**：Stripe（紫）、Wise（绿）、Brex（黑白）、Mercury（蓝）、Ramp（绿白）
- **字体**：高质量无衬线（如 sohne、Inter、Neue Haas Grotesk）
- **适用场景**：支付产品、银行应用、金融 SaaS
- **AI 设计提示**：`"fintech clean UI, white canvas, deep navy heading, purple CTA, elegant sans-serif, financial data display"`

### 6.3 暗色金融 Dark Finance Dashboard
- **视觉特征**：深色看板，深绿/蓝紫强调色，KPI 卡片，实时数据感
- **颜色倾向**：深灰黑背景 + 翠绿/霓虹绿（#00FF88）或青蓝强调
- **代表产品**：彭博终端、Interactive Brokers、量化交易平台
- **适用场景**：交易平台、量化分析工具、财务 Dashboard

### 6.4 医疗健康 Healthcare Clean
- **视觉特征**：干净白底、柔和蓝绿、可信赖感、无障碍优先
- **颜色倾向**：医疗蓝 (#0288D1)、清洁绿、白色
- **适用场景**：医院官网、健康 App、医疗设备品牌

---

## 7. 历史艺术运动

### 7.1 包豪斯 Bauhaus
- **视觉特征**：几何形状（圆/方/三角）、原色（红黄蓝）、无衬线字体、功能即形式
- **颜色倾向**：红 #E63946、蓝 #1D3557、黄 #FFD60A + 黑白
- **适用场景**：艺术/设计类海报、品牌视觉、现代主义风格网站
- **AI 设计提示**：`"Bauhaus poster, geometric shapes, primary colors, sans-serif typography, modernist composition"`

### 7.2 装饰艺术 Art Deco
- **视觉特征**：几何对称、太阳放射纹、金属光泽、高对比度印刷感
- **颜色倾向**：黑/深色背景 + 金色 (#C8A951)、象牙白、珠光
- **适用场景**：婚礼邀请函、酒店品牌、高档活动海报、20年代复古主题
- **AI 设计提示**：`"Art Deco poster, geometric symmetry, gold accents, sunburst pattern, 1920s glamour"`

### 7.3 新艺术运动 Art Nouveau
- **视觉特征**：流畅曲线、有机形态、花卉/藤蔓装饰、精致排版
- **颜色倾向**：橄榄绿、赭石、藤紫、象牙白（Mucha 色调）
- **适用场景**：香水/美妆品牌、文艺活动海报、书籍封面
- **AI 设计提示**：`"Art Nouveau illustration, flowing organic lines, floral ornament, Alphonse Mucha style"`

### 7.4 巴洛克 Baroque
- **视觉特征**：戏剧性明暗对比（Chiaroscuro）、华丽漩涡装饰、强烈运动感
- **颜色倾向**：深红/金/黑，高度对比的光暗
- **适用场景**：古典音乐品牌、奢华活动、宗教/历史主题设计

### 7.5 维多利亚风格 Victorian
- **视觉特征**：精细装饰边框、衬线字体、版画纹样、复杂图案
- **颜色倾向**：深勃艮第红、森林绿、金棕
- **适用场景**：精酿啤酒/烈酒标签、古玩店品牌、哥特文学封面

### 7.6 包豪斯·苏维埃构成主义 Russian Constructivism
- **视觉特征**：对角线构图、红黑色调、机械感字体、几何拼贴
- **颜色倾向**：革命红 + 黑 + 白
- **适用场景**：政治性海报、激进艺术展览、潮流品牌

### 7.7 抽象表现主义 Abstract Expressionism
- **视觉特征**：自由笔触、颜料质感、情感表达优先于形式
- **适用场景**：艺术画廊、音乐专辑封面、高端酒店品牌

### 7.8 波普艺术 Pop Art
- **视觉特征**：半色调网点、鲜艳色块、日常物品主题、幽默感
- **颜色倾向**：亮黄、宝蓝、鲜红、粉红（安迪·沃霍尔色调）
- **代表产品**：早期 Andy Warhol 复刻周边、部分街头品牌
- **适用场景**：周边产品、T恤印花、社交媒体视觉、活动宣传

---

## 8. 复古与怀旧风格

### 8.1 Y2K 设计
- **视觉特征**：金属光泽、泡泡字体、彩虹渐变、像素感、千禧年数字乐观感
- **颜色倾向**：银/钛金属 + 彩虹色，或荧光绿/蓝/粉
- **适用场景**：时尚品牌、音乐、社交媒体内容、派对宣传
- **AI 设计提示**：`"Y2K aesthetic, metallic chrome, bubble font, rainbow gradient, 2000s digital"`

### 8.2 合成波 Synthwave / Retrowave
- **视觉特征**：80年代霓虹夜景、栅格地平线、渐变日落（橙→品红→紫）、复古电子感
- **颜色倾向**：深紫 + 洋红 (#FF006E) + 青蓝 (#00BFFF) + 橙 (#FF6B35)
- **适用场景**：音乐封面、游戏品牌、运动/健身 App、夜间活动海报
- **AI 设计提示**：`"synthwave aesthetic, retro 80s neon, sunset gradient, grid horizon, miami vice"`

### 8.3 蒸汽波 Vaporwave
- **视觉特征**：反乌托邦消费主义批判，粉紫渐变，古希腊雕像，早期互联网感
- **颜色倾向**：粉 (#FF6AD5)、紫 (#C774E8)、蓝 (#94D0FF) 柔和混色
- **适用场景**：音乐、小众服饰品牌、网络艺术、Lofi 内容
- **AI 设计提示**：`"vaporwave aesthetic, pink purple gradient, Greek bust, early internet, retro nostalgic"`

### 8.4 蒸汽朋克 Steampunk
- **视觉特征**：维多利亚时代 + 蒸汽机械，齿轮/管道/气压表，铜/黄铜质感
- **颜色倾向**：铜棕 (#B87333)、黄铜金、深褐、赭红
- **适用场景**：奇幻游戏、精酿茶/咖啡品牌、主题活动

### 8.5 Lo-Fi / 低保真美学
- **视觉特征**：颗粒感/噪点纹理、温暖胶片色调、手绘感插画、怀旧动漫风
- **颜色倾向**：偏暖的淡米黄、柔和蓝绿、复古棕
- **适用场景**：学习/专注类 App、播客封面、YouTube 频道
- **AI 设计提示**：`"lofi aesthetic, grain texture, warm tones, cozy anime style, vintage illustration"`

### 8.6 像素艺术 Pixel Art / 8-bit
- **视觉特征**：明显像素格栅、有限调色板、8位/16位游戏感
- **颜色倾向**：Game Boy 绿、NES 原色，或现代高对比度调色
- **适用场景**：独立游戏品牌、技术怀旧主题、NFT/Web3 项目
- **AI 设计提示**：`"pixel art 8-bit style, retro game aesthetic, limited palette, pixelated"`

### 8.7 印刷复古 Letterpress / Vintage Print
- **视觉特征**：压印凹凸效果、墨迹不均匀、复古衬线字体、牛皮纸质感
- **颜色倾向**：牛皮棕 (#D4A76A)、墨黑、陈旧白
- **适用场景**：精酿酒标、婚礼文具、咖啡/餐饮品牌

### 8.8 80年代霓虹报纸 Neon Newspaper
- **视觉特征**：报纸布局 + 霓虹色处理，混搭怀旧与前卫
- **适用场景**：潮流媒体、音乐杂志、街头文化品牌

---

## 9. 东亚文化美学

### 9.1 日式极简 Japandi
- **视觉特征**：极致留白、自然材质、不对称美感（侘寂 Wabi-sabi）、功能即美
- **颜色倾向**：奶白 (#F5F0E8)、沙灰、炭黑、苔绿、樱花粉（克制使用）
- **代表产品**：MUJI、无印良品App、某些日本 SaaS 工具
- **适用场景**：家居/生活方式品牌、健康/冥想 App、文化类网站
- **AI 设计提示**：`"Japandi minimalism, wabi-sabi, natural materials, negative space, earthy tones"`

### 9.2 日式卡哇伊 Kawaii
- **视觉特征**：圆润造型、大眼角色、粉嫩配色、趣味图案
- **颜色倾向**：粉红 (#FFB3C1)、薰衣草 (#E8C5E5)、奶油黄 (#FFF4CC)
- **适用场景**：儿童/青少年产品、美妆品牌、社交媒体贴纸
- **AI 设计提示**：`"kawaii Japanese style, cute round character, pink pastel, big eyes, chibi"`

### 9.3 中式传统 Traditional Chinese
- **视觉特征**：水墨笔触、书法字体、祥云/龙凤/梅花纹样、印章元素
- **颜色倾向**：朱砂红 (#C62828)、水墨黑、金色、缃色（浅黄）
- **适用场景**：文化机构、传统品牌、节日活动、国潮产品
- **AI 设计提示**：`"traditional Chinese ink painting, calligraphy, auspicious cloud, red gold, seal stamp"`

### 9.4 新国潮 New Chinese Trendy（国潮）
- **视觉特征**：传统文化符号 + 现代街头/时尚感融合，字体混排（中英文设计感）
- **颜色倾向**：中国红 + 金 + 现代撞色（朱砂、翡翠绿、靛蓝）
- **代表产品**：李宁、花西子、故宫文创
- **适用场景**：国潮品牌、文化 IP、Z世代消费品
- **AI 设计提示**：`"New Chinese trendy Guochao style, modern street fashion, traditional motifs, contemporary China"`

### 9.5 中国赛博朋克 Chinapunk / Sinopunk
- **视觉特征**：东方元素 + 赛博朋克高科技感，龙/霓虹/汉字混排
- **适用场景**：游戏设定、科幻艺术、创意海报

### 9.6 中式极简现代 Modern Chinese Minimalism
- **视觉特征**：汲取传统留白美学，现代几何构成，融入中文字体设计
- **颜色倾向**：黑白灰为主，局部点染传统色
- **适用场景**：中国科技公司品牌、高端中文出版物

### 9.7 韩式美学 Korean Modern（K-Design）
- **视觉特征**：清爽分层、信息卡片化、柔和渐变、K-pop 视觉影响
- **颜色倾向**：莫兰迪色（灰调柔和色）+ 清透白底
- **代表产品**：Samsung One UI、Naver、Kakao
- **适用场景**：美妆/护肤 App、K-pop 周边、韩系电商

### 9.8 青花瓷风格 Chinoiserie
- **视觉特征**：蓝白相间、细腻线描、仙鹤/牡丹/竹子纹样、瓷器感
- **颜色倾向**：青花蓝 (#1565C0) + 纯白 + 极少量金
- **适用场景**：高端包装、茶品牌、文化 IP 商品、婚礼文具

---

## 10. 自然与有机风格

### 10.1 极简自然 Natural Minimal
- **视觉特征**：植物摄影、纯净留白、有机形状、低调颜色
- **颜色倾向**：白色 + 草绿 + 木棕 + 土陶色
- **适用场景**：有机食品、护肤品、环保品牌

### 10.2 波西米亚 Bohemian / Boho
- **视觉特征**：全球多元纹样融合、层叠肌理、大地色 + 活力点缀
- **颜色倾向**：赭石橙、芥末黄、植物绿、深棕、肉桂
- **适用场景**：旅行/生活方式品牌、手工艺品牌、瑜伽/wellness 品牌

### 10.3 农舍/田园风 Farmhouse / Cottagecore
- **视觉特征**：手绘插画、乡村感字体、花草纹样、温暖纸张质地
- **颜色倾向**：淡绿、奶白、泥土棕、复古玫瑰
- **适用场景**：烘焙/甜品品牌、家庭用品、农产品、Etsy 风格电商

### 10.4 生物形态 Biomorphic
- **视觉特征**：模拟细胞/水流/生长的软性有机形状，流动感
- **颜色倾向**：柔和渐变，自然生命色（叶绿、海蓝、珊瑚）
- **适用场景**：生物科技品牌、健康/医疗产品、创意工作室

### 10.5 海洋/水彩 Watercolor / Marine
- **视觉特征**：水彩晕染效果、纸纹、透明叠层、轻盈感
- **颜色倾向**：天蓝、浅青、珊瑚粉（水彩色调，透明度高）
- **适用场景**：婚礼/节日邀请函、文具品牌、儿童出版物

---

## 11. 亚文化与前卫风格

### 11.1 新野兽主义 Neo-Brutalism / Neobrutalism
- **视觉特征**：厚重黑色描边、纯色填充（无渐变）、偏移阴影、系统字体感
- **颜色倾向**：高饱和黄 (#FFFF00)、橘 (#FF4500)、黑白强烈对比
- **代表产品**：Figma、Gumroad 的部分视觉、个人作品集网站
- **适用场景**：创意机构、艺术展览、个人品牌、独立出版物
- **AI 设计提示**：`"neobrutalism, bold black border, offset shadow, flat saturated color, raw typography"`

### 11.2 朋克/垃圾 Punk Grunge
- **视觉特征**：撕裂纸感、随意拼贴、污渍纹理、高对比粗野字体
- **颜色倾向**：黑白 + 红、黄、绿（高对比）
- **适用场景**：独立乐队海报、街头服装品牌、地下文化活动

### 11.3 超现实主义 Surrealism
- **视觉特征**：现实元素的梦幻重组、不合逻辑的组合、精细写实 + 奇幻场景
- **颜色倾向**：视具体作品而定，常见饱和度高的照片感
- **适用场景**：高端香水广告、艺术展、创意摄影

### 11.4 孟菲斯风格 Memphis
- **视觉特征**：80年代意大利设计，反功能主义，几何拼贴，锯齿/波点/斑马纹
- **颜色倾向**：荧光粉 + 亮黄 + 宝蓝 + 黑白
- **适用场景**：文创、音乐节、复古活动、创意包装

### 11.5 Romantasy / 浪漫幻想
- **视觉特征**：奇幻插画 + 浪漫氛围，月相/星空/花卉 + 神秘气质
- **颜色倾向**：深紫、午夜蓝、玫瑰金、星空黑
- **适用场景**：奇幻小说封面、占星/塔罗品牌、神秘主义美学

### 11.6 火箭朋克 Rocketpunk
- **视觉特征**：50年代复古太空插画风，圆润火箭、卡通星球、乐观未来感
- **适用场景**：科技公司怀旧主题、太空主题活动

---

## 12. 装饰性与奢华风格

### 12.1 排版奢华 Luxury Typography
- **视觉特征**：极粗/极细对比衬线字（Didot/Bodoni 类），超大留白，黑金主色
- **颜色倾向**：哑光黑 + 白 + 极少量金
- **代表产品**：Chanel、Bottega Veneta
- **适用场景**：高奢时尚品牌、珠宝品牌

### 12.2 丝线装饰 Filigree
- **视觉特征**：精密蕾丝状装饰线条，花边/涡卷/金属细工感
- **颜色倾向**：金色/银色 + 深底色（黑/深紫/深红）
- **适用场景**：婚礼邀请函、高档包装、证书/奖章设计

### 12.3 茛苕叶饰 Acanthus
- **视觉特征**：古希腊/罗马植物叶饰，卷曲叶形，建筑装饰感
- **适用场景**：古典机构品牌、证书、高档出版物边框

### 12.4 维多利亚装饰 Victorian Ornamental
- **视觉特征**：繁复边框、徽章、衬线字母，印刷工艺感
- **适用场景**：精酿/威士忌品牌、古玩、书籍装帧

### 12.5 新古典主义 Neoclassical
- **视觉特征**：古希腊/罗马建筑元素（柱式、拱券、雕塑），对称庄严感
- **适用场景**：银行/保险/律所品牌、博物馆、学术机构

---

## 13. 学术与出版风格

### 13.1 学术论文/报告 Academic Paper
- **视觉特征**：衬线字体（Times New Roman/Georgia）、双栏布局、图表标注规范
- **颜色倾向**：白底黑字，图表用蓝/红/绿功能色
- **适用场景**：研究报告、学术演讲、白皮书

### 13.2 学术 PPT / LaTeX Beamer
- **视觉特征**：干净蓝/灰主题色、数学公式、数据图表、极简装饰
- **颜色倾向**：大学蓝/红（哈佛深红、MIT 红、剑桥蓝）
- **适用场景**：学术会议演讲、毕业答辩、研究汇报

### 13.3 杂志编辑 Magazine Editorial
- **视觉特征**：大幅图片 + 排版层次感强、栏式布局、标题/副标题/正文清晰区分
- **颜色倾向**：根据杂志调性而定（时尚志：黑白金；生活志：暖自然调）
- **代表产品**：Vogue、The New Yorker、Bloomberg Businessweek
- **适用场景**：杂志/品牌刊物、内容营销、品牌故事页

### 13.4 出版/书籍装帧 Book Design
- **视觉特征**：封面主视觉强，字体排版精细，内页阅读优化
- **适用场景**：书籍封面设计、电子书

### 13.5 信息图表 Infographic Design
- **视觉特征**：数据可视化 + 图标插画，清晰信息层级，易读性优先
- **颜色倾向**：2-4 色方案（蓝/橙/绿为常见配色），足够对比度
- **适用场景**：商业报告、社交媒体信息传播、品牌科普内容

---

## 14. PPT / 演示文稿风格

### 14.1 商业 Pitch Deck（深色现代）
- **视觉特征**：深色背景、精选数据、大标题、图表/截图，VC 汇报感
- **颜色倾向**：深蓝/深灰背景 + 品牌主色 CTA
- **代表参考**：Airbnb pitch deck、Uber pitch deck
- **AI 设计提示**：`"startup pitch deck, dark professional slides, data charts, minimal text, VC presentation style"`

### 14.2 商业 Pitch Deck（浅色精简）
- **视觉特征**：白底、产品截图、有节制的色彩，干净整洁
- **适用场景**：早期 Seed/A 轮融资

### 14.3 企业年度汇报 Annual Report / Corporate
- **视觉特征**：品牌色主导，图文并茂，数据为主，庄重权威
- **颜色倾向**：企业标准色，通常蓝/红/灰体系
- **适用场景**：上市公司报告、政府年报

### 14.4 学术演讲 Academic Conference
- **视觉特征**：白底为主，衬线/无衬线混排，图表/数据可视化占主导
- **适用场景**：学术会议、论文答辩

### 14.5 创意/视觉叙事 Creative Storytelling
- **视觉特征**：满屏大图、极少文字、故事流动感，像杂志一样
- **代表参考**：Apple WWDC Keynote、Ted Talk 视觉
- **适用场景**：产品发布会、品牌演讲

### 14.6 数据驱动 Data-Heavy Presentation
- **视觉特征**：多图表/多数据，强调可视化层次，避免视觉噪音
- **适用场景**：市场分析、运营周报、投资人更新

### 14.7 教育课件 Educational Deck
- **视觉特征**：分步讲解、图标辅助、活泼但清晰的视觉，适合长内容
- **颜色倾向**：友好的品牌色，避免过深背景
- **适用场景**：培训材料、学校课件、在线课程

---

## 15. 数据可视化风格

### 15.1 极简数据 Minimal Data Viz
- **视觉特征**：Edward Tufte 原则——最大化数据墨水比，去除图表垃圾
- **代表工具**：Datawrapper、Observable
- **适用场景**：新闻/媒体数据报道、研究报告

### 15.2 仪表板 Dashboard Dark
- **视觉特征**：深色背景、KPI 卡片、实时更新感、颜色编码状态
- **代表产品**：Grafana、Datadog、Sentry
- **适用场景**：运维监控、销售 Dashboard、产品数据

### 15.3 仪表板 Dashboard Light (SaaS)
- **视觉特征**：白色背景、侧边导航、数据卡片 + 图表组合，清晰层级
- **代表产品**：Stripe Dashboard、HubSpot、Amplitude
- **适用场景**：SaaS 产品内页、数据分析平台

### 15.4 地图/地理可视化
- **视觉特征**：底图 + 数据叠加，热力图/气泡/分区着色
- **代表工具**：Mapbox、Google Maps Data Layer
- **适用场景**：地理分析报告、城市数据展示

### 15.5 数字艺术型数据可视化
- **视觉特征**：以美感为优先的数据叙事，接近艺术装置
- **代表参考**：Pudding.cool、Nadieh Bremer 作品
- **适用场景**：新闻特稿、品牌内容营销

---

## 16. 插画与图形风格

### 16.1 扁平插画 Flat Illustration
- **视觉特征**：无描边/简单描边、纯色或微渐变填充、几何人物
- **代表产品**：Notion、Intercom 早期视觉
- **适用场景**：SaaS 产品 Landing Page、App 空状态页、儿童内容

### 16.2 等距插画 Isometric Illustration
- **视觉特征**：等角透视呈现建筑/场景，3D 感强，信息密度大
- **代表产品**：早期 Dropbox、Asana 品牌插画
- **适用场景**：技术概念可视化、产品功能说明、SaaS 官网

### 16.3 涂鸦/手绘 Doodle Art / Sketch
- **视觉特征**：自发线条、非正式手绘感，不规则形状
- **适用场景**：教育品牌、年轻化 App、包装设计

### 16.4 角色设计 Character Design / Mascot
- **视觉特征**：品牌吉祥物，有明确个性表达，适配多场景
- **代表产品**：Duolingo（Duo 猫头鹰）、Mailchimp（Freddie）、Notion（米色 logo）
- **适用场景**：品牌吉祥物、App 欢迎页、营销素材

### 16.5 3D 插画 3D Illustration
- **视觉特征**：Blender/Cinema 4D 渲染，柔光 3D 物件，渐变材质
- **代表产品**：Stripe（3D 插画）、Shopify、Figma 官网
- **适用场景**：产品 Landing Page、App Store 截图、品牌视觉

### 16.6 行为艺术体 Anthropomorphic Characters
- **视觉特征**：拟人化动物/物品，表情丰富，有叙事性
- **适用场景**：儿童品牌、游戏、包装、吉祥物

---

## 17. 排版驱动风格

### 17.1 瑞士国际主义 Swiss International Style
- **视觉特征**：网格系统、无衬线字体（Helvetica/Akzidenz-Grotesk）、左对齐、克制留白
- **颜色倾向**：黑白为主，红或蓝单一功能色
- **适用场景**：海报设计、企业品牌手册、机场/交通指示系统
- **AI 设计提示**：`"Swiss International Style, Helvetica typography, grid layout, minimalist black white red"`

### 17.2 Wordmark / 字体 Logo 风格
- **视觉特征**：品牌完全依赖字体造型，无图形辅助
- **代表产品**：Google、Facebook（meta）、Uber、Notion
- **适用场景**：科技公司品牌重塑

### 17.3 衬线编辑风 Editorial Serif
- **视觉特征**：精致衬线大标题 + 干净无衬线正文，杂志质感
- **代表产品**：The New Yorker、Bloomberg、Stripe（部分）
- **适用场景**：内容媒体、品牌故事页、长文阅读体验

### 17.4 超大标题风 Oversized Display Type
- **视觉特征**：标题占满屏幕，字体即视觉主体
- **代表产品**：Vercel 官网、部分创意工作室官网
- **适用场景**：品牌官网 Hero、活动主视觉、海报

### 17.5 变量字体 Variable Font Design
- **视觉特征**：单字体文件响应不同情境做粗细/宽度/倾斜变化，动效字体
- **适用场景**：现代 Web 体验、动态标识设计

---

## 18. App UI 专项风格

### 18.1 社交媒体 App（Instagram / TikTok 风）
- **视觉特征**：内容全屏，极简 UI 控件，流式信息流，强视觉沉浸
- **颜色倾向**：内容决定颜色，UI 层退隐（黑色 + 白色为主）
- **适用场景**：短视频/图片社交 App

### 18.2 电商 App（京东 / 淘宝 / Amazon 风）
- **视觉特征**：信息密集、促销 Banner 大、搜索突出、分类导航明确
- **适用场景**：综合电商平台 App

### 18.3 健康/冥想 App（Calm / Headspace 风）
- **视觉特征**：柔和渐变背景、有机插画、低刺激色彩、安静字体
- **颜色倾向**：深蓝/紫渐变（夜间）、浅绿/白（日间）
- **适用场景**：心理健康、冥想、睡眠改善 App

### 18.4 健身 App（Nike / Strava 风）
- **视觉特征**：高对比黑底 + 强调色、数据可视化、动感排版
- **颜色倾向**：黑底 + 橙/绿/紫强调
- **适用场景**：运动、健身追踪 App

### 18.5 金融 App（Wise / Revolut / 支付宝风）
- **视觉特征**：数字大显示、卡片式账户展示、清晰的操作流
- **适用场景**：个人理财、支付、银行 App

### 18.6 旅行 App（Airbnb / Booking 风）
- **视觉特征**：大图 + 地图 + 卡片，探索式浏览，温暖友好
- **颜色倾向**：Airbnb 珊瑚红、Booking 蓝
- **适用场景**：民宿/酒店/旅行 App

### 18.7 生产力/任务 App（Notion / Linear / Things 风）
- **视觉特征**：极简、高密度信息、键盘优先、快速操作
- **颜色倾向**：白/灰底 + 品牌色少量点缀
- **适用场景**：待办事项、项目管理、笔记 App

### 18.8 游戏 UI（RPG / 休闲游戏风）
- **视觉特征**：主题化界面，与游戏世界融合，特效丰富
- **适用场景**：手游 UI、游戏 HUD 设计

---

## 19. 海报专项风格

### 19.1 活动/音乐节海报 Festival Poster
- **视觉特征**：主视觉艺术图 + 大量演出信息，纵向布局，吸引眼球
- **颜色倾向**：高饱和、对比强烈（因多种族/文化混排而无固定调色）
- **适用场景**：音乐节、艺术节、演唱会

### 19.2 电影海报 Movie Poster
- **视觉特征**：主角大图、类型感氛围（惊悚/爱情/动作/科幻）、片名大字
- **适用场景**：电影/剧集宣传物料

### 19.3 社交媒体海报 Social Media Graphic
- **视觉特征**：1:1 或 9:16 竖版，信息精简，品牌色一致
- **适用场景**：Instagram、微博、小红书、Threads 配图

### 19.4 节日节气海报 Holiday / Festival Design
- **视觉特征**：节日符号与品牌结合，喜庆或仪式感
- **适用场景**：节假日营销海报

### 19.5 产品发布海报 Product Launch Poster
- **视觉特征**：产品主图 + 核心卖点，科技感或品牌调性主导
- **代表参考**：Apple 发布会海报
- **适用场景**：新品上市传播

### 19.6 公益/倡导海报 Advocacy Poster
- **视觉特征**：强烈主题信息，情感驱动，常见符号化视觉
- **适用场景**：公益活动、社会议题传播

---

## 20. 品牌/LOGO 风格

### 20.1 科技极简 Tech Minimal Logo
- **视觉特征**：几何感图形 + 无衬线字体，低调克制
- **代表产品**：Apple、Google、Airbnb（后期）

### 20.2 有机/流动 Fluid Logo
- **视觉特征**：渐变色标志，流体造型，前卫
- **代表产品**：Instagram、Firefox

### 20.3 复古徽章 Vintage Badge / Crest
- **视觉特征**：盾形/圆形徽章，精细线描，经典字体
- **适用场景**：精酿啤酒、运动队、学院品牌

### 20.4 手写/手工 Handcraft Logo
- **视觉特征**：手写字体或手绘插画，个性化，温度感
- **适用场景**：咖啡厅、手工艺品牌、个人创作者

### 20.5 字母 Wordmark
- **适用场景**：科技公司、媒体品牌、零售连锁

### 20.6 图形+字体组合 Combination Mark
- **适用场景**：品牌初创期，需提高认知度

---

## 21. 设计大师方法论 Design Master Methods

> 本节不是传统“风格流派”，而是把全球重要设计大师的公开作品、设计原则和视觉方法整理成可执行方向。使用时必须读取 `references/masters/master-index.md` 和对应 `DESIGN.md`，不要复制具体作品、商标或商业识别系统。

### 21.1 Dieter Rams Method
- **视觉特征**：功能优先、低装饰、精确控件、少量红色功能强调
- **关键词**：less but better, useful, understandable, unobtrusive, long-lasting
- **适用场景**：硬件产品、工具界面、SaaS 设置、产品说明
- **对应文件**：`references/masters/01-dieter-rams-DESIGN.md`

### 21.2 Massimo Vignelli Method
- **视觉特征**：严格网格、Helvetica 系统、黑白基础、少量红蓝强调
- **关键词**：grid, discipline, timeless, semantic, syntactic, pragmatic
- **适用场景**：品牌系统、导视、出版、企业官网、年度报告
- **对应文件**：`references/masters/02-massimo-vignelli-DESIGN.md`

### 21.3 Paul Rand Method
- **视觉特征**：现代主义符号、商业识别、原色块、机智隐喻
- **关键词**：symbol, wit, corporate identity, modernist, clarity
- **适用场景**：Logo 概念、品牌提案、创意海报、广告主视觉
- **对应文件**：`references/masters/03-paul-rand-DESIGN.md`

### 21.4 Saul Bass Method
- **视觉特征**：剪纸符号、电影感构图、强对比、运动感
- **关键词**：cinematic, visual phrase, cutout, bold symbol, title sequence
- **适用场景**：电影海报、活动主视觉、PPT 开场、视频封面
- **对应文件**：`references/masters/04-saul-bass-DESIGN.md`

### 21.5 Josef Mueller-Brockmann Method
- **视觉特征**：瑞士网格、客观排版、几何节奏、红蓝点缀
- **关键词**：Swiss grid, objective typography, rhythm, structure
- **适用场景**：学术报告、展览海报、数据图、建筑网站
- **对应文件**：`references/masters/05-josef-muller-brockmann-DESIGN.md`

### 21.6 Armin Hofmann Method
- **视觉特征**：黑白张力、点线面、强裁切、少量红色
- **关键词**：contrast, reduction, form tension, black and white
- **适用场景**：艺术展览、实验海报、设计课程、文化机构
- **对应文件**：`references/masters/06-armin-hofmann-DESIGN.md`

### 21.7 Otl Aicher Method
- **视觉特征**：公共导视、图标网格、色彩编码、模块化符号
- **关键词**：pictogram, wayfinding, civic identity, modular sign system
- **适用场景**：导视、图标系统、公共服务、体育活动
- **对应文件**：`references/masters/07-otl-aicher-DESIGN.md`

### 21.8 Laszlo Moholy-Nagy Method
- **视觉特征**：光影、摄影裁切、透明层、构成主义几何
- **关键词**：Bauhaus experiment, light, photogram, new media
- **适用场景**：科技展览、实验课程、创新报告、视觉研究
- **对应文件**：`references/masters/08-laszlo-moholy-nagy-DESIGN.md`

### 21.9 Charles & Ray Eames Method
- **视觉特征**：温暖现代主义、模块样本、材料实验、教育故事
- **关键词**：human-centered, modular, playful, material, learning
- **适用场景**：教育、家居、展览、产品故事、家庭友好工具
- **对应文件**：`references/masters/09-charles-ray-eames-DESIGN.md`

### 21.10 Raymond Loewy Method
- **视觉特征**：流线型、工业标牌、商业吸引力、先进但易接受
- **关键词**：MAYA, streamlining, industrial appeal, product desirability
- **适用场景**：交通、硬件、消费品、包装、产品发布
- **对应文件**：`references/masters/10-raymond-loewy-DESIGN.md`

### 21.11 Ettore Sottsass Method
- **视觉特征**：后现代色彩、图案、粗黑线、对象人格
- **关键词**：Memphis, postmodern, anti-neutral, pattern, object character
- **适用场景**：潮流品牌、展览、音乐活动、创意社群
- **对应文件**：`references/masters/11-ettore-sottsass-DESIGN.md`

### 21.12 Milton Glaser Method
- **视觉特征**：人文插画、温暖色彩、城市文化、故事型海报
- **关键词**：humanism, illustration, poster, civic culture, wit
- **适用场景**：文化海报、城市品牌、编辑视觉、艺术节
- **对应文件**：`references/masters/12-milton-glaser-DESIGN.md`

### 21.13 Ikko Tanaka Method
- **视觉特征**：日本传统符号、现代几何、舞台式留白、红蓝金
- **关键词**：Japanese modern, geometry, Noh, tradition, minimal color
- **适用场景**：日本文化、文旅、剧场、展览、精品餐饮
- **对应文件**：`references/masters/13-ikko-tanaka-DESIGN.md`

### 21.14 Shigeo Fukuda Method
- **视觉特征**：视觉双关、错视、极简黑白、公益讽刺
- **关键词**：visual wit, optical illusion, social poster, paradox
- **适用场景**：公益倡导、课堂引入、概念海报、观点传播
- **对应文件**：`references/masters/14-shigeo-fukuda-DESIGN.md`

### 21.15 Kenya Hara Method
- **视觉特征**：白、空、材质触感、信息容器、安静文字
- **关键词**：white, emptiness, sensory, receptiveness, minimal communication
- **适用场景**：生活方式、书店、酒店、文化品牌、品牌手册
- **对应文件**：`references/masters/15-kenya-hara-DESIGN.md`

### 21.16 Paula Scher Method
- **视觉特征**：字体主视觉、城市文化、巨型窄体、强色块
- **关键词**：type as image, civic identity, cultural poster, bold typography
- **适用场景**：剧场、音乐节、文化活动、城市品牌、campaign
- **对应文件**：`references/masters/16-paula-scher-DESIGN.md`

### 21.17 David Carson Method
- **视觉特征**：解构编辑、粗粝摄影、漂移文字、有意图的破坏
- **关键词**：deconstruction, editorial, grunge, expressive typography
- **适用场景**：音乐、青年文化、独立杂志、实验海报
- **对应文件**：`references/masters/17-david-carson-DESIGN.md`

### 21.18 Neville Brody Method
- **视觉特征**：激进字体、黑底高对比、编辑系统、数字字体实验
- **关键词**：radical typography, post-punk, editorial system, digital type
- **适用场景**：时尚杂志、音乐、文化评论、字体实验
- **对应文件**：`references/masters/18-neville-brody-DESIGN.md`

### 21.19 Susan Kare Method
- **视觉特征**：像素网格、友好隐喻、小尺寸清晰、GUI 图标
- **关键词**：pixel icon, clarity, friendly metaphor, memorable interface
- **适用场景**：App 图标、工具栏、空态、游戏化界面
- **对应文件**：`references/masters/19-susan-kare-DESIGN.md`

### 21.20 April Greiman Method
- **视觉特征**：数字拼贴、透明层、扫描线、身体与技术混合
- **关键词**：digital collage, new media, layered space, technology
- **适用场景**：数字海报、创意作品集、实验网页、科技文化展
- **对应文件**：`references/masters/20-april-greiman-DESIGN.md`

---

## 附录：设计风格 AI 提示词速查

| 中文名 | 英文关键词 |
|--------|-----------|
| 玻璃拟态 | glassmorphism, frosted glass, backdrop blur, transparency |
| 新拟态 | neumorphism, soft UI, extruded shadow, monochromatic |
| 黏土拟态 | claymorphism, inflated 3D, clay material, candy colors |
| 赛博朋克 | cyberpunk, neon lights, dark city, circuit board, glitch |
| 合成波 | synthwave, retrowave, 80s neon, grid horizon, sunset gradient |
| 蒸汽波 | vaporwave, pink purple aesthetic, early internet, retro surreal |
| 极光 UI | aurora UI, gradient blob, animated glow, dark background |
| 包豪斯 | Bauhaus, geometric shapes, primary colors, functional design |
| 装饰艺术 | Art Deco, geometric symmetry, gold accent, 1920s glamour |
| 新艺术运动 | Art Nouveau, organic lines, floral ornament, Mucha style |
| 新野兽主义 | neobrutalism, bold black border, flat color, offset shadow |
| 日式极简 | Japandi, wabi-sabi, negative space, earthy minimalism |
| 卡哇伊 | Kawaii, cute, pastel pink, chibi character |
| 国潮 | Guochao, Chinese trendy, traditional motifs, modern streetwear |
| 企业蓝 | corporate blue, professional, structured layout, IBM style |
| 金融科技 | fintech UI, clean white, navy heading, elegant sans-serif |
| 科技极简 | tech minimal, clean white, single accent, developer aesthetic |
| 学术风 | academic design, serif font, grid layout, neutral colors |
| 信息图表 | infographic, data visualization, icon illustration, clear hierarchy |
| 奢华排版 | luxury typography, Didot, high contrast serif, black gold |

---

## 附录：设计风格与使用场景映射

| 场景 | 推荐风格 |
|------|---------|
| AI 产品官网 | Aurora UI、AI-Native、Glassmorphism Dark、Tech Minimal |
| 电商平台 | E-Commerce Energetic、Bento Grid、Flat 2.0 |
| 奢侈品牌 | Luxury Typography、Art Deco、Japandi、Minimal Dark |
| 企业官网 | Corporate Blue、IBM Carbon、Swiss International Style |
| 学术报告/PPT | Academic、Editorial Serif、Data-Dense |
| 创业路演 Pitch Deck | Dark Modern Pitch、Minimal Light、Storytelling |
| 音乐/文化海报 | Synthwave、Cyberpunk、Brutalism、Art Nouveau、Bauhaus |
| 健康/wellness App | Neumorphism、Natural Minimal、Japandi |
| 游戏 UI | Claymorphism、Cyberpunk、Pixel Art |
| 社交媒体海报 | Bento Grid、Neobrutalism、Aurora、Kawaii |
| 中国本土品牌 | 国潮 Guochao、Traditional Chinese、Modern Chinese Minimal |
| 金融/FinTech | Fintech Clean、Dark Finance Dashboard |
| SaaS Dashboard | IBM Carbon、Material Design、Dashboard Light |

---

*整理时间：2026-06-22 | 版本 v1.0*
*后续计划：为每种风格补充典型配色 HEX 值、字体推荐、DESIGN.md 模板*

# Design System: Dieter Rams Method
# 迪特·拉姆斯设计方法

> 风格定位：少，但更好。用克制的产品语言、精确的信息层级和可理解的组件，让设计退到功能之后。
> 使用边界：提取“好设计十原则”和 Braun / Vitsœ 语境中的方法论，不复制具体产品外观或品牌资产。

## 1. Visual Theme & Philosophy

- 核心气质：安静、理性、可用、长寿命、无噪声。
- 设计目标：让用户立即理解用途，减少装饰性选择，保留必要控制。
- 适用场景：硬件产品页、SaaS 工具、设置界面、参数仪表盘、产品说明 PPT。

## 2. Color Palette & Roles

```text
Background:   #F5F3EE  warm off-white
Surface:      #FFFFFF  product surface
Text primary: #111111  high contrast text
Text muted:   #6F6F68  secondary labels
Line:         #D8D6CF  subtle separators
Accent:       #E53935  small operational highlight
Success:      #2F6F4E  quiet positive state
```

## 3. Typography Rules

- Heading: `Inter`, `Helvetica Neue`, `Arial`, sans-serif; weight 500-650.
- Body: `Inter`, `Helvetica Neue`, `Arial`, sans-serif; weight 400.
- 数字和参数可使用 `IBM Plex Mono`，但只用于小范围读数。
- 字距保持正常，不做夸张标题；标题应像产品标牌一样清楚。

## 4. Layout & Component Rules

- 使用 8 列或 12 列网格，边距充足，模块之间保持明显呼吸。
- 卡片半径 2-6px，边框 `1px solid #D8D6CF`，阴影最多一层且非常弱。
- 按钮必须像真实控件：默认、hover、focus、disabled 状态清晰。
- 表单、开关、滑杆、参数表是核心组件；避免营销式大色块。

## 5. Imagery & Iconography

- 产品图、线框图、爆炸图、剖面图优先；图片背景尽量干净。
- 图标使用单线或实体几何，轮廓要可识别，不做拟物高光。
- 可加入小红点、小刻度、网格线作为功能定位，不要把 accent 大面积铺开。

## 6. Do's and Don'ts

Do:
- 用清晰标签解释功能。
- 让每个视觉元素都有用途。
- 保持组件尺寸稳定、间距规律。

Don't:
- 不要使用大面积渐变、玻璃拟态、复杂插画。
- 不要为了“高级”牺牲可读性。
- 不要把装饰性元素伪装成信息。

## 7. Output Behavior

- 网站：首屏应展示产品、用途、关键参数和明确 CTA。
- PPT：每页只讲一个功能点，使用产品剖面图或参数卡片。
- App UI：优先覆盖设置、状态、错误和空态；交互反馈要朴素可靠。

## 8. Agent Prompt Guide

```text
使用 Dieter Rams 方法设计。背景用 #F5F3EE，界面克制、功能优先、网格清楚。所有组件必须可理解、可操作、低装饰；使用 Inter/Helvetica 字体，少量 #E53935 作为功能强调。不要只做极简外观，要让信息结构和控件逻辑也符合“less but better”。
```

## 9. Source Notes

- Vitsœ: https://www.vitsoe.com/us/about/good-design
- Design Museum: https://designmuseum.org/discover-design/all-stories/what-is-good-design-a-quick-look-at-dieter-rams-ten-principles


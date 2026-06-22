# Design System: Susan Kare Method
# 苏珊·凯尔设计方法

> 风格定位：像素清晰、友好隐喻和可记忆图标。小尺寸也要有人格和功能。
> 使用边界：参考其早期 GUI 图标方法和像素隐喻原则，不复制 Macintosh、NeXT 或其他商业图标。

## 1. Visual Theme & Philosophy

- 核心气质：友好、清楚、像素化、幽默、小而准确。
- 设计目标：用最少像素建立可理解、可记忆的功能符号。
- 适用场景：App 图标、空态、工具栏、像素风 UI、小游戏、onboarding。

## 2. Color Palette & Roles

```text
Background:   #F4F4F0
Text primary: #111111
Text muted:   #5E5E58
Pixel black:  #000000
Pixel white:  #FFFFFF
Blue:         #0066FF
Yellow:       #FFCC00
Red:          #FF3B30
Green:        #34C759
```

## 3. Typography Rules

- Heading: `Silkscreen`, `Chicago`, `ui-monospace`, monospace; weight 400-700.
- Body: `Inter`, `Arial`, sans-serif; weight 400.
- 像素字体只用于标题、标签或装饰，不用于大段正文。
- 小字号必须清晰，不要用模糊抗锯齿模拟像素。

## 4. Layout & Component Rules

- 使用 8px 或 16px 像素网格。
- 图标必须先在 16x16 或 32x32 下成立，再放大展示。
- 按钮、窗口、菜单可以使用早期 GUI 结构，但保持现代可用性。
- 空态和提示要有友好隐喻。

## 5. Imagery & Iconography

- 图标使用像素网格、黑白优先，再加少量颜色。
- 每个图标必须有功能隐喻：容器、工具、动作、状态。
- 可使用小表情和幽默细节，但不能影响功能判断。

## 6. Do's and Don'ts

Do:
- 先画黑白像素图标。
- 测试小尺寸可读性。
- 让图标既准确又有一点人格。

Don't:
- 不要复制经典 Macintosh 图标。
- 不要把像素风做成低清晰度。
- 不要用复杂渐变和 3D 阴影。

## 7. Output Behavior

- App UI：适合图标系统、空态、工具栏和游戏化界面。
- 网站：适合复古计算机专题或开发者工具彩蛋。
- PPT：适合解释 GUI、交互历史或用像素隐喻教学。

## 8. Agent Prompt Guide

```text
使用 Susan Kare 方法设计。先建立 16px/32px 像素网格，用黑白像素图标表达功能，再用 #0066FF、#FFCC00、#FF3B30、#34C759 少量点缀。图标必须清楚、可记忆、有友好隐喻，不复制任何经典 Mac 图标。
```

## 9. Source Notes

- Smithsonian Lemelson Center: https://invention.si.edu/invention-stories/susan-kare-iconic-designer
- Kare Prints about: https://kareprints.com/pages/about


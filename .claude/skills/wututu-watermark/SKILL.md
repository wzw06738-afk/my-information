---
name: wututu-watermark
description: 为网页产品添加 wututu 品牌水印。当用户想给网页加水印、加品牌标识、加 wututu 标记，或者说"加上我的标识"、"打上水印"、"brand my page"时，使用此 skill。适用于原生 HTML、React、Vue 等各类网页项目。
---

# wututu 水印 Skill

为用户的网页产品添加一个低调的 wututu 文字水印：右下角固定定位，opacity 0.25，不干扰用户交互。

## 水印规格

- 文字：`wututu`
- 位置：右下角（bottom: 20px, right: 20px）
- 透明度：opacity 0.25（淡淡的，不抢眼）
- pointer-events: none（不影响点击）
- user-select: none（不可被选中复制）
- z-index: 9999（始终在最上层）

## 操作流程

1. 判断当前项目是哪种框架（看文件后缀、import 语句、package.json）
2. 按对应框架生成水印代码（见下方模板）
3. 告诉用户把代码放在哪里

## 各框架代码模板

### 原生 HTML

在 `</body>` 前插入：

```html
<div class="wututu-watermark">wututu</div>
<style>
.wututu-watermark {
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 0.25;
  font-size: 13px;
  color: #000;
  pointer-events: none;
  user-select: none;
  z-index: 9999;
  letter-spacing: 2px;
  font-family: sans-serif;
}
</style>
```

### React（JSX 组件）

创建 `WututuWatermark.jsx`：

```jsx
export default function WututuWatermark() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      opacity: 0.25,
      fontSize: 13,
      color: '#000',
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: 9999,
      letterSpacing: 2,
      fontFamily: 'sans-serif',
    }}>
      wututu
    </div>
  );
}
```

然后在根组件（通常是 `App.jsx`）里引入并使用：

```jsx
import WututuWatermark from './WututuWatermark';
// 在 return 的最外层加上：
<WututuWatermark />
```

### Vue 3（组件）

创建 `WututuWatermark.vue`：

```vue
<template>
  <div class="wututu-watermark">wututu</div>
</template>

<style scoped>
.wututu-watermark {
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 0.25;
  font-size: 13px;
  color: #000;
  pointer-events: none;
  user-select: none;
  z-index: 9999;
  letter-spacing: 2px;
  font-family: sans-serif;
}
</style>
```

在根组件 `App.vue` 中引入使用。

### CSS-in-JS / Tailwind

如果项目用 Tailwind，直接加：

```html
<div class="fixed bottom-5 right-5 opacity-25 text-sm pointer-events-none select-none z-[9999] tracking-widest">
  wututu
</div>
```

## 注意事项

- 深色背景页面可以把 `color` 改为 `#fff`，让水印在深色背景上也可见
- 如果用户想调整透明度，opacity 范围 0（完全透明）到 1（完全不透明），0.25 是默认值
- 如果用户的项目有全局 layout 文件（如 `_app.tsx`、`layout.tsx`、`App.vue`），优先在那里加，这样所有页面都会有水印

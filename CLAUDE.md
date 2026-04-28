# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目说明

wututu 个人品牌与作品集项目。包含 React 作品集应用和 Claude Code 自定义技能。

## 语言要求

在思考和回答时请使用中文。

## 目录结构

| 路径 | 说明 |
|------|------|
| `portfolio/` | React + TypeScript + Vite 作品集应用 |
| `.claude/skills/` | Claude Code 技能（frontend-design, mcp-builder, pdf, pptx, skill-creator, wututu-watermark） |
| `CLAUDE.md` | 本文件 |
| `wututu-简历.pdf` | 个人简历 PDF |

## Portfolio 应用（React + TypeScript + Vite）

### 常用命令（在 `portfolio/` 目录下执行）

```bash
npm run dev      # 启动 Vite 开发服务器（端口默认 5173）
npm run build    # tsc -b（项目引用构建）+ vite build
npm run lint     # ESLint flat config 检查（eslint.config.js）
npm run preview  # 预览构建产物
```

### 架构概览

- **构建工具**: Vite 8 + @vitejs/plugin-react，TypeScript 6.0 strict 模式
- **样式方案**: CSS Modules（`.module.css`），每个组件文件夹内独立
- **状态管理**: React Context（`ThemeContext` 管理亮/暗主题切换，持久化到 localStorage）
- **类型定义**: `src/types/index.ts` —— Skill、Project、ProfileData 接口
- **数据层**: `src/data/profile.ts` —— 集中管理个人信息、技能列表、项目数据（修改内容只需编辑此文件）
- **构建产物**: `portfolio/dist/`

### 组件目录约定

每个组件在 `src/components/` 下使用 **PascalCase 文件夹**，内含同名的 `.tsx` 和 `.module.css`：

```
components/ParticleBackground/
  ParticleBackground.tsx  （canvas 粒子动效，无 CSS Module）
  ParticleBackground.module.css（但已无对应文件，样式内联在 tsx 中）

components/Skills/
  Skills.tsx + Skills.module.css
  SkillCard.tsx            （子组件，与父组件同文件夹）
```

### 组件树

```
App
├── ThemeProvider          (Context 包裹层)
├── ParticleBackground     (canvas 粒子/背景动效)
├── Navbar                 (导航栏 + 主题切换)
├── main
│   ├── Hero               (首屏，含打字机动效)
│   ├── About              (关于)
│   ├── Skills             (技能网格，含 SkillCard)
│   ├── Projects           (项目列表，含 ProjectCard)
│   └── Contact            (联系方式)
└── Footer                 (页脚)
```

### 自定义 Hooks

- `useIntersectionObserver` —— 滚动触发动画/懒加载。支持 `threshold`, `rootMargin`, `triggerOnce` 参数
- `useTypewriter` —— 打字机文字动效。支持 `text`, `speed`, `delay` 参数

### 数据流

数据从 `src/data/profile.ts`（`profileData` 对象）通过 props 流向各组件。修改技能列表、项目信息或个人信息只需编辑该文件，无需改动组件逻辑。Skill 接口包含可选的 `icon` 字段。

### 主题系统

`ThemeContext` 在 `src/context/ThemeContext.tsx`，提供 `theme`（'light' | 'dark'）和 `toggleTheme`。亮暗切换时通过 `data-theme` 属性设置到 `<html>` 元素上，CSS Modules 中通过 `[data-theme='dark']` 选择器响应。

## 技能 Skills

`src/types/index.ts` 中的核心接口：

- **Skill**: `{ id, name, category, description, icon? }` — category 用于网格分组
- **Project**: `{ id, title, subtitle, techStack, description, highlights, link? }`
- **ProfileData**: `{ name, alias, email, phone, github, education, bio, skills, projects }` — 顶层数据接口

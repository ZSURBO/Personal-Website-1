# 个人网站项目 (Personal Website)
## 全程由cursor编写
一个使用 Next.js 构建的现代化个人网站，支持响应式设计、深色模式和多语言。

## 功能特点

- 🎨 现代化UI设计
- 📱 完全响应式布局
- 🌓 深色/浅色模式切换
- 🌍 中英文双语支持
- ⚡ 基于Next.js的优化性能
- 📝 集成博客系统
- 📊 作品集展示
- 📬 联系表单功能

## 技术栈

- **前端框架**: Next.js 12.2.0
- **React版本**: 18.2.0
- **样式方案**: CSS Modules
- **动画效果**: Framer Motion
- **图标**: React Icons

## 快速开始

### 环境要求

- Node.js 14.0 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 `http://localhost:3000`

## 项目结构

```
src/
├── components/           # 组件目录
│   ├── layout/          # 布局相关组件
│   │   ├── Header.js    # 网站头部导航组件
│   │   └── Footer.js    # 网站底部组件
│   │
│   ├── sections/        # 页面主要区块组件
│   │   ├── Hero.js                # 首页顶部展示区
│   │   ├── FeaturedProjects.js    # 精选项目展示
│   │   ├── ProfileSection.js      # 关于页个人简介
│   │   ├── SkillsSection.js       # 技能展示区域
│   │   ├── TimelineSection.js     # 时间线/经历展示
│   │   ├── CertificationsSection.js # 证书展示
│   │   ├── BlogPostList.js        # 博客文章列表
│   │   ├── CaseStudy.js          # 项目案例研究
│   │   ├── ContactForm.js         # 联系表单
│   │   └── ContactInfo.js         # 联系信息展示
│   │
│   └── ui/             # 通用UI组件
│       ├── ProjectCard.js         # 项目卡片组件
│       ├── ProjectFilter.js       # 项目筛选组件
│       ├── BlogSearch.js          # 博客搜索组件
│       ├── SubscribeForm.js       # 订阅表单组件
│       ├── SocialLinks.js         # 社交媒体链接
│       ├── DarkModeToggle.js      # 深色模式切换
│       ├── ResumeButton.js        # 简历下载按钮
│       └── Map.js                 # 地图组件
│
├── pages/              # 页面组件目录
│   ├── _app.js        # Next.js应用入口
│   ├── index.js       # 首页
│   ├── about.js       # 关于页面
│   ├── portfolio.js   # 作品集页面
│   ├── blog.js        # 博客页面
│   └── contact.js     # 联系页面
│
├── styles/            # 样式文件目录
│   ├── globals.css    # 全局样式
│   ├── Home.module.css     # 首页样式
│   ├── About.module.css    # 关于页样式
│   ├── Portfolio.module.css # 作品集页样式
│   ├── Blog.module.css     # 博客页样式
│   ├── Contact.module.css  # 联系页样式
│   ├── Hero.module.css     # Hero组件样式
│   ├── Header.module.css   # 头部导航样式
│   ├── ProjectCard.module.css # 项目卡片样式
│   ├── Timeline.module.css    # 时间线样式
│   └── Certifications.module.css # 证书展示样式
│
└── public/            # 静态资源目录
    ├── images/        # 图片资源
    │   ├── avatar.jpg      # 个人头像
    │   └── certs/          # 证书图片
    │       ├── aws.png
    │       ├── react.png
    │       └── google.png
    ├── resume-cn.pdf # 中文简历
    ├── resume-en.pdf # 英文简历
    └── favicon.ico   # 网站图标

```

## 配置文件
- `next.config.js`: Next.js配置文件，设置图片优化、国际化等
- `package.json`: 项目依赖和脚本配置

## 主要功能模块说明

### 页面组件 (pages/)
- `_app.js`: 应用入口，配置全局样式和布局
- `index.js`: 首页，展示个人简介和精选作品
- `about.js`: 关于页面，展示详细个人信息和技能
- `portfolio.js`: 作品集页面，展示项目作品
- `blog.js`: 博客页面，展示文章列表
- `contact.js`: 联系页面，提供联系方式和表单

### 布局组件 (components/layout/)
- `Header.js`: 网站导航栏，包含页面链接和深色模式切换
- `Footer.js`: 网站底部，包含版权信息和其他链接

### 页面区块组件 (components/sections/)
- `Hero.js`: 首页顶部展示区，突出个人定位
- `FeaturedProjects.js`: 展示精选项目
- `ProfileSection.js`: 个人简介和背景
- `SkillsSection.js`: 技能和专长展示
- `TimelineSection.js`: 职业经历时间线
- `CertificationsSection.js`: 证书和认证展示
- `BlogPostList.js`: 博客文章列表展示
- `ContactForm.js`: 联系表单处理
- `ContactInfo.js`: 联系方式和社交媒体信息

### UI组件 (components/ui/)
- `ProjectCard.js`: 项目展示卡片
- `ProjectFilter.js`: 项目分类筛选
- `BlogSearch.js`: 博客搜索和标签筛选
- `SubscribeForm.js`: 博客订阅功能
- `SocialLinks.js`: 社交媒体链接
- `DarkModeToggle.js`: 深色模式切换按钮
- `ResumeButton.js`: 简历下载按钮
- `Map.js`: Google地图集成

### 样式文件 (styles/)
每个样式模块对应其组件，使用CSS Modules实现样式隔离：
- `globals.css`: 全局样式变量和基础样式
- 其他`.module.css`文件: 对应组件的专属样式

### 静态资源 (public/)
- 图片资源
- 简历文件
- 网站图标

这个结构遵循了React和Next.js的最佳实践，实现了组件的模块化和代码的可维护性。每个组件都有其专属的样式文件，确保了样式的隔离性。同时，通过合理的目录组织，使得项目结构清晰，便于管理和扩展。

## 主要功能模块

### 1. 首页 (Home)
- 个人简介标语
- 精选项目展示
- 技能概览
- 行动号召按钮

### 2. 关于我 (About)
- 详细个人介绍
- 技能进度条
- 工作经历时间线
- 证书展示

### 3. 作品集 (Portfolio)
- 项目分类筛选
- 项目详情展示
- 案例研究
- 技术栈标签

### 4. 博客 (Blog)
- 文章列表
- 搜索功能
- 标签分类
- 订阅功能

### 5. 联系 (Contact)
- 联系表单
- 社交媒体链接
- 地理位置地图
- 联系信息展示

## 自定义配置

### 1. 个人信息配置
编辑 `src/config/personal.js`:
```javascript
export const personalInfo = {
  name: "您的名字",
  title: "职业头衔",
  email: "your.email@example.com",
  // ...其他个人信息
};
```

### 2. 主题配置
编辑 `src/styles/globals.css` 中的CSS变量:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  // ...其他颜色变量
}
```

### 3. 社交媒体链接
编辑 `src/config/social.js`:
```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ...其他社交媒体链接
};
```

## 部署

1. 构建生产版本
```bash
npm run build
# 或
yarn build
```

2. 部署到托管平台
- Vercel (推荐)
- Netlify
- GitHub Pages
- 其他支持静态网站托管的平台

## 开发指南

### 添加新页面
1. 在 `pages` 目录创建新的页面文件
2. 创建对应的样式模块
3. 在 Header 组件中添加导航链接

### 创建新组件
1. 在适当的组件目录创建组件文件
2. 创建对应的样式模块
3. 导出组件并在需要的地方导入使用

### 样式开发
- 使用 CSS Modules 确保样式隔离
- 遵循响应式设计原则
- 支持深色模式适配

## 性能优化

- 图片优化
- 组件懒加载
- 静态生成
- 缓存策略

## 维护与更新

### 内容更新
- 博客文章: 在 `content/blog` 添加新的 Markdown 文件
- 项目展示: 更新 `data/projects.js`
- 个人信息: 修改相关配置文件

### 依赖更新
定期运行以下命令更新依赖：
```bash
npm update
# 或
yarn upgrade
```

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交改动
4. 发起 Pull Request

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情


## 致谢

感谢所有开源项目的贡献者，特别是：
- Next.js 团队
- React 团队
- 所有使用到的开源库的作者

---

如有问题或建议，欢迎提出 Issue 或 Pull Request。

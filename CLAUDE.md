# RecruitFlow — 现代招聘生态系统

## 项目概述
基于 Figma 设计稿生成完整全栈应用：现代化的招聘平台，包含职位浏览、投递、跟踪、个人中心等功能。

## 技术栈要求
- **后端**: Flask + Flask-RESTful + SQLAlchemy + SQLite（开发环境）
- **前端**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **认证**: JWT (flask-jwt-extended)
- **设计系统**: 见 design/professional_vitality/DESIGN.md

## 设计稿（9 个页面）
所有页面 HTML 和截图在 `design/stitch_ai_design_generator/` 目录下：
- design/_1/ — 职位列表首页（RecruitFlow - 现代招聘生态系统）
- design/_2/ — 登录页
- design/_3/ — 投递跟踪
- design/_4/ — （无标题）
- design/_5/ — 编辑教育经历
- design/_6/ — 编辑工作经历
- design/_7/ — 我的（个人中心）
- design/_8/ — 编辑个人信息
- design/_9/ — 筛选职位

设计规范文件：design/professional_vitality/DESIGN.md

## 功能模块

### 后端 API
- POST /api/auth/register — 用户注册
- POST /api/auth/login — 用户登录
- GET /api/jobs — 职位列表（支持筛选、搜索、分页）
- GET /api/jobs/:id — 职位详情
- POST /api/jobs/:id/apply — 投递职位
- GET /api/applications — 我的投递列表（带状态跟踪）
- GET /api/user/profile — 获取个人信息
- PUT /api/user/profile — 更新个人信息
- PUT /api/user/education — 更新教育经历
- PUT /api/user/experience — 更新工作经历

### 前端页面（对应 9 个设计稿）
1. 职位列表（首页） — 搜索栏 + 筛选 + 职位卡片列表
2. 登录页 — 邮箱密码登录
3. 投递跟踪 — 时间线展示投递状态
4. 职位详情 — 职位信息 + 公司信息 + 投递按钮
5. 编辑教育经历 — 表单
6. 编辑工作经历 — 表单
7. 个人中心 — 个人信息 + 简历管理 + 投递统计
8. 编辑个人信息 — 表单
9. 筛选职位 — 高级筛选面板

## 代码规范
- 后端：分层架构 routes → services → models
- 前端：每个页面独立组件，共享 UI 组件放 components/
- 严格遵循 DESIGN.md 的设计 token（颜色、字体、间距、圆角）
- 所有 API 返回格式：{"code": 200, "message": "成功", "data": {...}}

## 目录结构
```
recruitflow/
├── backend/
│   ├── app.py              # Flask 入口
│   ├── config.py
│   ├── models/             # SQLAlchemy models
│   ├── routes/             # API 路由
│   ├── services/           # 业务逻辑
│   └── requirements.txt
├── frontend/
│   ├── app/                # Next.js App Router
│   ├── components/         # 共享组件
│   └── package.json
└── design/                 # 设计稿
```

// Mock data — fallback when backend is unreachable
// All fields match the real API response format

export const mockUser = {
  code: 200,
  message: "成功",
  data: {
    name: "张三",
    phone: "13800138000",
    email: "zhangsan@example.com",
    title: "高级前端工程师",
    avatar: null,
    profile_completeness: 75,
    summary: "5年前端开发经验，精通 React/TypeScript，主导过多个千万级用户项目",
  },
};

export const mockMessages = [
  {
    id: 1,
    type: "system",
    title: "投递状态更新",
    content: "您投递的【字节跳动 - 高级前端工程师】已被HR查看",
    time: "10分钟前",
    unread: true,
  },
  {
    id: 2,
    type: "hr",
    title: "腾讯HR发来消息",
    content: "您好，看到您投递了我们的前端岗位，方便约个时间聊聊吗？",
    time: "2小时前",
    unread: true,
  },
  {
    id: 3,
    type: "system",
    title: "简历推荐",
    content: "您的简历本周被 12 家企业搜索到，曝光率提升了 30%",
    time: "昨天 14:30",
    unread: false,
  },
  {
    id: 4,
    type: "offer",
    title: "面试邀请",
    content: "【阿里巴巴】邀请您参加前端工程师岗位面试，时间：2025-02-20 10:00",
    time: "昨天 09:15",
    unread: false,
  },
  {
    id: 5,
    type: "system",
    title: "收藏提醒",
    content: "您收藏的【拼多多 - 前端技术专家】岗位有新动态",
    time: "2天前",
    unread: false,
  },
];

"use client";

import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import { Icon } from "@/components/Icon";

const MESSAGES = [
  { id: 1, type: "system", title: "投递状态更新", content: "您投递的【字节跳动 - 高级前端工程师】已被HR查看", time: "10分钟前", unread: true },
  { id: 2, type: "hr", title: "腾讯HR发来消息", content: "您好，看到您投递了我们的前端岗位，方便约个时间聊聊吗？", time: "2小时前", unread: true },
  { id: 3, type: "system", title: "简历推荐", content: "您的简历本周被 12 家企业搜索到，曝光率提升了 30%", time: "昨天 14:30", unread: false },
  { id: 4, type: "offer", title: "面试邀请", content: "【阿里巴巴】邀请您参加前端工程师岗位面试，时间：2025-02-20 10:00", time: "昨天 09:15", unread: false },
  { id: 5, type: "system", title: "收藏提醒", content: "您收藏的【拼多多 - 前端技术专家】岗位有新动态", time: "2天前", unread: false },
];

const typeIcons: Record<string, string> = { system: "description", hr: "person", offer: "workspace_premium" };
const typeColors: Record<string, string> = { system: "text-primary", hr: "text-tertiary", offer: "text-success-mint" };

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader showBack title="消息" />
      <main className="pb-24 pt-4 px-margin-mobile">
        <div className="flex flex-col gap-2">
          {MESSAGES.map((msg) => (
            <div key={msg.id} className={`bg-surface-container-lowest rounded-xl p-4 border border-border-subtle ${msg.unread ? "border-l-4 border-l-primary" : ""}`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={typeIcons[msg.type] || "chat_bubble"} className={typeColors[msg.type] || "text-outline-variant"} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-label-md text-on-surface">
                      {msg.title}
                      {msg.unread && <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2 align-middle" />}
                    </h3>
                    <span className="text-label-sm text-outline flex-shrink-0 ml-2">{msg.time}</span>
                  </div>
                  <p className="text-body-md text-on-surface-variant line-clamp-2">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import { Icon } from "@/components/Icon";
import { mockMessages } from "@/lib/mock";

const typeIcons: Record<string, string> = {
  system: "description",
  hr: "person",
  offer: "workspace_premium",
};

const typeColors: Record<string, string> = {
  system: "text-primary",
  hr: "text-tertiary",
  offer: "text-success-mint",
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<typeof mockMessages>([]);

  useEffect(() => {
    // Simulate loading then show mock data
    const timer = setTimeout(() => setMessages(mockMessages), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader showBack title="消息" />
      <main className="pb-24 pt-4 px-margin-mobile">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-4">
              <Icon name="chat_bubble" className="text-outline-variant" size={40} />
            </div>
            <h2 className="text-headline-md text-on-surface mb-2">暂无消息</h2>
            <p className="text-body-md text-on-surface-variant">投递状态更新和HR消息会显示在这里</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`bg-surface-container-lowest rounded-xl p-4 border border-border-subtle ${
                  msg.unread ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      name={typeIcons[msg.type] || "chat_bubble"}
                      className={typeColors[msg.type] || "text-outline-variant"}
                      size={20}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-label-md text-on-surface">
                        {msg.title}
                        {msg.unread && (
                          <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2 align-middle" />
                        )}
                      </h3>
                      <span className="text-label-sm text-outline flex-shrink-0 ml-2">{msg.time}</span>
                    </div>
                    <p className="text-body-md text-on-surface-variant line-clamp-2">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}

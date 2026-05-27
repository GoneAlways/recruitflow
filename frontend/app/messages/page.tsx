"use client";

import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import { Icon } from "@/components/Icon";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader showBack title="消息" />
      <main className="pb-24 pt-4 px-margin-mobile">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-4">
            <Icon name="chat_bubble" className="text-outline-variant" size={40} />
          </div>
          <h2 className="text-headline-md text-on-surface mb-2">暂无消息</h2>
          <p className="text-body-md text-on-surface-variant">投递状态更新和HR消息会显示在这里</p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

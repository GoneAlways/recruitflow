"use client";

import { Icon } from "@/components/Icon";

const tabs = [
  { href: "index.html", id: "index", icon: "work", label: "职位" },
  { href: "messages.html", id: "messages", icon: "chat_bubble", label: "消息" },
  { href: "resume.html", id: "resume", icon: "description", label: "简历" },
  { href: "profile.html", id: "profile", icon: "person", label: "我的" },
];

function getCurrentPage(): string {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname;
  // Extract page name from path like /rawfile/index.html or /index.html
  const match = path.match(/\/([a-z-]+)\.html$/);
  return match ? match[1] : "index";
}

export default function BottomNav() {
  const current = getCurrentPage();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-margin-mobile pb-safe bg-surface-container-lowest border-t border-border-subtle shadow-md z-50 rounded-t-xl">
      {tabs.map((tab) => {
        const isActive = current === tab.id;
        return (
          <a
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center active:scale-95 transition-transform ${
              isActive ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            <Icon name={tab.icon} />
            <span className="text-label-md">{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

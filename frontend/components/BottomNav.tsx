"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";

const tabs = [
  { href: "/", icon: "work", label: "职位" },
  { href: "#", icon: "chat_bubble", label: "消息" },
  { href: "#", icon: "description", label: "简历" },
  { href: "/profile", icon: "person", label: "我的" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-margin-mobile pb-safe bg-surface-container-lowest border-t border-border-subtle shadow-md z-50 rounded-t-xl">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center active:scale-95 transition-transform ${
              isActive ? "text-primary" : "text-on-surface-variant"
            }`}
          >
            <Icon name={tab.icon} />
            <span className="font-label-md text-label-md">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

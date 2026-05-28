"use client";

import { useEffect, useState } from "react";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import StatusBadge from "@/components/StatusBadge";
import { api } from "@/lib/api";
import { Icon } from "@/components/Icon";

export default function TrackingPage() {
  const [apps, setApps] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("全部");

  useEffect(() => {
    const statusMap: Record<string, string | undefined> = {
      "全部": undefined,
      "已邀约": "interview",
      "已查看": "viewed",
      "不合适": "rejected",
    };
    api.applications.list(statusMap[activeTab]).then((res) => {
      if (res.code === 200) setApps(res.data);
      if (res.code === 401) window.location.href = "login.html";
    });
  }, [activeTab]);

  const tabs = ["全部", "已邀约", "已查看", "不合适"];

  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader />
      <main className="pt-14 pb-20 max-w-3xl mx-auto min-h-screen">
        {/* Filter Tabs */}
        <section className="sticky top-14 bg-background-surface/80 backdrop-blur-md z-40 pt-4 pb-2 px-margin-mobile">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-label-md whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        {/* Application List */}
        <section className="px-margin-mobile flex flex-col gap-3 mt-2">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-surface-container-lowest border border-border-subtle p-gutter-md rounded-xl shadow-card hover:border-primary transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-headline-md text-on-surface">
                    {app.job?.title || "职位"}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {app.job?.company || ""}
                  </p>
                </div>
                <span className="text-primary font-bold text-body-lg">
                  ${(app.job?.salary_min / 1000).toFixed(0)}k - ${(app.job?.salary_max / 1000).toFixed(0)}k
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-surface-container rounded-lg text-label-md text-on-secondary-container">
                  {app.job?.location}
                </span>
                <span className="px-2 py-1 bg-surface-container rounded-lg text-label-md text-on-secondary-container">
                  {app.job?.experience}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border-subtle">
                <div className="flex items-center gap-2">
                  <span className="text-label-sm text-outline">
                    {formatTimeAgo(app.applied_at)}
                  </span>
                </div>
                <StatusBadge status={app.status} />
              </div>
            </div>
          ))}
          {apps.length === 0 && (
            <div className="text-center py-20 text-on-surface-variant">
              <Icon name="inbox" className="text-5xl mb-4 block" />
              <p className="text-body-lg">暂无投递记录</p>
            </div>
          )}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

function formatTimeAgo(dateStr: string): string {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "今天投递";
  if (diffDays === 1) return "1天前投递";
  if (diffDays < 7) return `${diffDays}天前投递`;
  if (diffDays < 14) return "1周前投递";
  return `${Math.floor(diffDays / 7)}周前投递`;
}

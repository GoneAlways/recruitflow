"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { api, isLoggedIn } from "@/lib/api";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
      return;
    }
    api.user.profile().then((res) => {
      if (res.code === 200) setUser(res.data);
    });
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background-surface flex items-center justify-center">
        <p className="text-on-surface-variant">加载中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-surface pb-24 md:pb-0">
      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center w-full px-margin-desktop h-14 bg-surface sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-headline-md font-headline-md font-bold text-primary">RecruitFlow</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-on-surface-variant hover:bg-surface-container-high px-3 py-2 rounded-md font-body-md text-body-md transition-colors">
            职位
          </Link>
          <Link href="/profile" className="text-primary hover:bg-surface-container-high px-3 py-2 rounded-md font-body-md text-body-md transition-colors">
            我的
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          {/* Profile Card */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-border-subtle relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-2xl group-hover:bg-primary-container/30 transition-colors duration-500" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full border-2 border-primary-container overflow-hidden p-0.5">
                <div className="w-full h-full rounded-full bg-primary-container flex items-center justify-center">
                  <Icon name="person" className="text-on-primary text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">
                  {user.name}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
                  {user.title || "未设置职位"} <span className="w-1 h-1 rounded-full bg-border-subtle inline-block mx-1" /> 离职-随时到岗
                </p>
              </div>
            </div>

            {/* Completeness */}
            <div className="mb-4 relative z-10">
              <div className="flex justify-between items-end mb-2">
                <span className="font-label-md text-label-md text-on-surface-variant">微简历完成度</span>
                <span className="font-label-md text-label-md text-primary">{user.profile_completeness || 0}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${user.profile_completeness || 0}%` }}
                />
              </div>
            </div>

            <Link
              href="/profile/edit"
              className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 relative z-10"
            >
              <Icon name="edit_document" className="text-[16px]" />
              编辑在线简历
            </Link>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-3 gap-3">
            {[
              { num: "42", label: "已投递" },
              { num: "15", label: "被查看" },
              { num: "8", label: "收藏职位" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center justify-center border border-border-subtle shadow-card hover:border-primary/30 transition-colors cursor-pointer"
              >
                <span className="font-headline-md text-headline-md text-on-surface mb-1">{stat.num}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">{stat.label}</span>
              </div>
            ))}
          </section>

          {/* Premium Card */}
          <div className="relative rounded-xl p-5 border border-primary/20 overflow-hidden bg-gradient-to-br from-surface-bright to-surface-container-low cursor-pointer group">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1 flex items-center gap-1">
                  <Icon name="workspace_premium" className="text-tertiary-container" />
                  职场加速包
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">提升3倍简历曝光率</p>
              </div>
              <span className="font-label-md text-label-md text-primary bg-primary/10 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-colors">
                立即开启
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          <section className="bg-surface-container-lowest rounded-xl border border-border-subtle shadow-card overflow-hidden">
            {[
              { icon: "description", label: "附件简历", href: "#" },
              { icon: "settings_suggest", label: "求职偏好", href: "#" },
              { icon: "lock", label: "隐私设置", href: "#" },
              { icon: "help", label: "帮助与客服", href: "#" },
              { icon: "settings", label: "系统设置", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between p-4 border-b border-border-subtle hover:bg-surface-container-low transition-colors group last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </div>
                  <span className="font-body-md text-body-md text-on-surface">{item.label}</span>
                </div>
                <Icon name="chevron_right" className="text-outline-variant group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </section>

          {/* Switch Identity */}
          <button className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-border-subtle bg-transparent text-secondary hover:text-primary hover:border-primary hover:bg-surface-container-low transition-all duration-200 group">
            <Icon name="swap_horiz" className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-body-md text-body-md font-medium">切换为招聘者身份</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

"use client";

import BottomNav from "@/components/BottomNav";
import { Icon } from "@/components/Icon";

const MOCK_USER = {
  name: "张三",
  title: "高级前端工程师",
  profile_completeness: 75,
};

export default function ProfilePage() {
  const user = MOCK_USER;

  return (
    <div className="min-h-screen bg-background-surface pb-24 md:pb-0">
      <main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-card border border-border-subtle relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-2xl" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-16 h-16 rounded-full border-2 border-primary-container overflow-hidden p-0.5">
                <div className="w-full h-full rounded-full bg-primary-container flex items-center justify-center">
                  <Icon name="person" className="text-on-primary text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">{user.name}</h1>
                <p className="text-body-md text-on-surface-variant flex items-center gap-1">
                  {user.title} <span className="w-1 h-1 rounded-full bg-border-subtle inline-block mx-1" /> 离职-随时到岗
                </p>
              </div>
            </div>

            <div className="mb-4 relative z-10">
              <div className="flex justify-between items-end mb-2">
                <span className="text-label-md text-on-surface-variant">微简历完成度</span>
                <span className="text-label-md text-primary">{user.profile_completeness}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${user.profile_completeness}%` }} />
              </div>
            </div>

            <a href="profile/edit.html" className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 relative z-10">
              <Icon name="edit_document" className="text-[16px]" />
              编辑在线简历
            </a>
          </section>

          <section className="grid grid-cols-3 gap-3">
            {[
              { num: "42", label: "已投递" },
              { num: "15", label: "被查看" },
              { num: "8", label: "收藏职位" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center justify-center border border-border-subtle shadow-card">
                <span className="text-headline-md text-on-surface mb-1">{stat.num}</span>
                <span className="text-label-sm text-on-surface-variant">{stat.label}</span>
              </div>
            ))}
          </section>

          <div className="relative rounded-xl p-5 border border-primary/20 overflow-hidden bg-gradient-to-br from-surface-bright to-surface-container-low cursor-pointer">
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="text-headline-md text-on-surface mb-1 flex items-center gap-1">
                  <Icon name="workspace_premium" className="text-tertiary-container" />
                  职场加速包
                </h3>
                <p className="text-label-sm text-on-surface-variant">提升3倍简历曝光率</p>
              </div>
              <span className="text-label-md text-primary bg-primary/10 px-3 py-1.5 rounded-full">立即开启</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 flex flex-col gap-4">
          <section className="bg-surface-container-lowest rounded-xl border border-border-subtle shadow-card overflow-hidden">
            {[
              { icon: "description", label: "附件简历", href: "#" },
              { icon: "settings_suggest", label: "求职偏好", href: "#" },
              { icon: "lock", label: "隐私设置", href: "#" },
              { icon: "help", label: "帮助与客服", href: "#" },
              { icon: "settings", label: "系统设置", href: "#" },
            ].map((item) => (
              <a key={item.label} href="#" className="flex items-center justify-between p-4 border-b border-border-subtle last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <span className="text-body-md text-on-surface">{item.label}</span>
                </div>
                <Icon name="chevron_right" className="text-outline-variant" />
              </a>
            ))}
          </section>

          <button className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-border-subtle bg-transparent text-secondary">
            <Icon name="swap_horiz" />
            <span className="text-body-md font-medium">切换为招聘者身份</span>
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

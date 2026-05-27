"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import { api, isLoggedIn } from "@/lib/api";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { mockUser } from "@/lib/mock";

export default function ResumePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
      return;
    }
    api.user.profile().then((res) => {
      if (res.code === 200 && res.data) {
        setUser(res.data);
      } else {
        // Fallback to mock data
        setUser(mockUser.data);
      }
      setLoading(false);
    });
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background-surface flex items-center justify-center">
        <p className="text-on-surface-variant">加载中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader showBack title="我的简历" />
      <main className="pb-24 px-margin-mobile pt-4 flex flex-col gap-4">
        {/* Basic Info */}
        <section className="bg-surface-container-lowest rounded-xl p-gutter-md border border-border-subtle shadow-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center">
              <Icon name="person" className="text-on-primary" size={32} />
            </div>
            <div>
              <h2 className="text-headline-md text-on-surface">{user.name}</h2>
              <p className="text-body-md text-on-surface-variant">{user.title || "未设置职位"}</p>
            </div>
          </div>
          <Link href="/profile/edit" className="flex items-center justify-center gap-2 w-full py-2 bg-primary text-on-primary rounded-lg text-label-md">
            <Icon name="edit_document" size={16} />
            编辑个人信息
          </Link>
        </section>

        {/* Education */}
        <Link href="/profile/education" className="bg-surface-container-lowest rounded-xl p-gutter-md border border-border-subtle shadow-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
              <Icon name="school" className="text-primary" />
            </div>
            <span className="text-body-md text-on-surface">教育经历</span>
          </div>
          <Icon name="chevron_right" className="text-outline-variant" />
        </Link>

        {/* Work Experience */}
        <Link href="/profile/experience" className="bg-surface-container-lowest rounded-xl p-gutter-md border border-border-subtle shadow-card flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
              <Icon name="work" className="text-primary" />
            </div>
            <span className="text-body-md text-on-surface">工作经历</span>
          </div>
          <Icon name="chevron_right" className="text-outline-variant" />
        </Link>

        {/* Skills */}
        <section className="bg-surface-container-lowest rounded-xl p-gutter-md border border-border-subtle shadow-card">
          <h3 className="text-label-md text-on-surface-variant mb-3">技能标签</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind CSS", "Figma", "产品设计", "用户研究"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-surface-container rounded-full text-label-sm text-on-surface-variant">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Resume Summary */}
        {user.summary && (
          <section className="bg-surface-container-lowest rounded-xl p-gutter-md border border-border-subtle shadow-card">
            <h3 className="text-label-md text-on-surface-variant mb-3">个人简介</h3>
            <p className="text-body-md text-on-surface leading-relaxed">{user.summary}</p>
          </section>
        )}
      </main>
      <BottomNav />
    </div>
  );
}

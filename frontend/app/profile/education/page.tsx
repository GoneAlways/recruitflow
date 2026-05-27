"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";

export default function EditEducationPage() {
  const router = useRouter();
  const [school, setSchool] = useState("北京大学");
  const [major, setMajor] = useState("计算机科学与技术");
  const [degree, setDegree] = useState("bachelor");
  const [gradTime, setGradTime] = useState("2022-06");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-background-surface text-on-surface antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full h-14 bg-surface flex items-center justify-between px-margin-mobile border-b border-border-subtle/50 shadow-sm backdrop-blur-md bg-surface/90">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center -ml-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high"
        >
          <Icon name="arrow_back_ios_new" />
        </button>
        <h1 className="font-headline-md text-headline-md text-on-surface font-semibold absolute left-1/2 -translate-x-1/2">
          编辑教育经历
        </h1>
        <div className="w-10 h-10" />
      </header>

      <main className="max-w-2xl mx-auto p-margin-mobile pb-32">
        <div className="bg-surface-container-lowest rounded-xl p-gutter-md shadow-card border border-border-subtle flex flex-col gap-gutter-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />

          {/* School Name */}
          <div className="flex flex-col gap-stack-gap">
            <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1" htmlFor="school">
              学校名称 <span className="text-error">*</span>
            </label>
            <div className="relative">
              <Icon name="account_balance" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" />
              <input
                id="school"
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border-subtle bg-background-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入学校名称"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              />
            </div>
          </div>

          {/* Major */}
          <div className="flex flex-col gap-stack-gap">
            <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1" htmlFor="major">
              专业 <span className="text-error">*</span>
            </label>
            <div className="relative">
              <Icon name="book" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" />
              <input
                id="major"
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border-subtle bg-background-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入专业名称"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
          </div>

          {/* Degree & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-md">
            <div className="flex flex-col gap-stack-gap">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="degree">
                学历 <span className="text-error">*</span>
              </label>
              <div className="relative">
                <Icon name="school" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" />
                <select
                  id="degree"
                  className="w-full h-12 pl-12 pr-10 rounded-xl border border-border-subtle bg-background-surface text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="bachelor">本科</option>
                  <option value="master">硕士</option>
                  <option value="phd">博士</option>
                  <option value="college">大专</option>
                  <option value="other">其他</option>
                </select>
                <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-stack-gap">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="grad-time">
                毕业时间 <span className="text-error">*</span>
              </label>
              <div className="relative">
                <Icon name="calendar_month" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none" />
                <input
                  id="grad-time"
                  type="month"
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-border-subtle bg-background-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
                  value={gradTime}
                  onChange={(e) => setGradTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-stack-gap mt-2">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="desc">
              在校经历 (选填)
            </label>
            <textarea
              id="desc"
              className="w-full p-4 rounded-xl border border-border-subtle bg-background-surface text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              placeholder="描述您的主修课程、荣誉奖项或在校活动..."
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </main>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-border-subtle p-margin-mobile pb-safe z-40 shadow-bottom">
        <div className="max-w-2xl mx-auto flex gap-gutter-sm">
          <button
            onClick={handleSave}
            className="flex-1 h-12 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center hover:bg-surface-tint transition-all active:scale-[0.98] shadow-sm"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}

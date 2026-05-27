"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";

export default function EditExperiencePage() {
  const router = useRouter();
  const [company, setCompany] = useState("科技发展有限公司");
  const [position, setPosition] = useState("高级产品经理");
  const [department, setDepartment] = useState("产品研发部");
  const [startDate, setStartDate] = useState("2020-03");
  const [endDate, setEndDate] = useState("2023-08");
  const [isCurrent, setIsCurrent] = useState(false);
  const [description, setDescription] = useState(
    "1. 负责核心产品线的整体规划与设计，包括需求分析、产品原型绘制及PRD编写；\n2. 协同研发、测试团队推进项目落地，保证产品按时上线，迭代周期缩短20%；\n3. 通过数据分析和用户调研，持续优化产品体验，提升用户留存率15%。"
  );

  const handleSave = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-background-surface text-on-surface antialiased">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between px-margin-mobile h-14 bg-surface sticky top-0 z-50 border-b border-border-subtle shadow-sm">
        <button onClick={() => router.back()} className="p-2 -ml-2 text-on-surface-variant">
          <Icon name="close" />
        </button>
        <h1 className="text-body-lg font-semibold">编辑工作经历</h1>
        <button onClick={handleSave} className="p-2 -mr-2 text-primary text-label-md">
          保存
        </button>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:flex justify-between items-center w-full px-margin-desktop h-16 bg-surface border-b border-border-subtle sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
            <Icon name="arrow_back" className="text-[24px]" />
          </button>
          <h1 className="text-headline-md text-on-surface">编辑工作经历</h1>
        </div>
        <div className="text-headline-md font-bold text-primary">RecruitFlow</div>
      </header>

      <main className="flex-1 w-full max-w-[800px] mx-auto md:pt-24 pb-24 px-margin-mobile md:px-margin-desktop mt-4 md:mt-0">
        <div className="bg-surface-container-lowest rounded-xl shadow-card border border-border-subtle p-gutter-md md:p-margin-desktop overflow-hidden relative">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            {/* Company */}
            <div className="space-y-2">
              <label className="block text-body-md text-on-surface font-medium" htmlFor="company">
                公司名称 <span className="text-error">*</span>
              </label>
              <input
                id="company"
                className="w-full bg-surface-bright border border-border-subtle rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入公司名称"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label className="block text-body-md text-on-surface font-medium" htmlFor="position">
                职位名称 <span className="text-error">*</span>
              </label>
              <input
                id="position"
                className="w-full bg-surface-bright border border-border-subtle rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入职位名称"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="block text-body-md text-on-surface font-medium" htmlFor="department">
                所属部门
              </label>
              <input
                id="department"
                className="w-full bg-surface-bright border border-border-subtle rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="请输入所属部门（选填）"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-body-md text-on-surface font-medium" htmlFor="startDate">
                  入职时间 <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Icon name="calendar_today" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  <input
                    id="startDate"
                    type="month"
                    className="w-full bg-surface-bright border border-border-subtle rounded-lg pl-10 pr-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-body-md text-on-surface font-medium" htmlFor="endDate">
                  离职时间 <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Icon name="calendar_today" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
                  <input
                    id="endDate"
                    type="month"
                    className="w-full bg-surface-bright border border-border-subtle rounded-lg pl-10 pr-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={endDate}
                    disabled={isCurrent}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="flex items-center mt-2">
                  <input
                    id="currentJob"
                    type="checkbox"
                    className="w-4 h-4 text-primary rounded border-border-subtle focus:ring-primary focus:ring-2 bg-surface"
                    checked={isCurrent}
                    onChange={(e) => setIsCurrent(e.target.checked)}
                  />
                  <label className="ml-2 text-label-md text-on-surface-variant cursor-pointer" htmlFor="currentJob">
                    至今
                  </label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2">
              <label className="block text-body-md text-on-surface font-medium flex justify-between" htmlFor="desc">
                <span>工作内容 <span className="text-error">*</span></span>
                <span className="text-label-sm text-on-surface-variant font-normal">
                  {description.length}/2000
                </span>
              </label>
              <textarea
                id="desc"
                className="w-full bg-surface-bright border border-border-subtle rounded-lg px-4 py-3 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
                placeholder="请详细描述您的工作职责、参与的项目及取得的业绩..."
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </form>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex justify-between items-center mt-8 pt-6 border-t border-border-subtle">
          <button className="flex items-center gap-2 text-error hover:bg-error-container/20 px-4 py-2 rounded-lg transition-colors text-body-md" type="button">
            <Icon name="delete" className="text-[20px]" />
            删除经历
          </button>
          <div className="flex gap-4">
            <button onClick={() => router.back()} className="px-6 py-2.5 border border-border-subtle text-on-surface bg-surface-container-lowest hover:bg-surface-container-low rounded-xl text-body-md font-medium transition-colors">
              取消
            </button>
            <button onClick={handleSave} className="px-8 py-2.5 bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container rounded-xl text-body-md font-medium transition-colors shadow-sm">
              保存
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Action */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-margin-mobile bg-surface-container-lowest border-t border-border-subtle shadow-bottom z-40 pb-safe">
        <div className="flex gap-3">
          <button className="flex-none px-4 py-3 border border-border-subtle text-error bg-surface hover:bg-error-container/10 rounded-xl transition-colors flex items-center justify-center">
            <Icon name="delete" className="text-[24px]" />
          </button>
          <button onClick={handleSave} className="flex-1 py-3 bg-primary text-on-primary rounded-xl text-body-lg font-medium transition-colors shadow-sm active:scale-[0.98]">
            保存
          </button>
        </div>
      </div>
    </div>
  );
}

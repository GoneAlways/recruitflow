"use client";

import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import JobCard from "@/components/JobCard";
import { Icon } from "@/components/Icon";

const MOCK_JOBS = [
  { id: 1, title: "高级前端工程师", company: "字节跳动", location: "北京·海淀区", salary_min: 35000, salary_max: 60000, job_type: "full-time", work_mode: "hybrid", experience: "3-5年", badge: "急聘" },
  { id: 2, title: "React Native 开发工程师", company: "腾讯", location: "深圳·南山区", salary_min: 30000, salary_max: 50000, job_type: "full-time", work_mode: "onsite", experience: "3-5年", badge: "新" },
  { id: 3, title: "前端架构师", company: "阿里巴巴", location: "杭州·余杭区", salary_min: 45000, salary_max: 75000, job_type: "full-time", work_mode: "remote", experience: "5-10年" },
  { id: 4, title: "产品设计师", company: "小红书", location: "上海·黄浦区", salary_min: 25000, salary_max: 45000, job_type: "full-time", work_mode: "hybrid", experience: "1-3年" },
  { id: 5, title: "全栈工程师", company: "美团", location: "北京·朝阳区", salary_min: 30000, salary_max: 55000, job_type: "full-time", work_mode: "onsite", experience: "3-5年", badge: "热招" },
  { id: 6, title: "前端实习生", company: "百度", location: "北京·海淀区", salary_min: 8000, salary_max: 12000, job_type: "internship", work_mode: "onsite", experience: "应届/实习" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader />
      <main className="pb-24 pt-4">
        <section className="px-margin-mobile mb-6">
          <div className="relative">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
            <input
              className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="职位名称、公司名称"
              type="text"
            />
          </div>
          <nav className="flex gap-6 mt-6 border-b border-border-subtle relative">
            {["推荐", "附近", "最新"].map((tab) => (
              <button
                key={tab}
                className={`text-label-md pb-3 relative transition-colors ${
                  tab === "推荐"
                    ? "text-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-primary after:rounded-[99px]"
                    : "text-on-surface-variant"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </section>

        <section className="px-margin-mobile mb-8">
          <div className="bg-primary-container p-4 rounded-xl flex justify-between items-center overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-white mb-1">职业洞察</h3>
              <p className="text-white/80 text-sm">更新你的简历，可提高 20% 的匹配度。</p>
            </div>
            <Icon name="auto_awesome" className="text-white/20 text-6xl absolute -right-4 -bottom-4" />
          </div>
        </section>

        <section className="px-margin-mobile flex flex-col gap-3">
          <h2 className="text-label-md uppercase tracking-wider text-outline mb-1">为你推荐</h2>
          {MOCK_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

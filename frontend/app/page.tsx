"use client";

import { useEffect, useState } from "react";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import JobCard from "@/components/JobCard";
import { api } from "@/lib/api";
import { Icon } from "@/components/Icon";
import { mockJobs } from "@/lib/mock";

export default function HomePage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("推荐");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.jobs.list().then((res) => {
      if (res.code === 200 && res.data?.items?.length) {
        setJobs(res.data.items);
      } else {
        setJobs(mockJobs.data.items);
      }
    }).catch(() => {
      setJobs(mockJobs.data.items);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader />
      <main className="pb-24 pt-4">
        {/* Search Bar */}
        <section className="px-margin-mobile mb-6">
          <div className="relative">
            <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
            <input
              className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="职位名称、公司名称"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <nav className="flex gap-6 mt-6 border-b border-border-subtle relative">
            {["推荐", "附近", "最新"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-label-md pb-3 relative transition-colors ${
                  activeTab === tab
                    ? "text-primary active-tab after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[3px] after:bg-primary after:rounded-[99px]"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </section>

        {/* Featured Banner */}
        <section className="px-margin-mobile mb-8">
          <div className="bg-primary-container p-4 rounded-xl flex justify-between items-center overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-white mb-1">职业洞察</h3>
              <p className="text-white/80 text-sm">更新你的简历，可提高 20% 的匹配度。</p>
            </div>
            <Icon name="auto_awesome" className="text-white/20 text-6xl absolute -right-4 -bottom-4" />
          </div>
        </section>

        {/* Job Listings */}
        <section className="px-margin-mobile flex flex-col gap-3">
          <h2 className="text-label-md uppercase tracking-wider text-outline mb-1">
            为你推荐
          </h2>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}

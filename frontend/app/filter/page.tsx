"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Icon";

const cities = ["不限", "北京", "上海", "广州", "深圳", "杭州"];
const salaries = ["不限", "3K以下", "3-5K", "5-10K", "10-20K", "20K以上"];
const degrees = ["不限", "大专", "本科", "硕士", "博士"];
const jobTypes = ["不限", "全职", "兼职", "实习"];

export default function FilterPage() {
  const router = useRouter();
  const [city, setCity] = useState("不限");
  const [salary, setSalary] = useState("不限");
  const [degree, setDegree] = useState("不限");
  const [jobType, setJobType] = useState("不限");

  const handleConfirm = () => {
    const params = new URLSearchParams();
    if (city !== "不限") params.set("city", city);
    if (salary !== "不限") params.set("salary_min", salary);
    if (degree !== "不限") params.set("education", degree);
    if (jobType !== "不限") params.set("job_type", jobType);
    router.push(`/?${params.toString()}`);
  };

  const handleReset = () => {
    setCity("不限");
    setSalary("不限");
    setDegree("不限");
    setJobType("不限");
  };

  const ChipGroup = ({
    title,
    options,
    value,
    onChange,
    grid,
  }: {
    title: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
    grid?: boolean;
  }) => (
    <section>
      <h2 className="text-label-md text-on-surface-variant mb-3 uppercase tracking-wide">
        {title}
      </h2>
      <div className={grid ? "grid grid-cols-3 gap-2" : "flex flex-wrap gap-2"}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`filter-chip border px-4 py-2 rounded-full text-body-md transition-all ${
              grid ? "px-2 py-3 rounded-lg text-center" : ""
            } ${
              value === opt
                ? "bg-primary-container text-on-primary-container border-primary-container font-semibold"
                : "border-border-subtle bg-surface text-on-surface"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background-surface text-on-surface antialiased flex flex-col">
      {/* Header */}
      <header className="bg-surface docked full-width top-0 z-50 flex justify-between items-center w-full px-margin-mobile h-14 border-b border-border-subtle">
        <button
          onClick={() => router.back()}
          className="text-on-surface-variant p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors duration-200"
        >
          <Icon name="close" />
        </button>
        <h1 className="text-headline-md font-bold text-on-surface">筛选职位</h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="px-margin-mobile py-4 space-y-8">
          <ChipGroup title="城市" options={cities} value={city} onChange={setCity} />
          <ChipGroup title="薪资范围" options={salaries} value={salary} onChange={setSalary} grid />
          <ChipGroup title="学历要求" options={degrees} value={degree} onChange={setDegree} grid />
          <ChipGroup title="工作形式" options={jobTypes} value={jobType} onChange={setJobType} />
        </div>
      </main>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-border-subtle px-margin-mobile py-4 pb-safe flex gap-4 z-50">
        <button
          onClick={handleReset}
          className="flex-1 bg-surface-container-low text-on-surface border border-border-subtle py-3 rounded-xl text-body-lg text-center hover:bg-surface-container-high transition-colors"
        >
          重置
        </button>
        <button
          onClick={handleConfirm}
          className="flex-[2] bg-primary text-on-primary py-3 rounded-xl text-body-lg text-center shadow-md hover:bg-primary-fixed-dim transition-colors"
        >
          确定 (124)
        </button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";
import { api } from "@/lib/api";

export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [job, setJob] = useState<any>(null);
  const [applying, setApplying] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.jobs.detail(Number(id)).then((res) => {
      if (res.code === 200) setJob(res.data);
    });
  }, [id]);

  const handleApply = async () => {
    setApplying(true);
    setMsg("");
    const res = await api.jobs.apply(Number(id));
    if (res.code === 200) {
      setMsg("投递成功！");
    } else if (res.code === 401) {
      router.push("/login");
    } else {
      setMsg(res.message);
    }
    setApplying(false);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-background-surface flex items-center justify-center">
        <p className="text-on-surface-variant">加载中...</p>
      </div>
    );
  }

  const fmt = (n: number) => `$${(n / 1000).toFixed(0)}k`;

  return (
    <div className="min-h-screen bg-background-surface">
      <TopHeader showBack title="职位详情" />
      <main className="pb-24">
        {/* Hero Section */}
        <div className="bg-surface-container-lowest mx-margin-mobile mt-4 p-gutter-md rounded-xl border border-border-subtle shadow-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-surface-container border border-border-subtle flex items-center justify-center overflow-hidden">
              <span className="text-2xl font-bold text-primary">{job.company?.[0]}</span>
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md text-on-surface">{job.title}</h1>
              <p className="font-body-md text-on-surface-variant">{job.company}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-headline-md text-primary">{fmt(job.salary_min)} - {fmt(job.salary_max)}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
              {job.location}
            </span>
            <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
              {job.job_type}
            </span>
            <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
              {job.experience}
            </span>
          </div>

          <button
            onClick={handleApply}
            disabled={applying}
            className="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {applying ? "投递中..." : "立即投递"}
          </button>
          {msg && (
            <p className={`text-center mt-2 font-label-md ${msg.includes("成功") ? "text-status-offered" : "text-error"}`}>
              {msg}
            </p>
          )}
        </div>

        {/* Job Description */}
        <section className="mx-margin-mobile mt-4 bg-surface-container-lowest p-gutter-md rounded-xl border border-border-subtle">
          <h2 className="font-headline-md text-on-surface mb-3">职位描述</h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-wrap">
            {job.description}
          </p>
        </section>

        {/* Requirements */}
        {job.requirements && (
          <section className="mx-margin-mobile mt-4 bg-surface-container-lowest p-gutter-md rounded-xl border border-border-subtle">
            <h2 className="font-headline-md text-on-surface mb-3">任职要求</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {job.requirements}
            </p>
          </section>
        )}

        {/* Benefits */}
        {job.benefits && (
          <section className="mx-margin-mobile mt-4 bg-surface-container-lowest p-gutter-md rounded-xl border border-border-subtle">
            <h2 className="font-headline-md text-on-surface mb-3">福利待遇</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed whitespace-pre-wrap">
              {job.benefits}
            </p>
          </section>
        )}
      </main>
      <BottomNav />
    </div>
  );
}

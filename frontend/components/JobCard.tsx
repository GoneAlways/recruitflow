"use client";

import Link from "next/link";
import StatusBadge from "./StatusBadge";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    company_logo?: string;
    location: string;
    salary_min: number;
    salary_max: number;
    job_type: string;
    work_mode: string;
    experience: string;
    badge?: string;
    applied_at?: string;
    status?: string;
  };
  showStatus?: boolean;
}

const workModeLabels: Record<string, string> = {
  remote: "远程",
  hybrid: "混合办公",
  onsite: "实地办公",
};

const jobTypeLabels: Record<string, string> = {
  "full-time": "全职",
  "part-time": "兼职",
  contract: "合同制",
  internship: "实习",
};

export default function JobCard({ job, showStatus }: JobCardProps) {
  const fmt = (n: number) => `$${(n / 1000).toFixed(0)}k`;

  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="bg-surface-container-lowest p-gutter-md rounded-xl border border-border-subtle shadow-card hover:border-primary transition-colors cursor-pointer group">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-md text-on-surface group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <span className="font-headline-md text-primary">
            {fmt(job.salary_min)} - {fmt(job.salary_max)}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
            {workModeLabels[job.work_mode] || job.work_mode}
          </span>
          <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
            {jobTypeLabels[job.job_type] || job.job_type}
          </span>
          <span className="px-2 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-on-surface-variant">
            {job.experience}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-surface-container border border-border-subtle flex items-center justify-center overflow-hidden">
            {job.company_logo ? (
              <img src={job.company_logo} alt={job.company} className="w-8 h-8 object-contain" />
            ) : (
              <span className="text-xs font-bold text-on-surface-variant">{job.company[0]}</span>
            )}
          </div>
          <div className="flex-1">
            <p className="font-label-md text-on-surface">{job.company}</p>
            <p className="text-xs text-outline">{job.location}</p>
          </div>
          {showStatus && job.status ? (
            <StatusBadge status={job.status} />
          ) : job.badge ? (
            <StatusBadge status={job.badge} />
          ) : null}
        </div>
      </div>
    </Link>
  );
}

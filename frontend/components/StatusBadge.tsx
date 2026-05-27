const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  applied: { label: "已投递", bg: "bg-status-pending/10", text: "text-status-pending" },
  viewed: { label: "已查看", bg: "bg-primary/10", text: "text-primary" },
  interview: { label: "面试邀请", bg: "bg-status-offered/10", text: "text-status-offered" },
  offered: { label: "已录用", bg: "bg-status-offered/10", text: "text-status-offered" },
  rejected: { label: "不合适", bg: "bg-status-rejected/10", text: "text-status-rejected" },
  new: { label: "新发布", bg: "bg-status-offered/10", text: "text-status-offered" },
  hot: { label: "热门职位", bg: "bg-status-pending/10", text: "text-status-pending" },
  "high-match": { label: "高匹配度", bg: "bg-primary/10", text: "text-primary" },
};

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.applied;
  return (
    <span className={`px-3 py-1 rounded-full text-label-md ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}

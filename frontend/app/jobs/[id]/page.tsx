import JobDetailClient from "./JobDetailClient";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }];
}

export default function JobDetailPage() {
  return <JobDetailClient />;
}

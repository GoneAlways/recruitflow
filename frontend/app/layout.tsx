import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecruitFlow - 现代招聘生态系统",
  description: "加速您的职业旅程",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background-surface font-sans text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}

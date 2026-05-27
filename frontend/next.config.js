/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // 静态导出 → out/ 目录
  images: { unoptimized: true }, // GitHub Pages 不支持 Next.js 图片优化
};

module.exports = nextConfig;

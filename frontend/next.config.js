/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./",            // 相对路径加载资源
  images: { unoptimized: true },
};

module.exports = nextConfig;

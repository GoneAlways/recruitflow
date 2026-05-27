/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,          // WebView 兼容
  assetPrefix: "./",            // 相对路径加载资源
  images: { unoptimized: true },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // optimizeFonts: true,
    // optimizeImages: true,
    // scrollRestoration: true,
    serverActions: true,
  },
};

module.exports = nextConfig;

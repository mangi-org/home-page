/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: './',
  publicRuntimeConfig: {
    favicon: './public/favicon.ico',
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;

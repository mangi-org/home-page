/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    favicon: './public/favicon.ico',
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

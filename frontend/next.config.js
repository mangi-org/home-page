/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'mangi.org'],
  },
  // experimental: {
    // appDir: true,
    // serverActions: true
  // },
};

module.exports = nextConfig;

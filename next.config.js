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
  },

  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       "react": "preact/compat",
  //       "react-dom": "preact/compat",
  //       "react/jsx-runtime.js": "preact/compat/jsx-runtime",
  //       "react-dom/test-utils": "preact/test-utils",
  //     });
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;

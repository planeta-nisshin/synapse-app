/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
    domains: [process.env.NEXT_PUBLIC_WORDPRESS_API_URL],
  },
  env: {
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_APIKEY
  }
}
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

module.exports = nextConfig

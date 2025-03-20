import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['vi', 'ja'],
    defaultLocale: 'vi',
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
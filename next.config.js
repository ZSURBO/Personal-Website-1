/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['yourcdndomain.com'],
    },
    i18n: {
      locales: ['zh', 'en'],
      defaultLocale: 'zh',
    },
  }
  
  module.exports = nextConfig
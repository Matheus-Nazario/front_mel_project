/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  i18n: {
    locales: ['pt-BR', 'en-US', 'es'],
    defaultLocale: 'pt-BR',
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['bit.ly'],
  },
  publicRuntimeConfig: {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID
  }
}

module.exports = nextConfig

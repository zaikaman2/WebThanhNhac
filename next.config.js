/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
      domains: ['i.ibb.co', 'images.unsplash.com'],
    },
    async rewrites() {
      return [
        {
          source: '/tiktok-developers-site-verification.txt',
          destination: '/api/tiktok-verification',
        },
      ]
    },
    async redirects() {
      return [
        {
          source: '/tiktok',
          destination: '/tiktok-redirect',
          permanent: false,
        },
      ]
    },
  }
  
  module.exports = nextConfig
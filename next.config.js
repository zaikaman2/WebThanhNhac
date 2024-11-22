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
  }
  
  module.exports = nextConfig
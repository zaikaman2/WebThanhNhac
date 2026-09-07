import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function (phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    distDir: isDev ? ".next-dev" : ".next",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**.ibb.co',
          pathname: '/**',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/tiktok-developers-site-verification.txt',
          destination: '/api/tiktok-verification',
        },
        {
          source: '/.well-known/apple-app-site-association',
          destination: '/api/apple-app-site-association',
        },
        {
          source: '/.well-known/assetlinks.json',
          destination: '/api/assetlinks',
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/tiktok',
          destination: '/tiktok-redirect',
          permanent: false,
        },
      ];
    },
  };
}

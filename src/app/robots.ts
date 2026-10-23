import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN || 'https://kienvocal.vercel.app'}/sitemap.xml`,
  }
} 
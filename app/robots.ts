import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
  return {
    rules: { userAgent: '*', allow: '/' },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

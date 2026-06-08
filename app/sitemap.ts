import type { MetadataRoute } from 'next'
import { getArticles } from '@/src/lib/articles'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
  const articles = await getArticles()
  return [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${siteUrl}/services/razrabotka-sajtov-pod-klyuch`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    { url: `${siteUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    ...articles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: article.publishedAt ? new Date(article.publishedAt) : undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

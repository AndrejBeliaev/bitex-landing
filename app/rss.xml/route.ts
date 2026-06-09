import { getArticle, getArticles } from '@/src/lib/articles'

export const dynamic = 'force-dynamic'

function xmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function cdata(value: string) {
  return `<![CDATA[${value.replaceAll(']]>', ']]]]><![CDATA[>')}]]>`
}

function stripMarkdown(value: string) {
  return value
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/[*_~>#]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function publicationDate(value: string | null | undefined, index: number) {
  const now = Date.now()
  const date = value ? new Date(value) : new Date(now - (index + 1) * 60_000)

  if (!Number.isFinite(date.getTime()) || date.getTime() > now) {
    return new Date(now - (index + 1) * 60_000)
  }

  return date
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
  const summaries = await getArticles()
  const articles = (
    await Promise.all(summaries.map((article) => getArticle(article.slug)))
  ).filter((article) => article !== null)

  const lastBuildDate = new Date().toUTCString()
  const items = articles
    .map((article, index) => {
      const url = `${siteUrl}/blog/${article.slug}`
      const pubDate = publicationDate(article.publishedAt, index).toUTCString()
      const fullText = stripMarkdown(article.content)

      return [
        '<item>',
        `<title>${cdata(article.title)}</title>`,
        `<link>${xmlEscape(url)}</link>`,
        `<guid isPermaLink="true">${xmlEscape(url)}</guid>`,
        `<pubDate>${pubDate}</pubDate>`,
        article.excerpt ? `<description>${cdata(article.excerpt)}</description>` : '',
        `<yandex:full-text>${cdata(fullText)}</yandex:full-text>`,
        '</item>',
      ]
        .filter(Boolean)
        .join('')
    })
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:yandex="http://news.yandex.ru">
  <channel>
    <title>${cdata('Блог Bitex IT')}</title>
    <link>${xmlEscape(`${siteUrl}/blog`)}</link>
    <description>${cdata('Практические статьи Bitex IT о разработке сайтов, веб-сервисов, автоматизации и цифровом развитии бизнеса.')}</description>
    <language>ru</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  })
}

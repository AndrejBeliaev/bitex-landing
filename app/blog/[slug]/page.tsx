import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Footer } from '@/src/app/components/Footer'
import { MarkdownArticle } from '@/src/app/components/MarkdownArticle'
import { Navbar } from '@/src/app/components/Navbar'
import { formatArticleDate, getArticle } from '@/src/lib/articles'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt ?? undefined,
      publishedTime: article.publishedAt ?? undefined,
      modifiedTime: article.updatedAt,
      images: article.coverUrl ? [article.coverUrl] : ['/og-image.png'],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getArticle(slug)
  if (!article) notFound()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.coverUrl || `${siteUrl}/og-image.png`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Bitex IT',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.svg` },
    },
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar solid />
      <main className="pt-36 md:pt-40 pb-24">
        <article className="container mx-auto px-6">
          <header className="max-w-4xl mx-auto text-center mb-14">
            <a href="/blog" className="text-blue-400 hover:text-blue-300 font-medium">← Все статьи</a>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-6">{article.title}</h1>
            {article.excerpt && <p className="text-xl text-neutral-400 leading-relaxed">{article.excerpt}</p>}
            {article.publishedAt && (
              <time className="block mt-6 text-sm text-neutral-500">{formatArticleDate(article.publishedAt)}</time>
            )}
          </header>
          {article.coverUrl && (
            <img src={article.coverUrl} alt="" className="w-full max-w-5xl mx-auto aspect-[16/9] object-cover rounded-3xl mb-14" />
          )}
          <div className="max-w-3xl mx-auto">
            <MarkdownArticle content={article.content} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

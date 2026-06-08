import type { Metadata } from 'next'
import { Footer } from '@/src/app/components/Footer'
import { Navbar } from '@/src/app/components/Navbar'
import { formatArticleDate, formatArticleViews, getArticles } from '@/src/lib/articles'

export const metadata: Metadata = {
  title: 'Блог о веб-разработке и цифровых продуктах',
  description: 'Практические статьи Bitex IT о разработке сайтов, веб-сервисов, SaaS и автоматизации бизнеса.',
  alternates: { canonical: '/blog' },
}

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar solid />
      <main className="pt-36 md:pt-40 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Блог Bitex IT</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">О разработке и цифровых продуктах</h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Делимся практическим опытом создания сайтов, веб-сервисов, автоматизации и запуска новых продуктов.
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-10 text-neutral-400">
              Первая статья уже готовится к публикации.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.slug} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden">
                  {article.coverUrl && (
                    <img src={article.coverUrl} alt="" className="w-full aspect-[16/9] object-cover" />
                  )}
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
                      {article.publishedAt && <time>{formatArticleDate(article.publishedAt)}</time>}
                      <span>{formatArticleViews(article.viewCount)} просмотров</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-3 mb-4">
                      <a href={`/blog/${article.slug}`} className="hover:text-blue-400 transition-colors">
                        {article.title}
                      </a>
                    </h2>
                    {article.excerpt && <p className="text-neutral-400 leading-relaxed">{article.excerpt}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

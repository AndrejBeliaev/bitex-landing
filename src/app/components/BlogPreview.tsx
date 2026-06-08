import { ArrowRight } from 'lucide-react'
import { formatArticleDate, getArticles } from '@/src/lib/articles'

export async function BlogPreview() {
  const articles = (await getArticles()).slice(0, 3)

  if (articles.length === 0) return null

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">
              Блог Bitex IT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">Делимся опытом разработки</h2>
            <p className="text-neutral-400 text-lg">
              Практические материалы о сайтах, веб-сервисах, автоматизации и запуске цифровых продуктов.
            </p>
          </div>
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold">
            Все статьи <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.slug} className="rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden">
              {article.coverUrl && (
                <img
                  src={article.coverUrl}
                  alt=""
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                />
              )}
              <div className="p-7">
                {article.publishedAt && (
                  <time className="text-xs uppercase tracking-widest text-neutral-500">
                    {formatArticleDate(article.publishedAt)}
                  </time>
                )}
                <h3 className="text-xl font-bold mt-3 mb-4">
                  <a href={`/blog/${article.slug}`} className="hover:text-blue-400 transition-colors">
                    {article.title}
                  </a>
                </h3>
                {article.excerpt && <p className="text-neutral-400 leading-relaxed">{article.excerpt}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export interface ArticleSummary {
  title: string
  slug: string
  excerpt?: string | null
  coverUrl?: string | null
  publishedAt?: string | null
}

export interface Article extends ArticleSummary {
  content: string
  updatedAt: string
}

const API_URL = process.env.API_URL || 'http://127.0.0.1:4000/api'

export async function getArticles(): Promise<ArticleSummary[]> {
  try {
    const response = await fetch(`${API_URL}/public/articles`, {
      next: { revalidate: 60 },
    })
    if (!response.ok) return []
    return response.json() as Promise<ArticleSummary[]>
  } catch {
    return []
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(`${API_URL}/public/articles/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    })
    if (!response.ok) return null
    return response.json() as Promise<Article>
  } catch {
    return null
  }
}

export function formatArticleDate(value?: string | null) {
  if (!value) return null
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

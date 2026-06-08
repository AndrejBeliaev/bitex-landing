'use client'

import { useEffect } from 'react'

export function ArticleViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const key = `bitex:viewed:${slug}`
    if (sessionStorage.getItem(key)) return

    sessionStorage.setItem(key, '1')
    fetch('/api/article-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
      keepalive: true,
    }).catch(() => {
      sessionStorage.removeItem(key)
    })
  }, [slug])

  return null
}

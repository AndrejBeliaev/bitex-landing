import { NextResponse } from 'next/server'

const API_URL = process.env.API_URL || 'http://127.0.0.1:4000/api'

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { slug?: string } | null
  const slug = body?.slug

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 })
  }

  const response = await fetch(`${API_URL}/public/articles/${encodeURIComponent(slug)}/views`, {
    method: 'POST',
    cache: 'no-store',
  })

  if (!response.ok) {
    return NextResponse.json({ message: 'Article was not found' }, { status: response.status })
  }

  const result = (await response.json()) as { slug: string; viewCount: number }
  return NextResponse.json(result)
}

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function youtubeId(href?: string) {
  if (!href) return null
  try {
    const url = new URL(href)
    if (url.hostname.includes('youtu.be')) return url.pathname.slice(1)
    if (url.hostname.includes('youtube.com')) return url.searchParams.get('v')
  } catch {
    return null
  }
  return null
}

export function MarkdownArticle({ content }: { content: string }) {
  return (
    <div className="article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const id = youtubeId(href)
            return id ? (
              <span className="article-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title="Видео"
                  loading="lazy"
                  allowFullScreen
                />
              </span>
            ) : (
              <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {children}
              </a>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

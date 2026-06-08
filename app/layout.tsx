import type { Metadata } from 'next'
import Script from 'next/script'
import { Toaster } from 'sonner'
import '../src/styles/index.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
const yandexMetrikaId = 109730486
const title = 'Разработка сайтов и веб-сервисов под ключ — Bitex IT'
const description =
  'Bitex IT проектирует и разрабатывает сайты, веб-сервисы, SaaS-платформы и мобильные приложения для бизнеса.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Bitex IT',
  },
  description,
  alternates: { canonical: '/' },
  verification: { yandex: '9424891624da82fd' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Bitex IT',
    title,
    description,
    url: '/',
    images: [{ url: '/og-image.png', width: 1200, height: 1200, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bitex IT',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}/og-image.png`,
  description,
  email: 'info@bitexit.ru',
  telephone: '+7-937-851-17-16',
  areaServed: { '@type': 'Country', name: 'Россия' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Toaster position="top-right" theme="dark" />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaId}', 'ym');

            ym(${yandexMetrikaId}, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}

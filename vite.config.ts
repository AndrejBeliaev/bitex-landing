import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const siteUrl = process.env.VITE_SITE_URL || 'https://bitex-it.ru'
const siteTitle = 'Разработка сайтов и веб-сервисов под ключ — Bitex IT'
const siteDescription =
  'Bitex IT проектирует и разрабатывает сайты, веб-сервисы, SaaS-платформы и мобильные приложения для бизнеса. Оценим задачу и предложим план реализации.'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bitex IT',
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}/og-image.png`,
  description: siteDescription,
  email: 'info@bitexit.ru',
  telephone: '+7-937-851-17-16',
  areaServed: {
    '@type': 'Country',
    name: 'Россия',
  },
  knowsAbout: [
    'Разработка сайтов',
    'Веб-разработка',
    'Разработка веб-сервисов',
    'SaaS',
    'Мобильные приложения',
    'Автоматизация бизнеса',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит разработка сайта или веб-сервиса?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Стоимость зависит от состава функций, интеграций и требований к дизайну. После короткого знакомства Bitex IT бесплатно уточняет задачу и готовит предварительную оценку.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли начать с прототипа?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Для новой идеи можно сначала подготовить прототип или MVP, проверить ключевые сценарии и только затем развивать полноценный продукт.',
      },
    },
    {
      '@type': 'Question',
      name: 'Работает ли Bitex IT с уже существующими проектами?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Команда может провести технический аудит, исправить проблемы, ускорить сайт или продолжить разработку существующего продукта.',
      },
    },
  ],
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    {
      name: 'seo-meta-tags',
      transformIndexHtml() {
        return [
          { tag: 'title', children: siteTitle, injectTo: 'head' },

          {
            tag: 'meta',
            attrs: { name: 'description', content: siteDescription },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: {
              name: 'keywords',
              content:
                'разработка сайтов, разработка веб-сервисов, веб-разработка под ключ, SaaS разработка, мобильные приложения, Bitex IT',
            },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { name: 'robots', content: 'index, follow' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: {
              name: 'yandex-verification',
              content: '9424891624da82fd',
            },
            injectTo: 'head',
          },

          // Open Graph
          {
            tag: 'meta',
            attrs: { property: 'og:type', content: 'website' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:locale', content: 'ru_RU' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:site_name', content: 'Bitex IT' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:url', content: siteUrl },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:title', content: siteTitle },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:description', content: siteDescription },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: {
              property: 'og:image',
              content: `${siteUrl}/og-image.png`,
            },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:image:width', content: '1200' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:image:height', content: '1200' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { property: 'og:image:alt', content: 'Bitex IT — разработка сайтов и веб-сервисов' },
            injectTo: 'head',
          },

          {
            tag: 'link',
            attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            injectTo: 'head',
          },

          // Twitter
          {
            tag: 'meta',
            attrs: { name: 'twitter:card', content: 'summary_large_image' },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { name: 'twitter:title', content: siteTitle },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: { name: 'twitter:description', content: siteDescription },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: {
              name: 'twitter:image',
              content: `${siteUrl}/og-image.png`,
            },
            injectTo: 'head',
          },

          // Canonical
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: siteUrl },
            injectTo: 'head',
          },

          // Theme color
          {
            tag: 'meta',
            attrs: { name: 'theme-color', content: '#0f172a' },
            injectTo: 'head',
          },
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(organizationSchema),
            injectTo: 'head',
          },
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(faqSchema),
            injectTo: 'head',
          },
          {
            tag: 'script',
            attrs: { type: 'text/javascript' },
            children: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106860837', 'ym');
    
              ym(106860837, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
            injectTo: 'head',
          },
    
          // === NoScript fallback (BODY) ===
          {
            tag: 'noscript',
            children: `
              <div>
                <img src="https://mc.yandex.ru/watch/106860837"
                     style="position:absolute; left:-9999px;"
                     alt="" />
              </div>
            `,
            injectTo: 'body',
          },
        ]
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})

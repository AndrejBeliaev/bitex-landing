import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const siteUrl = 'https://bitex-it.ru'
const siteTitle = 'Bitex IT — Разработка IT-проектов под ключ'
const siteDescription =
  'Bitex IT — разработка веб-приложений, корпоративных систем, SaaS-платформ и IT-решений под ключ. React, Next.js, NestJS, DevOps. Создаём масштабируемые продукты для бизнеса.'

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
                'разработка сайтов, веб-разработка, IT-компания, разработка под ключ, React разработка, Next.js, NestJS, SaaS разработка, Bitex IT',
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
              content: '/og-image.png',
            },
            injectTo: 'head',
          },

          {
            tag: 'link',
            attrs: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            injectTo: 'head',
          },

          // Twitter
          // {
          //   tag: 'meta',
          //   attrs: { name: 'twitter:card', content: 'summary_large_image' },
          //   injectTo: 'head',
          // },
          // {
          //   tag: 'meta',
          //   attrs: { name: 'twitter:title', content: siteTitle },
          //   injectTo: 'head',
          // },
          // {
          //   tag: 'meta',
          //   attrs: { name: 'twitter:description', content: siteDescription },
          //   injectTo: 'head',
          // },
          // {
          //   tag: 'meta',
          //   attrs: {
          //     name: 'twitter:image',
          //     content: `${siteUrl}/og-image.jpg`,
          //   },
          //   injectTo: 'head',
          // },

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
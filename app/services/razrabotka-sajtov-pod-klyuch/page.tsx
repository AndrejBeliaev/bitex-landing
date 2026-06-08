import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileText,
  Gauge,
  Layers3,
  MessageCircle,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { ContactForm } from '@/src/app/components/ContactForm'
import { Footer } from '@/src/app/components/Footer'
import { Navbar } from '@/src/app/components/Navbar'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bitex-it.ru'
const pagePath = '/services/razrabotka-sajtov-pod-klyuch'
const pageUrl = `${siteUrl}${pagePath}`

export const metadata: Metadata = {
  title: 'Разработка сайтов под ключ для бизнеса',
  description:
    'Разработка сайтов под ключ: лендинги, корпоративные сайты и веб-проекты для бизнеса. Проектирование, дизайн, верстка, интеграции, SEO-база и запуск.',
  alternates: { canonical: pagePath },
  openGraph: {
    type: 'website',
    title: 'Разработка сайтов под ключ для бизнеса',
    description:
      'Bitex IT проектирует и разрабатывает сайты под ключ: от структуры и дизайна до запуска, аналитики и технической SEO-базы.',
    url: pagePath,
    images: [{ url: '/og-image.png', width: 1200, height: 1200, alt: 'Разработка сайтов под ключ — Bitex IT' }],
  },
}

const included = [
  'Анализ задачи, аудит конкурентов и сбор требований',
  'Структура страниц, прототипы и пользовательские сценарии',
  'Дизайн интерфейса под вашу нишу и целевую аудиторию',
  'Адаптивная верстка для телефона, планшета и десктопа',
  'Разработка на современном стеке: React, Next.js, TypeScript',
  'Интеграции с формами, CRM, почтой, мессенджерами и аналитикой',
  'Базовая техническая SEO-оптимизация, sitemap и robots.txt',
  'Настройка домена, деплой, проверка скорости и передача проекта',
]

const siteTypes = [
  {
    title: 'Лендинг под услугу или продукт',
    description: 'Одностраничный сайт для рекламы, заявок и проверки спроса. Подходит для конкретной услуги, акции или запуска MVP.',
  },
  {
    title: 'Корпоративный сайт',
    description: 'Многостраничный сайт компании с услугами, кейсами, блогом, контактами и понятной структурой для поиска.',
  },
  {
    title: 'Сайт с личным кабинетом',
    description: 'Проект с авторизацией, ролями, внутренними разделами, интеграциями и административной частью.',
  },
]

const stages = [
  {
    title: 'Разбираем задачу',
    description: 'Фиксируем цели сайта, аудиторию, ключевые разделы, ограничения и критерии успешного запуска.',
  },
  {
    title: 'Проектируем структуру',
    description: 'Собираем карту страниц, блоки, сценарии пользователя и логику форм, чтобы сайт продавал не случайно, а системно.',
  },
  {
    title: 'Делаем дизайн и разработку',
    description: 'Готовим интерфейс, верстаем адаптивные страницы, подключаем формы, аналитику, CMS или нужные интеграции.',
  },
  {
    title: 'Запускаем и передаем',
    description: 'Проверяем скорость, индексацию, корректность форм, публикуем сайт и передаем доступы, код и базовую документацию.',
  },
]

const prices = [
  {
    name: 'Лендинг',
    price: 'от 80 000 руб.',
    term: '2-4 недели',
    items: ['1 основная страница', 'адаптивная верстка', 'форма заявки', 'аналитика и SEO-база'],
  },
  {
    name: 'Сайт компании',
    price: 'от 140 000 руб.',
    term: '4-7 недель',
    items: ['5-10 страниц', 'структура услуг', 'блог или база для статей', 'админка по необходимости'],
  },
  {
    name: 'Сайт с интеграциями',
    price: 'от 220 000 руб.',
    term: '6-10 недель',
    items: ['личный кабинет', 'CRM/API-интеграции', 'сложные формы', 'роли и бизнес-логика'],
  },
]

const faqs = [
  {
    question: 'Сколько стоит разработка сайта под ключ?',
    answer:
      'Стоимость зависит от типа сайта, количества страниц, дизайна, интеграций и требований к админке. Простые лендинги обычно стартуют от 80 000 руб., корпоративные сайты — от 140 000 руб.',
  },
  {
    question: 'Что значит сайт под ключ?',
    answer:
      'Это формат, при котором мы берем на себя весь путь от структуры и дизайна до разработки, настройки форм, аналитики, базовой SEO-подготовки, публикации и передачи проекта.',
  },
  {
    question: 'Можно ли сделать сайт с блогом и SEO-страницами?',
    answer:
      'Да. Для продвижения мы можем заложить структуру под услуги, блог, экспертные статьи, sitemap, метаданные и удобную CMS для публикации материалов.',
  },
  {
    question: 'Что делать, если у компании пока нет портфолио или кейсов?',
    answer:
      'Можно честно показать опыт команды, описать типовые задачи, подход к работе, демонстрационные решения и постепенно наполнять сайт реальными кейсами после запусков.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Разработка сайтов под ключ',
  serviceType: 'Разработка сайтов',
  provider: {
    '@type': 'Organization',
    name: 'Bitex IT',
    url: siteUrl,
    email: 'info@bitexit.ru',
    telephone: '+7-937-851-17-16',
  },
  areaServed: { '@type': 'Country', name: 'Россия' },
  url: pageUrl,
  description:
    'Проектирование и разработка сайтов под ключ для бизнеса: лендинги, корпоративные сайты, сайты с интеграциями, техническая SEO-база и запуск.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'RUB',
    lowPrice: '80000',
    offerCount: prices.length,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Разработка сайтов под ключ',
      item: pageUrl,
    },
  ],
}

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }}
      />
      <Navbar solid />
      <main>
        <section className="pt-36 md:pt-44 pb-20 border-b border-neutral-900 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
              <div>
                <a href="/#services" className="text-blue-400 hover:text-blue-300 font-medium">
                  ← Все услуги
                </a>
                <span className="text-blue-500 font-medium tracking-wider uppercase mt-8 mb-5 block">
                  Сайты под ключ для бизнеса
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
                  Разработка сайтов под ключ
                </h1>
                <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mb-10">
                  Проектируем и запускаем сайты, которые понятно объясняют продукт, собирают заявки и готовы к SEO-продвижению:
                  от структуры и дизайна до разработки, аналитики и публикации.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    Обсудить сайт <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="#price"
                    className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-4 font-bold text-white hover:border-blue-500 hover:text-blue-300 transition-colors"
                  >
                    Смотреть цены
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-blue-600/20 blur-3xl rounded-full" aria-hidden="true" />
                <div className="relative rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 uppercase tracking-widest">Bitex IT</p>
                      <p className="font-bold">сайт, который можно развивать</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      ['SEO-база', 'метаданные, sitemap, robots.txt'],
                      ['Скорость', 'Next.js, оптимизация и проверка сборки'],
                      ['Заявки', 'формы, аналитика, цели и интеграции'],
                      ['Передача', 'доступы, код и понятная документация'],
                    ].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
                        <p className="font-bold mb-1">{title}</p>
                        <p className="text-sm text-neutral-400">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                ['2-10 недель', 'срок зависит от состава страниц и интеграций'],
                ['SEO-ready', 'закладываем техническую базу для продвижения'],
                ['Адаптивно', 'сайт удобно выглядит на телефоне и десктопе'],
                ['Поэтапно', 'фиксируем результат каждого этапа'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                  <p className="text-2xl font-bold mb-3">{title}</p>
                  <p className="text-neutral-400 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-900/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Что входит</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Разработка сайта под ключ без разрыва между дизайном и запуском</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Мы не передаем вам набор макетов без работающего результата. На выходе вы получаете опубликованный сайт,
                подготовленный к аналитике, заявкам и дальнейшему SEO-развитию.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {included.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-none mt-0.5" />
                  <p className="text-neutral-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div className="max-w-3xl">
                <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Какие сайты делаем</span>
                <h2 className="text-4xl md:text-5xl font-bold">Подбираем формат под задачу, а не под шаблон</h2>
              </div>
              <a href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                Читать статьи о разработке →
              </a>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {siteTypes.map((item) => (
                <article key={item.title} className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8">
                  <Layers3 className="h-9 w-9 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-900/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Этапы</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Как проходит создание сайта под ключ</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Двигаемся короткими понятными этапами: сначала смысл и структура, затем интерфейс, разработка и запуск.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage, index) => (
                <div key={stage.title} className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-7">
                  <div className="text-blue-500 text-sm font-bold mb-5">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-4">{stage.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
              <div>
                <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Опыт и доверие</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Честно показываем стадию студии</h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                  Bitex IT формирует собственное публичное портфолио, поэтому мы не выдаем проекты бывших работодателей
                  за кейсы студии. Вместо этого показываем опыт команды, подход к разработке и постепенно публикуем новые
                  работы после запусков.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold">
                  Обсудить вашу задачу <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  [FileText, 'Понятная оценка', 'Сначала разбираем объем, затем называем сроки и стоимость.'],
                  [ShieldCheck, 'Без фейковых кейсов', 'Не приписываем себе чужие проекты и не рисуем вымышленные логотипы.'],
                  [Gauge, 'Техническая база', 'Следим за скоростью, адаптивом, доступностью и индексируемостью.'],
                  [Search, 'SEO-структура', 'Готовим страницы так, чтобы их можно было продвигать дальше.'],
                ].map(([Icon, title, text]) => (
                  <div key={String(title)} className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
                    <Icon className="h-8 w-8 text-blue-500 mb-5" />
                    <h3 className="text-xl font-bold mb-3">{String(title)}</h3>
                    <p className="text-neutral-400 leading-relaxed">{String(text)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="price" className="py-24 bg-neutral-900/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-14">
              <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Стоимость</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Сколько стоит сайт под ключ</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Ниже ориентиры для старта разговора. Финальная оценка зависит от структуры, дизайна, интеграций,
                контента, админки и требований к запуску.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {prices.map((item) => (
                <article key={item.name} className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-8">
                  <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">{item.price}</p>
                  <p className="text-neutral-500 mb-8">{item.term}</p>
                  <ul className="space-y-4">
                    {item.items.map((feature) => (
                      <li key={feature} className="flex gap-3 text-neutral-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 flex-none mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
              <div>
                <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Вопросы о разработке сайта под ключ</h2>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Собрали ответы на вопросы, которые чаще всего появляются перед стартом проекта.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
                    <summary className="cursor-pointer list-none font-bold text-lg flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-blue-500 text-2xl group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <p className="text-neutral-400 leading-relaxed mt-4 pr-8">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Нужен сайт, который можно продвигать?</h2>
                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                  Напишите пару слов о задаче. Подскажем, какой формат сайта подойдет и с чего лучше начать.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Получить оценку <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

import type { Metadata } from 'next'
import { Footer } from '@/src/app/components/Footer'
import { Navbar } from '@/src/app/components/Navbar'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  robots: { index: false, follow: true },
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar solid />
      <main className="container mx-auto px-6 pt-36 md:pt-40 pb-24">
        <article className="article-prose max-w-3xl">
          <h1>Политика конфиденциальности</h1>
          <p>Настоящая политика описывает обработку данных, которые посетитель добровольно передаёт через сайт Bitex IT.</p>
          <h2>Какие данные обрабатываются</h2>
          <p>Имя, адрес электронной почты, номер телефона и информация о задаче, указанная в форме обратной связи.</p>
          <h2>Цель обработки</h2>
          <p>Ответ на обращение, подготовка предварительной оценки и обсуждение возможного сотрудничества.</p>
          <h2>Хранение и передача</h2>
          <p>Данные используются только для связи по обращению и не передаются третьим лицам, кроме случаев, предусмотренных законом.</p>
          <h2>Отзыв согласия</h2>
          <p>Чтобы уточнить информацию об обработке данных или отозвать согласие, напишите на <a href="mailto:info@bitexit.ru">info@bitexit.ru</a>.</p>
        </article>
      </main>
      <Footer />
    </div>
  )
}

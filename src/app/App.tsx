import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Faq } from "./components/Faq";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { BlogPreview } from "./components/BlogPreview";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Section */}
        <section className="py-20 border-y border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-3">Опыт из индустрии</div>
                <div className="text-sm text-neutral-500 leading-relaxed">Коммерческая разработка до создания студии</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-3">Поэтапная оплата</div>
                <div className="text-sm text-neutral-500 leading-relaxed">Платите за понятный результат этапа</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-3">Прямой контакт</div>
                <div className="text-sm text-neutral-500 leading-relaxed">Без лишних уровней коммуникации</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-3">Передача проекта</div>
                <div className="text-sm text-neutral-500 leading-relaxed">Код, доступы и документация у клиента</div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        <Process />
        
        {/* Tech Stack Marquee (Static Preview) */}
        <section className="py-24 bg-neutral-950 overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <h2 className="text-2xl font-bold text-white text-center opacity-50 uppercase tracking-[0.2em]">Технологии под задачу</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 px-6">
            <span className="text-3xl font-bold text-white">React</span>
            <span className="text-3xl font-bold text-white">TypeScript</span>
            <span className="text-3xl font-bold text-white">Node.js</span>
            <span className="text-3xl font-bold text-white">NestJS</span>
            <span className="text-3xl font-bold text-white">Python</span>
            <span className="text-3xl font-bold text-white">PostgreSQL</span>
            <span className="text-3xl font-bold text-white">Docker</span>
          </div>
        </section>

        <Faq />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

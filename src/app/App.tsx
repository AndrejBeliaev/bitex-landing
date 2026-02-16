import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
      <Toaster position="top-right" theme="dark" />
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-20 border-y border-neutral-900 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">12</div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Экспертов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">5</div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-neutral-500 uppercase tracking-widest">Успех</div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Portfolio />
        
        {/* Tech Stack Marquee (Static Preview) */}
        <section className="py-24 bg-neutral-950 overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <h2 className="text-2xl font-bold text-white text-center opacity-50 uppercase tracking-[0.2em]">Наш Стек</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 px-6">
            <span className="text-3xl font-bold text-white">React</span>
            <span className="text-3xl font-bold text-white">Vue</span>
            <span className="text-3xl font-bold text-white">Angular</span>
            <span className="text-3xl font-bold text-white">Node.js</span>
            <span className="text-3xl font-bold text-white">Express</span>
            <span className="text-3xl font-bold text-white">React Native</span>
            <span className="text-3xl font-bold text-white">Flutter</span>
            <span className="text-3xl font-bold text-white">Nest.js</span>
            <span className="text-3xl font-bold text-white">TypeScript</span>
            <span className="text-3xl font-bold text-white">Python</span>
            <span className="text-3xl font-bold text-white">Docker</span>
            <span className="text-3xl font-bold text-white">AWS</span>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

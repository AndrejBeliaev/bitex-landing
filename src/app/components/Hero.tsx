import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.22),transparent_38%),radial-gradient(circle_at_80%_60%,rgba(6,182,212,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Берём проекты в работу
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Разрабатываем сайты и веб-сервисы, которые <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">решают задачи бизнеса</span>
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Bitex IT помогает запустить новый продукт, автоматизировать процессы или улучшить существующий проект. Начинаем с задачи и предлагаем понятный план реализации.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent border border-neutral-800 text-white font-bold rounded-full hover:bg-neutral-900 transition-all"
              >
                Смотреть решения
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
              {["Предварительная оценка бесплатно", "Работа по этапам", "Код и документация остаются у вас"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hidden md:block animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:56px_56px]" />
    </section>
  );
};

import { Code2, Smartphone, Globe, Cpu, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Корпоративные сайты, лендинги и интернет-магазины с адаптивным дизайном и технической SEO-базой.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Кроссплатформенные приложения и удобные мобильные интерфейсы для клиентов и сотрудников.",
  },
  {
    icon: Code2,
    title: "Веб-сервисы и SaaS",
    description: "Личные кабинеты, CRM, внутренние системы и SaaS-продукты с интеграциями и понятной архитектурой.",
  },
  {
    icon: Cpu,
    title: "Автоматизация и AI",
    description: "Интеграция API, автоматизация повторяющихся операций и прикладные AI-инструменты для бизнеса.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">
              Наши услуги
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Разработка под ключ: от идеи и прототипа до запуска
            </h2>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
              Обсудить проект <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-8 h-[2px] bg-neutral-800 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

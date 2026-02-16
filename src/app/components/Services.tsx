import { motion } from "motion/react";
import { Code2, Smartphone, Globe, Cpu, Rocket, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Globe,
    title: "Веб-разработка",
    description: "Создаем современные, быстрые и SEO-оптимизированные сайты любой сложности.",
  },
  {
    icon: Smartphone,
    title: "Мобильные приложения",
    description: "Разработка нативных и кроссплатформенных приложений для iOS и Android.",
  },
  {
    icon: Code2,
    title: "Разработка ПО",
    description: "Индивидуальные программные решения для автоматизации вашего бизнеса.",
  },
  {
    icon: Cpu,
    title: "AI & ML Решения",
    description: "Внедрение искусственного интеллекта для анализа данных и автоматизации задач.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-medium tracking-wider uppercase mb-4 block"
            >
              Наши услуги
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Мы создаем цифровые продукты нового поколения
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a href="#contact" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
              Обсудить проект <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

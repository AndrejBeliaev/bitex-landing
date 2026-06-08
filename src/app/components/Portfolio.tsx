import { ArrowUpRight, Bot, LayoutDashboard, ShoppingCart } from "lucide-react";

const solutions = [
  {
    icon: ShoppingCart,
    title: "Интернет-магазин",
    category: "Готовы реализовать",
    description:
      "Каталог, фильтры, корзина, онлайн-оплата, интеграция с CRM и удобное управление товарами.",
    result: "Подходит для запуска и развития онлайн-продаж",
  },
  {
    icon: LayoutDashboard,
    title: "Личный кабинет или CRM",
    category: "Готовы реализовать",
    description:
      "Роли пользователей, отчёты, уведомления, документы и интеграции с действующими сервисами.",
    result: "Помогает сократить ручную работу команды",
  },
  {
    icon: Bot,
    title: "Сервис с AI-функциями",
    category: "Готовы реализовать",
    description:
      "Поиск по базе знаний, обработка обращений, генерация контента или анализ данных через AI API.",
    result: "Ускоряет повторяющиеся операции",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">
            Форматы решений
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Покажем подход на вашей задаче
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Bitex IT — молодая студия, созданная специалистами с опытом продуктовой разработки.
            Поэтому мы не публикуем чужие проекты из найма как кейсы студии. Вместо этого можем
            подготовить концепцию, прототип или технический план именно для вашей задачи.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 hover:border-blue-500/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-blue-400" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                </div>
                <span className="text-blue-400 text-sm font-medium mb-3 block">{solution.category}</span>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">{solution.description}</p>
                <p className="pt-6 border-t border-neutral-800 text-sm text-neutral-300">{solution.result}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Есть идея, но пока нет технического задания?</h3>
            <p className="text-neutral-400">Поможем сформулировать первый этап и выбрать разумный объём MVP.</p>
          </div>
          <a href="#contact" className="shrink-0 px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-center transition-colors">
            Обсудить идею
          </a>
        </div>
      </div>
    </section>
  );
};

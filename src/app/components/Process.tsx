const steps = [
  {
    number: "01",
    title: "Знакомство и оценка",
    text: "Разбираемся в задаче, аудитории, ограничениях и ожидаемом результате. Предлагаем состав первого этапа.",
  },
  {
    number: "02",
    title: "Прототип и план",
    text: "Прорабатываем ключевые сценарии, архитектуру и интерфейс. Фиксируем сроки, бюджет и критерии готовности.",
  },
  {
    number: "03",
    title: "Разработка по этапам",
    text: "Показываем промежуточный результат, собираем обратную связь и сохраняем прозрачность по прогрессу.",
  },
  {
    number: "04",
    title: "Запуск и развитие",
    text: "Тестируем, запускаем, передаём доступы и документацию. При необходимости продолжаем поддержку продукта.",
  },
];

export const Process = () => (
  <section id="process" className="py-24 bg-neutral-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Как работаем</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Понятный процесс без разработки вслепую</h2>
        <p className="text-neutral-400 text-lg">Каждый этап заканчивается конкретным результатом, который можно проверить и обсудить.</p>
      </div>
      <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <li
            key={step.number}
            className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-7"
          >
            <span className="text-blue-500 font-bold text-sm">{step.number}</span>
            <h3 className="text-xl font-bold mt-8 mb-4">{step.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

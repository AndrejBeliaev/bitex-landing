const questions = [
  {
    question: "Сколько стоит разработка сайта или веб-сервиса?",
    answer:
      "Стоимость зависит от состава функций, интеграций и требований к дизайну. После короткого знакомства мы бесплатно уточним задачу и подготовим предварительную оценку.",
  },
  {
    question: "Можно ли начать с прототипа или MVP?",
    answer:
      "Да. Для новой идеи часто разумнее сначала сделать прототип или небольшой MVP, проверить ключевые сценарии и только затем развивать полноценный продукт.",
  },
  {
    question: "Вы работаете с уже существующими проектами?",
    answer:
      "Да. Можем провести технический аудит, исправить проблемы, ускорить сайт, добавить новые функции или продолжить разработку существующего продукта.",
  },
  {
    question: "Почему на сайте нет классических кейсов?",
    answer:
      "Студия только формирует собственное публичное портфолио. У команды есть опыт коммерческой разработки по найму, но мы не выдаём проекты бывших работодателей за работы Bitex IT.",
  },
];

export const Faq = () => (
  <section id="faq" className="py-24 bg-neutral-950 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-500 font-medium tracking-wider uppercase mb-4 block">Вопросы и ответы</span>
          <h2 className="text-4xl md:text-5xl font-bold">Перед началом работы</h2>
        </div>
        <div className="space-y-4">
          {questions.map((item) => (
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
);

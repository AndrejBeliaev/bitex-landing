import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

type LeadPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState<LeadPayload>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          phone: form.phone?.trim() || "",
        }),
      });

      if (!res.ok) {
        // можно прочитать текст/JSON ошибки, но оставим просто
        throw new Error("Send failed");
      }

      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", email: "", message: "", phone: "" });
    } catch (err) {
      toast.error("Не удалось отправить заявку. Попробуйте позже или напишите на почту.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Готовы начать <span className="text-blue-500">новый проект?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12">
              Расскажите о задаче в нескольких предложениях. Уточним детали, предложим первый шаг и подготовим предварительную оценку.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:info@bitexit.ru" className="text-xl font-medium hover:text-blue-400 transition-colors">info@bitexit.ru</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 uppercase tracking-widest">Телефон</p>
                  <a href="tel:+79378511716" className="text-xl font-medium hover:text-blue-400 transition-colors">+7 (937) 851-17-16</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 p-8 md:p-12 rounded-3xl border border-neutral-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="lead-name" className="text-sm text-neutral-400 ml-1">Имя</label>
                  <input
                    id="lead-name"
                    name="name"
                    autoComplete="name"
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Александр"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lead-email" className="text-sm text-neutral-400 ml-1">Email</label>
                  <input
                    id="lead-email"
                    name="email"
                    autoComplete="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              {/* опционально: телефон */}
              <div className="space-y-2">
                <label htmlFor="lead-phone" className="text-sm text-neutral-400 ml-1">Телефон (необязательно)</label>
                <input
                  id="lead-phone"
                  name="phone"
                  autoComplete="tel"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lead-message" className="text-sm text-neutral-400 ml-1">О проекте</label>
                <textarea
                  id="lead-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Расскажите немного о вашей идее..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить сообщение
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-xs text-neutral-500 leading-relaxed text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy.html" className="text-neutral-300 underline hover:text-white">
                  политикой обработки персональных данных
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

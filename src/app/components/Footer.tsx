import { Code2, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-16 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">Bitex</span>
            </div>
            <p className="text-neutral-400 text-lg max-w-md mb-8">
              Создаем инновационные решения для амбициозных компаний по всему миру. Мы верим, что технологии должны решать реальные проблемы.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-700 transition-all">
                <Github className="w-5 h-5 text-neutral-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-700 transition-all">
                <Twitter className="w-5 h-5 text-neutral-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-700 transition-all">
                <Linkedin className="w-5 h-5 text-neutral-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-neutral-700 transition-all">
                <MessageSquare className="w-5 h-5 text-neutral-400" />
              </a>
            </div> */}
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Навигация</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Главная</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Портфолио</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-bold mb-6">Легально</h4>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Публичная оферта</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cookies</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© 2026 Bitex. Все права защищены.</p>
          <p>Сделано с любовью к коду.</p>
        </div>
      </div>
    </footer>
  );
};

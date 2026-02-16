import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760978632061-ad00f48789ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwxfHx8fDE3NzEyNTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern Tech Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950 to-neutral-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Принимаем новые проекты
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Мы превращаем идеи в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">цифровую реальность</span>
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Студия полного цикла разработки. Специализируемся на создании масштабируемых веб-сервисов и мобильных приложений с фокусом на результат.
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
                Смотреть работы
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 cursor-pointer hidden md:block"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </section>
  );
};

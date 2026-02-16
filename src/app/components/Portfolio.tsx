import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTI1Mjc5MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Fitness Tracker App",
    category: "Mobile UI/UX",
    image: "https://images.unsplash.com/photo-1604536264507-020ce894daf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtpbmclMjBvbiUyMG1vYmlsZSUyGFwcHxlbnwxfHx8fDE3NzEyNTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "AI Analytics Dashboard",
    category: "SaaS Solution",
    image: "https://images.unsplash.com/photo-1722884263486-4824843769d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMG9mZmljZSUyMHdvcmtzcGFjZSUyMHRlY2h8ZW58MXx8fHwxNzcxMjUyNzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 font-medium tracking-wider uppercase mb-4 block"
          >
            Портфолио
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Наши последние работы
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-blue-400 text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="w-12 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      type: "education",
      title: "SMPN 2 Candi",
      organization: "2022 - 2023",
      period: "Awal Perjalanan",
      description: "Saya menguasai HTML dan CSS sebagai dasar awal dalam membangun tampilan website."
    },
    {
      type: "education",
      title: "SMKN 2 Buduran",
      organization: "2023 - 2024",
      period: "Pengembangan Dasar",
      description: "Saya masuk ke lingkungan SMKN 2 Buduran dan mulai menguasai C++, Java, PHP, JavaScript, serta berbagai logika pemrograman."
    },
    {
      type: "education",
      title: "SMKN 2 Buduran",
      organization: "2025",
      period: "Menguasai Framework",
      description: "Saya mempelajari Laravel, Vue.js, Next.js, dan database MySQL untuk membangun aplikasi yang lebih lengkap."
    },
    {
      type: "education",
      title: "SMKN 2 Buduran",
      organization: "2026",
      period: "Full Stack Developer",
      description: "Saya menguasai Kotlin dan sekarang menjadi full stack developer dengan fokus pada pengembangan frontend dan backend."
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute left-0 top-[30%] w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0" />
      
      <div className="container px-4 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Perjalanan</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full glass-card border-2 border-primary flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10 shadow-lg shadow-primary/20">
                  {exp.type === "work" ? (
                    <Briefcase className="w-6 h-6 text-primary" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass-card p-6 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-secondary font-medium mb-4">{exp.organization}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

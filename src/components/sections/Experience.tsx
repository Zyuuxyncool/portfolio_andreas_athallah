import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";

type Milestone = {
  type: "work" | "education";
  role: string;
  institution: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  skills: string[];
};

export function Experience() {
  const milestones: Milestone[] = [
    {
      type: "work",
      role: "Full-Stack Developer",
      institution: "PT. Gema Solusindo Utama",
      location: "Indonesia",
      period: "2026 - Sekarang",
      current: true,
      summary: "Mengembangkan aplikasi web skala produksi dan integrasi mobile backend. Bertanggung jawab atas perancangan API, arsitektur database, dan implementasi antarmuka pengguna yang andal.",
      skills: ["Laravel", "Kotlin", "RESTful API", "MySQL", "Vue.js"],
    },
    {
      type: "education",
      role: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMKN 2 Buduran",
      location: "Sidoarjo",
      period: "2023 - 2026",
      summary: "Memperdalam pemahaman ilmu komputer dasar, algoritma, pemrograman berorientasi objek, serta pengembangan aplikasi modern dari monolitik hingga decoupled client-server.",
      skills: ["Laravel", "Vue.js", "Bootstrap", "Kotlin", "PHP", "Java", "C++"],
    },
    {
      type: "education",
      role: "Fondasi Awal Pemrograman Web",
      institution: "SMPN 2 Candi",
      location: "Sidoarjo",
      period: "2022 - 2023",
      summary: "Memulai eksplorasi pertama dalam dunia rekayasa perangkat lunak dengan mempelajari struktur web dasar, styling antarmuka, dan logika algoritma dasar.",
      skills: ["HTML5", "CSS3", "JavaScript Dasar"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-border/50">
      <div className="container px-4 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Riwayat & Karir</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Perjalanan Pengalaman & Pendidikan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            Jejak langkah pembelajaran intensif dan kontribusi profesional dalam dunia pengembangan perangkat lunak.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-10 ml-2 sm:ml-4">
          {milestones.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                  item.current
                    ? "bg-primary border-primary text-primary-foreground shadow-sm shadow-primary/30"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {item.type === "work" ? (
                  <Briefcase className="w-3.5 h-3.5" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Saat Ini</span>
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-0.5 rounded-md font-mono bg-muted/60 text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiKotlin,
  SiJavascript,
  SiGit,
  SiFlutter,
  SiPhp,
} from "react-icons/si";
import { Code2, Cpu, Database, Layout, ShieldCheck, Smartphone, Star } from "lucide-react";

type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  stars: number;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Membangun antarmuka web responsif, berkinerja tinggi, dan ramah pengguna.",
    icon: Layout,
    skills: [
      { name: "Bootstrap", icon: SiBootstrap, stars: 5 },
      { name: "Tailwind CSS", icon: SiTailwindcss, stars: 3 },
      { name: "JavaScript", icon: SiJavascript, stars: 4 },
      { name: "Vue.js", icon: SiVuedotjs, stars: 2 },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Merancang API RESTful, arsitektur database, dan logika bisnis yang skalabel.",
    icon: Cpu,
    skills: [
      { name: "Laravel", icon: SiLaravel, stars: 5 },
      { name: "PHP", icon: SiPhp, stars: 5 },
      { name: "MySQL", icon: SiMysql, stars: 4 },
      { name: "Node.js", icon: SiNodedotjs, stars: 3 },
      { name: "PostgreSQL", icon: SiPostgresql, stars: 3 },
    ],
  },
  {
    title: "Mobile & Core Languages",
    description: "Pengembangan aplikasi mobile dan pemahaman logika algoritma yang solid.",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", icon: SiKotlin, stars: 2 },
      { name: "Flutter", icon: SiFlutter, stars: 1 },
      { name: "Java", icon: Code2, stars: 3 },
      { name: "C++", icon: Code2, stars: 3 },
      { name: "Git & VCS", icon: SiGit, stars: 4 },
    ],
  },
];

const values = [
  {
    title: "Clean Architecture",
    description: "Menulis kode yang terstruktur rapi, mudah dibaca, dan mudah dipelihara untuk jangka panjang.",
    icon: Code2,
  },
  {
    title: "Performa & Kecepatan",
    description: "Memaksimalkan waktu muat halaman dan efisiensi resource server untuk kenyamanan pengguna.",
    icon: ShieldCheck,
  },
  {
    title: "Solusi Berorientasi Produk",
    description: "Tidak hanya menulis kode, tapi juga memahami kebutuhan bisnis dan alur penggunaan nyata.",
    icon: Database,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border/50">
      <div className="container px-4 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20"
          >
            <span>Tentang Saya</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Dedikasi Rekayasa Perangkat Lunak dari Fondasi hingga Skala Penuh
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            Mulai dari eksplorasi logika pemrograman sejak bangku sekolah hingga kini berkarier sebagai Full-Stack Developer profesional di PT. Gema Solusindo Utama.
          </motion.p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <val.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{val.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities Section */}
        <div className="space-y-6">
          <div className="text-left mb-6">
            <h3 className="text-xl font-bold text-foreground">Keahlian & Ekosistem Teknologi</h3>
            <p className="text-sm text-muted-foreground">Koleksi teknologi yang sering saya gunakan dalam pengembangan proyek nyata.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-primary/40 transition-colors duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-primary">
                      <category.icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-base text-foreground">{category.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border">
                  {category.skills.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs bg-muted/40 hover:bg-muted/70 border border-border/70 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <tech.icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-semibold text-foreground">{tech.name}</span>
                      </div>

                      {/* Yellow Star Rating */}
                      <div
                        className="flex items-center gap-1"
                        aria-label={`Tingkat kemahiran: ${tech.stars} dari 5 bintang`}
                        title={`${tech.stars} / 5 Bintang`}
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3 h-3 ${
                              star <= tech.stars
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-300 dark:text-slate-700 fill-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

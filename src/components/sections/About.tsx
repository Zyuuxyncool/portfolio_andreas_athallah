import { motion } from "framer-motion";
import { SiVuedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiLaravel, SiNodedotjs, SiMysql, SiPostgresql, SiKotlin } from "react-icons/si";
import { Database, Layout, Server } from "lucide-react";

export function About() {
  const skills = [
    {
      name: "Frontend",
      icon: Layout,
      techs: [
        { name: "Vue.js", Icon: SiVuedotjs },
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "Tailwind", Icon: SiTailwindcss },
        { name: "Bootstrap", Icon: SiBootstrap },
      ]
    },
    {
      name: "Backend",
      icon: Server,
      techs: [
        { name: "Laravel", Icon: SiLaravel },
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "Kotlin", Icon: SiKotlin },
      ]
    },
    {
      name: "Basis Data & DevOps",
      icon: Database,
      techs: [
        { name: "MySQL", Icon: SiMysql },
        { name: "PostgreSQL", Icon: SiPostgresql },
      ]
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Menjembatani desain dan rekayasa.</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Saya adalah software engineer yang berorientasi pada produk dan bersemangat membangun aplikasi yang indah, fungsional, serta skalabel. Saya berfokus pada teknologi web dan mobile modern di seluruh stack.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Saat tidak sedang coding, saya biasanya mengeksplorasi teknologi baru, berkolaborasi dalam proyek menarik, dan terus mengembangkan kemampuan.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-lg">{category.name}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border px-3 py-1.5 rounded-full text-sm">
                      <tech.Icon className="w-4 h-4" />
                      <span>{tech.name}</span>
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

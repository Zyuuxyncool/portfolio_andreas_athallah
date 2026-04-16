import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import lloydNimeImage from "@assets/LloydNime.png";
import { Fireflies } from "@/components/ui/Fireflies";

export function Projects() {
  const projects = [
    {
      title: "LloydNime",
      description: "Situs streaming anime gratis tanpa iklan untuk menonton anime dengan nyaman.",
      image: lloydNimeImage,
      tags: ["Streaming", "Anime", "Web App"],
      github: "https://github.com/Zyuuxyncool/lloydnime",
      demo: "https://lloydnime.vercel.app/"
    },
    {
      title: "Lumina AI",
      description: "Asisten menulis berbasis AI untuk kreator konten dengan optimasi SEO.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=350",
      tags: ["Vue.js", "Node.js", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Echo Finance",
      description: "Pelacak keuangan pribadi dengan perencanaan anggaran dan saran otomatis.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=350",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Orbit Social",
      description: "Jejaring sosial khusus developer untuk berbagi progres dan mencari kolaborator.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=350",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <Fireflies count={14} variant="violet" className="opacity-65" />
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Karya Pilihan</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold leading-tight">{project.title}</h3>
                  <div className="flex gap-2 ml-2 flex-shrink-0">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Lihat Demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs mb-3 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {tag}
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

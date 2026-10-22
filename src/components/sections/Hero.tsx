import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import profilePhoto from "@assets/WhatsApp_Image_2026-04-15_at_21.30.20_1776265264356.jpeg";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[92vh] flex items-center justify-center relative pt-28 pb-16 px-4"
    >
      {/* Subtle modern background gradient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[350px] h-[350px] bg-secondary/10 dark:bg-secondary/15 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />
      </div>

      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column: Appears second on mobile, first on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-xs text-xs font-medium text-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Full-Stack Engineer di PT. Gema Solusindo Utama</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]"
            >
              Halo, saya
              <br />
              <span className="text-primary inline-block">Andreas Athallah</span>.
            </motion.h1>

            {/* Sub-headline description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Software engineer yang berfokus membangun aplikasi web dan mobile yang tangguh, cepat, serta berpusat pada pengalaman pengguna. Spesialisasi pada Laravel, Vue.js, Bootstrap, dan Kotlin.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
              >
                <span>Lihat Proyek Pilihan</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-border bg-card hover:bg-accent text-foreground transition-all duration-200 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </a>
            </motion.div>

            {/* Social / Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-sm text-muted-foreground"
            >
              <a
                href="https://github.com/Zyuuxyncool"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors p-1"
                aria-label="GitHub Profil"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">github/Zyuuxyncool</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="mailto:andreasnation970@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors p-1"
                aria-label="Kirim Email"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">Email</span>
              </a>
              <span className="text-border">•</span>
              <a
                href="https://wa.me/6285773301211?text=Halo%20Andreas,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20atau%20peluang%20kerja%20sama."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-500 transition-colors p-1"
                aria-label="WhatsApp Langsung"
              >
                <SiWhatsapp className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs font-mono">0857-7330-1211</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Appears first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[340px]">
              
              {/* Profile Card Frame */}
              <div className="rounded-3xl p-3 sm:p-3.5 bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300">
                
                {/* Photo Container with natural 1:1 aspect ratio and focused solo crop */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted border border-border/60">
                  <img
                    src={profilePhoto}
                    alt="Andreas Athallah"
                    className="w-full h-full object-cover object-[center_24%] scale-[1.12] transition-transform duration-500 hover:scale-[1.16]"
                  />
                </div>

                {/* Info & Tech Stack Footer inside the card */}
                <div className="pt-3.5 px-1 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-foreground">Andreas Athallah</p>
                      <p className="text-xs text-muted-foreground">Full-Stack Software Engineer</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Aktif</span>
                    </span>
                  </div>

                  <div className="pt-2 border-t border-border flex flex-wrap gap-1.5">
                    {["Laravel", "Vue.js", "Bootstrap", "Kotlin"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted text-foreground border border-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

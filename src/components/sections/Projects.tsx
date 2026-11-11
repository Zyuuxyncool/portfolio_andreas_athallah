import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import spmbImage from "@assets/spmb-gema.png";
import siBacaImage from "@assets/si-baca.png";
import goodayzerImage from "@assets/goodayzer.png";
import siapKerjaImage from "@assets/siap-kerja.png";
import lloydifyImage from "@assets/lloydify_showcase.png";
import lloydnimeImage from "@assets/lloydnime_showcase.png";

type ProjectCategory = "all" | "web" | "mobile";

type ProjectItem = {
  id: string;
  title: string;
  category: ProjectCategory | ProjectCategory[];
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  statusBadge: string;
  metrics?: string[];
};

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const projects: ProjectItem[] = [
    {
      id: "lloydnime",
      title: "Lloydnime: Platform Streaming Anime Bebas Iklan Lintas Platform (Android, macOS & Web)",
      category: ["web", "mobile"],
      categoryLabel: "Cross-Platform Streaming (Flutter + Vite TS) & Scraper API",
      description: "Ekosistem streaming anime modern bertema liquid glass yang menggabungkan aplikasi Flutter (Android & macOS) dan website streaming responsif tanpa framework (Vite + TypeScript). Dilengkapi backend Node.js scraper cerdas, multi-bahasa (Sub Indo & Sub English Global 1080p), sinkronisasi cloud riwayat tontonan dan anime favorit dengan Google Auth via Supabase PostgreSQL, serta pemutar video HLS anti-buffering.",
      image: lloydnimeImage,
      tags: ["Flutter", "Dart", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "HLS"],
      github: "https://github.com/Zyuuxyncool/lloydnime_releases",
      demo: "https://lloydnime.andreas-athallah.web.id",
      statusBadge: "Live Release v1.0.5",
      metrics: ["Tersedia untuk Android (APK) & macOS (DMG)", "Website Streaming PWA Responsif", "Cloud Sync Riwayat & Favorit (Google Auth)"],
    },
    {
      id: "lloydify",
      title: "Lloydify: Ekosistem Streaming Musik Bebas Iklan Lintas Platform (Android, macOS & Web)",
      category: ["web", "mobile"],
      categoryLabel: "Cross-Platform Music Streaming (Flutter + Vite TS) & Scraper API",
      description: "Aplikasi pemutar musik modern bertema liquid glass yang hadir untuk Android dan MacBook (macOS DMG), didampingi website landing page responsif (Vite + TypeScript). Memungkinkan pencarian dan streaming jutaan lagu YouTube tanpa jeda iklan, impor playlist Spotify instan tanpa login akun, lirik tersinkron ala karaoke, kontrol audio lockscreen & Dynamic Island, serta fitur Dengar Musik Bareng via WebSocket.",
      image: lloydifyImage,
      tags: ["Flutter", "Dart", "TypeScript", "Node.js", "Express", "WebSocket", "Android", "macOS"],
      github: "https://github.com/Zyuuxyncool/app_music",
      demo: "https://music.andreas-athallah.web.id",
      statusBadge: "Live Release v1.2.0",
      metrics: ["Cross-Platform: Android, macOS & Web", "Impor Playlist Spotify Instan Tanpa Login", "Lirik Real-Time & Dengar Musik Bareng (WebSocket)"],
    },
    {
      id: "spmb-gema",
      title: "SPMB: Sistem Penerimaan Calon Murid Baru",
      category: "web",
      categoryLabel: "Web App & Sistem Informasi",
      description: "Portal digital terintegrasi untuk penerimaan calon murid baru jenjang TK, SD, dan SMP di Kabupaten Gema. Memfasilitasi pendaftaran online mandiri, verifikasi berkas, pemetaan sekolah tujuan, hingga pengumuman hasil seleksi terbuka.",
      image: spmbImage,
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
      github: "https://github.com/Zyuuxyncool",
      demo: "#contact",
      statusBadge: "Live Production",
      metrics: ["10.000+ Calon Siswa Terdata", "45 Sekolah Tujuan (TK, SD, SMP)", "Sistem Seleksi Terbuka & Transparan"],
    },
    {
      id: "goodayzer",
      title: "Goodayzer Coffee Shop: Landing Page & Pemesanan Online",
      category: "web",
      categoryLabel: "Web App & Pemesanan Online",
      description: "Website resmi dan katalog pemesanan online interaktif Goodayzer Coffee Shop. Dilengkapi pencarian menu instan tanpa reload, modal dialog kalkulasi porsi & pilihan suhu, integrasi pemesanan langsung ke WhatsApp kedai, serta pencatat kunjungan (view counter) anti-spam berbasis PHP dan JSON.",
      image: goodayzerImage,
      tags: ["PHP", "CSS", "JavaScript", "JSON"],
      github: "https://github.com/Zyuuxyncool",
      demo: "#contact",
      statusBadge: "Live Website",
      metrics: ["Katalog & Checkout Otomatis WhatsApp", "Pencarian Menu Real-Time (Instant Filter)", "Counter Kunjungan Anti-Spam via JSON"],
    },
    {
      id: "si-baca",
      title: "Si Baca (Sidoarjo Membaca)",
      category: "web",
      categoryLabel: "Web App & Edukasi",
      description: "Platform digital yang didedikasikan untuk membangkitkan semangat literasi, khususnya di kalangan generasi muda, agar dapat menyelami dan memahami kekayaan sejarah yang tersimpan di Kabupaten Sidoarjo melalui fitur games interaktif dan video edukasi.",
      image: siBacaImage,
      tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
      github: "https://github.com/Zyuuxyncool",
      demo: "#contact",
      statusBadge: "Karya Literasi",
      metrics: ["Mini Games Interaktif", "Nonton Video Edukasi", "Literasi Sejarah Sidoarjo"],
    },
    {
      id: "siap-kerja",
      title: "Siap Kerja Sidoarjo: Portal Lowongan Karir Daerah",
      category: "mobile",
      categoryLabel: "Mobile App & API Backend",
      description: "Aplikasi mobile resmi untuk penyerapan tenaga kerja di Kabupaten Sidoarjo. Mengintegrasikan aplikasi mobile native Android berbasis Kotlin dengan backend Laravel RESTful API dan database MySQL untuk sinkronisasi lowongan industri terpercaya, filter bidang karir, serta pemantauan peluang kerja secara real-time.",
      image: siapKerjaImage,
      tags: ["Kotlin", "Laravel", "MySQL", "REST API", "Android"],
      github: "https://github.com/Zyuuxyncool",
      demo: "#contact",
      statusBadge: "Mobile App",
      metrics: ["Akses Langsung Industri Sidoarjo", "Sinkronisasi RESTful API", "Filter Kategori Karir"],
    },
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) =>
        Array.isArray(p.category) ? p.category.includes(activeTab) : p.category === activeTab
      );

  return (
    <section id="projects" className="py-24 relative border-t border-border/50">
      <div className="container px-4 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portofolio Unggulan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Proyek Pilihan & Studi Kasus
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
              Koleksi aplikasi nyata, arsitektur perangkat lunak lintas platform, dan solusi rekayasa teknologi yang telah saya rancang, bangun, dan rilis ke publik.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-muted/60 rounded-xl border border-border self-start md:self-auto overflow-x-auto max-w-full">
            {(
              [
                { id: "all", label: "Semua Proyek" },
                { id: "web", label: "Web App" },
                { id: "mobile", label: "Mobile App" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeTab === tab.id
                    ? "bg-card text-foreground shadow-xs border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects rendered in Wide Horizontal Showcase Card layout */}
        <div className="space-y-8 sm:space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-3xl bg-card border border-border overflow-hidden shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Large Image Showcase (Centered) */}
                  <div className="lg:col-span-7 bg-muted/30 p-3 sm:p-5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
                    <div
                      className={`relative w-full rounded-2xl overflow-hidden border border-border/80 shadow-sm group aspect-16/10 flex items-center justify-center ${
                        !Array.isArray(project.category) && project.category === "mobile"
                          ? "bg-slate-950/40"
                          : "bg-slate-950"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-103 ${
                          !Array.isArray(project.category) && project.category === "mobile"
                            ? "object-contain p-2"
                            : "object-cover object-center"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Right Column: Information & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Eyebrow Category & Status Badge (Clean Layout) */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span>{project.categoryLabel}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                          {project.statusBadge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlight Metrics */}
                      {project.metrics && (
                        <div className="space-y-2 mb-6">
                          {project.metrics.map((m) => (
                            <div key={m} className="flex items-center gap-2 text-xs text-foreground font-medium">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span>{m}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-muted text-foreground border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: Clean 2 Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target={project.demo.startsWith("http") ? "_blank" : undefined}
                          rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 min-h-[44px]"
                        >
                          <span>
                            {project.demo.startsWith("http")
                              ? (project.id === "lloydify" || project.id === "lloydnime" ? "Unduh APK / Website" : "Kunjungi Website")
                              : "Konsultasi / Demo Sistem"}
                          </span>
                          {project.demo.startsWith("http") ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          )}
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-border bg-card hover:bg-accent text-foreground transition-all duration-200 min-h-[44px]"
                        >
                          <Github className="w-4 h-4" />
                          <span>Profil GitHub</span>
                        </a>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

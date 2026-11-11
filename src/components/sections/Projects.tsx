import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
  Cpu,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import spmbImage from "@assets/spmb-gema.png";
import siBacaImage from "@assets/si-baca.png";
import goodayzerImage from "@assets/goodayzer.png";
import siapKerjaImage from "@assets/siap-kerja.png";
import lloydifyImage from "@assets/lloydify_showcase.png";
import lloydnimeImage from "@assets/lloydnime_showcase.png";

type ProjectCategory = "all" | "web" | "mobile";

type CaseStudyData = {
  headline: string;
  challenge: string;
  solution: string;
  architecture: string[];
  impact: string[];
};

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
  caseStudy: CaseStudyData;
};

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

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
      caseStudy: {
        headline: "Arsitektur Streaming Multi-Platform Berperforma Tinggi dengan In-Memory Caching & Cloudflare Bypass Sanitized",
        challenge: "Platform streaming anime sering dihadapkan pada proteksi Cloudflare 403 Forbidden dari penyedia mirror, jeda iklan pop-up yang merusak kenyamanan pengguna, serta inkonsistensi progres tontonan ketika pengguna berganti perangkat antara ponsel Android, laptop MacBook, dan browser desktop.",
        solution: "Membangun sistem backend Node.js mandiri dengan browser-mimic headers dan antrean paralel terkontrol, didukung in-memory caching stale-while-revalidate untuk memangkas lonjakan request ke server asal. Mengintegrasikan Google OAuth 2.0 dengan Supabase PostgreSQL untuk sinkronisasi awan instan riwayat dan episode tersimpan. Di sisi klien, antarmuka dirancang seragam menggunakan estetika Liquid Glass pada Flutter (Android APK & macOS DMG) serta portal web Vite murni tanpa beban framework berat.",
        architecture: [
          "Cross-Platform Frontend: Flutter (Dart) untuk Android APK & macOS DMG + Pure TypeScript & Vite untuk Website Streaming",
          "Reverse Scraper & Resolver: Node.js, Express, Cheerio, dan Dynamic MP4 1080p Mirror Extractor (Filedon & Pixeldrain)",
          "Cloud Storage & Database: Supabase PostgreSQL dengan Row-Level Security (RLS) & Google OAuth 2.0",
          "Video Delivery Protocol: HTTP Live Streaming (HLS) Multi-Bitrate adaptif (360p, 480p, 720p, hingga 1080p FHD)"
        ],
        impact: [
          "Streaming video Full HD 1080p murni tanpa gangguan iklan komersial maupun pop-up redirect",
          "Sinkronisasi real-time bookmark dan riwayat tontonan lintas Android, macOS, dan browser web",
          "Tersedia sebagai paket biner native mandiri: Android APK dan macOS DMG (Apple Silicon & Intel)"
        ]
      }
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
      caseStudy: {
        headline: "Ekstraksi Audio YouTube Cepat, Sinkronisasi Lirik Real-Time, & Fitur Dengar Bersama via WebSocket",
        challenge: "Layanan streaming musik konvensional sering membatasi pengguna gratis dengan jeda iklan yang repetitif. Tantangan teknis terbesar adalah mengekstrak stream audio berkualitas tinggi tanpa latensi, mengimpor metadata lagu Spotify tanpa mengharuskan pengguna memberikan token/kredensial akun pribadi, serta menyinkronkan pemutaran lagu bersama (Listen Together) secara presisi antar jaringan.",
        solution: "Mengembangkan pipeline backend Node.js untuk resolusi stream audio YouTube bebas iklan dan crawler playlist Spotify publik berbasis metadata web. Membangun server WebSocket room-based untuk koordinasi play/pause/seek tersinkronisasi antar pengguna. Di sisi mobile dan desktop, memanfaatkan pustaka audio native Flutter untuk background execution dan kontrol lockscreen media session OS.",
        architecture: [
          "Klien Mobile & Desktop: Flutter Framework dengan Just Audio & Audio Service untuk Lockscreen Controls",
          "Realtime Engine: WebSocket Room Gateway untuk sinkronisasi state pemutaran musik bareng",
          "Audio & Playlist Scraper: Node.js Express API untuk resolusi audio stream murni dan parser playlist publik Spotify",
          "Web Showcase: Vite + TypeScript responsif dengan integrasi unduhan rilis otomatis dari GitHub"
        ],
        impact: [
          "Streaming jutaan katalog musik tanpa jeda iklan dengan konsumsi kuota hemat (audio-only stream)",
          "Fitur Listen Together dengan perbedaan waktu sinkronisasi < 100ms di berbagai kondisi jaringan",
          "Kemudahan migrasi playlist Spotify favorit dalam satu klik tanpa perlu kredensial login"
        ]
      }
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
      caseStudy: {
        headline: "Digitalisasi Seleksi Penerimaan Siswa Baru Terpusat Skala Kabupaten Berbasis Zonasi dan Jalur Prestasi",
        challenge: "Pendaftaran manual di puluhan sekolah negeri menyebabkan antrean fisik yang panjang, potensi berkas hilang, dan keterbatasan transparansi seleksi zonasi. Saat pendaftaran dibuka serentak secara online, sistem harus mampu menahan beban ribuan pengguna yang mengunggah dokumen digital secara bersamaan.",
        solution: "Membangun sistem informasi terpusat menggunakan Laravel MVC dengan basis data MySQL yang dioptimasi. Mengimplementasikan indexing query, validasi dokumen bertahap di sisi klien dengan AJAX, serta algoritma pemeringkatan seleksi real-time berdasarkan jarak zonasi koordinat dan nilai prestasi akademik.",
        architecture: [
          "Core Application: Laravel 10 MVC Framework dengan arsitektur modul panitia dan pendaftar",
          "Database Architecture: MySQL dengan composite index dan relasi kuota per sekolah tujuan",
          "Geospatial Module: Perhitungan jarak zonasi koordinat calon siswa ke 45 sekolah pilihan",
          "Asynchronous Upload: Penanganan berkas ijazah/akta dengan kompresi otomatis dan validasi MIME type"
        ],
        impact: [
          "Menangani 10.000+ pendaftaran dan unggah berkas calon murid baru tanpa kendala bottleneck server",
          "Memangkas waktu proses verifikasi berkas oleh dinas dan sekolah sebesar 70%",
          "Mewujudkan proses seleksi yang transparan dan dapat dipantau langsung oleh wali murid secara real-time"
        ]
      }
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
      caseStudy: {
        headline: "Optimalisasi Alur Pemesanan F&B Tanpa Aplikasi Tambahan Menggunakan Integrasi WhatsApp Direct API",
        challenge: "Kedai kopi membutuhkan sarana pemesanan online yang cepat tanpa membebani pelanggan dengan kewajiban membuat akun atau mengunduh aplikasi berat dari Play Store, terutama pada saat koneksi seluler di kedai sedang padat.",
        solution: "Merancang website katalog ultra-ringan dengan JavaScript murni untuk pencarian menu real-time dan kalkulator pesanan interaktif (ukuran cup, varian panas/dingin, catatan khusus). Pesanan dikonversi secara otomatis menjadi draf pesan WhatsApp terformat rapi yang langsung terkirim ke nomor kasir.",
        architecture: [
          "Lightweight Frontend: Semantic HTML5, CSS3 Custom Properties, Vanilla JavaScript ES6+",
          "Backend Engine: PHP Native dengan modul manajemen menu dan view tracker anti-refresh spam",
          "Checkout Channel: WhatsApp URL Scheme API Generator dengan encoding otomatis rincian order",
          "Storage: Flat-file JSON Storage yang ringan tanpa kebutuhan database server terpisah"
        ],
        impact: [
          "Mempercepat waktu pemesanan pelanggan hingga 60% pada jam-jam sibuk",
          "Zero-friction onboarding: pelanggan dapat memesan dalam hitungan detik tanpa perlu registrasi akun",
          "Ukuran halaman sangat kecil (< 300KB) sehingga termuat dalam waktu < 1 detik di koneksi mobile"
        ]
      }
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
      caseStudy: {
        headline: "Meningkatkan Minat Literasi Sejarah Daerah Generasi Muda Melalui Gamifikasi dan Konten Interaktif",
        challenge: "Rendahnya ketertarikan generasi muda terhadap arsip sejarah lokal Sidoarjo akibat format dokumentasi konvensional yang kaku dan minimnya platform edukasi digital yang menarik secara visual.",
        solution: "Membangun platform edukasi interaktif berbasis Laravel dengan pendekatan gamifikasi (mini-games kuis kearifan lokal, papan skor interaktif, serta repositori video animasi dokumenter sejarah Sidoarjo).",
        architecture: [
          "Framework: Laravel Web Application dengan arsitektur MVC terstruktur",
          "Interactive Engine: JavaScript DOM & AJAX untuk alur kuis real-time tanpa refresh halaman",
          "Media Integration: Streaming modul video edukasi dengan pelacakan durasi belajar",
          "Database: MySQL untuk menyimpan skor gamifikasi, materi sejarah, dan feedback pengguna"
        ],
        impact: [
          "Diadopsi sebagai sarana pembelajaran sejarah lokal yang menarik di lingkungan pelajar Sidoarjo",
          "Meningkatkan tingkat penyelesaian materi bacaan sejarah hingga 3x lipat berkat gamifikasi interaktif",
          "Menyediakan arsip sejarah digital yang mudah diakses oleh masyarakat umum kapan saja"
        ]
      }
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
      caseStudy: {
        headline: "Menghubungkan Pencari Kerja Daerah dengan Industri Terverifikasi Melalui Aplikasi Android Native",
        challenge: "Tingginya angka pengangguran akibat disinformasi lowongan kerja palsu di media sosial dan sulitnya pencari kerja lokal mendapatkan informasi lowongan resmi yang terverifikasi dari perusahaan sekitar.",
        solution: "Membangun aplikasi mobile native Android berbasis Kotlin dengan arsitektur MVVM yang terhubung langsung ke sistem database Dinas Tenaga Kerja via RESTful API Laravel, dilengkapi filter jenjang pendidikan dan verifikasi legalitas perusahaan.",
        architecture: [
          "Mobile Client: Native Android (Kotlin), MVVM Pattern, Retrofit 2, Coroutines, dan Android Jetpack",
          "Backend API: Laravel RESTful API dengan Token Authentication (Sanctum) & JSON Response formatting",
          "Database: MySQL terindeks untuk query pencarian lowongan berdasarkan bidang kerja dan kecamatan",
          "Security: Enkripsi data akun dan validasi izin operasional industri perekrut"
        ],
        impact: [
          "Mengeliminasi risiko penipuan lowongan kerja dengan sistem kurasi perusahaan 100% legal",
          "Memberikan akses mudah bagi ribuan pencari kerja di pelosok Sidoarjo lewat smartphone Android",
          "Mempercepat waktu penyaluran tenaga kerja lokal ke industri manufaktur dan jasa di Sidoarjo"
        ]
      }
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
              Koleksi aplikasi nyata, arsitektur perangkat lunak lintas platform, dan studi kasus rekayasa teknis yang telah saya rancang, bangun, dan rilis ke publik.
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
                  
                  {/* Left Column: Large Image Showcase */}
                  <div className="lg:col-span-7 bg-muted/30 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
                    <div
                      className={`relative w-full rounded-2xl overflow-hidden border border-border/80 shadow-sm group ${
                        !Array.isArray(project.category) && project.category === "mobile"
                          ? "aspect-16/10 flex items-center justify-center bg-slate-950/40"
                          : "aspect-16/10"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-103 ${
                          !Array.isArray(project.category) && project.category === "mobile"
                            ? "object-contain p-2"
                            : "object-cover object-top"
                        }`}
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-xs">
                        {project.statusBadge}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Information & Actions */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Eyebrow Category */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>{project.categoryLabel}</span>
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

                    {/* Action Buttons: Live Demo, GitHub & Case Study Modal */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-border">
                      {/* Button: Open Case Study Modal */}
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-secondary/80 hover:bg-secondary text-secondary-foreground border border-border transition-all duration-200 min-h-[42px] cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-primary" />
                        <span>Studi Kasus</span>
                      </button>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target={project.demo.startsWith("http") ? "_blank" : undefined}
                          rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 min-h-[42px]"
                        >
                          <span>
                            {project.demo.startsWith("http")
                              ? (project.id === "lloydify" || project.id === "lloydnime" ? "Unduh / Kunjungi" : "Kunjungi Website")
                              : "Konsultasi Sistem"}
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
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-border bg-card hover:bg-accent text-foreground transition-all duration-200 min-h-[42px]"
                          aria-label="Repository GitHub"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
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

      {/* Case Study Modal Dialog */}
      <Dialog
        open={!!selectedCaseStudy}
        onOpenChange={(isOpen) => !isOpen && setSelectedCaseStudy(null)}
      >
        <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto p-6 sm:p-8 bg-card border-border rounded-2xl shadow-2xl">
          {selectedCaseStudy && (
            <div className="space-y-6">
              <DialogHeader className="text-left space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    Studi Kasus Rekayasa
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {selectedCaseStudy.statusBadge}
                  </span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {selectedCaseStudy.title}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {selectedCaseStudy.caseStudy.headline}
                </DialogDescription>
              </DialogHeader>

              {/* Showcase Banner in Modal */}
              <div className="rounded-xl overflow-hidden border border-border bg-muted/40 aspect-21/9 max-h-[220px]">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tantangan */}
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-500/5 border border-rose-500/15 space-y-2.5">
                  <div className="flex items-center gap-2 text-rose-500 font-semibold text-sm">
                    <Target className="w-4 h-4 shrink-0" />
                    <span>Tantangan & Masalah Utama</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.caseStudy.challenge}
                  </p>
                </div>

                {/* Solusi */}
                <div className="p-4 sm:p-5 rounded-2xl bg-sky-500/5 border border-sky-500/15 space-y-2.5">
                  <div className="flex items-center gap-2 text-sky-500 font-semibold text-sm">
                    <Lightbulb className="w-4 h-4 shrink-0" />
                    <span>Solusi & Pendekatan Teknis</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                  <Layers className="w-4 h-4 text-primary shrink-0" />
                  <span>Komponen Arsitektur & Teknologi</span>
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedCaseStudy.caseStudy.architecture.map((arch) => (
                    <li key={arch} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Cpu className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results & Impact */}
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-3">
                <div className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>Dampak Terukur & Nilai Tambah</span>
                </div>
                <ul className="grid grid-cols-1 gap-2">
                  {selectedCaseStudy.caseStudy.impact.map((imp) => (
                    <li key={imp} className="flex items-start gap-2 text-xs sm:text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCaseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-muted text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedCaseStudy.demo && (
                    <a
                      href={selectedCaseStudy.demo}
                      target={selectedCaseStudy.demo.startsWith("http") ? "_blank" : undefined}
                      rel={selectedCaseStudy.demo.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                    >
                      <span>
                        {selectedCaseStudy.demo.startsWith("http")
                          ? (selectedCaseStudy.id === "lloydify" || selectedCaseStudy.id === "lloydnime" ? "Buka Aplikasi / Web" : "Kunjungi Website")
                          : "Konsultasi Sistem"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedCaseStudy.github && (
                    <a
                      href={selectedCaseStudy.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-border bg-card hover:bg-accent text-foreground transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Github, Instagram, Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const emailAddress = "andreasnation970@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is blocked
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6a4a328e-a1c1-4d4d-91cd-4dd53fbf5eec",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Pesan Baru Portofolio dari ${formState.name}`,
          from_name: formState.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }
    } catch {
      setIsSubmitting(false);
      setErrorMessage("Terjadi kendala saat mengirim pesan. Silakan coba lagi atau gunakan tombol Salin Email di samping.");
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border/50">
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kontak & Kolaborasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Mari Terhubung dan Bangun Sesuatu yang Hebat
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground"
          >
            Punya ide proyek, tawaran kerja sama, atau sekadar ingin menyapa? Pintu saya selalu terbuka untuk diskusi bermanfaat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs space-y-4">
              <h3 className="text-base font-bold text-foreground">Saluran Komunikasi Langsung</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Anda dapat mengirim pesan melalui formulir atau menghubungi saya secara langsung via email dan platform media sosial.
              </p>

              {/* Email Address with Copy Button */}
              <div className="p-3 rounded-xl bg-muted/60 border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-foreground truncate select-all">
                    {emailAddress}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-card border border-border hover:bg-accent text-foreground transition-all duration-200 shrink-0 flex items-center gap-1.5 min-h-[36px]"
                  aria-label="Salin alamat email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Direct Chat Card */}
              <div className="p-3 rounded-xl bg-muted/60 border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                    <SiWhatsapp className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="font-mono text-xs sm:text-sm text-foreground font-semibold">0857-7330-1211</p>
                    <p className="text-[11px] text-muted-foreground">WhatsApp Chat Langsung</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/6285773301211?text=Halo%20Andreas,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20atau%20peluang%20kerja%20sama."
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-200 shrink-0 flex items-center gap-1.5 min-h-[36px]"
                  aria-label="Chat WhatsApp langsung"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
                  Tautan Profil
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="https://github.com/Zyuuxyncool"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-card border border-border hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-between group transition-colors min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-foreground" />
                      <span className="text-xs font-semibold text-foreground">GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>

                  <a
                    href="https://www.instagram.com/andreas_athallah.id"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-card border border-border hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-between group transition-colors min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      <span className="text-xs font-semibold text-foreground">Instagram</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                </div>
              </div>

            </div>

            {/* Availability status */}
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <p className="text-xs text-foreground font-medium">
                Aktif bekerja dan terbuka untuk diskusi peluang proyek konsultasi atau freelance.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground block">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground block">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px] transition-colors"
                    placeholder="email@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground block">
                  Pesan atau Detail Proyek
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-muted/40 border border-border text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors resize-none"
                  placeholder="Ceritakan tentang kebutuhan proyek, teknologi yang diinginkan, atau pertanyaan Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm disabled:opacity-70 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Mengirim Pesan...</span>
                  </>
                ) : submitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Pesan Berhasil Terkirim ke Email!</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pesan Sekarang</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {errorMessage && (
                <p className="text-xs text-rose-500 text-center font-medium">
                  {errorMessage}
                </p>
              )}

              {submitted && (
                <p className="text-xs text-emerald-500 dark:text-emerald-400 text-center font-medium">
                  Terima kasih! Pesan Anda telah terkirim langsung ke inbox email Andreas.
                </p>
              )}

              <p className="text-[11px] text-center text-muted-foreground">
                Pesan akan otomatis diteruskan secara langsung ke inbox email andreasnation970@gmail.com.
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

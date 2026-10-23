import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Github, Instagram, Mail, ShoppingBag } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen font-sans text-foreground relative selection:bg-primary/20 selection:text-primary">
        <Navbar />
        
        <main className="flex flex-col relative overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <footer className="py-12 px-4 border-t border-border bg-card/40 backdrop-blur-sm mt-16 text-sm text-muted-foreground">
          <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-semibold text-foreground">Andreas Athallah</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Full-Stack Developer • Sidoarjo & Surabaya, Indonesia
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://shop.andreas-athallah.web.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-emerald-500 transition-colors"
                aria-label="Toko Digital"
                title="Toko Digital (Joki & Gemini)"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Zyuuxyncool"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/andreas_athallah.id"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6285773301211?text=Halo%20Andreas,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20atau%20peluang%20kerja%20sama."
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="mailto:andreasnation970@gmail.com"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Andreas Athallah. Dibuat dengan presisi dan performa tinggi.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;

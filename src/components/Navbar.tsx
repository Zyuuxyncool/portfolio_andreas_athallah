import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Code2 } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled ? "glass-card w-full max-w-3xl" : "w-full"
        }`}>
          <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Code2 className="w-5 h-5" />
            </div>
            <span>Andreas Athallah</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Placeholder for symmetry when not scrolled, or hidden on mobile */}
          <div className="w-8 md:hidden" />
        </div>
      </div>
    </motion.header>
  );
}

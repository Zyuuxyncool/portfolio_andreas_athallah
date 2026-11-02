import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const STORAGE_KEY = "andreas_athallah_portfolio_splash_seen";

interface SplashScreenProps {
  storageType?: "session" | "local";
  duration?: number;
  onComplete?: () => void;
}

export function SplashScreen({
  storageType = "session",
  duration = 2800,
  onComplete,
}: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("splash") === "true") return true;
      const storage = storageType === "local" ? localStorage : sessionStorage;
      return storage.getItem(STORAGE_KEY) !== "true";
    } catch {
      return false;
    }
  });

  const [phase, setPhase] = useState<"intro" | "reveal" | "done">("intro");
  const progressValue = useMotionValue(0);
  const progressWidth = useTransform(progressValue, (v) => `${v * 100}%`);
  const [displayPercent, setDisplayPercent] = useState(0);
  const rafRef = useRef<number>(0);

  const markAsSeen = useCallback(() => {
    try {
      const storage = storageType === "local" ? localStorage : sessionStorage;
      storage.setItem(STORAGE_KEY, "true");
    } catch { /* ignore */ }
  }, [storageType]);

  const handleDismiss = useCallback(() => {
    markAsSeen();
    setPhase("reveal");
    setTimeout(() => {
      setPhase("done");
      setIsVisible(false);
      onComplete?.();
    }, 900);
  }, [markAsSeen, onComplete]);

  useEffect(() => {
    if (isVisible && phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isVisible, phase]);

  useEffect(() => {
    if (!isVisible || phase !== "intro") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleDismiss();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible, phase, handleDismiss]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).replaySplash = () => {
        try { sessionStorage.removeItem(STORAGE_KEY); localStorage.removeItem(STORAGE_KEY); location.reload(); } catch {}
      };
    }
  }, []);

  useEffect(() => {
    if (!isVisible || phase !== "intro") return;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      progressValue.set(eased);
      setDisplayPercent(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(handleDismiss, 400);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, phase, duration, handleDismiss, progressValue]);

  if (!isVisible || phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100]"
        >
          {/* Split curtain */}
          <motion.div className="absolute inset-0 flex" initial={false}>
            <motion.div
              className="w-1/2 h-full bg-background relative overflow-hidden"
              animate={phase === "reveal" ? { x: "-100%" } : { x: "0%" }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 border-r border-border/30" />
              <div className="absolute -top-32 right-0 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[250px] bg-secondary/6 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
            </motion.div>
            <motion.div
              className="w-1/2 h-full bg-background relative overflow-hidden"
              animate={phase === "reveal" ? { x: "100%" } : { x: "0%" }}
              transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 border-l border-border/30" />
              <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
              <div className="absolute -bottom-20 right-0 w-[300px] h-[250px] bg-secondary/6 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
            </motion.div>
          </motion.div>

          {/* Center content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
            animate={phase === "reveal" ? { opacity: 0, scale: 0.92 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeIn" }}
          >
            {/* Skip */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              onClick={handleDismiss}
              className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground bg-card/80 backdrop-blur-md border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[36px]"
              title="Lewati (Esc)"
            >
              <span>Lewati</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded bg-muted text-muted-foreground border border-border">
                Esc
              </kbd>
            </motion.button>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.21, 1.02, 0.73, 1] }}
              className="w-full max-w-xs"
            >
              <div className="rounded-3xl p-5 sm:p-6 bg-card border border-border shadow-lg space-y-5">

                {/* Monogram + glow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="relative"
                  >
                    {/* Subtle glow ring behind */}
                    <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {/* SVG animated code brackets + AA */}
                      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                        <motion.path
                          d="M10 13L4 20L10 27"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.25 }}
                        />
                        <motion.path
                          d="M30 13L36 20L30 27"
                          stroke="hsl(var(--secondary))"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.25 }}
                        />
                        <motion.text
                          x="20"
                          y="24"
                          textAnchor="middle"
                          fill="hsl(var(--foreground))"
                          fontSize="11"
                          fontWeight="bold"
                          fontFamily="var(--font-mono, monospace)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                        >
                          AA
                        </motion.text>
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Name + subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center space-y-1"
                >
                  <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight">
                    Andreas <span className="text-primary">Athallah</span>
                  </h1>
                  <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Full-Stack Software Engineer</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  </div>
                </motion.div>

                {/* Tech tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="flex flex-wrap items-center justify-center gap-1.5 pt-1 border-t border-border"
                >
                  {["Laravel", "Vue.js", "Bootstrap", "Kotlin"].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.07, duration: 0.35 }}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted text-foreground border border-border/80"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Progress */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="relative w-full h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                      style={{ width: progressWidth }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground font-mono truncate max-w-[200px]">
                      {displayPercent < 35
                        ? "Menginisialisasi portofolio..."
                        : displayPercent < 70
                        ? "Memuat komponen antarmuka..."
                        : displayPercent < 98
                        ? "Menyiapkan pengalaman..."
                        : "Selamat datang."}
                    </span>
                    <span className="font-mono font-semibold text-primary tabular-nums">
                      {displayPercent}%
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom identity */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="mt-6 text-[11px] font-mono text-muted-foreground tracking-wide"
            >
              andreas-athallah<span className="text-muted-foreground/60">.web.id</span>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

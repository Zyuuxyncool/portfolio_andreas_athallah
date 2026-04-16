import { motion } from "framer-motion";
import { useState, useEffect, useRef, type MouseEvent } from "react";
import profilePhoto from "@assets/WhatsApp_Image_2026-04-15_at_21.30.20_1776265264356.jpeg";

function TypingName() {
  const fullName = "Andreas Athallah";
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting" | "pause2">("typing");
  const indexRef = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (indexRef.current < fullName.length) {
        timer = setTimeout(() => {
          indexRef.current += 1;
          setDisplayed(fullName.slice(0, indexRef.current));
        }, 100);
      } else {
        timer = setTimeout(() => setPhase("pause"), 1500);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("deleting"), 200);
    } else if (phase === "deleting") {
      if (indexRef.current > 0) {
        timer = setTimeout(() => {
          indexRef.current -= 1;
          setDisplayed(fullName.slice(0, indexRef.current));
        }, 55);
      } else {
        timer = setTimeout(() => setPhase("pause2"), 500);
      }
    } else if (phase === "pause2") {
      timer = setTimeout(() => setPhase("typing"), 200);
    }
    return () => clearTimeout(timer);
  }, [phase, displayed]);

  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.85em] rounded-sm align-middle ml-[2px]"
        style={{
          background: "linear-gradient(to bottom, #7c3aed, #06b6d4)",
          animation: "blink 0.7s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

function PhotoFrame() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });

  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setCanHover(hoverQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    update();
    hoverQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      hoverQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (canHover || reducedMotion) return;

    let frameId = 0;
    let active = true;
    const start = performance.now();

    const animate = (now: number) => {
      if (!active) return;
      const t = (now - start) / 1000;
      const x = Math.sin(t * 0.95) * 5;
      const y = Math.cos(t * 1.1) * 7;

      setTilt({
        x,
        y,
        glowX: 50 + y * 2.5,
        glowY: 50 - x * 2.5,
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      active = false;
      cancelAnimationFrame(frameId);
    };
  }, [canHover, reducedMotion]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;
    const strength = 11;

    setTilt({
      x: -(relativeY * 2 - 1) * strength,
      y: (relativeX * 2 - 1) * strength,
      glowX: relativeX * 100,
      glowY: relativeY * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  return (
    <div className="relative flex items-center justify-center" style={{ perspective: "1100px" }}>
      <style>{`
        @keyframes border-spin {
          to { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .gradient-border-box {
          position: relative;
          border-radius: 1.5rem;
        }
        .gradient-border-box::before,
        .gradient-border-box::after {
          content: '';
          position: absolute;
          border-radius: inherit;
        }
        .gradient-border-box::before {
          inset: -3px;
          background: linear-gradient(var(--angle, 0deg), #7c3aed, #06b6d4, #a855f7, #7c3aed);
          animation: border-spin 3s linear infinite;
          z-index: 0;
        }
        .gradient-border-box::after {
          inset: -3px;
          background: linear-gradient(var(--angle, 0deg), #7c3aed, #06b6d4, #a855f7, #7c3aed);
          animation: border-spin 3s linear infinite;
          filter: blur(16px);
          opacity: 0.5;
          z-index: -1;
        }
        .photo-inner {
          position: relative;
          z-index: 1;
          border-radius: calc(1.5rem - 3px);
          overflow: hidden;
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          18% { opacity: 0.45; }
          40% { opacity: 0; }
          100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
      `}</style>

      {/* Ambient glow background */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "280px",
          height: "280px",
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.15) 50%, transparent 75%)",
          filter: "blur(20px)",
          borderRadius: "50%",
        }}
      />

      {/* Decorative corner dots */}
      {[
        { top: "-18px", left: "-18px", delay: "0s" },
        { top: "-18px", right: "-18px", delay: "0.5s" },
        { bottom: "-18px", left: "-18px", delay: "1s" },
        { bottom: "-18px", right: "-18px", delay: "1.5s" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full z-20"
          style={{
            ...pos,
            background: i % 2 === 0 ? "#7c3aed" : "#06b6d4",
            boxShadow: `0 0 10px 3px ${i % 2 === 0 ? "rgba(124,58,237,0.8)" : "rgba(6,182,212,0.8)"}`,
            animation: `float-dot 2s ease-in-out infinite`,
            animationDelay: pos.delay,
          }}
        />
      ))}

      {/* Main gradient border frame */}
      <div
        ref={frameRef}
        onMouseEnter={() => canHover && setIsHovering(true)}
        onMouseMove={(event) => canHover && handleMouseMove(event)}
        onMouseLeave={handleMouseLeave}
        className="relative [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.03 : 1})`,
          transition: isHovering || !canHover
            ? "transform 90ms linear"
            : "transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          className="pointer-events-none absolute -inset-8 z-0"
          style={{
            transform: `translate3d(${tilt.y * -1.7}px, ${tilt.x * 1.7}px, -35px)`,
            filter: "blur(22px)",
            opacity: isHovering || !canHover ? 0.75 : 0.42,
            transition: "opacity 280ms ease",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.26) 0%, rgba(124,58,237,0.22) 45%, transparent 75%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem]"
          style={{
            background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,255,255,0.28), rgba(168,85,247,0.13) 30%, transparent 58%)`,
            opacity: isHovering || !canHover ? 1 : 0,
            transition: "opacity 220ms ease",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[1.5rem] overflow-hidden"
          style={{
            opacity: isHovering || !canHover ? 1 : 0,
            transition: "opacity 260ms ease",
          }}
        >
          <span
            className="absolute inset-y-0 w-[42%]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.36) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer-sweep 2.8s ease-in-out infinite",
            }}
          />
        </div>

        <div className="gradient-border-box w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[315px] lg:h-[315px]">
          <div className="photo-inner w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[315px] lg:h-[315px]">
            <img
              src={profilePhoto}
              alt="Andreas Athallah"
              className="w-full h-full object-cover object-top"
              style={{
                transform: isHovering || !canHover ? "translateZ(28px) scale(1.04)" : "translateZ(0) scale(1)",
                transition: "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
        style={{
          background: "rgba(10,10,20,0.85)",
          border: "1px solid rgba(124,58,237,0.5)",
          backdropFilter: "blur(12px)",
          borderRadius: "999px",
          padding: "6px 16px",
          boxShadow: "0 0 20px rgba(124,58,237,0.3)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400 tracking-wide">Siap untuk bekerja</span>
        </div>
      </motion.div>
    </div>
  );
}

const fireflies = [
  { top: "12%", left: "14%", size: 4, delay: "0s", duration: "6.8s" },
  { top: "20%", left: "28%", size: 3, delay: "0.9s", duration: "8.1s" },
  { top: "31%", left: "8%", size: 5, delay: "0.4s", duration: "7.2s" },
  { top: "44%", left: "22%", size: 3, delay: "1.3s", duration: "9.2s" },
  { top: "60%", left: "10%", size: 4, delay: "2.4s", duration: "7.4s" },
  { top: "74%", left: "30%", size: 5, delay: "0.7s", duration: "8.7s" },
  { top: "18%", left: "60%", size: 4, delay: "1.6s", duration: "6.9s" },
  { top: "35%", left: "72%", size: 3, delay: "2.2s", duration: "9.4s" },
  { top: "48%", left: "84%", size: 5, delay: "0.5s", duration: "7.8s" },
  { top: "66%", left: "64%", size: 4, delay: "1.1s", duration: "8.5s" },
  { top: "78%", left: "82%", size: 3, delay: "2.7s", duration: "9.7s" },
  { top: "84%", left: "52%", size: 4, delay: "1.9s", duration: "7.6s" },
];

const bonusFireflies = [
  { top: "8%", left: "48%", size: 3, delay: "0.2s", duration: "8.8s" },
  { top: "16%", left: "76%", size: 4, delay: "1.4s", duration: "7.9s" },
  { top: "26%", left: "38%", size: 3, delay: "2.1s", duration: "9.6s" },
  { top: "39%", left: "56%", size: 5, delay: "0.8s", duration: "7.1s" },
  { top: "53%", left: "18%", size: 3, delay: "1.9s", duration: "8.4s" },
  { top: "62%", left: "44%", size: 4, delay: "2.8s", duration: "9.1s" },
  { top: "72%", left: "70%", size: 3, delay: "1.2s", duration: "7.7s" },
  { top: "88%", left: "24%", size: 4, delay: "0.6s", duration: "8.9s" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  const visibleFireflies = isHeroVisible ? [...fireflies, ...bonusFireflies] : fireflies;

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-start md:items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <style>{`
          @keyframes firefly-drift {
            0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
            25% { transform: translate3d(12px, -16px, 0) scale(1.08); }
            50% { transform: translate3d(-8px, -28px, 0) scale(0.92); }
            75% { transform: translate3d(-14px, -8px, 0) scale(1.05); }
          }
          @keyframes firefly-blink {
            0%, 100% { opacity: 0.2; }
            30% { opacity: 0.95; }
            55% { opacity: 0.45; }
            75% { opacity: 1; }
          }
        `}</style>
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
        {visibleFireflies.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: index % 2 === 0 ? "#5eead4" : "#a78bfa",
              boxShadow:
                index % 2 === 0
                  ? "0 0 14px rgba(94,234,212,0.9), 0 0 28px rgba(94,234,212,0.45)"
                  : "0 0 14px rgba(167,139,250,0.9), 0 0 28px rgba(167,139,250,0.45)",
              opacity: isHeroVisible ? 1 : 0.75,
              animation: `firefly-drift ${dot.duration} ease-in-out ${dot.delay} infinite, firefly-blink ${Number.parseFloat(dot.duration) * 0.58}s ease-in-out ${dot.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 z-10 relative">
        {/* Mobile: photo on top, then text. Desktop: text left, photo right */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-16">

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left w-full mt-2 md:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-5 inline-block"
            >
              <span
                className="px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
                style={{
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.35)",
                  color: "#a78bfa",
                  backdropFilter: "blur(8px)",
                }}
              >
                Full-Stack Developer
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.15]">
              Halo, saya
              <br />
              <TypingName />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0"
            >
              Saya membangun pengalaman digital yang menarik dengan perpaduan desain modern dan rekayasa perangkat lunak yang kuat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-center"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "white" }}
              >
                Hubungi Saya
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Lihat Proyek
              </a>
            </motion.div>
          </motion.div>

          {/* Photo Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-shrink-0 flex justify-center mt-2 md:mt-0"
          >
            <PhotoFrame />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

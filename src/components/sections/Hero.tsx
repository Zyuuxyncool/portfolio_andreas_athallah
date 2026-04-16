import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  return (
    <div className="relative flex items-center justify-center">
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
      <div className="gradient-border-box w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[315px] lg:h-[315px]">
        <div className="photo-inner w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[315px] lg:h-[315px]">
          <img
            src={profilePhoto}
            alt="Andreas Athallah"
            className="w-full h-full object-cover object-top"
          />
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

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-start md:items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />
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

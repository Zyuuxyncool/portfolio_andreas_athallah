type FirefliesProps = {
  className?: string;
  count?: number;
  variant?: "default" | "aqua" | "violet" | "warm";
};

const baseFireflies = [
  { top: "12%", left: "8%", size: 4, delay: "0s", duration: "7.4s" },
  { top: "22%", left: "18%", size: 3, delay: "0.8s", duration: "8.8s" },
  { top: "34%", left: "82%", size: 4, delay: "1.4s", duration: "7.9s" },
  { top: "48%", left: "12%", size: 3, delay: "2.1s", duration: "9.2s" },
  { top: "63%", left: "78%", size: 5, delay: "0.5s", duration: "8.1s" },
  { top: "78%", left: "24%", size: 3, delay: "1.6s", duration: "7.7s" },
  { top: "84%", left: "58%", size: 4, delay: "2.4s", duration: "9.4s" },
  { top: "16%", left: "64%", size: 3, delay: "0.3s", duration: "8.5s" },
  { top: "40%", left: "46%", size: 4, delay: "1.2s", duration: "7.1s" },
  { top: "70%", left: "42%", size: 3, delay: "2.6s", duration: "8.9s" },
  { top: "26%", left: "90%", size: 4, delay: "1.8s", duration: "7.6s" },
  { top: "58%", left: "6%", size: 3, delay: "0.9s", duration: "9.1s" },
];

const variantStyles = {
  default: {
    primary: "#5eead4",
    secondary: "#a78bfa",
    blur: "rgba(124,58,237,0.14)",
  },
  aqua: {
    primary: "#22d3ee",
    secondary: "#5eead4",
    blur: "rgba(34,211,238,0.14)",
  },
  violet: {
    primary: "#a78bfa",
    secondary: "#c084fc",
    blur: "rgba(167,139,250,0.14)",
  },
  warm: {
    primary: "#f59e0b",
    secondary: "#fb7185",
    blur: "rgba(245,158,11,0.14)",
  },
} as const;

export function Fireflies({ className = "", count = 12, variant = "default" }: FirefliesProps) {
  const visibleFireflies = baseFireflies.slice(0, Math.max(0, count));
  const palette = variantStyles[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <style>{`
        @keyframes firefly-drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          25% { transform: translate3d(10px, -14px, 0) scale(1.07); }
          50% { transform: translate3d(-8px, -24px, 0) scale(0.92); }
          75% { transform: translate3d(-12px, -8px, 0) scale(1.03); }
        }
        @keyframes firefly-blink {
          0%, 100% { opacity: 0.15; }
          30% { opacity: 1; }
          55% { opacity: 0.4; }
          75% { opacity: 0.95; }
        }
      `}</style>

      {visibleFireflies.map((dot, index) => {
        const isPrimary = index % 2 === 0;
        const glowColor = isPrimary ? palette.primary : palette.secondary;

        return (
          <div
            key={`${dot.top}-${dot.left}-${index}`}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              background: glowColor,
              boxShadow: `0 0 12px ${glowColor}E6, 0 0 26px ${glowColor}73`,
              animation: `firefly-drift ${dot.duration} ease-in-out ${dot.delay} infinite, firefly-blink ${Number.parseFloat(dot.duration) * 0.58}s ease-in-out ${dot.delay} infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
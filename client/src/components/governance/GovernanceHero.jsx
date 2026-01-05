import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LINES = [
  "Governance is not control.",
  "It is stewardship.",
  "CarbonChain enforces the rest.",
];

export default function GovernanceHero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

  // ===== rotating headline =====
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % LINES.length);
        setAnimate(true);
      }, 500);
    }, 3600);

    return () => clearInterval(interval);
  }, []);

  // ===== hide arrow on scroll =====
  useEffect(() => {
    const onScroll = () => {
      setShowArrow(window.scrollY < 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = LINES[index].split(" ");

  return (
    <section className="relative overflow-hidden bg-black min-h-screen flex items-center">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,120,0.18),transparent_45%)] animate-[pulse_16s_ease-in-out_infinite]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/95" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-28 w-full">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-primary/80 text-xs mb-6">
            Governance
          </p>

          {/* ===== FIXED HEADLINE SPACE (CRITICAL) ===== */}
          <div className="mb-10 min-h-[8.5rem] md:min-h-[10rem]">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block mr-3 transition-all duration-500",
                    animate
                      ? "opacity-100 translate-x-0 blur-0"
                      : "opacity-0 translate-x-4 blur-sm",
                  ].join(" ")}
                >
                  {word === "CarbonChain" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
            CarbonChain governance exists to guide the network responsibly — not
            to rewrite its economic or environmental guarantees.
          </p>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div
        className={[
          "absolute bottom-20 left-1/2 -translate-x-1/2 z-20",
          "transition-all duration-500",
          showArrow
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <ChevronDown
          size={39}
          className="text-white/60 animate-[bounceSoft_2.2s_ease-in-out_infinite]"
        />
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.85; }
            50% { opacity: 1; }
          }
          @keyframes bounceSoft {
            0%, 100% { transform: translate(-50%, 0); opacity: 0.6; }
            50% { transform: translate(-50%, 10px); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
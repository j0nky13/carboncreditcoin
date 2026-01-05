import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LINES = [
  "Validators secure the chain.",
  "They enforce finality.",
  "CarbonChain depends on them.",
];

export default function ValidatorsHero() {
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
    const onScroll = () => setShowArrow(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = LINES[index].split(" ");

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/95" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-28 w-full">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-primary/80 text-xs mb-6">
            Validators
          </p>

          {/* ===== FIXED HEADLINE SPACE (NO LAYOUT SHIFT) ===== */}
          <div className="mb-10 min-h-[9rem] md:min-h-[11rem]">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block mr-3 transition-all duration-500",
                    animate
                      ? "opacity-100 blur-0"
                      : "opacity-0 blur-sm",
                  ].join(" ")}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
            Validators are responsible for block production, consensus security,
            and enforcing CarbonChain’s protocol-level rules.
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
          size={36}
          className="text-white/60 animate-bounce"
        />
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const LINES = [
  "Blockchains execute transactions.",
  "CarbonChain enforces consequences.",
  "That is the difference.",
];

export default function HowItWorksHero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

  /* ===== rotating headline ===== */
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

  /* ===== hide arrow on scroll ===== */
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
      {/* ===== BACKGROUND SYSTEM ===== */}
      <div className="absolute inset-0 bg-black" />

      {/* ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,120,0.18),transparent_45%)] animate-[pulse_14s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,120,0.12),transparent_50%)] animate-[pulse_18s_ease-in-out_infinite]" />

      {/* floating mass */}
      <div className="absolute left-[10%] top-[25%] w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
      <div className="absolute right-[8%] bottom-[18%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-[float_26s_ease-in-out_infinite_reverse]" />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:160px_160px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/95" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-28 w-full">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-primary/80 text-xs mb-6">
            How it works
          </p>

          {/* ===== FIXED HEADLINE SPACE ===== */}
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

          {/* support copy */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
            CarbonChain behaves like a standard Layer-1 blockchain — until
            protocol rules convert on-chain activity into auditable,
            non-optional environmental impact.
          </p>

          <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
            This page explains how transactions move through the system, how gas
            becomes impact, and why enforcement matters.
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
          size={38}
          className="text-white/60 animate-[bounceSoft_2.2s_ease-in-out_infinite]"
        />
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-40px); }
            100% { transform: translateY(0px); }
          }
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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const lines = [
  "Economic activity has consequences.",
  "Blockchains usually ignore them.",
  "CarbonChain does not.",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % lines.length);
        setAnimate(true);
      }, 500);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const words = lines[index].split(" ");

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      {/* base */}
      <div className="absolute inset-0 bg-black" />

      {/* animated gradient drift */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,120,0.22),transparent_40%)] animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,120,0.14),transparent_45%)] animate-[pulse_16s_ease-in-out_infinite]" />

      {/* floating energy blobs */}
      <div className="absolute left-[10%] top-[20%] w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute right-[5%] bottom-[15%] w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl animate-[float_22s_ease-in-out_infinite_reverse]" />

      {/* diagonal system sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(0,255,120,0.06)_30%,transparent_55%,rgba(0,255,120,0.04)_75%,transparent_100%)]" />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:140px_140px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 md:pt-44 pb-24">
        <div className="min-h-[65vh] flex items-end">
          <div className="max-w-3xl">
            {/* ===== HEADLINE: WORD-LEVEL MOTION ===== */}
            <h1 className="mb-10 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block mr-3 transition-all duration-500",
                    animate
                      ? "opacity-100 translate-x-0 blur-0"
                      : "opacity-0 translate-x-4 blur-sm",
                    "delay-[calc(var(--i)*80ms)]",
                  ].join(" ")}
                  style={{ "--i": i }}
                >
                  {word === "CarbonChain" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* ===== SUPPORT COPY ===== */}
            <p className="text-gray-200/85 text-lg md:text-xl leading-relaxed max-w-xl">
              CarbonChain is a Layer-1 blockchain designed to bind on-chain
              activity to measurable, verifiable carbon impact — enforced at the
              protocol level, not offset later.
            </p>

            {/* ===== ACTIONS ===== */}
            <div className="mt-12 flex flex-wrap gap-10 text-lg">
              <Link
                to="/carbonchain"
                className="text-primary hover:underline underline-offset-8 transition"
              >
                Enter the protocol →
              </Link>

              <Link
                to="/tokenomics"
                className="text-gray-200/75 hover:text-primary transition"
              >
                View economic model →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-40px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
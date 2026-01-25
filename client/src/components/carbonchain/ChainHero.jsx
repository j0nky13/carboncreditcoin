import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const lines = [
  "CarbonChain is a protocol.",
  "It binds value to impact.",
  "Every transaction matters.",
];

export default function ChainHero() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY <= 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = lines[index].split(" ");

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden overflow-x-hidden -mt-20 md:-mt-24">
      {/* ================= BACKGROUND ================= */}

      {/* base */}
      <div className="absolute inset-0 bg-black" />

      {/* animated gradient drift */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(151,255,0,0.22),transparent_40%)] animate-[pulse_12s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(151,255,0,0.14),transparent_45%)] animate-[pulse_16s_ease-in-out_infinite]" />

      {/* floating energy blobs */}
      <div className="absolute left-[10%] top-[20%] w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />
      <div className="absolute right-[5%] bottom-[15%] w-[520px] h-[520px] bg-primary/5 rounded-full blur-3xl animate-[float_22s_ease-in-out_infinite_reverse]" />

      {/* diagonal system sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(151,255,0,0.06)_30%,transparent_55%,rgba(151,255,0,0.04)_75%,transparent_100%)]" />

      {/* grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:140px_140px]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-64 md:pt-72 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-end">
          
          {/* LEFT — MESSAGE */}
          <div className="lg:col-span-7">
            {/* ===== WORD-LEVEL HEADLINE ===== */}
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

            {/* SUPPORT COPY */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
              CarbonChain is a Layer-1 blockchain where economic activity
              directly funds real-world environmental action — enforced by the
              protocol itself, not external offsets.
            </p>

            {/* ACTIONS */}
            <div className="mt-12 flex flex-wrap gap-10 text-lg">
              <Link
                to="/how-it-works"
                className="text-primary hover:underline underline-offset-8 transition"
              >
                See how the chain works →
              </Link>

              <Link
                to="/nodes"
                className="text-white/70 hover:text-primary transition"
              >
                Run a validator →
              </Link>
            </div>
          </div>

          {/* RIGHT — CONTEXT */}
          <div className="lg:col-span-5">
            <div className="border-l border-white/15 pl-6 space-y-6 text-sm text-white/70">
              <div>
                <p className="uppercase tracking-widest text-primary/80 text-xs mb-1">
                  Network
                </p>
                <p>Public Layer-1 • Cosmos SDK • IBC native</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-primary/80 text-xs mb-1">
                  Economic Logic
                </p>
                <p>Gas fees trigger on-chain sustainability actions</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-primary/80 text-xs mb-1">
                  Environmental Rule
                </p>
                <p>$100 in gas → 1 tree planted and logged</p>
              </div>

              <div>
                <p className="uppercase tracking-widest text-primary/80 text-xs mb-1">
                  Design Goal
                </p>
                <p>Verifiable impact • Long-term utility • Transparency</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showArrow && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 transition-all duration-500">
          <ChevronDown
            size={36}
            className="text-white/60 animate-bounce"
          />
        </div>
      )}

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
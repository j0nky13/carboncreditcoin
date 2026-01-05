import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STEPS = [
  {
    k: "tx",
    label: "Transaction",
    title: "A user submits a transaction",
    body:
      "Any on-chain action begins as a signed transaction: transfer, stake, smart contract call, etc.",
    meta: "Wallet → Mempool",
  },
  {
    k: "validate",
    label: "Consensus",
    title: "Validators include it in a block",
    body:
      "Validators propose and confirm blocks using Cosmos consensus, keeping the ledger consistent and verifiable.",
    meta: "Mempool → Block",
  },
  {
    k: "fees",
    label: "Gas",
    title: "Gas fees are collected",
    body:
      "Gas fees are paid for execution and security. CarbonChain treats fees as measurable system input — not just revenue.",
    meta: "Execution → Fees",
  },
  {
    k: "rule",
    label: "Impact Rule",
    title: "Protocol checks impact thresholds",
    body:
      "When the network crosses predefined thresholds (ex: $100 in gas collected), the protocol emits an auditable event.",
    meta: "Threshold → Event",
  },
  {
    k: "log",
    label: "On-Chain Proof",
    title: "Impact is recorded on-chain",
    body:
      "Tree-planting and other sustainability actions are logged as on-chain records for transparency and later verification.",
    meta: "Event → Proof",
  },
];

export default function HowItWorksFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const current = STEPS[active];

  return (
    <section className="relative max-w-7xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-6 space-y-5">
          <p className="uppercase tracking-widest text-primary/80 text-xs">
            System Flow
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How CarbonChain works
          </h2>

          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            CarbonChain behaves like a standard Layer-1 — until protocol rules
            convert activity into auditable environmental impact.
          </p>
        </div>

        <div className="lg:col-span-6 lg:justify-self-end">
          <Link
            to="/how-it-works"
            className="text-primary hover:underline underline-offset-8 transition text-base"
          >
            Deep dive documentation →
          </Link>
        </div>
      </div>

      {/* ===== MOBILE: VERTICAL FLOW ===== */}
      <div className="mt-14 space-y-6 md:hidden">
        {STEPS.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.k}
              onClick={() => setActive(i)}
              className="w-full text-left"
            >
              <div className="flex items-start gap-4">
                <div className="relative mt-1">
                  <div
                    className={[
                      "w-3 h-3 rounded-full",
                      isActive ? "bg-primary" : "bg-white/30",
                    ].join(" ")}
                  />
                  {isActive && (
                    <span className="absolute -inset-3 rounded-full border border-primary/30 animate-[pulseRing_1.6s_ease-in-out_infinite]" />
                  )}
                </div>

                <div>
                  <p
                    className={[
                      "uppercase tracking-widest text-xs mb-1",
                      isActive ? "text-primary/90" : "text-white/50",
                    ].join(" ")}
                  >
                    {s.label}
                  </p>

                  <h3
                    className={[
                      "font-semibold",
                      isActive ? "text-white" : "text-white/70",
                    ].join(" ")}
                  >
                    {s.title}
                  </h3>

                  {isActive && (
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {s.body}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ===== DESKTOP: FIXED GRID FLOW (STABLE) ===== */}
<div className="hidden md:block mt-16 relative">
  {/* baseline */}
  <div className="absolute left-0 right-0 top-[34px] h-px bg-white/10 z-0" />

  {/* tracer (behind everything) */}
  <div className="absolute left-0 right-0 top-[34px] h-px overflow-hidden z-0 pointer-events-none">
    <div className="h-full w-[28%] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-[trace_3.6s_linear_infinite]" />
  </div>

  {/* GRID */}
  <div className="grid grid-cols-5 gap-8 relative z-10">
    {STEPS.map((s, i) => {
      const isActive = i === active;

      return (
        <button
          key={s.k}
          onClick={() => setActive(i)}
          className="text-left"
        >
          {/* TOP ROW (node + label) */}
          <div className="flex items-center gap-3 h-[34px]">
            {/* NODE WRAPPER — isolates pulse */}
            <div className="relative flex items-center justify-center w-5 h-5">
              <div
                className={[
                  "w-3.5 h-3.5 rounded-full relative z-10 transition-colors",
                  isActive ? "bg-primary" : "bg-white/25",
                ].join(" ")}
              />

              {isActive && (
                <>
                  {/* pulse lives BEHIND node only */}
                  <span className="absolute inset-0 rounded-full bg-primary/30 animate-[pulseRing_1.6s_ease-in-out_infinite]" />
                  <span className="absolute -inset-3 rounded-full border border-primary/20" />
                </>
              )}
            </div>

            <p
              className={[
                "text-xs uppercase tracking-widest",
                isActive ? "text-primary/90" : "text-white/50",
              ].join(" ")}
            >
              {s.label}
            </p>
          </div>

          {/* CONTENT BLOCK — FIXED HEIGHT */}
         <div className="mt-4 flex flex-col">
  {/* TITLE — reserve exactly 2 lines */}
  <h3
    className={[
      "font-semibold leading-snug",
      "min-h-[3.2em]", // ~2 lines at this font size
      isActive ? "text-white" : "text-white/70",
    ].join(" ")}
  >
    {s.title}
  </h3>

  {/* META — reserve exactly 1 line */}
  <p className="mt-2 text-sm text-white/60 min-h-[1.25em]">
    {s.meta}
  </p>
</div>

          {/* UNDERLINE */}
          <div
            className={[
              "mt-5 h-[2px] w-full rounded-full transition-colors",
              isActive ? "bg-primary/80" : "bg-white/10",
            ].join(" ")}
          />
        </button>
      );
    })}
  </div>
</div>

      {/* ===== DETAIL PANEL ===== */}
      <div className="mt-12 border-l border-white/10 pl-6 max-w-3xl">
        <p className="uppercase tracking-widest text-primary/80 text-xs mb-2">
          Step {active + 1} of {STEPS.length}
        </p>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
          {current.title}
        </h3>

        <p className="mt-4 text-white/75 text-lg leading-relaxed">
          {current.body}
        </p>
      </div>

      {/* ===== KEYFRAMES ===== */}
      <style>
        {`
          @keyframes trace {
            0% { transform: translateX(-40%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(140%); opacity: 0; }
          }
          @keyframes pulseRing {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.8); opacity: 0.15; }
          }
        `}
      </style>
    </section>
  );
}
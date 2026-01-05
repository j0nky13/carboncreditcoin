export default function WhatWeReject() {
  return (
    <section className="max-w-5xl mx-auto bg-white/2 border border-white/10 rounded-2xl p-10 space-y-10">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Boundaries
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we reject
        </h2>
      </div>

      {/* ===== REJECTION LIST ===== */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          "Impact that depends on goodwill",
          "Governance that overrides hard guarantees",
          "Carbon offsets without verifiable enforcement",
          "Metrics that exist only in dashboards",
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-4 border border-white/10 rounded-xl p-6 bg-black/20"
          >
            <span className="text-primary font-semibold select-none">—</span>
            <p className="text-white/80 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>

      {/* ===== CLOSING STATEMENT ===== */}
      <p className="text-sm text-white/60 italic max-w-3xl">
        CarbonChain does not optimize for optics. It optimizes for outcomes.
      </p>
    </section>
  );
}
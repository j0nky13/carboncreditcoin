export default function CoreBeliefs() {
  return (
    <section className="max-w-5xl mx-auto space-y-12">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Principles
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Core beliefs
        </h2>
      </div>

      {/* ===== BELIEF GRID ===== */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          "Economic systems should reflect real-world costs",
          "Transparency is a requirement, not a feature",
          "Enforcement must exist below governance",
          "Sustainability should be systemic, not voluntary",
        ].map((belief, i) => (
          <div
            key={i}
            className="border border-white/10 bg-white/2 rounded-xl p-6 flex gap-4"
          >
            <div className="text-primary font-semibold select-none">—</div>
            <p className="text-white/80 leading-relaxed">{belief}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
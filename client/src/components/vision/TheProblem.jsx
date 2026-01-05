export default function TheProblem() {
  return (
    <section className="max-w-4xl mx-auto space-y-10">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Context
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          The problem
        </h2>
      </div>

      {/* ===== BODY ===== */}
      <div className="space-y-6 text-white/80 leading-relaxed">
        <p>
          Most blockchain systems claim neutrality — treating economic activity
          as detached from real-world consequences.
        </p>

        <p>
          Environmental impact is typically deferred to applications, offset
          programs, or external promises that exist outside of protocol
          enforcement.
        </p>
      </div>

      {/* ===== EMPHASIS ===== */}
      <div className="border-l border-primary/40 pl-6">
        <p className="text-white/75 italic">
          The result is a widening gap between activity and accountability.
        </p>
      </div>
    </section>
  );
}
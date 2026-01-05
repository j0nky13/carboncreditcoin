export default function WhyCarbonChainIsDifferent() {
  return (
    <section className="max-w-5xl mx-auto space-y-10 pt-20 border-t border-white/10">
      {/* ===== HEADER ===== */}
      <div className="space-y-3 mx-auto max-w-3xl">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Design philosophy
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Why CarbonChain is different
        </h2>
      </div>

      {/* ===== CONTRAST ===== */}
      <div className="space-y-6 text-white/80 leading-relaxed max-w-3xl mx-auto">
        <p>
          Most blockchains treat environmental impact as an optional layer —
          something promised by applications, delegated to third parties, or
          offset after the fact.
        </p>

        <p>
          CarbonChain takes a fundamentally different approach. Impact
          enforcement is embedded directly into protocol logic, alongside
          consensus and execution.
        </p>
      </div>

      {/* ===== NON-NEGOTIABLES ===== */}
      <div className="bg-white/2 border border-white/10 rounded-xl p-8 space-y-4 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-primary/80">
          Non-negotiable properties
        </p>

        <ul className="space-y-3 text-white/75">
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>No governance vote can disable enforcement</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>No validator can selectively ignore impact rules</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>No application can opt out of protocol thresholds</span>
          </li>
        </ul>
      </div>

      {/* ===== CONCLUSION ===== */}
      <div className="space-y-4 max-w-3xl mx-auto">
        <p className="text-white/80 leading-relaxed">
          The result is a system where economic activity and environmental
          accountability are inseparable — not by promise, but by design.
        </p>

        <p className="text-sm text-white/55 italic">
          CarbonChain does not ask participants to care. It makes impact
          unavoidable.
        </p>
      </div>
    </section>
  );
}
export default function EnforcementLayer() {
  return (
    <section className="max-w-4xl mx-auto space-y-8 border-l-2 border-primary/40 pl-6">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Protocol enforcement layer
        </h2>

        <p className="text-sm uppercase tracking-widest text-primary/80">
          Consensus-level guarantees
        </p>
      </div>

      {/* Core explanation */}
      <div className="space-y-4">
        <p className="text-white/80 leading-relaxed">
          Enforcement on CarbonChain is not handled by applications, validators,
          governance processes, or off-chain actors.
        </p>

        <p className="text-white/75 leading-relaxed">
          Impact rules are embedded directly into consensus logic. Once predefined
          conditions are met, the network is cryptographically required to act.
        </p>
      </div>

      {/* Hard constraint callout */}
      <div className="bg-white/2 rounded-lg p-5 border border-white/10">
        <p className="text-white/70 leading-relaxed">
          Resulting impact events are written to the ledger as permanent,
          auditable records. They cannot be reversed, skipped, or selectively
          enforced.
        </p>
      </div>

      {/* Reinforcement */}
      <p className="text-sm text-white/55 italic">
        This design removes discretion from enforcement and replaces it with
        deterministic protocol behavior.
      </p>
    </section>
  );
}
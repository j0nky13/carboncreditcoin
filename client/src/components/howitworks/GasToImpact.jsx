export default function GasToImpact() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          From gas to impact
        </h2>

        <p className="text-white/70 text-sm uppercase tracking-widest">
          Mandatory protocol behavior
        </p>
      </div>

      {/* Core explanation */}
      <div className="space-y-4">
        <p className="text-white/80 leading-relaxed">
          On CarbonChain, gas fees are treated as measurable system input —
          not discretionary revenue or optional offset funding.
        </p>

        <p className="text-white/75 leading-relaxed">
          As transactions execute, gas fees accumulate at the protocol level.
          When predefined thresholds are crossed (for example,{" "}
          <span className="text-primary font-medium">
            $100 in gas collected
          </span>
          ), the network automatically emits a verifiable on-chain event.
        </p>
      </div>

      {/* Constraint callout */}
      <div className="border-l-2 border-primary/40 pl-6">
        <p className="text-white/70 leading-relaxed">
          These impact events are deterministic. They cannot be skipped,
          delayed, paused, or overridden by governance, validators, or
          off-chain actors.
        </p>
      </div>

      {/* Reinforcement */}
      <p className="text-sm text-white/55 italic">
        Enforcement is embedded in protocol rules — not policy, promises,
        or post-hoc reporting.
      </p>
    </section>
  );
}
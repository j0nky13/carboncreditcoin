export default function SecuritySafeguards() {
  return (
    <section className="max-w-4xl mx-auto px-6 border-t border-white/10 pt-14">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Governance Safety
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Governance safeguards
        </h2>
      </div>

      {/* Core explanation */}
      <div className="space-y-6 text-white/75 leading-relaxed max-w-3xl">
        <p>
          CarbonChain governance incorporates multiple safeguards designed to
          prevent rushed decisions, malicious proposals, or governance capture.
          Changes are intentionally slow, visible, and reviewable before any
          execution occurs.
        </p>

        <p>
          These controls exist to protect users, validators, and the long-term
          integrity of the protocol — even in adversarial conditions.
        </p>
      </div>

      {/* Safeguard list */}
      <ul className="mt-8 space-y-4 text-white/75 max-w-3xl">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Mandatory proposal submission and review periods prior to voting
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Time delays between proposal approval and on-chain execution
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Validator signaling and quorum requirements to prevent low-participation decisions
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Transparent on-chain records for all proposals, votes, and outcomes
          </span>
        </li>
      </ul>

      {/* Closing constraint note */}
      <div className="mt-8 max-w-3xl">
        <p className="text-sm text-white/60 italic leading-relaxed">
          Governance safeguards are designed to reduce systemic risk — not to
          maximize velocity. Security and legitimacy take priority over speed.
        </p>
      </div>
    </section>
  );
}
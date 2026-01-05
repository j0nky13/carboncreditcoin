export default function GovernanceScope() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Defined Authority
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Governance scope
        </h2>
      </div>

      {/* Intro copy */}
      <div className="space-y-6 text-white/75 leading-relaxed max-w-3xl">
        <p>
          Governance on CarbonChain exists to coordinate the network — not to
          rewrite its foundations. Proposals are limited to areas that improve
          operation, alignment, and long-term sustainability without altering
          protocol-enforced guarantees.
        </p>
      </div>

      {/* Scope list */}
      <ul className="mt-8 space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Adjustment of non-critical protocol parameters within predefined
            bounds
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Treasury deployment, grants, and ecosystem funding initiatives
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Network coordination standards and operational best practices
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Upgrade scheduling, version adoption, and validator signaling
          </span>
        </li>
      </ul>

      {/* Closing note */}
      <div className="mt-8 max-w-3xl">
        <p className="text-sm text-white/60 italic leading-relaxed">
          All governance actions remain subordinate to protocol-level rules
          governing supply, security, and environmental enforcement.
        </p>
      </div>
    </section>
  );
}
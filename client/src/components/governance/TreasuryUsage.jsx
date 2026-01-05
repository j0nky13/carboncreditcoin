export default function TreasuryUsage() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Capital Stewardship
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Treasury usage
        </h2>
      </div>

      {/* Core explanation */}
      <div className="space-y-6 text-white/75 leading-relaxed max-w-3xl">
        <p>
          The CarbonChain protocol treasury exists to fund long-term ecosystem
          development, core infrastructure, research initiatives, and verified
          sustainability programs aligned with the network’s mission.
        </p>

        <p>
          Treasury funds are not discretionary reserves. Every allocation must
          be proposed, reviewed, and approved through formal governance
          processes, with execution recorded on-chain for public auditability.
        </p>
      </div>

      {/* Usage categories */}
      <ul className="mt-8 space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Core protocol development and security maintenance
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Validator tooling, infrastructure, and network reliability
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Research, audits, and technical upgrades
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Verified sustainability and environmental impact initiatives
          </span>
        </li>
      </ul>

      {/* Constraint note */}
      <div className="mt-8 max-w-3xl">
        <p className="text-sm text-white/60 italic leading-relaxed">
          Treasury spending cannot override protocol-enforced economic or
          environmental rules. Funds are allocated to extend the system — not
          to alter its guarantees.
        </p>
      </div>
    </section>
  );
}
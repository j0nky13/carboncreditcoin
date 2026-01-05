export default function IncentivesConstraints() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Protocol Design
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Incentives and constraints
        </h2>

        <p className="text-white/75 leading-relaxed">
          CarbonChain aligns long-term network security with disciplined supply
          controls. Incentives are explicit, bounded, and enforced by protocol
          rules — not discretion.
        </p>
      </div>

      {/* ===== TWO-COLUMN BREAKDOWN ===== */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Incentives */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-4">
            Incentives
          </h3>

          <ul className="space-y-4 text-white/70 leading-relaxed">
            <li>
              <span className="text-white font-medium">Validator emissions</span>{" "}
              follow a long-term schedule designed to sustain security without
              excessive inflation.
            </li>

            <li>
              <span className="text-white font-medium">Staking rewards</span>{" "}
              scale with participation, uptime, and correct behavior.
            </li>

            <li>
              <span className="text-white font-medium">Economic activity</span>{" "}
              directly contributes to protocol-defined impact thresholds.
            </li>
          </ul>
        </div>

        {/* Constraints */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-4">
            Constraints
          </h3>

          <ul className="space-y-4 text-white/70 leading-relaxed">
            <li>
              <span className="text-white font-medium">Developer allocations</span>{" "}
              are subject to lockups and vesting defined at genesis.
            </li>

            <li>
              <span className="text-white font-medium">Slashing conditions</span>{" "}
              penalize downtime, misbehavior, and protocol violations.
            </li>

            <li>
              <span className="text-white font-medium">Anti-bot protections</span>{" "}
              operate at the protocol layer to reduce abusive behavior.
            </li>
          </ul>
        </div>
      </div>

      {/* ===== FOOTNOTE ===== */}
      <p className="mt-10 max-w-3xl text-xs text-white/50 italic">
        All incentive schedules, lockups, and enforcement parameters are
        committed on-chain and visible to validators, developers, and users.
      </p>
    </section>
  );
}
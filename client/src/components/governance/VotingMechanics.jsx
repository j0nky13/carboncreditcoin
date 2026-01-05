export default function VotingMechanics() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Participation Model
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Voting mechanics
        </h2>
      </div>

      {/* Core explanation */}
      <div className="space-y-6 text-white/75 leading-relaxed max-w-3xl">
        <p>
          Governance participation on CarbonChain is expected to be
          token-weighted, reflecting economic stake while preserving protocol
          stability. Voting systems are designed to reward long-term alignment,
          not short-term influence.
        </p>

        <p>
          Proposals are subject to quorum thresholds, defined voting windows,
          and clear execution conditions. These constraints exist to prevent
          rushed decisions, governance capture, or low-participation outcomes.
        </p>
      </div>

      {/* Mechanics bullets */}
      <ul className="mt-8 space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Token-weighted voting with safeguards against concentration
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Minimum quorum and participation requirements
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Fixed voting periods to allow review and deliberation
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            On-chain recording of votes and outcomes
          </span>
        </li>
      </ul>

      {/* Forward-looking note */}
      <div className="mt-8 max-w-3xl">
        <p className="text-sm text-white/60 italic leading-relaxed">
          While specific parameters may evolve as the network matures, all
          changes to governance mechanics must themselves pass transparent,
          on-chain approval processes.
        </p>
      </div>
    </section>
  );
}
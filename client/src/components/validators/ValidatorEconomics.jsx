export default function ValidatorEconomics() {
  return (
    <section className="max-w-5xl mx-auto border-l border-primary/40 pl-8 space-y-8">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Incentives & security
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Validator economics
        </h2>
      </div>

      {/* ===== CORE EXPLANATION ===== */}
      <div className="space-y-6 text-white/80 leading-relaxed max-w-3xl">
        <p>
          Validators earn <span className="text-primary font-medium">CO2TAX</span>{" "}
          by participating honestly in block production, transaction validation,
          and consensus.
        </p>

        <p>
          Economic incentives are designed to align validator behavior with
          network security, uptime, and long-term sustainability — not short-term
          extraction.
        </p>
      </div>

      {/* ===== ECONOMIC FLOWS ===== */}
      <div className="bg-white/2 border border-white/10 rounded-xl p-8 space-y-5">
        <p className="text-sm uppercase tracking-widest text-primary/80">
          Reward sources
        </p>

        <ul className="space-y-4 text-white/75">
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              <strong>Block rewards</strong> distributed according to a
              predictable emission schedule
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              <strong>Transaction fees</strong> paid by users for execution and
              network security
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              <strong>Delegated stake</strong> increases validator influence and
              reward share
            </span>
          </li>
        </ul>
      </div>

      {/* ===== CONSTRAINTS ===== */}
      <div className="space-y-5 max-w-3xl">
        <p className="text-white/80 leading-relaxed">
          Rewards are proportional to stake, uptime, and correct participation.
          Validators that fail to meet protocol requirements are penalized
          through slashing and reward reduction.
        </p>

        <p className="text-white/75 leading-relaxed">
          Emissions are capped and decline over time, ensuring validator
          incentives remain sustainable without excessive inflation.
        </p>

        <p className="text-sm text-white/55 italic">
          Validator economics are enforced by protocol logic — not discretionary
          governance decisions.
        </p>
      </div>
    </section>
  );
}
export default function EconomicFlows() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Economic Flow
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          How tokens move through the system
        </h2>

        <p className="text-white/75 leading-relaxed">
          CO2TAX circulates through CarbonChain as a functional system input —
          securing the network, compensating validators, and triggering
          protocol-enforced sustainability actions.
        </p>
      </div>

      {/* ===== FLOW GRID ===== */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {/* Step 1 */}
        <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-primary/80 mb-2">
            Step 1
          </p>
          <h3 className="font-semibold mb-2">Transaction execution</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Users pay CO2TAX as gas to execute transactions, deploy contracts, or
            interact with on-chain applications.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-primary/80 mb-2">
            Step 2
          </p>
          <h3 className="font-semibold mb-2">Validator rewards</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Validators earn CO2TAX for proposing and finalizing blocks, securing
            the network through stake and uptime.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-primary/80 mb-2">
            Step 3
          </p>
          <h3 className="font-semibold mb-2">Protocol accumulation</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Gas fees accumulate at the protocol level and are continuously
            evaluated against predefined impact thresholds.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-primary/80 mb-2">
            Step 4
          </p>
          <h3 className="font-semibold mb-2">Impact execution</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            When thresholds are crossed, CarbonChain emits auditable on-chain
            events that trigger real-world sustainability actions.
          </p>
        </div>
      </div>

      {/* ===== FOOTNOTE ===== */}
      <p className="mt-8 max-w-3xl text-xs text-white/50 italic">
        All economic flows, thresholds, and impact events are transparently
        recorded on-chain and verifiable by any participant.
      </p>
    </section>
  );
}
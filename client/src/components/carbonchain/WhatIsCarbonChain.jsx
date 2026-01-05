export default function WhatIsCarbonChain() {
  return (
    <section className="relative max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT — TITLE + DEFINITION */}
        <div className="lg:col-span-5 space-y-6">
          <p className="uppercase tracking-widest text-primary/80 text-xs">
            Overview
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What is CarbonChain?
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            CarbonChain is a public Layer-1 blockchain where economic activity
            directly funds real-world environmental action.
          </p>

          <p className="text-white/70 leading-relaxed">
            Instead of treating sustainability as an optional offset or external
            promise, CarbonChain enforces environmental impact at the protocol
            level. Every transaction contributes to measurable outcomes —
            transparently recorded on-chain.
          </p>
        </div>

        {/* RIGHT — STRUCTURED EXPLANATION */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* BLOCK 1 */}
          <div className="border-l border-white/10 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              A blockchain with enforced consequences
            </h3>
            <p className="text-white/70 leading-relaxed">
              Most blockchains optimize for speed, fees, or financial incentives
              alone. CarbonChain adds a missing dimension: accountability.
              Economic activity on the network is tied to real-world impact
              through deterministic, auditable rules.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div className="border-l border-white/10 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Built for transparency, not offsets
            </h3>
            <p className="text-white/70 leading-relaxed">
              CarbonChain does not rely on after-the-fact promises or unverifiable
              claims. When predefined thresholds are reached, actions are
              triggered and logged directly by the chain itself.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div className="border-l border-white/10 pl-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Designed for long-term utility
            </h3>
            <p className="text-white/70 leading-relaxed">
              The network is built on the Cosmos SDK with interoperability,
              validator sustainability, and upgradeability in mind. CarbonChain
              is designed to support payments, applications, and infrastructure
              that benefit from provable environmental impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
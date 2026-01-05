export default function SystemOverview() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          CarbonChain at a high level
        </h2>

        <p className="text-white/70 text-sm uppercase tracking-widest">
          Architecture overview
        </p>
      </div>

      {/* Core explanation */}
      <div className="space-y-5 text-white/75 leading-relaxed">
        <p>
          CarbonChain is a Layer-1 blockchain built on the Cosmos SDK and secured
          by proof-of-stake consensus. At its core, it processes transactions,
          reaches finality, and coordinates validators in the same way as other
          modern Cosmos-based networks.
        </p>

        <p>
          This design ensures compatibility with existing tooling, wallets, and
          interoperability standards while maintaining high throughput and
          predictable execution.
        </p>
      </div>

      {/* Differentiation callout */}
      <div className="border-l-2 border-primary/60 pl-6 space-y-4">
        <p className="text-white/85 font-medium">
          Where CarbonChain diverges is enforcement.
        </p>

        <p className="text-white/75 leading-relaxed">
          Environmental and economic outcomes are not optional behaviors layered
          on by applications or governance decisions. They are protocol-level
          guarantees that activate automatically once defined thresholds are
          reached.
        </p>

        <p className="text-white/70 leading-relaxed">
          In other words, CarbonChain does not ask participants to act
          responsibly — it encodes responsibility directly into the system.
        </p>
      </div>
    </section>
  );
}
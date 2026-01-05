export default function TransactionLifecycle() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Transaction lifecycle
        </h2>

        <p className="text-white/70 text-sm uppercase tracking-widest">
          From submission to settlement
        </p>
      </div>

      {/* Lifecycle steps */}
      <div className="space-y-4">
        {[
          "A user submits a signed transaction from a wallet or application",
          "Validators receive the transaction and include it in a proposed block",
          "The block is finalized through proof-of-stake consensus",
          "Gas fees are paid to cover execution and network security",
          "Fees are accumulated at the protocol level",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80 shrink-0" />
            <p className="text-white/75 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="border-l-2 border-white/15 pl-6">
        <p className="text-white/70 leading-relaxed">
          Up to this point, CarbonChain behaves like a conventional Cosmos-based
          network. Transaction handling, finality, and fee mechanics follow
          familiar and battle-tested patterns.
        </p>
      </div>
    </section>
  );
}
export default function ExternalReconciliation() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          External reconciliation
        </h2>

        <p className="text-sm uppercase tracking-widest text-primary/80">
          On-chain trigger, real-world execution
        </p>
      </div>

      <p className="text-white/80 leading-relaxed">
        When CarbonChain records an enforcement event, the protocol does not
        attempt to perform real-world actions directly. Instead, it produces a
        verifiable on-chain signal that external systems can act upon.
      </p>

      <p className="text-white/75 leading-relaxed">
        These signals are consumed by trusted execution partners, auditors, or
        automated services that carry out the corresponding real-world action —
        such as tree planting or sustainability funding.
      </p>

      <div className="border-l border-primary/40 pl-6 text-white/70">
        The blockchain enforces <em>when</em> an action must occur. External
        systems handle <em>how</em> it is executed — with public accountability.
      </div>

      <p className="text-sm text-white/55 italic">
        This separation prevents false claims while preserving cryptographic
        proof.
      </p>
    </section>
  );
}
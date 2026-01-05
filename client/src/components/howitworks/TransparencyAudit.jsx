export default function TransparencyAudit() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Transparency & verification
        </h2>

        <p className="text-sm uppercase tracking-widest text-primary/80">
          Public by default
        </p>
      </div>

      {/* Core explanation */}
      <p className="text-white/80 leading-relaxed">
        Every protocol enforcement event is recorded directly on-chain. Each
        event is timestamped, cryptographically signed, and permanently linked
        to the block history.
      </p>

      <p className="text-white/75 leading-relaxed">
        Anyone running a node, using a block explorer, or querying chain state
        can independently verify when and why an enforcement action occurred.
      </p>

      {/* Audit emphasis */}
      <div className="bg-white/2 border border-white/10 rounded-lg p-5">
        <p className="text-white/70 leading-relaxed">
          This enables third parties to audit both network behavior and
          environmental outcomes without relying on trust, reports, or
          off-chain attestations.
        </p>
      </div>

      {/* Reinforcement */}
      <p className="text-sm text-white/55 italic">
        Verification is not a feature — it is a consequence of how the protocol
        is designed.
      </p>
    </section>
  );
}
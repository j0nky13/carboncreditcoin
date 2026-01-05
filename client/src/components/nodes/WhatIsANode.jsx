export default function WhatIsANode() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        What is a node?
      </h2>

      {/* ===== EXPLANATION ===== */}
      <p className="text-white/80 leading-relaxed">
        A node maintains a complete copy of the CarbonChain blockchain,
        independently verifies blocks, and enforces protocol rules exactly as
        written.
      </p>

      <p className="text-white/75 leading-relaxed">
        Nodes do not mint tokens, vote on governance, or compete for rewards.
        Their role is verification — ensuring that every transaction, rule, and
        enforcement event is executed correctly and transparently.
      </p>

      {/* ===== EMPHASIS ===== */}
      <p className="text-white/70 italic">
        Nodes are the foundation of decentralization and public auditability.
      </p>
    </section>
  );
}
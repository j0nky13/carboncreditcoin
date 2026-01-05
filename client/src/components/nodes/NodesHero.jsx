export default function NodesHero() {
  return (
    <section className="max-w-6xl mx-auto space-y-8 pt-12">
      {/* ===== EYEBROW ===== */}
      <p className="uppercase tracking-widest text-primary/80 text-xs">
        Network participation
      </p>

      {/* ===== HEADLINE ===== */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Run a CarbonChain node
      </h1>

      {/* ===== SUPPORTING COPY ===== */}
      <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
        Nodes form the verification layer of CarbonChain — independently
        validating state, enforcing protocol rules, and anchoring the network’s
        transparency.
      </p>

      {/* ===== SUBTEXT ===== */}
      <p className="text-white/65 max-w-3xl">
        Whether you operate a full node or participate in validator operations,
        node operators ensure CarbonChain remains auditable, resilient, and
        resistant to capture.
      </p>
    </section>
  );
}
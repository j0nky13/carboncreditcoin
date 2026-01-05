export default function WhyRunANode() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Why run a node?
      </h2>

      {/* ===== CONTEXT ===== */}
      <p className="text-white/80 leading-relaxed">
        Running a node gives you direct, unfiltered access to CarbonChain’s
        state. You verify what the network enforces — not what dashboards,
        APIs, or third parties claim.
      </p>

      {/* ===== REASONS ===== */}
      <ul className="space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>Independently verify environmental enforcement events</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>Eliminate reliance on third-party explorers or services</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>Strengthen network resilience and decentralization</span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>Prepare infrastructure for future validator participation</span>
        </li>
      </ul>

      {/* ===== EMPHASIS ===== */}
      <p className="text-sm text-white/60 italic">
        Running a node is about verification, not rewards.
      </p>
    </section>
  );
}
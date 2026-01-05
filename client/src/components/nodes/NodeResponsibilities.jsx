export default function NodeResponsibilities() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Node responsibilities
      </h2>

      {/* ===== CONTEXT ===== */}
      <p className="text-white/80 leading-relaxed">
        A CarbonChain node acts as an independent verifier. It does not make
        decisions or earn rewards — it confirms that the network behaves exactly
        as defined.
      </p>

      {/* ===== RESPONSIBILITIES ===== */}
      <ul className="space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Verify consensus rules and block validity
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Replay and validate all transactions independently
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Track protocol-level impact events emitted by enforcement logic
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Maintain a complete, auditable history of network activity
          </span>
        </li>
      </ul>

      {/* ===== FOOTNOTE ===== */}
      <p className="text-sm text-white/60 italic">
        If a rule is violated, a node will detect it — regardless of who
        produced the block.
      </p>
    </section>
  );
}
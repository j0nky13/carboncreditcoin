export default function NodeRequirements() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Node requirements
      </h2>

      {/* ===== CONTEXT ===== */}
      <p className="text-white/80 leading-relaxed">
        CarbonChain nodes are designed to be lightweight and accessible. Running
        a node does not require specialized hardware or enterprise
        infrastructure.
      </p>

      {/* ===== REQUIREMENTS LIST ===== */}
      <ul className="space-y-4 text-white/75">
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Consumer-grade hardware capable of sustained disk and network
            throughput
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Stable internet connection with consistent uptime
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-primary">—</span>
          <span>
            Docker-based setup or managed deployment option
          </span>
        </li>
      </ul>

      {/* ===== FOOTNOTE ===== */}
      <p className="text-sm text-white/60 italic">
        Hardware requirements scale with network usage and pruning settings,
        not with speculative demand.
      </p>
    </section>
  );
}
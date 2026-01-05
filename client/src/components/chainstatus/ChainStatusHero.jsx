export default function ChainStatusHero() {
  return (
    <section className="max-w-6xl mx-auto space-y-6">
      <p className="uppercase tracking-widest text-primary/80 text-xs">
        Network operations
      </p>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        CarbonChain network status
      </h1>

      <p className="text-white/75 max-w-3xl leading-relaxed">
        Live operational metrics from the CarbonChain network.  
        This dashboard reflects consensus health, throughput, and protocol
        activity.
      </p>

      {/* ===== DEMO DISCLAIMER ===== */}
      <p className="text-xs text-white/50 italic max-w-3xl">
        Metrics shown below currently reflect demo data. Live RPC-backed data,
        validator telemetry, and enforcement event streams will replace these
        values as the network progresses.
      </p>
    </section>
  );
}
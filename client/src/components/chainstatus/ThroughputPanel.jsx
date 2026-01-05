import LiveDemoChart from "../LiveDemoChart";

export default function ThroughputPanel() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Throughput
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Transaction throughput
        </h2>

        <p className="text-white/70 max-w-3xl">
          Live transactions-per-second measurement reflecting current network
          load and validator performance.
        </p>
      </div>

      {/* ===== CHART (UNFRAMED) ===== */}
      <div className="bg-white/2 rounded-xl p-6">
        <LiveDemoChart />
      </div>
    </section>
  );
}
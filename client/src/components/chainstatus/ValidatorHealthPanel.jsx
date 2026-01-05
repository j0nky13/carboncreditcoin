export default function ValidatorHealthPanel() {
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Consensus health
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Validator status
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-white/10 rounded-xl p-6 bg-white/2">
          <p className="text-sm text-white/60">Online validators</p>
          <p className="text-2xl font-semibold text-primary mt-2">40 / 42</p>
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-white/2">
          <p className="text-sm text-white/60">Average uptime</p>
          <p className="text-2xl font-semibold text-primary mt-2">99.98%</p>
        </div>

        <div className="border border-white/10 rounded-xl p-6 bg-white/2">
          <p className="text-sm text-white/60">Slashing events (24h)</p>
          <p className="text-2xl font-semibold mt-2">0</p>
        </div>
      </div>
    </section>
  );
}
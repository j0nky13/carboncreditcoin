export default function NetworkNotes() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6 pt-12 border-t border-white/10">
      <p className="text-white/60 text-sm leading-relaxed">
        Metrics update periodically.  
        Full RPC endpoints, validator-level telemetry, and explorer integration
        will be exposed as the network matures.
      </p>

      <p className="text-xs text-white/40 italic">
        This dashboard reflects protocol health — not application activity.
      </p>
    </section>
  );
}
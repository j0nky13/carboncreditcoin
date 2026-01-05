export default function ExplorerAccess() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Explorer & node access
        </h2>

        <p className="text-sm uppercase tracking-widest text-primary/80">
          Inspectable by anyone
        </p>
      </div>

      <p className="text-white/80 leading-relaxed">
        All enforcement events, gas accumulation metrics, and protocol rules are
        accessible through standard blockchain tooling.
      </p>

      <ul className="space-y-3 text-white/75">
        <li>• Block explorers show enforcement events by height and timestamp</li>
        <li>• Nodes expose event logs via standard RPC interfaces</li>
        <li>• Genesis files define immutable enforcement parameters</li>
        <li>• Historical state can be replayed and audited independently</li>
      </ul>

      <p className="text-white/70 leading-relaxed">
        No proprietary dashboards or permissioned APIs are required to verify
        CarbonChain behavior.
      </p>

      <p className="text-sm text-white/55 italic">
        If you can run a node, you can verify the system.
      </p>
    </section>
  );
}
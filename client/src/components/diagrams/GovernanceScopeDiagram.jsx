import { Lock, Settings } from "lucide-react";

export default function GovernanceScopeDiagram() {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-10 text-center">
        Governance Boundaries
      </h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Immutable */}
        <div className="border border-white/10 rounded-xl p-8 bg-white/2">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-primary" />
            <h4 className="text-lg font-semibold">Immutable Protocol Rules</h4>
          </div>

          <ul className="space-y-3 text-white/70">
            <li>• Fixed token supply & emissions</li>
            <li>• Impact enforcement thresholds</li>
            <li>• Slashing & security assumptions</li>
            <li>• On-chain auditability guarantees</li>
          </ul>
        </div>

        {/* Governable */}
        <div className="border border-white/10 rounded-xl p-8 bg-white/1">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="text-white/70" />
            <h4 className="text-lg font-semibold">Governable Parameters</h4>
          </div>

          <ul className="space-y-3 text-white/70">
            <li>• Treasury allocation</li>
            <li>• Upgrade scheduling</li>
            <li>• Coordination standards</li>
            <li>• Non-critical parameters</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
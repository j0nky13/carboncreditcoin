import { ShieldCheck, FileSearch, Eye, Database } from "lucide-react";

export default function TrustTransparency() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Trust model
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Transparency is enforced, not assumed
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain does not rely on promises, disclosures, or third-party
          attestations. Every rule that governs the network is visible,
          auditable, and enforced at the protocol level.
        </p>
      </div>

      {/* ===== PRINCIPLES ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {/* Principle 1 */}
        <div className="space-y-4">
          <ShieldCheck className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Protocol-level enforcement
          </h3>
          <p className="text-white/75 leading-relaxed">
            Environmental impact is not handled by off-chain agreements or
            discretionary processes. Thresholds, triggers, and impact events
            are enforced directly by chain logic and validated by consensus.
          </p>
        </div>

        {/* Principle 2 */}
        <div className="space-y-4">
          <Database className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            On-chain records by default
          </h3>
          <p className="text-white/75 leading-relaxed">
            Gas collection milestones, impact triggers, and sustainability
            events are recorded as on-chain data. Anyone can inspect, verify,
            and replay these records without relying on CarbonChain as an
            intermediary.
          </p>
        </div>

        {/* Principle 3 */}
        <div className="space-y-4">
          <FileSearch className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Public rules and parameters
          </h3>
          <p className="text-white/75 leading-relaxed">
            Genesis files, protocol parameters, validator sets, and upgrade
            paths are public from day one. Changes are proposed, debated, and
            executed transparently through on-chain governance.
          </p>
        </div>

        {/* Principle 4 */}
        <div className="space-y-4">
          <Eye className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Verifiable by anyone
          </h3>
          <p className="text-white/75 leading-relaxed">
            CarbonChain is designed so that independent observers — developers,
            validators, auditors, or users — can verify claims directly from the
            chain without trusting dashboards, APIs, or curated reports.
          </p>
        </div>
      </div>

      {/* ===== CLOSING STATEMENT ===== */}
      <div className="mt-20 max-w-3xl border-l border-white/10 pl-6">
        <p className="text-white/80 text-lg leading-relaxed">
          Trust on CarbonChain does not come from reputation or branding.
          <br />
          <span className="text-white font-semibold">
            It comes from rules that cannot be bypassed.
          </span>
        </p>
      </div>
    </section>
  );
}
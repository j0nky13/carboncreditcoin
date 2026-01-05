import { Link } from "react-router-dom";

export default function GovernanceRelation() {
  return (
    <section className="max-w-5xl mx-auto px-6 border-t border-white/10 pt-14">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Governance
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Relationship to governance
        </h2>

        <p className="text-white/75 leading-relaxed">
          CO2TAX is primarily an economic and execution token. Governance exists
          to steward the protocol — not to override its core rules.
        </p>
      </div>

      {/* ===== BODY ===== */}
      <div className="mt-10 max-w-3xl space-y-6 text-white/75 leading-relaxed">
        <p>
          In future upgrades, CO2TAX may be used to participate in governance
          processes such as parameter adjustments, treasury usage, and network
          coordination decisions.
        </p>

        <p>
          Governance authority is intentionally constrained. Core supply rules,
          impact enforcement mechanisms, and security assumptions are designed
          to remain stable and resistant to capture or arbitrary change.
        </p>

        <p className="text-white/65">
          This separation ensures that economic guarantees remain predictable
          while still allowing the network to evolve transparently over time.
        </p>
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-10">
        <Link
          to="/governance"
          className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-8 transition"
        >
          View governance framework →
        </Link>
      </div>
    </section>
  );
}
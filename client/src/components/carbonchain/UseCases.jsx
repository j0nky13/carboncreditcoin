import { Leaf, Globe, Code, Building2 } from "lucide-react";

export default function UseCases() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Applications
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          What CarbonChain enables
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain is not built around a single app or industry. It provides
          a protocol layer where economic activity can be directly tied to
          measurable environmental outcomes.
        </p>
      </div>

      {/* ===== USE CASES ===== */}
      <div className="mt-16 space-y-16">
        {/* Use Case 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Leaf className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Personal and individual offset
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              Individuals can use CarbonChain simply by transacting. Gas fees
              contribute to protocol-enforced impact events, allowing users to
              participate in verified sustainability without relying on
              voluntary offsets or unverifiable claims.
            </p>
          </div>
        </div>

        {/* Use Case 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Building2 className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Business and organizational ESG
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              Organizations can route payments, settlements, or internal
              activity through CarbonChain to generate auditable sustainability
              records. Impact is derived from actual usage, not post-hoc
              reporting or marketing disclosures.
            </p>
          </div>
        </div>

        {/* Use Case 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Code className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Developer and application layer
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              Developers can build applications where user activity inherently
              contributes to environmental impact. CarbonChain handles
              enforcement and verification, removing the need for custom logic,
              trust assumptions, or external offset services.
            </p>
          </div>
        </div>

        {/* Use Case 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Globe className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Infrastructure and public systems
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              CarbonChain can serve as a neutral settlement and audit layer for
              sustainability-linked systems — including supply chains,
              environmental programs, or public initiatives — where transparency
              and verifiability are required by default.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CLOSING LINE ===== */}
      <div className="mt-20 max-w-3xl border-l border-white/10 pl-6">
        <p className="text-white/80 text-lg leading-relaxed">
          These use cases are not dependent on adoption campaigns or behavior
          changes.
          <br />
          <span className="text-white font-semibold">
            They emerge naturally from how the protocol operates.
          </span>
        </p>
      </div>
    </section>
  );
}
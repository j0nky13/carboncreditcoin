import { TreePine } from "lucide-react";

export default function TreeTrackerSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Protocol output
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          When the chain is used, trees are planted
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain converts economic activity into verifiable environmental
          action through deterministic protocol rules — not promises or
          after-the-fact offsets.
        </p>
      </div>

      {/* ===== EXPLANATION GRID ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* LEFT: LOGIC */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <TreePine className="text-primary mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                Gas fees trigger real-world action
              </h3>
              <p className="text-white/75 leading-relaxed mt-2">
                Every time the network collects a predefined amount of gas fees
                (currently $100), the protocol emits an on-chain event indicating
                that a tree must be planted.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TreePine className="text-primary mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                Events are recorded on-chain
              </h3>
              <p className="text-white/75 leading-relaxed mt-2">
                These events are immutable, timestamped, and publicly verifiable.
                They form the cryptographic record linking network activity to
                environmental impact.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TreePine className="text-primary mt-1" size={28} />
            <div>
              <h3 className="text-xl font-semibold">
                Execution happens off-chain, proof stays on-chain
              </h3>
              <p className="text-white/75 leading-relaxed mt-2">
                Physical tree planting is executed by verified partners. Proof,
                metadata, and reconciliation records are anchored to the chain
                for transparency and auditability.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: FRAMING BOX */}
        <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02] space-y-4">
          <p className="uppercase tracking-widest text-primary/80 text-xs">
            Important distinction
          </p>

          <p className="text-white/80 leading-relaxed">
            CarbonChain does not sell offsets, credits, or certificates.
            Environmental impact is a protocol consequence of network usage —
            not a financial product.
          </p>

          <p className="text-white/80 leading-relaxed">
            This design prevents greenwashing by making impact proportional,
            transparent, and mechanically enforced.
          </p>
        </div>
      </div>

      {/* ===== FUTURE VISIBILITY ===== */}
      <div className="mt-20 max-w-3xl space-y-4">
        <h3 className="text-2xl font-semibold">
          Visibility improves over time
        </h3>

        <p className="text-white/75 leading-relaxed">
          In early phases, impact events are recorded and aggregated internally.
          Future releases will include public dashboards, explorer views, and
          partner attestations tied directly to on-chain data.
        </p>
      </div>
    </section>
  );
}
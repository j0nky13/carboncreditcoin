import { Lock, Network, Gavel, Layers } from "lucide-react";

export default function V2Roadmap() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Roadmap
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          CarbonChain V2
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain V2 extends the protocol without breaking compatibility.
          Validators, wallets, and existing contracts continue to operate while
          new capabilities are layered on.
        </p>
      </div>

      {/* ===== ROADMAP SECTIONS ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Privacy */}
        <div className="space-y-4">
          <Lock className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Privacy and secure data channels
          </h3>
          <p className="text-white/75 leading-relaxed">
            Optional privacy layers will allow transactions or data payloads to
            be shielded without compromising base-layer consensus or
            transparency.
          </p>
          <p className="text-white/75 leading-relaxed">
            Planned approaches include zero-knowledge primitives or onion-style
            routing for specific transaction classes and off-chain data
            references.
          </p>
        </div>

        {/* Data & Impact */}
        <div className="space-y-4">
          <Layers className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Expanded impact primitives
          </h3>
          <p className="text-white/75 leading-relaxed">
            V2 generalizes the tree-planting model into a broader impact
            framework, allowing the protocol to emit verifiable events tied to
            different sustainability actions.
          </p>
          <p className="text-white/75 leading-relaxed">
            These events remain deterministic and auditable, preserving the
            system’s resistance to greenwashing or unverifiable claims.
          </p>
        </div>

        {/* Governance */}
        <div className="space-y-4">
          <Gavel className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            On-chain governance tooling
          </h3>
          <p className="text-white/75 leading-relaxed">
            Governance modules will allow stakeholders to propose and vote on
            protocol parameters, treasury allocation, and future upgrades.
          </p>
          <p className="text-white/75 leading-relaxed">
            Governance is designed to be incremental and constrained, prioritizing
            safety and predictability over rapid or speculative changes.
          </p>
        </div>

        {/* Network evolution */}
        <div className="space-y-4">
          <Network className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Network and operator tooling
          </h3>
          <p className="text-white/75 leading-relaxed">
            Validator dashboards, observability tools, and impact reporting will
            continue to evolve alongside the protocol.
          </p>
          <p className="text-white/75 leading-relaxed">
            The goal is to reduce operational friction while preserving the
            responsibilities and accountability expected of validators.
          </p>
        </div>
      </div>

      {/* ===== GUARANTEE ===== */}
      <div className="mt-20 max-w-3xl space-y-4">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Compatibility guarantee
        </p>

        <p className="text-white/75 leading-relaxed">
          CarbonChain V2 is an additive upgrade. Existing addresses, validator
          keys, and deployed contracts remain valid. No forced migrations or
          token swaps are required.
        </p>
      </div>
    </section>
  );
}
import { Server, Activity, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function ValidatorSection() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Network participation
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Validators secure CarbonChain
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          Validators are responsible for block production, transaction
          verification, and enforcing protocol rules that bind network activity
          to real-world impact.
        </p>
      </div>

      {/* ===== CORE RESPONSIBILITIES ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Responsibility 1 */}
        <div className="space-y-4">
          <Server className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Block production and consensus
          </h3>
          <p className="text-white/75 leading-relaxed">
            Validators propose and confirm blocks using Cosmos consensus,
            maintaining network liveness, ordering transactions, and ensuring
            deterministic execution across all nodes.
          </p>
        </div>

        {/* Responsibility 2 */}
        <div className="space-y-4">
          <Activity className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Protocol rule enforcement
          </h3>
          <p className="text-white/75 leading-relaxed">
            Gas fees collected by validators serve as measurable system input.
            When thresholds are reached, protocol logic emits auditable events
            tied to sustainability actions.
          </p>
        </div>

        {/* Responsibility 3 */}
        <div className="space-y-4">
          <ShieldCheck className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Network security and integrity
          </h3>
          <p className="text-white/75 leading-relaxed">
            Validators stake CO2TAX and are subject to slashing for downtime or
            malicious behavior, aligning incentives with long-term network
            health.
          </p>
        </div>

        {/* Responsibility 4 */}
        <div className="space-y-4">
          <Wrench className="text-primary" size={28} />
          <h3 className="text-xl font-semibold">
            Operational reliability
          </h3>
          <p className="text-white/75 leading-relaxed">
            CarbonChain provides pruning, snapshots, and Docker-based tooling to
            reduce operational overhead while preserving performance and
            observability.
          </p>
        </div>
      </div>

      {/* ===== OPERATOR DETAILS ===== */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-4">
          <h3 className="text-2xl font-semibold">
            Designed for long-term operators
          </h3>

          <p className="text-white/75 leading-relaxed">
            CarbonChain prioritizes predictable operation over short-term
            incentives. Validator rewards are derived from network activity and
            enforced rules — not inflationary gimmicks or unsustainable yield
            models.
          </p>

          <p className="text-white/75 leading-relaxed">
            The network is intended to remain operational continuously, with a
            permanent testnet and rolling upgrades designed to minimize
            disruption.
          </p>
        </div>

        {/* CTA */}
        <div className="md:col-span-5 md:justify-self-end">
          <div className="border border-white/10 rounded-xl p-6 space-y-4 bg-white/[0.02]">
            <p className="uppercase tracking-widest text-primary/80 text-xs">
              Get started
            </p>

            <p className="text-white/80 leading-relaxed">
              Documentation, Docker images, and validator tooling are available
              for operators who want to participate in the network.
            </p>

            <Link
              to="/nodes"
              className="inline-block text-primary hover:underline underline-offset-8 transition"
            >
              Validator documentation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
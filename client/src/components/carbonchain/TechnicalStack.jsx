import { Layers, Link2, Cpu, ShieldCheck, Database } from "lucide-react";

const STACK = [
  {
    icon: Layers,
    title: "Cosmos SDK + Tendermint",
    body:
      "CarbonChain is built on the Cosmos SDK with Tendermint consensus, providing deterministic finality, fast block times, and battle-tested security.",
    meta: "Consensus & Core Runtime",
  },
  {
    icon: Link2,
    title: "IBC from Genesis",
    body:
      "Inter-Blockchain Communication is enabled at genesis, allowing CarbonChain to natively exchange assets and data across the Cosmos ecosystem.",
    meta: "Native Interoperability",
  },
  {
    icon: Database,
    title: "Pruning + Snapshot Sync",
    body:
      "Aggressive state pruning and snapshot-based syncing reduce disk usage and dramatically shorten node and validator setup time.",
    meta: "Operational Efficiency",
  },
  {
    icon: Cpu,
    title: "CosmWasm Smart Contracts",
    body:
      "CosmWasm enables secure, upgradeable smart contracts for ICO logic, referrals, leaderboards, and future ecosystem tooling.",
    meta: "Programmability Layer",
  },
  {
    icon: ShieldCheck,
    title: "Protocol-Level Impact Rules",
    body:
      "CarbonChain embeds impact logic directly into the protocol — ensuring environmental actions are enforced, recorded, and auditable.",
    meta: "Impact Enforcement",
  },
];

export default function TechnicalStack() {
  return (
    <section className="relative max-w-7xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-6 space-y-5">
          <p className="uppercase tracking-widest text-primary/80 text-xs">
            Architecture
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for interoperability and longevity
          </h2>

          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            CarbonChain combines proven blockchain infrastructure with
            protocol-level rules that turn activity into measurable impact —
            without sacrificing performance or decentralization.
          </p>
        </div>
      </div>

      {/* ===== STACK GRID ===== */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STACK.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-primary/40"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* icon */}
                <div className="mb-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* body */}
                <p className="text-sm text-white/70 leading-relaxed flex-grow">
                  {item.body}
                </p>

                {/* meta */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {item.meta}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import {
  Zap,
  TreePine,
  Shield,
  Blocks,
  Users,
  CheckCircle,
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "One-click validator deployment",
    body:
      "Validators can launch nodes using Docker or managed cloud setups with pruning, snapshots, and auto-restart enabled by default.",
  },
  {
    icon: TreePine,
    title: "Gas-triggered environmental impact",
    body:
      "Protocol rules monitor gas accumulation and emit on-chain events when impact thresholds are crossed, linking activity to real-world action.",
  },
  {
    icon: Shield,
    title: "Anti-bot and sniping protections",
    body:
      "CarbonChain includes built-in defenses against launch sniping, abusive ordering, and validator manipulation at the protocol level.",
  },
  {
    icon: Blocks,
    title: "IBC-native interoperability",
    body:
      "Assets and data move seamlessly across Cosmos via IBC, with Axelar extending compatibility to EVM-based ecosystems.",
  },
  {
    icon: Users,
    title: "Transparent genesis and validator set",
    body:
      "Genesis allocations, validator participation, and protocol parameters are publicly visible and auditable from day one.",
  },
  {
    icon: CheckCircle,
    title: "Smart contract-backed incentives",
    body:
      "CosmWasm contracts power token drops, referrals, leaderboards, and future incentive systems without protocol forks.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="space-y-5 max-w-2xl">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Capabilities
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Core features at launch
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain launches with a focused feature set designed to support
          validators, developers, and measurable real-world impact.
        </p>
      </div>

      {/* ===== FEATURE LIST ===== */}
      <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
        {FEATURES.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8"
            >
              {/* icon */}
              <div className="md:col-span-1 flex md:justify-center">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
              </div>

              {/* text */}
              <div className="md:col-span-11 space-y-2">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-3xl">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
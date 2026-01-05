import { Check, Minus } from "lucide-react";

const ROWS = [
  {
    label: "Carbon impact enforcement",
    carbonchain:
      "Protocol-level rules convert gas activity into auditable environmental events",
    typical: "External offsets or optional third-party tools",
  },
  {
    label: "Environmental verification",
    carbonchain: "On-chain events logged and verifiable by anyone",
    typical: "Off-chain reporting or unverifiable claims",
  },
  {
    label: "Validator onboarding",
    carbonchain:
      "One-click Docker or managed deployment with pruning and snapshots",
    typical: "Manual, infrastructure-heavy setup",
  },
  {
    label: "Interoperability",
    carbonchain: "IBC-native + Axelar for Cosmos and EVM ecosystems",
    typical: "IBC only or isolated bridge support",
  },
  {
    label: "Anti-bot protections",
    carbonchain: "Built-in sniping and abuse mitigation",
    typical: "Often absent or handled at app layer",
  },
  {
    label: "Smart contract integration",
    carbonchain:
      "CosmWasm used for incentives, referrals, and governance tooling",
    typical: "Optional or limited to app-specific logic",
  },
  {
    label: "Transparency",
    carbonchain:
      "Genesis, validators, and protocol rules publicly auditable",
    typical: "Partial visibility or opaque parameters",
  },
];

export default function DifferentiationTable() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="space-y-5 max-w-3xl">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Comparison
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          How CarbonChain differs from typical chains
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CarbonChain is not a rebranded DeFi network. Environmental impact is
          enforced by protocol rules, not promised after the fact.
        </p>
      </div>

      {/* ================= MOBILE STACK ================= */}
      <div className="mt-12 space-y-10 md:hidden">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="border-b border-white/10 pb-8 space-y-4"
          >
            <h3 className="text-white font-semibold text-base">
              {row.label}
            </h3>

            <div className="flex gap-3 text-white/80 text-sm leading-relaxed">
              <Check size={16} className="text-primary mt-[3px]" />
              <span>{row.carbonchain}</span>
            </div>

            <div className="flex gap-3 text-white/55 text-sm leading-relaxed">
              <Minus size={16} className="mt-[3px]" />
              <span>{row.typical}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="mt-14 overflow-x-auto hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-white/15">
              <th className="py-4 pr-6 text-sm uppercase tracking-widest text-white/60">
                Feature
              </th>
              <th className="py-4 px-6 text-sm uppercase tracking-widest text-primary/90">
                CarbonChain
              </th>
              <th className="py-4 pl-6 text-sm uppercase tracking-widest text-white/50">
                Typical Layer-1
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            {ROWS.map((row, i) => (
              <tr key={i}>
                <td className="py-6 pr-6 text-white/85 font-medium align-top">
                  {row.label}
                </td>

                <td className="py-6 px-6 text-white/80 align-top">
                  <div className="flex gap-3">
                    <Check
                      size={16}
                      className="text-primary mt-[3px]"
                    />
                    <span className="leading-relaxed">
                      {row.carbonchain}
                    </span>
                  </div>
                </td>

                <td className="py-6 pl-6 text-white/55 align-top">
                  <div className="flex gap-3">
                    <Minus
                      size={16}
                      className="text-white/30 mt-[3px]"
                    />
                    <span className="leading-relaxed">
                      {row.typical}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
import { Fuel, Shield, Layers, Vote } from "lucide-react";

export default function TokenUtility() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {/* ===== HEADER ===== */}
      <div className="max-w-3xl space-y-5">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Token design
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          The role of CO2TAX
        </h2>

        <p className="text-white/75 text-lg leading-relaxed">
          CO2TAX is the native utility token of CarbonChain. It exists to
          operate the network, enforce protocol rules, and fund verifiable
          environmental impact — not as a speculative instrument.
        </p>
      </div>

      {/* ===== UTILITIES ===== */}
      <div className="mt-16 space-y-14">
        {/* Utility 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Fuel className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Network execution and security
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              CO2TAX is used to pay gas fees for transactions and smart contract
              execution. These fees compensate validators for securing the
              network and provide the measurable input used by protocol-level
              impact rules.
            </p>
          </div>
        </div>

        {/* Utility 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Layers className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Validator participation and incentives
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              Validators stake CO2TAX to participate in block production and
              consensus. Rewards are earned through uptime and correct
              behavior, while protocol safeguards discourage abuse and
              manipulation.
            </p>
          </div>
        </div>

        {/* Utility 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Shield className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Funding protocol-enforced impact
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              When predefined thresholds are reached, gas activity denominated
              in CO2TAX triggers on-chain events tied to real-world
              sustainability actions. These mechanisms are enforced by protocol
              logic and recorded transparently.
            </p>
          </div>
        </div>

        {/* Utility 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-1">
            <Vote className="text-primary" size={28} />
          </div>

          <div className="md:col-span-11 space-y-3">
            <h3 className="text-xl font-semibold">
              Governance and protocol evolution
            </h3>

            <p className="text-white/75 leading-relaxed max-w-3xl">
              CO2TAX will be used to participate in on-chain governance,
              including parameter changes, upgrades, and the allocation of
              ecosystem resources as CarbonChain evolves.
            </p>
          </div>
        </div>
      </div>

      {/* ===== CLOSING CLARITY ===== */}
      <div className="mt-20 max-w-3xl border-l border-white/10 pl-6">
        <p className="text-white/80 text-lg leading-relaxed">
          CO2TAX does not represent ownership, dividends, or claims on future
          profits.
          <br />
          <span className="text-white font-semibold">
            Its value is derived from its necessity to operate the network.
          </span>
        </p>
      </div>
    </section>
  );
}
export default function EconomicModel() {
  return (
    <section className="relative bg-black text-white">
      {/* subtle divider */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/90 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm tracking-widest text-primary/80 uppercase mb-4">
            Economics
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Incentives aligned with impact.
          </h2>

          <p className="mt-6 text-gray-300/85 text-lg leading-relaxed">
            CarbonChain’s economic model is designed to reward network security,
            discourage waste, and permanently bind value transfer to real-world
            carbon accountability.
          </p>
        </div>

        {/* Core mechanics */}
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* Fees */}
          <div className="space-y-6">
            <span className="text-primary/70 text-sm tracking-wide">
              Fees
            </span>

            <h3 className="text-xl font-medium">
              Transaction fees
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              Transactions incur standard network fees, paid in the native
              token. Fees reflect network usage and resource consumption.
            </p>
          </div>

          {/* Incentives */}
          <div className="space-y-6 relative">
            <div className="absolute -left-8 top-3 h-px w-6 bg-primary/30 hidden md:block" />

            <span className="text-primary/70 text-sm tracking-wide">
              Incentives
            </span>

            <h3 className="text-xl font-medium">
              Validator rewards
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              Validators earn a portion of transaction fees in exchange for
              securing the network, enforcing protocol rules, and maintaining
              uptime.
            </p>
          </div>

          {/* Enforcement */}
          <div className="space-y-6 relative">
            <div className="absolute -left-8 top-3 h-px w-6 bg-primary/30 hidden md:block" />

            <span className="text-primary/70 text-sm tracking-wide">
              Enforcement
            </span>

            <h3 className="text-xl font-medium">
              Carbon obligation
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              A defined portion of network activity is cryptographically tied
              to carbon impact enforcement — making environmental cost a
              first-class economic parameter.
            </p>
          </div>

        </div>

        {/* Closing line */}
        <div className="mt-24 max-w-2xl">
          <p className="text-gray-300/85 text-lg leading-relaxed">
            The result is a system where economic incentives, network security,
            and environmental responsibility reinforce one another — without
            relying on voluntary participation or external promises.
          </p>
        </div>
      </div>
    </section>
  );
}
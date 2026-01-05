export default function ProtocolEnforcement() {
  return (
    <section className="relative bg-black text-white">
      {/* top fade divider */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        {/* Section header */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm tracking-widest text-primary/80 uppercase mb-4">
            Protocol enforcement
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Impact is not optional.
          </h2>

          <p className="mt-6 text-gray-300/85 text-lg leading-relaxed">
            CarbonChain embeds carbon accountability directly into consensus.
            Every transaction participates. No opt-ins. No after-the-fact
            offsets.
          </p>
        </div>

        {/* Horizontal flow */}
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* Step 1 */}
          <div className="space-y-6">
            <span className="text-primary/70 text-sm tracking-wide">
              01
            </span>

            <h3 className="text-xl font-medium">
              Transaction execution
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              Transactions execute as expected — transferring value,
              interacting with contracts, and consuming network resources.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 relative">
            {/* subtle connector */}
            <div className="absolute -left-8 top-3 h-px w-6 bg-primary/30 hidden md:block" />

            <span className="text-primary/70 text-sm tracking-wide">
              02
            </span>

            <h3 className="text-xl font-medium">
              Carbon cost assessment
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              At consensus, protocol logic evaluates the transaction’s
              associated carbon cost — using deterministic, auditable rules.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 relative">
            {/* subtle connector */}
            <div className="absolute -left-8 top-3 h-px w-6 bg-primary/30 hidden md:block" />

            <span className="text-primary/70 text-sm tracking-wide">
              03
            </span>

            <h3 className="text-xl font-medium">
              Enforced impact
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              The protocol enforces corresponding carbon impact — verifiable,
              permanent, and recorded on-chain as part of finality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
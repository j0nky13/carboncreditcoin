export default function NetworkParticipation() {
  return (
    <section className="relative bg-black text-white">
      {/* subtle divider */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/90 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm tracking-widest text-primary/80 uppercase mb-4">
            Network
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            A public network, operated by participants.
          </h2>

          <p className="mt-6 text-gray-300/85 text-lg leading-relaxed">
            CarbonChain is secured by independent validators and nodes that
            enforce protocol rules and maintain consensus — without centralized
            control.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left: Validators */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">
              Validators
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              Validators propose and finalize blocks, enforce protocol rules,
              and secure the network. Participation requires stake and
              operational responsibility.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300/75 text-sm">
              <li>• Consensus enforcement</li>
              <li>• Protocol rule validation</li>
              <li>• Slashing for misbehavior</li>
            </ul>
          </div>

          {/* Right: Nodes */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium">
              Nodes
            </h3>

            <p className="text-gray-300/80 leading-relaxed">
              Nodes replicate state, verify transactions, and provide
              transparent access to the network. Anyone can run a node.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300/75 text-sm">
              <li>• Full state verification</li>
              <li>• Public network access</li>
              <li>• Transparency and redundancy</li>
            </ul>
          </div>

        </div>

        {/* Footer link */}
        <div className="mt-24">
          <a
            href="/nodes"
            className="text-primary hover:underline underline-offset-8 transition text-lg"
          >
            Learn how to participate →
          </a>
        </div>
      </div>
    </section>
  );
}
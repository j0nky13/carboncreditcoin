export default function ForwardVision() {
  return (
    <section className="relative bg-black text-white">
      {/* soft transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/95 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-primary/80 uppercase mb-4">
            Forward vision
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Infrastructure that evolves without abandoning its principles.
          </h2>

          <p className="mt-8 text-gray-300/85 text-lg leading-relaxed">
            CarbonChain is designed to evolve through protocol upgrades,
            governance, and ecosystem growth — without compromising the core
            guarantees that define the network.
          </p>

          <p className="mt-6 text-gray-300/85 text-lg leading-relaxed">
            As the network grows, new capabilities can be introduced while
            preserving the fundamental relationship between economic activity,
            consensus, and real-world impact.
          </p>

          <p className="mt-6 text-gray-300/85 text-lg leading-relaxed">
            Participation is open. Governance is deliberate. Change is measured.
          </p>

          <div className="mt-16 flex flex-wrap gap-10 text-lg">
            <a
              href="/about"
              className="text-primary hover:underline underline-offset-8 transition"
            >
              Read the long-term vision →
            </a>

            <a
              href="/governance"
              className="text-gray-200/75 hover:text-primary transition"
            >
              Governance framework →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
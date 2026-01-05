import { Link } from "react-router-dom";

export default function WhyCarbonChain() {
  return (
    <section className="relative bg-black text-white">
      {/* subtle divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT — CONTEXT */}
          <div className="space-y-8">
            <p className="text-sm tracking-widest text-primary/80 uppercase">
              The problem
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Blockchains optimized for efficiency,
              <br />
              not responsibility.
            </h2>

            <p className="text-gray-300/85 text-lg leading-relaxed max-w-xl">
              Most blockchains treat real-world impact as an external concern.
              Transactions execute. Value moves. Consequences are ignored —
              or addressed later through voluntary offsets.
            </p>
          </div>

          {/* RIGHT — CONTRAST */}
          <div className="relative">
            {/* vertical protocol seam */}
            <div className="absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />

            <p className="text-sm tracking-widest text-primary/80 uppercase mb-8">
              The shift
            </p>

            <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
              CarbonChain introduces a different model.
            </p>

            <p className="mt-6 text-gray-300/85 text-lg leading-relaxed max-w-xl">
              Economic activity on-chain is cryptographically bound to measurable,
              verifiable carbon impact — enforced by the protocol itself, not by
              user intention or off-chain promises.
            </p>

            <div className="mt-10 flex gap-8 text-base">
              <Link
                to="/carbonchain"
                className="text-primary hover:underline underline-offset-8 transition"
              >
                Explore the protocol →
              </Link>

              <Link
                to="/tokenomics"
                className="text-gray-300 hover:text-primary transition"
              >
                View economic model →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
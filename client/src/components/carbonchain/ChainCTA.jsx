import { Link } from "react-router-dom";

export default function ChainCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="border-t border-white/10 pt-20">
        <div className="max-w-3xl space-y-6">
          <p className="uppercase tracking-widest text-primary/80 text-xs">
            Participation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Engage with the protocol
          </h2>

          <p className="text-white/75 text-lg leading-relaxed">
            CarbonChain is designed to remain operational, auditable, and open.
            Participation does not require speculation — only alignment with the
            system’s incentives and responsibilities.
          </p>

          <p className="text-white/75 text-lg leading-relaxed">
            Whether you are a validator, developer, or network user, engagement
            begins with understanding how the protocol behaves.
          </p>

          <div className="mt-10 flex flex-wrap gap-10 text-lg">
            <Link
              to="/carbonchain"
              className="text-primary hover:underline underline-offset-8 transition"
            >
              Explore protocol overview →
            </Link>

            <Link
              to="/nodes"
              className="text-white/75 hover:text-primary transition"
            >
              Validator documentation →
            </Link>

            <Link
              to="/how-it-works"
              className="text-white/75 hover:text-primary transition"
            >
              System mechanics →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
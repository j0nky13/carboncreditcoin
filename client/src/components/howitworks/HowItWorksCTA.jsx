import { Link } from "react-router-dom";

export default function HowItWorksCTA() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Enforcement over promises
      </h2>

      <p className="text-white/70">
        CarbonChain does not rely on voluntary offsets or marketing claims.
        Impact is enforced by protocol design.
      </p>

      <Link
        to="/carbonchain"
        className="text-primary hover:underline underline-offset-8"
      >
        Explore the protocol →
      </Link>
    </section>
  );
}
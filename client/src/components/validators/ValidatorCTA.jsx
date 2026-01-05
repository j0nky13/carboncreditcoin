import { Link } from "react-router-dom";

export default function ValidatorCTA() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Secure the network
      </h2>

      <p className="text-white/70 leading-relaxed">
        Validators are the backbone of CarbonChain’s security and environmental
        enforcement.
      </p>

      <Link
        to="/nodes"
        className="inline-block text-primary hover:underline underline-offset-8"
      >
        Learn how to run a node →
      </Link>
    </section>
  );
}
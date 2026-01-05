import { Link } from "react-router-dom";

export default function VisionCTA() {
  return (
    <section className="max-w-4xl mx-auto text-center space-y-6 pt-20">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Build systems that cannot ignore reality
      </h2>

      <p className="text-white/70 leading-relaxed">
        CarbonChain is an invitation to design infrastructure that enforces
        accountability — not just intention.
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
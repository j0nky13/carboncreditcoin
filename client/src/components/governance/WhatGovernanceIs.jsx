export default function WhatGovernanceIs() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      {/* Eyebrow */}
      <p className="uppercase tracking-widest text-primary/80 text-xs">
        Governance Model
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        What governance is — and what it is not
      </h2>

      {/* Body */}
      <div className="space-y-6 text-white/75 leading-relaxed">
        <p>
          Governance on CarbonChain provides a structured, transparent process
          for proposing, reviewing, and ratifying changes that improve network
          operation, coordination, and long-term sustainability.
        </p>

        <p>
          It exists to guide the system responsibly —{" "}
          <span className="text-white/90 font-medium">
            not to override protocol-enforced guarantees
          </span>{" "}
          or rewrite economic and environmental rules after launch.
        </p>

        <p>
          CarbonChain governance is intentionally constrained. Core mechanisms
          such as emissions, impact thresholds, and environmental enforcement
          remain enforced at the protocol level, outside the reach of votes or
          discretionary control.
        </p>
      </div>

      {/* Emphasis divider */}
      <div className="pt-6 border-l-2 border-primary/40 pl-6 text-white/70">
        <p>
          Governance provides stewardship and coordination — not centralized
          authority.
        </p>
      </div>
    </section>
  );
}
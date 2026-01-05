import { Shield } from "lucide-react";

export default function WhatGovernanceCannotChange() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="relative border border-white/10 rounded-2xl p-8 md:p-10 bg-white/[0.03]">
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="mt-1">
            <Shield className="text-primary" size={22} />
          </div>

          <div>
            <p className="uppercase tracking-widest text-primary/80 text-xs mb-2">
              Constitutional Limits
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              What governance cannot change
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 text-white/75 leading-relaxed max-w-3xl">
          <p>
            CarbonChain governance is intentionally constrained. Certain rules
            are embedded directly into the protocol and exist outside the scope
            of voting, proposals, or social consensus.
          </p>

          <p>
            These constraints ensure that no group — present or future — can
            weaken the network’s economic integrity, environmental guarantees,
            or security assumptions.
          </p>
        </div>

        {/* Immutable list */}
        <ul className="mt-8 space-y-4 text-white/75">
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Fixed supply and emission rules</span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Protocol-level impact enforcement thresholds</span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              Slashing logic, validator security assumptions, and finality
              guarantees
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              On-chain auditability of environmental and impact events
            </span>
          </li>
        </ul>

        {/* Footer note */}
        <div className="mt-10 border-t border-white/10 pt-6 max-w-3xl">
          <p className="text-sm text-white/55 italic leading-relaxed">
            These boundaries exist to prevent governance capture, arbitrary
            parameter drift, and post-hoc rule changes that undermine trust.
          </p>
        </div>
      </div>
    </section>
  );
}
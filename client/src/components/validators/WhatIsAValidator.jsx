export default function WhatIsAValidator() {
  return (
    <section className="max-w-4xl mx-auto space-y-6">
      {/* ===== HEADER ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        What is a validator?
      </h2>

      {/* ===== EXPLANATION ===== */}
      <p className="text-white/80 leading-relaxed">
        Validators are the participants responsible for producing blocks,
        validating transactions, and maintaining consensus across the
        CarbonChain network.
      </p>

      <p className="text-white/75 leading-relaxed">
        Unlike passive nodes, validators actively participate in protocol
        execution. Their actions directly affect finality, security, and the
        enforcement of network rules.
      </p>

      {/* ===== ECONOMIC ROLE ===== */}
      <p className="text-white/75 leading-relaxed">
        Validators are economically bonded to the protocol. Correct behavior is
        rewarded through staking incentives, while misbehavior or downtime may
        result in slashing or removal from the active set.
      </p>
    </section>
  );
}
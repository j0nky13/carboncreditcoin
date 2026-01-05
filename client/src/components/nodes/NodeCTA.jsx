export default function NodeCTA() {
  return (
    <section className="max-w-4xl mx-auto pt-20 text-center space-y-6">
      {/* ===== HEADLINE ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Participate in verification
      </h2>

      {/* ===== SUPPORTING COPY ===== */}
      <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
        Running a CarbonChain node is the simplest way to independently verify
        enforcement, audit network behavior, and observe how protocol rules
        translate activity into measurable outcomes.
      </p>

      {/* ===== SUBTLE CLOSER ===== */}
      <p className="text-sm text-white/55 italic">
        No permission required. No intermediaries. Just verification.
      </p>
    </section>
  );
}
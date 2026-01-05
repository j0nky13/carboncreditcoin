export default function SlashingSecurity() {
  return (
    <section className="max-w-5xl mx-auto space-y-8 bg-white/2 border border-white/10 rounded-xl p-8">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Enforcement & safety
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Slashing & security
        </h2>
      </div>

      {/* ===== CONTEXT ===== */}
      <div className="space-y-6 text-white/80 leading-relaxed max-w-3xl">
        <p>
          CarbonChain enforces validator correctness through automatic,
          protocol-defined penalties. Slashing is not discretionary — it is a
          core security mechanism embedded in consensus.
        </p>

        <p>
          These rules ensure validators remain online, honest, and aligned with
          the network’s guarantees.
        </p>
      </div>

      {/* ===== RULES ===== */}
      <div className="space-y-4">
        <ul className="space-y-3 text-white/75">
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Downtime penalties for extended inactivity</span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Slashing for double-signing or equivocation</span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Automatic jailing for severe or repeated violations</span>
          </li>
        </ul>
      </div>

      {/* ===== FOOTNOTE ===== */}
      <p className="text-sm text-white/60 italic max-w-3xl">
        Slashing exists to protect users, delegators, and the economic integrity
        of CarbonChain — not to punish honest participation.
      </p>
    </section>
  );
}
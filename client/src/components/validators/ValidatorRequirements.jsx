export default function ValidatorRequirements() {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      {/* ===== HEADER ===== */}
      <div className="space-y-3">
        <p className="uppercase tracking-widest text-primary/80 text-xs">
          Operational criteria
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Validator requirements
        </h2>
      </div>

      {/* ===== CONTEXT ===== */}
      <div className="space-y-6 text-white/80 leading-relaxed max-w-3xl">
        <p>
          Running a validator is an operational responsibility — not a passive
          role. Validators are expected to maintain uptime, security, and
          responsiveness in order to protect network integrity.
        </p>

        <p>
          CarbonChain is designed to reduce unnecessary infrastructure overhead
          by enabling efficient, containerized validator operation without
          sacrificing consensus guarantees.
        </p>
      </div>

      {/* ===== REQUIREMENTS LIST ===== */}
      <div className="bg-white/2 border border-white/10 rounded-xl p-8 space-y-4">
        <p className="text-sm uppercase tracking-widest text-primary/80">
          Minimum expectations
        </p>

        <ul className="space-y-3 text-white/75">
          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              A reliable computer or server capable of running a Dockerized
              validator
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>Stable, low-latency internet connectivity</span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              Basic operational monitoring and the ability to respond to alerts
            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-primary">—</span>
            <span>
              Minimum self-bonded stake to align economic incentives
            </span>
          </li>
        </ul>
      </div>

      {/* ===== DEPLOYMENT NOTE ===== */}
      <p className="text-white/75 leading-relaxed max-w-3xl">
        Validators are distributed as Docker containers to allow deployment on a
        wide range of hardware — from personal machines to cloud instances —
        reducing the need for energy-intensive, dedicated infrastructure.
      </p>

      <p className="text-sm text-white/55 italic max-w-3xl">
        Validators that fail to meet uptime or security requirements may
        experience reward reduction or slashing under protocol rules.
      </p>
    </section>
  );
}
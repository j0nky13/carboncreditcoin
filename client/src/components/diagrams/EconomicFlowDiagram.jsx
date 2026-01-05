export default function EconomicFlowDiagram() {
  const items = [
    "Users pay gas fees",
    "Validators secure the network",
    "Fees accumulate protocol-wide",
    "Thresholds trigger impact",
    "Impact recorded on-chain",
  ];

  return (
    <section className="max-w-4xl mx-auto mt-20 text-center">
      <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-10">
        Economic Flow
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-lg px-6 py-6 bg-white/2"
          >
            <p className="text-white/80">{item}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/55 italic">
        CO2TAX is not just a fee token — it is a system input.
      </p>
    </section>
  );
}
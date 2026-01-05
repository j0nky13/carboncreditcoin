export default function ProtocolEnforcementDiagram() {
  const steps = [
    { label: "User Transaction", desc: "Signed transaction submitted to the network" },
    { label: "Block Execution", desc: "Validators include and execute the transaction" },
    { label: "Gas Accumulation", desc: "Fees collected at the protocol level" },
    { label: "Threshold Check", desc: "Protocol rule evaluates accumulated gas" },
    { label: "Impact Event", desc: "Enforcement event emitted automatically" },
    { label: "On-Chain Proof", desc: "Environmental action recorded permanently" },
  ];

  return (
    <section className="max-w-3xl mx-auto mt-16">
      <h3 className="text-sm uppercase tracking-widest text-primary/80 mb-8 text-center">
        Protocol Enforcement Flow
      </h3>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="relative pl-10">
            {/* vertical line */}
            {i !== steps.length - 1 && (
              <div className="absolute left-[6px] top-6 bottom-[-24px] w-px bg-white/15" />
            )}

            {/* node */}
            <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary" />

            <div className="bg-white/2 border border-white/10 rounded-lg px-6 py-4">
              <p className="font-medium text-white">{step.label}</p>
              <p className="text-sm text-white/65 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { useEffect, useState } from "react";

export default function NetworkVitalsGrid() {
  const [tps, setTps] = useState(212);

  useEffect(() => {
    const i = setInterval(() => {
      setTps(Math.floor(200 + Math.random() * 40));
    }, 4000);
    return () => clearInterval(i);
  }, []);

  const stats = [
    { label: "Active validators", value: "42" },
    { label: "Blocks produced", value: "1,234,567" },
    { label: "Current TPS", value: tps.toString(), live: true },
    { label: "Network uptime", value: "99.98%" },
    { label: "CO2TAX wallets", value: "14,501" },
    { label: "Impact events logged", value: "62,400" },
  ];

  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="border border-white/10 rounded-xl p-6 bg-white/2"
        >
          <p className="text-sm text-white/50 mb-2 flex items-center gap-2">
            {s.label}
            {s.live && (
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            )}
          </p>

          <p className="text-3xl font-semibold tracking-tight text-primary">
            {s.value}
          </p>
        </div>
      ))}
    </section>
  );
}
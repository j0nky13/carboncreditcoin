import { useEffect, useMemo, useRef, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TOTAL_SUPPLY = 300_000_000;

const DATA = [
  { name: "Public Sale", value: 100, color: "#97FF00" },
  { name: "Liquidity", value: 75, color: "#66cc00" },
  { name: "Staking Rewards", value: 50, color: "#339900" },
  { name: "Marketing & Airdrops", value: 25, color: "#00cc66" },
  { name: "Developer Wallets", value: 50, color: "#006633" },
];

// value totals = 300
const TOTAL_VALUE = DATA.reduce((sum, d) => sum + d.value, 0);

export default function SupplyDistribution() {
  const sectionRef = useRef(null);
  const chartWrapRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [chartSize, setChartSize] = useState({ w: 0, h: 0 });

  /* ===== VIEWPORT TRIGGER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== MEASURE CHART WIDTH (for label clamping) ===== */
  useEffect(() => {
    if (!chartWrapRef.current) return;

    const el = chartWrapRef.current;
    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      setChartSize({ w: rect.width, h: rect.height });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const formatAmount = (val) => {
    const amount = (val / TOTAL_VALUE) * TOTAL_SUPPLY;
    return Math.round(amount).toLocaleString();
  };

  /* ===== CUSTOM LABEL: clamp inside SVG bounds ===== */
  const renderLabel = useMemo(() => {
    return (props) => {
      const {
        cx,
        cy,
        midAngle,
        outerRadius,
        name,
        value,
      } = props;

      // If chart hasn't measured yet, skip labels for one frame
      if (!chartSize.w) return null;

      const RADIAN = Math.PI / 180;

      // Push labels outward a bit
      const r = outerRadius + 22;
      const xRaw = cx + r * Math.cos(-midAngle * RADIAN);
      const y = cy + r * Math.sin(-midAngle * RADIAN);

      // Clamp x so text never gets cut off
      const PAD = 18;
      const x = Math.max(PAD, Math.min(xRaw, chartSize.w - PAD));

      // Anchor depends on which side (based on raw position)
      const anchor = xRaw > cx ? "start" : "end";

      const amount = formatAmount(value);

      return (
        <text
          x={x}
          y={y}
          textAnchor={anchor}
          dominantBaseline="central"
          fill="rgba(255,255,255,0.72)"
          fontSize={12}
        >
          <tspan x={x} dy="-0.25em" style={{ fill: "rgba(255,255,255,0.70)" }}>
            {name}
          </tspan>
          <tspan x={x} dy="1.2em" style={{ fill: "rgba(151,255,0,0.85)" }}>
            {amount}
          </tspan>
        </text>
      );
    };
  }, [chartSize.w]);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center"
    >
      {/* ===== COPY ===== */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Supply & Distribution
        </h2>

        <p className="text-white/80 leading-relaxed">
          CO2TAX launches with a{" "}
          <span className="text-primary font-medium">
            fixed genesis supply of 300,000,000 tokens
          </span>
          . All allocations are defined at genesis, committed to chain state, and
          publicly auditable.
        </p>

        <p className="text-white/75 leading-relaxed">
          No discretionary minting exists. Token distribution follows protocol
          rules — not governance votes, off-chain decisions, or emergency
          overrides.
        </p>

        <div className="pt-4 space-y-3 text-sm text-white/70">
          <p>
            <span className="text-primary font-medium">Public Sale</span> — broad
            early distribution
          </p>
          <p>
            <span className="text-primary font-medium">Liquidity</span> — stable
            exchange markets
          </p>
          <p>
            <span className="text-primary font-medium">Staking Rewards</span> —
            long-term validator security
          </p>
          <p>
            <span className="text-primary font-medium">Marketing & Airdrops</span>{" "}
            — ecosystem growth
          </p>
          <p>
            <span className="text-primary font-medium">Developer Wallets</span> —
            vested protocol development
          </p>
        </div>

        <p className="text-xs text-white/50 italic">
          All wallet addresses and vesting schedules are visible in the genesis
          file.
        </p>
      </div>

      {/* ===== PIE CHART ===== */}
      <div ref={chartWrapRef} className="h-[380px] w-full">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="60%"
              isAnimationActive={visible}
              animationDuration={1200}
              animationEasing="ease-out"
              label={renderLabel}
              labelLine={false}
            >
              {DATA.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => {
                const amount = (value / TOTAL_VALUE) * TOTAL_SUPPLY;
                return [`${Math.round(amount).toLocaleString()} CO2TAX`, name];
              }}
              contentStyle={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontSize: "0.85rem",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
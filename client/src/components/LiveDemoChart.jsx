// src/components/LiveDemoChart.jsx
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const generateMockData = () => {
  const now = Date.now();
  return Array.from({ length: 14 }, (_, i) => ({
    time: new Date(now - (13 - i) * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    throughput: 980 + Math.floor(Math.random() * 80),
  }));
};

export default function LiveDemoChart() {
  const [data, setData] = useState(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [
        ...prev.slice(1),
        {
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          throughput: 980 + Math.floor(Math.random() * 80),
        },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black/60 border border-white/10 rounded-xl p-6">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary/80">
            Network telemetry
          </p>
          <h3 className="text-lg font-semibold">
            Block throughput (rolling window)
          </h3>
        </div>

        <span className="text-[11px] px-3 py-1 rounded-full border border-yellow-500/40 text-yellow-400">
          Demo telemetry
        </span>
      </div>

      {/* ===== CHART ===== */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
          />
          <XAxis
            dataKey="time"
            stroke="rgba(255,255,255,0.4)"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            stroke="rgba(255,255,255,0.4)"
            tick={{ fontSize: 11 }}
            width={40}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0b0b0b",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#aaa" }}
          />
          <Line
            type="monotone"
            dataKey="throughput"
            stroke="#97FF00"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* ===== FOOTNOTE ===== */}
      <p className="mt-4 text-xs text-white/45">
        Displays simulated block throughput for interface demonstration.
        Live consensus metrics will replace demo telemetry as public RPC
        endpoints are enabled.
      </p>
    </section>
  );
}
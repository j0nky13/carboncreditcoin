// src/components/ICOChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { phase: 'Private Round', tokens: 10000000 },
  { phase: 'Seed Round', tokens: 20000000 },
  { phase: 'Pre-Sale', tokens: 30000000 },
  { phase: 'Public Sale', tokens: 40000000 },
  { phase: 'Staking', tokens: 50000000 },
  { phase: 'Validator Rewards', tokens: 50000000 },
];

function ICOChart() {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">ICO Token Distribution Timeline</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="phase" stroke="#aaa" />
          <YAxis stroke="#aaa" tickFormatter={(val) => `${val / 1000000}M`} />
          <Tooltip formatter={(value) => `${value.toLocaleString()} CO2TAX`} />
          <Line type="monotone" dataKey="tokens" stroke="#97FF00" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ICOChart;

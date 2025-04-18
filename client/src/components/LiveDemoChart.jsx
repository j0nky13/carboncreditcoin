// src/components/LiveDemoChart.jsx
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const generateMockData = () => {
  const now = Date.now();
  return Array.from({ length: 12 }, (_, i) => ({
    time: new Date(now - (11 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    blocks: 1000 + Math.floor(Math.random() * 100),
  }));
};

function LiveDemoChart() {
  const [data, setData] = useState(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const updated = [...prev.slice(1), {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          blocks: 1000 + Math.floor(Math.random() * 100),
        }];
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Block Production (Demo)</h2>
        <span className="text-xs px-2 py-1 bg-yellow-700 text-yellow-300 rounded">Demo Data</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="blocks" stroke="#97FF00" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LiveDemoChart;

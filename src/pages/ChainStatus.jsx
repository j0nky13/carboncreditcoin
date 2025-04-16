// src/pages/ChainStatus.jsx
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import LiveDemoChart from '../components/LiveDemoChart';

function ChainStatus() {
  const [tps, setTps] = useState(212);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTPS = Math.floor(200 + Math.random() * 40);
      setTps(randomTPS);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Validators', value: '42', delay: '0s' },
    { label: 'Blocks Produced', value: '1,234,567', delay: '0.1s' },
    {
      label: 'Current TPS',
      value: tps.toString(),
      delay: '0.2s',
      animate: true,
      blink: true,
    },
    { label: 'Uptime', value: '99.98%', delay: '0.3s', blink: true },
    { label: 'Total CO₂TAX Wallets', value: '14,501', delay: '0.4s' },
    { label: 'Trees Committed', value: '62,400 🌳', delay: '0.5s' },
  ];

  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-primary mb-10 text-center">
            🌍 CarbonChain: Network Health Overview
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-6 rounded-lg shadow text-center hover:scale-[1.02] transition-all duration-500 animate-fadeInUp`}
                style={{ animationDelay: stat.delay, animationFillMode: 'forwards' }}
              >
                <p className="text-gray-400 text-sm mb-1 flex justify-center items-center gap-1">
                  {stat.label}
                  {stat.blink && <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />}
                </p>
                <p
                  className={`text-3xl font-bold text-primary transition-all duration-500 ${
                    stat.animate ? 'animate-pulse' : ''
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <LiveDemoChart />
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center text-sm text-gray-400">
            Data updates every 60 seconds. Full chain APIs, live validator map, and faucet links coming soon.
          </div>
        </div>
      </section>
    </>
  );
}

export default ChainStatus;

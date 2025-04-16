// src/pages/Tokenomics.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'ICO / Public Sale', value: 100, color: '#97FF00' },
  { name: 'Liquidity Pool', value: 75, color: '#66cc00' },
  { name: 'Staking Rewards', value: 50, color: '#339900' },
  { name: 'Marketing & Airdrops', value: 25, color: '#00cc66' },
  { name: 'Developer Wallets', value: 50, color: '#006633' },
];

function Tokenomics() {
  const [showCTA, setShowCTA] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(false), 1000 * 60 * 60); // hide after 1 hour
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />
      <section className="bg-dark text-white min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            CO2TAX Tokenomics 
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Transparent, fixed supply. Every token has a purpose. Here's how CO2TAX is distributed and used to power the Carbon Credit Coin ecosystem.
          </p>

          <div className="h-96 w-full mb-12">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="text-left space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-primary">🔹 Total Supply: 300,000,000 CO2TAX</h2>
              <p className="text-sm text-gray-400">An additional 50,000,000 CO2TAX will be generated over 20 years as validator rewards using a halving schedule similar to Bitcoin. This long-term emission ensures sustained validator incentives while preserving scarcity.</p>
            </div>
            <div>
              <p><span className="text-primary font-bold">100,000,000</span> – ICO / Public Sale</p>
              <p><span className="text-primary font-bold">75,000,000</span> – Liquidity Pool (Exchanges & DEXs)</p>
              <p><span className="text-primary font-bold">50,000,000</span> – Staking Rewards (Validator incentives)</p>
              <p><span className="text-primary font-bold">25,000,000</span> – Marketing, Partnerships, Airdrops</p>
              <p><span className="text-primary font-bold">50,000,000</span> – Dev Wallets (25M each, locked/vested)</p>
            </div>
            <div>
              <p className="italic text-sm text-gray-500">Note: All wallet addresses and allocations are publicly viewable in the genesis block and will be verifiable at launch.</p>
            </div>
          </div>

          {showCTA && (
            <div className="mt-12 p-6 bg-primary/10 border border-primary rounded-lg shadow-lg animate-fadeInUp">
              <h2 className="text-xl font-semibold text-primary mb-2">🚀 Join the CO2TAX ICO Before It Closes!</h2>
              <p className="text-gray-300 mb-4">Early supporters receive exclusive access and perks.</p>
              <Link to="/launch" className="inline-block bg-primary text-black font-bold px-6 py-2 rounded hover:scale-105 transition">
                Join the ICO Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Tokenomics;
// src/pages/Dashboard.jsx
import React from 'react';
import { Copy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  const handleCopy = () => {
    navigator.clipboard.writeText(user.referral);
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Welcome, {user.name}</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* ICO Contribution Status */}
          <div className="bg-gray-900 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">ICO Contribution</h2>
            <p className="text-gray-400 text-sm mb-1">Total CO2TAX Purchased</p>
            <p className="text-2xl font-bold text-primary">{user.icoTotal.toLocaleString()}</p>
          </div>

          {/* Wallet Info */}
          <div className="bg-gray-900 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Wallet Info</h2>
            <p className="text-gray-400 text-sm mb-1">Connected Wallet</p>
            <p className="text-sm font-mono text-lime-400 truncate">{user.wallet}</p>
          </div>
        </div>

        {/* Referral */}
        <div className="bg-gray-900 rounded-lg p-6 mb-10 shadow">
          <h2 className="text-xl font-semibold mb-2">Referral Link</h2>
          <div className="flex items-center justify-between bg-gray-800 p-3 rounded">
            <span className="text-sm font-mono text-lime-400 truncate">{user.referral}</span>
            <button onClick={handleCopy} className="ml-4 text-sm bg-primary text-black px-3 py-1 rounded hover:bg-lime-300 flex items-center gap-1">
              <Copy size={16} /> Copy
            </button>
          </div>
        </div>

        {/* Placeholder for Nodes */}
        <div className="bg-gray-900 rounded-lg p-6 shadow mb-10">
          <h2 className="text-xl font-semibold mb-2">Validator / Node Status</h2>
          <p className="text-sm text-gray-400">Coming soon: Real-time node stats and rewards tracking.</p>
        </div>

        {/* Countdown */}
        <div className="bg-gray-900 rounded-lg p-6 shadow text-center">
          <h2 className="text-xl font-semibold mb-4">ICO Ends In</h2>
          <p className="text-3xl font-bold text-primary">04d : 12h : 35m : 48s</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

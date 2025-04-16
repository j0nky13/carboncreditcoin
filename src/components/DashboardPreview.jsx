// src/components/DashboardPreview.jsx
import React from 'react';
import { Server, Activity, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';

function DashboardPreview() {
  return (
    <section className="bg-dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Live Blockchain Insights</h2>
        <p className="text-lg text-gray-300 mb-12">
          Monitor validator activity, transaction throughput, and real-time chain health on the CarbonChain network. 
          Get full transparency on how CO2TAX flows and where it's making a difference.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Server size={26} />
              <h3 className="text-xl font-semibold">Validator Status</h3>
            </div>
            <p className="text-gray-300">
              Uptime, slashing events, and performance metrics for all active nodes across the network.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Activity size={26} />
              <h3 className="text-xl font-semibold">Live Transactions</h3>
            </div>
            <p className="text-gray-300">
              Real-time transaction speeds (TPS), blocks produced, and fees distributed for transparency and verification.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <BarChart4 size={26} />
              <h3 className="text-xl font-semibold">CO2TAX Flow</h3>
            </div>
            <p className="text-gray-300">
              Breakdown of where gas fees go, how many trees have been triggered, and wallet activity across the chain.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/chain-status"
            className="inline-block bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Launch Full Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;

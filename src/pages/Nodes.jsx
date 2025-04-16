// src/pages/Nodes.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Server, TerminalSquare, ShieldCheck, Zap, Cloud, Code2, Cpu, Activity, Blocks, TimerReset } from 'lucide-react';

function Nodes() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-6">
            Run a CarbonChain Node
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Join the CarbonChain network and contribute to the world’s first carbon-negative blockchain.
            Whether you’re hosting a full node, validator, or staking partner — you’re helping secure the planet.
          </p>

          {/* Live Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-900 p-6 rounded-lg shadow text-center animate-fadeInUp">
              <Activity className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-gray-400 text-sm mb-1">Active Validators</p>
              <p className="text-3xl font-bold text-primary">42</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow text-center animate-fadeInUp">
              <Blocks className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-gray-400 text-sm mb-1">Blocks Produced</p>
              <p className="text-3xl font-bold text-primary">1,234,567</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow text-center animate-fadeInUp">
              <TimerReset className="mx-auto mb-2 text-primary" size={32} />
              <p className="text-gray-400 text-sm mb-1">Current TPS</p>
              <p className="text-3xl font-bold text-primary">212</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 text-primary mb-4">
                <Server size={24} />
                <h2 className="text-xl font-semibold">Types of Nodes</h2>
              </div>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li><strong>Full Node</strong>: Stores a full copy of the blockchain & syncs live blocks</li>
                <li><strong>Validator Node</strong>: Helps produce blocks, vote on proposals, and earns CO2TAX</li>
                <li><strong>Light Node</strong>: Lower resource use, great for explorers or devs</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 text-primary mb-4">
                <ShieldCheck size={24} />
                <h2 className="text-xl font-semibold">Why Run a Node?</h2>
              </div>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Boost network decentralization and uptime</li>
                <li>Earn validator rewards or future airdrops</li>
                <li>Secure access to verified chain data</li>
                <li>Support eco-driven innovation</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-[1.02] transition md:col-span-2">
              <div className="flex items-center gap-3 text-primary mb-4">
                <TerminalSquare size={24} />
                <h2 className="text-xl font-semibold">Launch Your Node</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Download one of our node launcher kits or deploy via Docker:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li><Cpu size={16} className="inline mr-2 text-primary" /> Plug-and-play Pi kit (coming soon)</li>
                <li><Code2 size={16} className="inline mr-2 text-primary" /> One-line Docker installer (macOS, Linux, Windows)</li>
                <li><Cloud size={16} className="inline mr-2 text-primary" /> Cloud Node Setup via DigitalOcean</li>
              </ul>
              <p className="text-xs text-gray-500 mt-4 italic">
                Auto-updates, pruning, validator slashing protection, and firewall are included.
              </p>
            </div>

            <div className="bg-primary/10 p-6 border border-primary rounded-lg md:col-span-2 mt-6">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Zap size={22} />
                <h2 className="text-lg font-semibold">Validator Launch Tools</h2>
              </div>
              <p className="text-sm text-gray-300">
                Coming soon: web-based validator dashboard, uptime monitoring, alerts, and earnings tracker.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Nodes;

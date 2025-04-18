// src/pages/CarbonChain.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TreeWidget from '../components/TreeWidget';
import LiveDemoChart from '../components/LiveDemoChart';

function CarbonChain() {
  return (
    <>
      <NavBar />
      <section className="bg-dark text-white py-20 px-6 transition-opacity duration-700 ease-in-out">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary mb-4"> Introducing CarbonChain</h1>
          <p className="text-gray-300 mb-6">
            CarbonChain is a carbon-negative blockchain built on the Cosmos SDK and powered by the CO2TAX token.
            Designed for transparency, utility, and environmental impact, CarbonChain redefines how blockchains interact
            with the planet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto animate-fadeInUp">
          {[
            {
              title: 'IBC & Axelar Interoperability',
              desc: 'Seamless cross-chain compatibility with Cosmos and EVM chains through IBC + Axelar bridge.',
            },
            {
              title: 'One-Click Validator Deployment',
              desc: 'Dockerized node launcher and cloud setup options for validator onboarding.',
            },
            {
              title: 'Tree Planting Trigger',
              desc: 'When $100 is collected in gas fees, a tree is planted and logged securely on-chain.',
            },
            {
              title: 'Secure Data Channels (v2)',
              desc: 'Planned encrypted file and medical/supply data transmission on CarbonChain 2.0.',
            },
            {
              title: 'Anti-Bot Protections',
              desc: 'Sniping defenses, slashing, and uptime monitoring to ensure fair validator rewards.',
            },
            {
              title: 'Smart Contract Layer (coming soon)',
              desc: 'Optional CosmWasm-based contracts planned post-launch.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-[1.02] transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-20 max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-primary mb-4"> Use Cases</h2>
          <ul className="text-gray-300 space-y-3 text-left">
            <li>✅ Eco commerce and donations via CO2TAX + Stripe</li>
            <li>✅ Transparent and trackable carbon offsetting for individuals and organizations</li>
            <li>✅ Medical and supply chain data relay (v2)</li>
            <li>✅ Validator revenue via sustainable incentives</li>
          </ul>
        </div>

        {/* Tree Tracker */}
        <div className="mt-20 animate-fadeInUp">
          <TreeWidget />
        </div>

        {/* Validator Chart Demo */}
        <div className="mt-20 max-w-5xl mx-auto animate-fadeInUp">
          <h2 className="text-3xl font-bold text-primary text-center mb-6"> Network Activity (Live Demo)</h2>
          <LiveDemoChart />
        </div>

        {/* Roadmap */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4"> Roadmap</h2>
          <ul className="text-gray-300 space-y-3 text-left">
            <li className="animate-fadeInUp delay-[100ms]">🔹 Q2 2025 — Launch Testnet + ICO</li>
            <li className="animate-fadeInUp delay-[300ms]">🔹 Q3 2025 — Validator kits, Leap Wallet integration</li>
            <li className="animate-fadeInUp delay-[500ms]">🔹 Q4 2025 — Smart contract module and encrypted file transmission (v2)</li>
            <li className="animate-fadeInUp delay-[700ms]">🔹 2026 — CarbonChain 2.0 migration and governance evolution</li>
          </ul>
        </div>

        {/* Testnet */}
        <div className="mt-20 max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-primary mb-4"> Join the Testnet</h2>
          <p className="text-gray-400 mb-4">
            The CarbonChain testnet is live. Help validate, test the network, and prepare for mainnet launch.
          </p>
          <ul className="text-left text-sm text-gray-400 space-y-2">
            <li>• GitHub: <a href="https://github.com/carboncreditchain" className="text-primary hover:underline">carboncreditchain</a></li>
            <li>• Snapshots, pruning, faucet, and Docker support included</li>
            <li>• Node launcher available for plug-and-play validators</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CarbonChain;

// src/pages/HowItWorks.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { TreeDeciduous, Wallet, Leaf, Coins } from 'lucide-react';

function HowItWorks() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-dark text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            The Carbon Credit Coin (CO2TAX) system is simple: every $100 collected in gas fees triggers a tree planting event. Our smart contract-backed infrastructure ensures verifiable, sustainable action tied to real on-chain data.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-900 p-6 rounded-lg shadow text-left hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Wallet size={26} />
                <h3 className="text-xl font-semibold">Buy or Transact CO2TAX</h3>
              </div>
              <p className="text-gray-300">
                Every transaction on the CarbonChain network generates a small gas fee. Once we accumulate $100 in these fees across wallets, it initiates an automated tree planting trigger.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow text-left hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Coins size={26} />
                <h3 className="text-xl font-semibold">Proof via Blockchain</h3>
              </div>
              <p className="text-gray-300">
                Every trigger and associated transaction is timestamped and visible on-chain. Wallets that contribute are tied to future tree impact, viewable via our dashboard.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow text-left hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <TreeDeciduous size={26} />
                <h3 className="text-xl font-semibold">Tree Gets Planted</h3>
              </div>
              <p className="text-gray-300">
                Our partnered team plants trees at certified farms. Each tree receives a digital tag (QR or RFID) and is tracked until it reaches transplant maturity.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow text-left hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Leaf size={26} />
                <h3 className="text-xl font-semibold">Monitor the Impact</h3>
              </div>
              <p className="text-gray-300">
                View your impact via the public CarbonChain dashboard. Monitor trees funded, CO2 offset credits, and participate in staking or governance in the future.
              </p>
            </div>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            All systems are designed to be transparent, auditable, and environmentally meaningful — one CO2TAX transaction at a time.
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HowItWorks;

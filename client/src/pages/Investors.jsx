// src/pages/Investors.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ShieldCheck, TreeDeciduous, LineChart, DollarSign, Layers3, Users, FileText, Download } from 'lucide-react';
import ICOChart from '../components/ICOChart';
function Investors() {
  return (
    <>
      <NavBar />
      <section className="bg-black text-white min-h-screen px-6 py-20">
        <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Investor Relations</h1>
          <p className="text-lg text-gray-300 mb-12">
            Carbon Credit Coin is building a transparent, green, and verifiable crypto ecosystem. Here's how to invest, what to expect, and why it matters.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <div className="flex items-center gap-3 mb-2 text-primary">
                <TreeDeciduous />
                <h2 className="text-xl font-semibold">Why Invest?</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Real-world environmental impact — tree planting & verified CO2 offsets</li>
                <li>Fixed supply with validator staking incentives</li>
                <li>Transparent tokenomics, no hidden taxes</li>
                <li>Growth potential through integrations and real-world utility</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2 text-primary">
                <LineChart />
                <h2 className="text-xl font-semibold">ICO Details</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Token Price: $0.05 CO2TAX (pre-sale)</li>
                <li>Hard cap and allocation limits (TBA)</li>
                <li>No KYC for early access rounds</li>
                <li>Phase-based unlocking and public visibility</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2 text-primary">
                <DollarSign />
                <h2 className="text-xl font-semibold">Investment Methods</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Crypto accepted: ETH, USDC, ATOM</li>
                <li>Planned fiat options (via Stripe gateway)</li>
                <li>Smart contract-based vesting and validation</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2 text-primary">
                <ShieldCheck />
                <h2 className="text-xl font-semibold">Security & Compliance</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All initial allocations published in genesis block</li>
                <li>Developer wallets are time-locked and vested</li>
                <li>Validator rewards capped with BTC-style halving</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2 text-primary">
                <Layers3 />
                <h2 className="text-xl font-semibold">Future Benefits</h2>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Earn passive rewards through staking</li>
                <li>Physical token tie-ins (real world CO2TAX challenge coins)</li>
                <li>Voting power through future governance modules</li>
              </ul>
            </div>
          </div>
<div className="mt-16">
  <ICOChart />
</div>
          <div className="grid md:grid-cols-2 gap-6 mt-16 text-left">
            <div className="bg-primary/10 border border-primary p-6 rounded-lg">
              <div className="flex items-center gap-3 text-primary mb-2">
                <FileText />
                <h3 className="text-lg font-semibold">White Paper</h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Review the full details of the Carbon Credit Coin protocol and project phases.
              </p>
              <a
                href="/whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black font-semibold rounded hover:scale-105 transition"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>

            <div className="bg-primary/10 border border-primary p-6 rounded-lg">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Users />
                <h3 className="text-lg font-semibold">Investor Contact Form</h3>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Interested in private sales or large-volume entry? Submit your details and we’ll get back to you.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded bg-black border border-gray-700 text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded bg-black border border-gray-700 text-white"
                />
                <textarea
                  placeholder="Message or inquiry..."
                  className="w-full px-4 py-2 rounded bg-black border border-gray-700 text-white"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary text-black px-6 py-2 rounded font-semibold hover:scale-105 transition"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Investors;

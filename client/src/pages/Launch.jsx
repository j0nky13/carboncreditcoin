import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function Launch() {
  return (
    <>
      <NavBar />
      <section className="bg-black text-white min-h-screen py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Join the CO2TAX ICO</h1>

          <p className="text-lg text-gray-300 mb-6">
            Be part of the world’s first carbon-negative cryptocurrency. Buy Carbon Credit Coin (CO₂TAX) at our special launch price of <span className="text-primary font-semibold">$0.05 per token</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold text-primary mb-4">ICO Details</h2>
              <ul className="space-y-2 text-gray-300">
                <li><strong>Token:</strong> CO2TAX</li>
                <li><strong>Launch Date:</strong> April 25, 2025</li>
                <li><strong>Initial Price:</strong> $0.05 USD</li>
                <li><strong>Total Supply:</strong> 300,000,000</li>
                <li><strong>Public Allocation:</strong> 100,000,000</li>
                <li><strong>Staking Pool:</strong> 50,000,000</li>
                <li><strong>Accepted Payment:</strong> USDC, ETH (via Axelar)</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold text-primary mb-4">How to Participate</h2>
              <ol className="list-decimal list-inside text-gray-300 space-y-2">
                <li>Connect your wallet (Leap Wallet recommended)</li>
                <li>Select the amount of CO2TAX you'd like to buy</li>
                <li>Pay in USDC or ETH via the Axelar bridge</li>
                <li>Receive your CO2TAX tokens immediately</li>
              </ol>
              <div className="mt-6 text-center">
                <Link
                  to="/dashboard"
                  className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded hover:bg-lime-400 transition"
                >
                  Launch Dashboard
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            CO2TAX will be listed on Osmosis and other major exchanges after the ICO. <br />
            A portion of all funds raised will go directly toward planting real, trackable trees.
          </div>
        </div>
      </section>
    </>
  );
}

export default Launch;

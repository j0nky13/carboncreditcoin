// src/pages/About.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { TreeDeciduous, AlertTriangle, Coins, BarChart4 } from 'lucide-react';

function About() {
  return (
    <>
      <NavBar />
      <section className="bg-dark text-white min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fadeInUp">
            Not Your Typical Green Project 🌱
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-10 animate-fadeInUp">
            Carbon Credit Coin (CO2TAX) began as a meme — a playful jab at the idea that environmentalism had lost its soul. But the deeper we went, the more we realized the joke was on the system, not the planet. This project is a satirical yet sincere rebellion against the empty virtue-signaling that’s plagued climate discourse.
          </p>

          {/* Climate Scam Section */}
          <div className="mt-20 text-left animate-fadeInUp">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-primary"> Climate Change as a Political Tool is a Scam!</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Governments are partnering with NGOs and nonprofits, not to tackle real pollution but to profit off the masses. Instead of going after the true environmental culprits—big business, chemical factories, mining operations, and industrial accidents—they shift the burden onto everyday people.
            </p>
            <p className="text-gray-400 mb-6">
              It’s become a political tool, designed to control public behavior and tax every aspect of life. It’s practically a religion for those with a “Chicken Little Complex,” too brainwashed by the media to ask real questions.
            </p>
          </div>

          {/* Carbon Credit Scam */}
          <div className="mt-20 text-left animate-fadeInUp">
            <div className="flex items-center gap-4 mb-4">
              <Coins className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-primary"> The Carbon Credit Scam</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Carbon credit taxing is used to monetize your eco-guilt, turning it into cash for mega-corporations. These “green” groups spend more on PR than planting trees.
            </p>
            <p className="text-gray-400 mb-6">
              We’re not about that. We plant trees. Period.
            </p>
          </div>

          {/* Tree Planting Section */}
          <div className="mt-20 text-left animate-fadeInUp">
            <div className="flex items-center gap-4 mb-4">
              <TreeDeciduous className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-primary">🌱 Our Solution: Plant Trees. For Real.</h2>
            </div>
            <p className="text-gray-400 mb-4">
              You give us money, we plant trees. It’s that simple. For every $100 worth of CO2TAX or physical coin, we plant a tree and track it via blockchain.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>✅ The Earth loves trees.</li>
              <li>✅ Trees love CO₂ — they literally can’t survive without it.</li>
              <li>✅ We need trees more than ever.</li>
            </ul>
          </div>

          {/* Blockchain Section */}
          <div className="mt-20 text-left animate-fadeInUp">
            <div className="flex items-center gap-4 mb-4">
              <BarChart4 className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold text-primary"> Blockchain + Environmental Impact</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Blockchain allows full transparency. CO2TAX transactions are publicly linked to tree planting, verified through QR and RFID tracking.
            </p>
            <p className="text-gray-400 mb-6">
              Every $100 collected in gas fees = 1 tree. No more guessing. No greenwashing. Just facts on-chain.
            </p>
          </div>

          {/* Physical Tokens */}
          <div className="mt-20 text-left animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-2"> Physical Tokens</h2>
            <p className="text-gray-400 mb-6">
              Don’t like crypto? We’ve got collectible brass challenge coins. Laser-engraved, limited edition, tree-linked.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="mt-20 text-left animate-fadeInUp">
            <h2 className="text-3xl font-bold text-primary mb-2"> The Bottom Line</h2>
            <p className="text-gray-400 mb-6">
              We’re not here to guilt you. We’re here to grow forests. Join us and plant the future, one CO2TAX at a time.
            </p>
            <p className="text-sm text-gray-500 italic mt-10">
              *Cryptocurrency is a high-risk investment. We are not responsible for any financial loss. Invest at your own risk.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
// import React from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import TreeWidget from '../components/TreeWidget';
// import LiveDemoChart from '../components/LiveDemoChart';
// import { CheckCircle, CircleDot } from 'lucide-react';
// import TimelineRoadmap from '../components/TimelineRoadmap';
// // import EcoMouseFlowMap from '../components/EcoMouseFlowMap';
// import RoadmapTwo from '../components/RoadmapTwo';


// function CarbonChain() {
//   return (
//     <>
//       <NavBar />
//       <section className="bg-dark text-white py-20 px-6 transition-opacity duration-700 ease-in-out">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl font-bold text-primary mb-4"> Introducing CarbonChain</h1>
//           <p className="text-gray-300 mb-6">
//             CarbonChain is a carbon-negative blockchain built on the Cosmos SDK and powered by the CO2TAX token.
//             Designed for transparency, utility, and environmental impact, CarbonChain redefines how blockchains interact
//             with the planet.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto animate-fadeInUp">
//           {[
//             {
//               title: 'IBC & Axelar Interoperability',
//               desc: 'Seamless cross-chain compatibility with Cosmos and EVM chains through IBC + Axelar bridge.',
//             },
//             {
//               title: 'One-Click Validator Deployment',
//               desc: 'Dockerized node launcher and cloud setup options for validator onboarding.',
//             },
//             {
//               title: 'Tree Planting Trigger',
//               desc: 'When $100 is collected in gas fees, a tree is planted and logged securely on-chain.',
//             },
//             {
//               title: 'Secure Data Channels (v2)',
//               desc: 'Planned encrypted file and medical/supply data transmission on CarbonChain 2.0.',
//             },
//             {
//               title: 'Anti-Bot Protections',
//               desc: 'Sniping defenses, slashing, and uptime monitoring to ensure fair validator rewards.',
//             },
//             {
//               title: 'Smart Contract Layer (coming soon)',
//               desc: 'Optional CosmWasm-based contracts planned post-launch.',
//             },
//           ].map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-900 rounded-xl p-6 shadow-md hover:scale-[1.02] transition-all"
//             >
//               <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
//               <p className="text-gray-400 text-sm">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Use Cases */}
//         <div className="mt-20 max-w-4xl mx-auto text-center animate-fadeInUp">
//           <h2 className="text-3xl font-bold text-primary mb-4"> Use Cases</h2>
//           <ul className="text-gray-300 space-y-3 text-left">
//             <li><CheckCircle className="inline mr-2 text-green-500 w-4 h-4" />Eco commerce and donations via CO2TAX + Stripe</li>
//             <li><CheckCircle className="inline mr-2 text-green-500 w-4 h-4" />Transparent and trackable carbon offsetting for individuals and organizations</li>
//             <li><CheckCircle className="inline mr-2 text-green-500 w-4 h-4" />Medical and supply chain data relay (v2)</li>
//             <li><CheckCircle className="inline mr-2 text-green-500 w-4 h-4" />Validator revenue via sustainable incentives</li>
//           </ul>
//         </div>

//         {/* Tree Tracker */}
//         <div className="mt-20 animate-fadeInUp">
//           <TreeWidget />
//         </div>

//         {/* Validator Chart Demo */}
//         <div className="mt-20 max-w-5xl mx-auto animate-fadeInUp">
//           <h2 className="text-3xl font-bold text-primary text-center mb-6"> Network Activity (Live Demo)</h2>
//           <LiveDemoChart />
//         </div>



// <div className="mt-20 animate-fadeInUp">
//   <TimelineRoadmap />
// </div>



//         {/* Testnet */}
//         <div className="mt-20 max-w-4xl mx-auto text-center animate-fadeInUp">
//           <h2 className="text-3xl font-bold text-primary mb-4"> Join the Testnet</h2>
//           <p className="text-gray-400 mb-4">
//             The CarbonChain testnet is live. Help validate, test the network, and prepare for mainnet launch.
//           </p>
//           <ul className="text-left text-sm text-gray-400 space-y-2">
//             <li>• GitHub: <a href="https://github.com/carboncreditchain" className="text-primary hover:underline">carboncreditchain</a></li>
//             <li>• Snapshots, pruning, faucet, and Docker support included</li>
//             <li>• Node launcher available for plug-and-play validators</li>
//           </ul>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default CarbonChain;

// newer section

// import React from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import { CheckCircle } from 'lucide-react';

// const CarbonChainPage = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="bg-dark text-white px-4 py-16 space-y-20">
//         {/* Hero Section */}
//         <section className="text-center max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#97FF00] mb-4">CarbonChain: The Carbon-Negative Blockchain</h1>
//           <p className="text-lg text-gray-300">
//             Built on Cosmos SDK. Powered by CO2TAX. Designed to plant trees.
//           </p>
//         </section>

//         {/* What is CarbonChain */}
//         <section className="max-w-3xl mx-auto space-y-4">
//           <h2 className="text-3xl font-semibold text-[#97FF00]">What is CarbonChain?</h2>
//           <p>
//             CarbonChain is a public, utility-first blockchain built with the Cosmos SDK. It powers the CO2TAX token,
//             used to support real-world sustainability projects including automated tree planting. Every $100 in gas
//             fees collected triggers an on-chain record to plant a tree.
//           </p>
//         </section>

//         {/* Technical Stack */}
//         <section className="max-w-3xl mx-auto space-y-4">
//           <h2 className="text-3xl font-semibold text-[#97FF00]">Technical Stack</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-300">
//             <li>Cosmos SDK with Tendermint Core</li>
//             <li>IBC-enabled from genesis</li>
//             <li>Axelar bridge for EVM + Cosmos cross-chain</li>
//             <li>CosmWasm smart contract support (ICO, referrals, leaderboard)</li>
//             <li>Data pruning + snapshot syncing</li>
//             <li>Custom prefix: <code>co2tax</code> addresses</li>
//           </ul>
//         </section>

//         {/* Core Features */}
//         <section className="max-w-3xl mx-auto space-y-4">
//           <h2 className="text-3xl font-semibold text-[#97FF00]">Core Features in V1</h2>
//           <ul className="space-y-3">
//             <li className="flex items-start gap-2">
//               <CheckCircle className="text-[#97FF00] mt-1" />
//               One-click validator setup with Docker or cloud launcher
//             </li>
//             <li className="flex items-start gap-2">
//               <CheckCircle className="text-[#97FF00] mt-1" />
//               Gas-fee-triggered tree planting logic on-chain
//             </li>
//             <li className="flex items-start gap-2">
//               <CheckCircle className="text-[#97FF00] mt-1" />
//               Leap Wallet integration + IBC token transfers
//             </li>
//             <li className="flex items-start gap-2">
//               <CheckCircle className="text-[#97FF00] mt-1" />
//               Transparent genesis with open validator set
//             </li>
//             <li className="flex items-start gap-2">
//               <CheckCircle className="text-[#97FF00] mt-1" />
//               Smart contract tools for token drops, referrals, and leaderboard
//             </li>
//           </ul>
//         </section>

//         {/* Utility of CO2TAX */}
//         <section className="max-w-3xl mx-auto space-y-4">
//           <h2 className="text-3xl font-semibold text-[#97FF00]">Utility of CO2TAX</h2>
//           <p>
//             CO2TAX is a utility token used for gas fees, validator rewards, and funding real-world eco-infrastructure like
//             tree farms. It is not a security. The token powers interactions on CarbonChain and distributes rewards to
//             stakeholders helping grow the ecosystem.
//           </p>
//         </section>

//         {/* V2 Implementation Plans */}
//         <section className="max-w-3xl mx-auto space-y-4 border-t border-[#3C3C46] pt-10">
//           <h2 className="text-3xl font-semibold text-[#6E00FF]">What's Next: CarbonChain V2</h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-300">
//             <li>zk-rollup or onion-routing privacy layers</li>
//             <li>Encrypted file transfer for medical, clinical, and supply chain use cases</li>
//             <li>Real-time validator dashboard + tree counter widgets</li>
//             <li>Referral system upgrade with contract-based validation</li>
//             <li>DAO governance integration for treasury + upgrades</li>
//             <li>Modular upgrade path to CarbonChain 2.0</li>
//           </ul>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CarbonChainPage;

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import ValidatorWidget from '../components/ValidatorWidget';
import TreeWidget from '../components/TreeWidget';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CarbonChainPage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-dark text-white px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#97FF00] mb-4">CarbonChain: The Carbon-Negative Blockchain</h1>
          <p className="text-lg text-gray-300">
            Built on Cosmos SDK. Powered by CO2TAX. Designed to plant trees and bring transparency to sustainability through blockchain.
          </p>
        </section>

        {/* What is CarbonChain */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-[#97FF00]">What is CarbonChain?</h2>
          <p>
            CarbonChain is an eco-focused, utility-first blockchain that runs on the Cosmos SDK. It utilizes the CO2TAX token to fund real-world sustainability projects, starting with automated tree planting. Every $100 in gas fees collected triggers an on-chain event to plant a tree, with long-term plans for auditable, visible impact.
          </p>
        </section>

        {/* Technical Stack */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-[#97FF00]">Technical Stack</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Cosmos SDK with Tendermint Core</li>
            <li>IBC-enabled from genesis</li>
            <li>Axelar integration for EVM + Cosmos cross-chain compatibility</li>
            <li>CosmWasm smart contract support for ICO, referral tracking, and leaderboards</li>
            <li>Snapshot syncing and aggressive pruning for fast and efficient node setup</li>
            <li>Custom wallet prefix: <code>co2tax</code></li>
          </ul>
        </section>

        {/* Core Features */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-[#97FF00]">Core Features in V1</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#97FF00] mt-1" />
              One-click validator setup via Docker or cloud launcher
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#97FF00] mt-1" />
              Gas-fee-triggered tree planting system
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#97FF00] mt-1" />
              Leap Wallet integration + IBC transfers
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#97FF00] mt-1" />
              Transparent genesis with public validator set
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-[#97FF00] mt-1" />
              Smart contract logic for token drops, referral system, and leaderboard rewards
            </li>
          </ul>
        </section>

        {/* Why CarbonChain vs Others */}
        <section className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#97FF00] text-center">Why CarbonChain Over Other Chains?</h2>
          <p className="text-center text-gray-300">
            Unlike other Cosmos SDK chains or DeFi projects, CarbonChain blends real-world impact with modern interoperability.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm text-left text-white border border-[#3C3C46]">
              <thead>
                <tr className="bg-[#1C1537] text-[#97FF00]">
                  <th className="px-4 py-2 border border-[#3C3C46]">Feature</th>
                  <th className="px-4 py-2 border border-[#3C3C46]">CarbonChain</th>
                  <th className="px-4 py-2 border border-[#3C3C46]">Typical Cosmos Chain</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="px-4 py-3 border border-[#3C3C46]">Eco Utility</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">$100 in gas = 1 tree planted</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">❌ None</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#3C3C46]">IBC + Axelar</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">✔ Full Cosmos & EVM bridge</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">Partial / IBC only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#3C3C46]">Validator Setup</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">One-click with pruning</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">Manual, tech-heavy</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#3C3C46]">Anti-Bot Protection</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">Built-in sniping defense</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">❌ Often missing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border border-[#3C3C46]">Smart Contracts</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">✔ CosmWasm w/ custom logic</td>
                  <td className="px-4 py-3 border border-[#3C3C46]">Optional, app-specific</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Utility of CO2TAX */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold text-[#97FF00]">Utility of CO2TAX</h2>
          <p>
            CO2TAX is a utility token used across CarbonChain. It powers gas fees, validator incentives, and supports eco-focused efforts like real-world tree planting. It is not classified as a security. Future utilities will include staking for governance, payment for sustainability APIs, and unlocking smart contract features.
          </p>
        </section>

        {/* Validator Dashboard */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#6E00FF] text-center">Validator Dashboard</h2>
          <p className="text-center text-gray-300">
            Launching with the testnet, the validator dashboard gives real-time visibility into block production,
            validator uptime, earnings, and total staked CO2TAX.
          </p>
          <ValidatorWidget />
        </section>

        {/* Tree Counter Widget */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-[#6E00FF] text-center">Live Tree Tracker</h2>
          <p className="text-center text-gray-300">
            Each time $100 in gas fees is processed across the network, one new tree is planted and logged. The widget below shows current totals in real time.
          </p>
          <TreeWidget />
        </section>

        {/* V2 Implementation Plans */}
        <section className="max-w-3xl mx-auto space-y-4 border-t border-[#3C3C46] pt-10">
          <h2 className="text-3xl font-semibold text-[#6E00FF]">What’s Next: CarbonChain V2</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>zk-rollup or onion-routing privacy architecture</li>
            <li>Encrypted data transfer for medical, clinical, and supply chain use cases</li>
            <li>Tree fund governance + on-chain carbon impact voting</li>
            <li>DAO-driven treasury allocation and feature prioritization</li>
            <li>Eco grants + integration of verified sustainability APIs</li>
            <li>Seamless upgrade path to CarbonChain 2.0</li>
          </ul>
        </section>

        {/* Animated CTA Footer */}
        <motion.section 
          className="text-center max-w-4xl mx-auto mt-20 border-t border-[#3C3C46] pt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-[#97FF00] text-2xl font-semibold mb-4">
            Be part of the chain.
          </div>
          <p className="text-gray-300 mb-6">
            Run a validator. Track your eco-impact. Help power a carbon-negative blockchain.
          </p>
          <Link to="/join" className="inline-block">
            <button className="bg-[#6E00FF] text-white px-6 py-2 rounded-full hover:bg-[#5600d1] transition">
              Join the Network
            </button>
          </Link>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default CarbonChainPage;

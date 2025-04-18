import React from 'react';
import { TreeDeciduous, Wallet, Rocket, Users } from 'lucide-react';

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 max-w-6xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">How CarbonChain Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-gray-300">
        <div className="flex flex-col items-center">
          <Wallet className="w-12 h-12 text-primary mb-3" />
          <p>Buy CO2TAX with crypto or fiat</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-12 h-12 text-primary mb-3" />
          <p>Hold or spend to gain staking rewards</p>
        </div>
        <div className="flex flex-col items-center">
          <TreeDeciduous className="w-12 h-12 text-primary mb-3" />
          <p>Every $100 traded = 1 tree planted 🌱</p>
        </div>
        <div className="flex flex-col items-center">
          <Rocket className="w-12 h-12 text-primary mb-3" />
          <p>Track your impact in your green dashboard</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

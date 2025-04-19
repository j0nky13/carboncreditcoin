import React from 'react';
import { CircleDot } from 'lucide-react';

const roadmap = [
  {
    quarter: 'Q2 2025',
    title: 'Launch Testnet + ICO',
    delay: '100ms',
  },
  {
    quarter: 'Q3 2025',
    title: 'Validator kits, Leap Wallet integration',
    delay: '300ms',
  },
  {
    quarter: 'Q4 2025',
    title: 'Smart contract module and encrypted file transmission (v2)',
    delay: '500ms',
  },
  {
    quarter: '2026',
    title: 'CarbonChain 2.0 migration and governance evolution',
    delay: '700ms',
  },
];

const TimelineRoadmap = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-[#9FFF00] text-center mb-10">Roadmap</h2>
      <div className="relative border-l-2 border-[#9FFF00]/40 pl-12">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className={`mb-10 animate-fadeInUp delay-[${item.delay}] relative`}
          >
            {/* Dot */}
            <div className="absolute -left-[26px] top-1">
              <div className="w-5 h-5 bg-dark rounded-full flex items-center justify-center border-2 border-[#9FFF00]">
                <CircleDot className="text-[#9FFF00] w-3.5 h-3.5" />
              </div>
            </div>

            {/* Text Content */}
            <div className="ml-2">
              <h3 className="text-lg font-semibold text-white mb-1">{item.quarter}</h3>
              <p className="text-gray-400">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineRoadmap;
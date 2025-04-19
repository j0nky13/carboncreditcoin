import React from 'react';

const ValidatorWidget = () => {
  return (
    <div className="bg-[#1C1537] border-2 border-[#6E00FF] rounded-xl p-6 shadow-lg text-sm text-white text-center space-y-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        <div className="w-full max-w-[220px]">
          <h4 className="text-md font-semibold text-[#6E00FF]">Total Validators</h4>
          <p className="text-2xl mt-1">57</p>
        </div>
        <div className="w-full max-w-[220px]">
          <h4 className="text-md font-semibold text-[#6E00FF]">Network Status</h4>
          <p className="text-2xl mt-1 text-green-400">Online</p>
        </div>
        <div className="w-full max-w-[220px]">
          <h4 className="text-md font-semibold text-[#6E00FF]">Avg. Uptime</h4>
          <p className="text-2xl mt-1">99.3%</p>
        </div>
        <div className="w-full max-w-[220px]">
          <h4 className="text-md font-semibold text-[#6E00FF]">CO2TAX Staked</h4>
          <p className="text-2xl mt-1">4.28M</p>
        </div>
      </div>
      <div>
        <a href="/dashboard" className="text-[#6E00FF] hover:underline text-sm">
          View Full Dashboard →
        </a>
      </div>
    </div>
  );
};

export default ValidatorWidget;

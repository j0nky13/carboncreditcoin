import React from 'react';

function ReferralSection() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Invite & Earn</h2>
      <p className="text-gray-300 mb-6">
        Invite others to join CarbonChain using your referral code and earn rewards. The more you share, the more impact you make 🌍
      </p>
      <p className="text-sm text-gray-500 italic mb-4">Referral system launching with the ICO. Stay tuned!</p>
      <button className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
        Copy Your Code
      </button>
    </section>
  );
}
{/* <section className="animate-fadeIn">...</section> */}

export default ReferralSection;

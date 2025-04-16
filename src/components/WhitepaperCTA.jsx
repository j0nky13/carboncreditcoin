import React from 'react';

function WhitepaperCTA() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-4">Ready to Learn More?</h2>
      <p className="text-gray-300 mb-8">
        Download the official whitepaper and understand how CarbonChain is changing the future of climate finance.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          View Whitepaper
        </a>
        <a
          href="https://discord.gg/NgDE6bm7"
          className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition"
        >
          Join the Community
        </a>
      </div>
    </section>
  );
}

export default WhitepaperCTA;

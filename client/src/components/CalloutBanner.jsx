import React from 'react';
import { Link } from 'react-router-dom';

function CalloutBanner() {
  const now = new Date();
  const icoDate = new Date("2025-04-25T00:00:00-04:00");

  if (now >= icoDate) {
    return null; // Hide banner after ICO
  }

  return (
    <section className="bg-primary text-black py-12 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Don’t Miss the CO2TAX ICO</h2>
      <p className="mb-6 text-lg md:text-xl">
        Own the future of carbon-negative crypto. Get in early at just <strong>$0.05</strong> per token.
      </p>
      <Link
        to="/launch"
        className="bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Learn More & Join ICO
      </Link>
    </section>
  );
}

export default CalloutBanner;
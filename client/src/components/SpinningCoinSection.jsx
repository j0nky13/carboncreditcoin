import React from 'react';
import spinningCoin from '../assets/spinning-coin.gif'; // Place your gif here

function SpinningCoinSection() {
  return (
    <section className="bg-dark text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
        The Carbon Credit Coin
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Representing real value, real sustainability, and real fun. Our physical merch coin will be exclusive for early ICO buyers and supporters.
      </p>
      <img
        src={spinningCoin}
        alt="Spinning Carbon Credit Coin"
        className="mx-auto w-48 md:w-64 lg:w-72 animate-spin-slow"
      />
    </section>
  );
}

export default SpinningCoinSection;
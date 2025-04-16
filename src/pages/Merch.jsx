// src/pages/Merch.jsx
import React, { useState } from 'react';
import merchMockup from '../assets/coin-mockup.png';

const products = [
  {
    id: 1,
    name: 'Limited Edition CO₂TAX Coin',
    price: '$20.00',
    image: merchMockup,
    description: 'Metal collectible with laser-engraved wallet ID',
  },
  {
    id: 2,
    name: 'CO₂TAX Sticker Pack',
    price: '$8.00',
    image: merchMockup,
    description: 'Eco-friendly stickers supporting the green chain.',
  },
  {
    id: 3,
    name: 'Carbon Credit Coin T-Shirt',
    price: '$28.00',
    image: merchMockup,
    description: 'Organic cotton, climate-neutral printed shirt.',
  },
];

function Merch() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 relative">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">🛒 Merch Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-xl shadow-lg p-4 text-center transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{product.description}</p>
            <p className="text-primary font-semibold mb-3">{product.price}</p>
            <button
              onClick={() => setActiveModal(product)}
              className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-300 transition"
            >
              Preview
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center px-4">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-md w-full relative">
            <h3 className="text-xl font-bold mb-2">{activeModal.name}</h3>
            <img
              src={activeModal.image}
              alt={activeModal.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-sm text-gray-600 mb-3">{activeModal.description}</p>
            <p className="text-lg font-bold text-green-600">{activeModal.price}</p>
            <p className="text-xs text-gray-500 mt-2">Checkout opens when the merch store launches.</p>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Overlay Modal - Non-dismissible */}
      <div className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center pointer-events-auto">
        <div className="bg-white text-black px-6 py-8 rounded-xl shadow-xl max-w-sm text-center">
          <h2 className="text-2xl font-bold mb-2">Coming Soon!</h2>
          <p className="text-sm text-gray-700 mb-4">
            The merch store is almost ready. Check back during the ICO!
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default Merch;
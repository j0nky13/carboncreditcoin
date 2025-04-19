// src/pages/BrandColors.jsx
import React from 'react';

const brandColors = [
  { name: 'Cosmic Indigo', hex: '#3C0096' },
  { name: 'Carbon Gray', hex: '#3C3C46' },
  { name: 'Midnight', hex: '#1C1537' },
  { name: 'Eco Mouse Green', hex: '#97FF00' },
  { name: 'Blurple', hex: '#6E00FF' },
  { name: 'Tangerine', hex: '#FF9700' }, // Caution: use sparingly
];

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const BrandColors = () => {
  return (
    <div className="min-h-screen bg-neutral-900 px-6 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Brand Colors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandColors.map(({ name, hex }) => (
          <div
            key={hex}
            className="rounded-2xl overflow-hidden border border-neutral-700 shadow hover:shadow-xl transition duration-300"
          >
            <div
              className="h-32"
              style={{ backgroundColor: hex }}
            />
            <div className="p-4 bg-neutral-800">
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-neutral-400">{hex}</p>
              <div className="flex flex-col gap-1 mt-2 text-sm">
                <span>
                  <strong>White text:</strong>{' '}
                  <span style={{ color: 'white' }}>Sample</span>
                </span>
                <span>
                  <strong>Black text:</strong>{' '}
                  <span style={{ color: 'black' }}>Sample</span>
                </span>
                <div className="mt-2">
                  <p className="text-neutral-400">Tailwind Examples:</p>
                  <code className="block">bg-[{hex}]</code>
                  <code className="block">text-[{hex}]</code>
                  <code className="block">border-[{hex}]</code>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(hex)}
                className="mt-3 px-3 py-1 rounded bg-neutral-700 hover:bg-neutral-600 text-sm transition"
              >
                Copy Hex
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandColors;
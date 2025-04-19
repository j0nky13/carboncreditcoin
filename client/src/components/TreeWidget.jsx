import React, { useEffect, useState } from 'react';
import { TreeDeciduous, Leaf } from 'lucide-react';

function TreeWidget() {
  const [volume, setVolume] = useState(0);
  const [trees, setTrees] = useState(0);

  // Mock API call
  useEffect(() => {
    const fetchMockData = () => {
      const mockVolume = 1248000 + Math.floor(Math.random() * 5000); // USD
      const mockTrees = Math.floor(mockVolume / 100);
      setVolume(mockVolume);
      setTrees(mockTrees);
    };

    fetchMockData();
    const interval = setInterval(fetchMockData, 30000); // update every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-dark py-12 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
          <TreeDeciduous className="w-6 h-6 text-[#97FF00]" /> Trees Planted by CO2TAX
        </h2>
        <p className="text-gray-300 mb-6">For every $100 traded in CO2TAX, we plant one tree.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md w-full text-center">
            <p className="text-sm text-gray-400 mb-1">Total CO2TAX Traded</p>
            <p className="text-3xl font-extrabold text-primary flex items-center justify-center gap-2">
              ${volume.toLocaleString()} <Leaf className="w-5 h-5 text-primary" />
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md w-full text-center">
            <p className="text-sm text-gray-400 mb-1">Trees Committed</p>
            <p className="text-3xl font-extrabold text-primary flex items-center justify-center gap-2">
              {trees.toLocaleString()} <TreeDeciduous className="w-5 h-5 text-primary" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreeWidget;
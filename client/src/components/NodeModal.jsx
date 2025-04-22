import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function NodeModal({ isOpen, onRequestClose, type }) {
  const [co2taxAddress, setCo2taxAddress] = useState('');
  const [usdcAddress, setUsdcAddress] = useState('');
  const [status, setStatus] = useState('online');
  const [saved, setSaved] = useState(false);

  const handleSubmit = async () => {
    // Here’s where we’d call your backend to save the addresses
    console.log('Saving addresses:', { co2taxAddress, usdcAddress, status });

    // TODO: Replace this with real backend logic
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onRequestClose();
    }, 1500);
  };

  useEffect(() => {
    if (!isOpen) {
      setCo2taxAddress('');
      setUsdcAddress('');
      setStatus('online');
      setSaved(false);
    }
  }, [isOpen]);

  const titleMap = {
    node: 'Add New Node',
    validator: 'Add New Validator',
    become: 'Apply to Become a Validator',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-[#1c1c1e] max-w-md mx-auto mt-20 p-6 rounded-xl shadow-xl border border-gray-700"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50"
    >
      <h2 className="text-xl font-bold text-lime-400 mb-4">{titleMap[type]}</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-white mb-1">CO2TAX Wallet Address</label>
          <input
            type="text"
            value={co2taxAddress}
            onChange={(e) => setCo2taxAddress(e.target.value)}
            placeholder="Enter your CO2TAX wallet"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-white mb-1">USDC Wallet Address (optional)</label>
          <input
            type="text"
            value={usdcAddress}
            onChange={(e) => setUsdcAddress(e.target.value)}
            placeholder="Enter your USDC wallet"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white text-sm">Node Status:</span>
          <button
            onClick={() => setStatus(status === 'online' ? 'offline' : 'online')}
            className={`px-4 py-1 rounded text-sm font-bold ${
              status === 'online' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
            }`}
          >
            {status === 'online' ? 'Online' : 'Offline'}
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-lime-500 hover:bg-lime-400 text-black font-bold py-2 rounded"
        >
          Save
        </button>

        {saved && (
          <p className="text-green-400 text-center mt-2 text-sm">
            Saved successfully!
          </p>
        )}
      </div>
    </Modal>
  );
}
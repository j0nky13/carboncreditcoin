import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility

const NodeModal = ({ isOpen, onRequestClose, type }) => {
  const title = type === 'node' ? 'Add Node' : 'Add Validator';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
      className="bg-[#1c1c1c] p-6 rounded-xl w-full max-w-md text-white shadow-lg"
    >
      <h2 className="text-xl font-bold mb-4 text-lime-400">{title}</h2>
      <p className="text-sm text-gray-300 mb-4">Fill in the details below to launch your {type}.</p>

      <input
        type="text"
        placeholder="Node Name"
        className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700 text-white"
      />
      <input
        type="text"
        placeholder="Location / Region"
        className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700 text-white"
      />

      <div className="flex justify-end space-x-2">
        <button onClick={onRequestClose} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
          Cancel
        </button>
        <button className="px-4 py-2 bg-lime-500 text-black font-semibold hover:bg-lime-400 rounded">
          Deploy {type === 'node' ? 'Node' : 'Validator'}
        </button>
      </div>
    </Modal>
  );
};

export default NodeModal;
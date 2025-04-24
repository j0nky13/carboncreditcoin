// src/components/dev/DevToolsPanel.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DevToolsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blurple text-white px-4 py-2 rounded shadow-lg"
      >
        {isOpen ? 'Close DevTools' : 'Open DevTools'}
      </button>

      {isOpen && (
        <div className="mt-2 bg-carbonGray text-white p-4 rounded-xl shadow-xl w-64">
          <h3 className="font-bold mb-2">Developer Tools</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/branding" className="text-ecoGreen hover:underline">Brand Colors</Link>
            </li>
            {/* Future tools can be added here */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DevToolsPanel;

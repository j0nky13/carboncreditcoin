import { useState } from 'react';

const DevToolsPanel = () => {
  const [open, setOpen] = useState(false);

  if (import.meta.env.PROD) return null;  // Hide in production

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blurple text-white px-4 py-2 rounded shadow-lg hover:bg-ecoGreen transition"
      >
        {open ? 'Close DevTools' : 'Open DevTools'}
      </button>

      {open && (
        <div className="mt-2 bg-carbonGray p-4 rounded-xl shadow-xl space-y-2 w-64">
          <h2 className="font-bold text-ecoGreen">Developer Tools</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/branding">🎨 Branding Colors</a></li>
            <li><a href="/chain-status">🔗 Chain Status</a></li>
            <li><a href="/test-endpoints">🛠️ Test API</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DevToolsPanel;
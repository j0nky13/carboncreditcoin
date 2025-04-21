import React, { useState, useEffect } from 'react';

function EmailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('co2tax_email_modal');
    if (!hasSeenModal) {
      setTimeout(() => setIsOpen(true), 3000); // Delay 3s
    }
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log('✅ Subscribed:', data.message);
    setSubmitted(true);
    localStorage.setItem('co2tax_email_modal', 'true');
    setTimeout(() => setIsOpen(false), 1500);
  } catch (err) {
    console.error('❌ Subscription failed:', err);
  }
};
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg font-bold"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4">Get Notified First</h2>
        <p className="mb-4 text-sm text-gray-700">Be the first to know when CO2TAX lists on new exchanges.</p>

        {submitted ? (
          <p className="text-green-600 font-semibold">Thanks! You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 border rounded w-full"
            />
            <button
              type="submit"
              className="bg-primary text-black font-semibold px-4 py-2 rounded hover:bg-lime-400 transition"
            >
              Join the List
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmailModal;
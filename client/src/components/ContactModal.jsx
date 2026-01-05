import { X } from "lucide-react";
import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: replace later with API / email / Firebase
    console.log("Contact submission:", form);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* ===== BACKDROP ===== */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* ===== MODAL ===== */}
      <div className="relative z-10 w-full max-w-xl bg-black border border-white/10 rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight">
            Contact CarbonChain
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition"
          >
            <X />
          </button>
        </div>

        {/* Context */}
        <p className="text-white/70 text-sm mb-6">
          Reach out with questions about the protocol, nodes, validators, or
          partnerships. We’ll respond as the network progresses.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-primary resize-none"
            required
          />

          {/* Footer */}
          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-white/50 hover:text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-primary text-black font-medium px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Send message
            </button>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-white/40 italic">
          Messages are reviewed manually. Response times may vary during testnet
          and early network phases.
        </p>
      </div>
    </div>
  );
}
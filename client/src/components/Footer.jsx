import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-black text-white">
        {/* soft top fade */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">

            {/* Brand */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="CarbonChain" className="h-8 w-8" />
                <span className="text-primary font-semibold tracking-tight">
                  CarbonChain
                </span>
              </Link>

              <p className="text-gray-300/75 text-sm leading-relaxed max-w-xs">
                A Layer-1 blockchain designed to bind economic activity to
                verifiable carbon impact — enforced at the protocol level.
              </p>
            </div>

            {/* Protocol */}
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-primary/80 uppercase">
                Protocol
              </p>

              <ul className="space-y-3 text-gray-300/80 text-sm">
                <li>
                  <Link to="/carbonchain" className="hover:text-primary transition">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-primary transition">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link to="/tokenomics" className="hover:text-primary transition">
                    Economic model
                  </Link>
                </li>
                <li>
                  <Link to="/governance" className="hover:text-primary transition">
                    Governance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Network */}
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-primary/80 uppercase">
                Network
              </p>

              <ul className="space-y-3 text-gray-300/80 text-sm">
                <li>
                  <Link to="/nodes" className="hover:text-primary transition">
                    Run a node
                  </Link>
                </li>
                <li>
                  <Link to="/validators" className="hover:text-primary transition">
                    Validators
                  </Link>
                </li>
                <li>
                  <Link to="/chain-status" className="hover:text-primary transition">
                    Network status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-primary/80 uppercase">
                Resources
              </p>

              <ul className="space-y-3 text-gray-300/80 text-sm">
                <li>
                  <a
                    href="https://github.com/carboncreditchain"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="/whitepaper"
                    className="hover:text-primary transition"
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  {/* CONTACT MODAL TRIGGER */}
                  <button
                    onClick={() => setContactOpen(true)}
                    className="hover:text-primary transition"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-gray-400/70 text-xs">
              © {new Date().getFullYear()} CarbonChain. All rights reserved.
            </p>

            <div className="flex gap-8 text-xs text-gray-400/80">
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== CONTACT MODAL ===== */}
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
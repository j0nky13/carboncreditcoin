import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // scroll hide state
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      // track scroll for background
      setScrolled(currentY > 20);

      // Always show at top
      if (currentY < 10) {
        setHidden(false);
        setLastScrollY(currentY);
        return;
      }

      // Hide on scroll down, show on scroll up (unless menu open)
      if (currentY > lastScrollY && !open) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, open]);

  return (
    <>
      {/* ===== NAV BAR ===== */}
      <nav
        className={[
          "fixed top-0 left-0 w-full z-50 px-6 py-6",
          "transition-all duration-300 ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          scrolled && !hidden
            ? "bg-black/60 backdrop-blur-md "
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CarbonChain" className="h-8 w-8" />
            <span className="text-primary font-semibold tracking-tight">
              CarbonChain
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            <Link to="/carbonchain" className="hover:text-primary transition">
              Protocol
            </Link>
            <Link to="/nodes" className="hover:text-primary transition">
              Network
            </Link>
            <Link to="/about" className="hover:text-primary transition">
              Vision
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={[
                "absolute h-[2px] w-6 bg-white transition-all duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-2",
              ].join(" ")}
            />
            <span
              className={[
                "absolute h-[2px] w-6 bg-white transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute h-[2px] w-6 bg-white transition-all duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-2",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={[
            "absolute inset-0 flex flex-col items-center justify-center",
            "text-2xl font-medium text-white gap-10",
            "transition-transform duration-300",
            open ? "translate-y-0" : "translate-y-6",
          ].join(" ")}
        >
          <Link
            to="/carbonchain"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Protocol
          </Link>

          <Link
            to="/nodes"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Network
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-primary transition"
          >
            Vision
          </Link>
        </div>
      </div>
    </>
  );
}
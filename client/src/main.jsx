import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import CarbonChain from "./pages/CarbonChain.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Tokenomics from "./pages/Tokenomics.jsx";
import Governance from "./pages/Governance.jsx";

import Nodes from "./pages/Nodes.jsx";
import Validators from "./pages/Validators.jsx";
import ChainStatus from "./pages/ChainStatus.jsx";

import Investors from "./pages/Investors.jsx";
import Launch from "./pages/Launch.jsx";
import Merch from "./pages/Merch.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import LoginWrapper from "./pages/LoginWrapper.jsx";
import AuthHandler from "./components/AuthHandler";
import ProtectedRoute from "./components/ProtectedRoute";
import BrandColors from "./components/BrandColors";
import ScrollToTop from "./components/ScrollToTop"; // ✅ ADD THIS

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ REQUIRED */}
      <Routes>
        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />

        <Route path="/carbonchain" element={<CarbonChain />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/governance" element={<Governance />} />

        {/* ===== PARTICIPATION ===== */}
        <Route path="/nodes" element={<Nodes />} />
        <Route path="/validators" element={<Validators />} />
        <Route path="/chain-status" element={<ChainStatus />} />

        {/* ===== COMMERCIAL ===== */}
        <Route path="/investors" element={<Investors />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/merch" element={<Merch />} />

        {/* ===== AUTH ===== */}
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/auth" element={<AuthHandler />} />

        {/* ===== DASHBOARD ===== */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ===== DEV ONLY ===== */}
        {import.meta.env.DEV && (
          <Route path="/branding" element={<BrandColors />} />
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
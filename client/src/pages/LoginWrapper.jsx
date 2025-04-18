// src/pages/LoginWrapper.jsx
import React from 'react';
import AuthModal from '../components/AuthModal';

export default function LoginWrapper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background image (optional) */}
      <div className="absolute inset-0 bg-[url('/src/assets/trees-header-background-1600.png')] bg-cover bg-center opacity-10 z-0"></div>

      {/* Modal */}
      <AuthModal isOpen={true} onClose={() => window.location.href = '/'} />
    </div>
  );
}
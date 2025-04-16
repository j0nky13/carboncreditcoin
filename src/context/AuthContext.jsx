import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Jon K.',
    wallet: 'co2tax1x2y3zabc...',
    referral: 'co2tax.io/ref/jonky13',
    icoTotal: 12500,
    isLoggedIn: true,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

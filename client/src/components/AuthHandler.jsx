import React, { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthHandler() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Processing your login...'); 
  const [error, setError] = useState('');

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email to complete sign-in:');
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          setStatus('✅ Successfully logged in! Redirecting...');
          setTimeout(() => navigate('/dashboard'), 1500);
        })
        .catch((err) => {
          console.error('Error signing in with email link:', err);
          setError('❌ Invalid or expired login link.');
        });
    } else {
      setError('❌ No valid login link detected.');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <p className="text-lime-400">{status}</p>
      )}
    </div>
  );
}
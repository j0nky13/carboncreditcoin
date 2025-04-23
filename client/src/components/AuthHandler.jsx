// import { useEffect, useState } from 'react';
// import { auth } from '../lib/firebase';
// import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// export default function AuthHandler() {
//   const navigate = useNavigate();
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       let email = window.localStorage.getItem('emailForSignIn');
//       if (!email) {
//         email = window.prompt('Please provide your email to confirm sign-in:');
//       }

//       signInWithEmailLink(auth, email, window.location.href)
//         .then(() => {
//           window.localStorage.removeItem('emailForSignIn');
//           setStatus('✅ Successfully logged in! Redirecting...');
//           setTimeout(() => navigate('/dashboard'), 1500);
//         })
//         .catch((error) => {
//           console.error('Sign-in error:', error);
//           setStatus('❌ Invalid or expired login link.');
//         });
//     }
//   }, []);

//   // Only show status if there's something to report
//   return status ? (
//     <div className="text-center bg-black text-red-400 py-2">
//       {status}
//     </div>
//   ) : null;
// }


import { useEffect } from 'react';
import { auth } from '../lib/firebase';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AuthHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation:');
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          navigate('/dashboard');
        })
        .catch((err) => {
          console.error('Login failed:', err);
          navigate('/login');  // fallback if something breaks
        });
    } else {
      navigate('/login');  // If invalid link, send to login
    }
  }, []);

  return <p className="text-center mt-10">Processing login...</p>;
}
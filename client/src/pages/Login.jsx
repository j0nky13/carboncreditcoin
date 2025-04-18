// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login() {
//   const [step, setStep] = useState(1);
//   const [method, setMethod] = useState('email');
//   const [identifier, setIdentifier] = useState('');
//   const [otp, setOtp] = useState('');

//   const handleSendOtp = async () => {
//     console.log(`Sending OTP to ${method}:`, identifier);
//     setStep(2);
//   };

//   const handleVerifyOtp = async () => {
//     console.log(`Verifying OTP:`, otp);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4 relative">
//       {/* Background visual effect */}
//       <div className="absolute inset-0 bg-[url('/src/assets/trees-header-background-1600.png')] bg-cover bg-center opacity-10 z-0"></div>

//       {/* Login Box */}
//       <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md text-center relative z-10 shadow-2xl">
//         <h1 className="text-3xl font-bold text-primary mb-2">Welcome to Carbon Credit Coin</h1>
//         <p className="text-gray-400 mb-6 text-sm">Access your ICO dashboard, merch, and more.</p>

//         <h2 className="text-xl font-semibold text-white mb-4">
//           {step === 1 ? 'Login or Register' : 'Enter OTP'}
//         </h2>

//         {step === 1 ? (
//           <>
//             <div className="flex justify-center gap-4 mb-4">
//               <button
//                 className={`px-4 py-2 rounded ${method === 'email' ? 'bg-primary text-black' : 'bg-gray-700'}`}
//                 onClick={() => setMethod('email')}
//               >
//                 Email
//               </button>
//               <button
//                 className={`px-4 py-2 rounded ${method === 'phone' ? 'bg-primary text-black' : 'bg-gray-700'}`}
//                 onClick={() => setMethod('phone')}
//               >
//                 Phone
//               </button>
//             </div>
//             <input
//               type={method === 'email' ? 'email' : 'tel'}
//               placeholder={method === 'email' ? 'Enter your email' : 'Enter your phone number'}
//               className="w-full px-4 py-2 rounded text-black mb-4"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//             />
//             <button
//               onClick={handleSendOtp}
//               className="bg-primary text-black px-6 py-2 rounded font-semibold hover:bg-lime-300 transition"
//             >
//               Send OTP
//             </button>
//           </>
//         ) : (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full px-4 py-2 rounded text-black mb-4"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="bg-primary text-black px-6 py-2 rounded font-semibold hover:bg-lime-300 transition"
//             >
//               Verify and Login
//             </button>
//           </>
//         )}

//         <div className="mt-6">
//           <Link to="/" className="text-primary text-sm hover:underline">
//             ← Back to homepage
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

export default function Login() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-md w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to Carbon Credit Coin</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Log in or join the ICO to get started.</p>
        <button
          onClick={() => setAuthOpen(true)}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all"
        >
          Join ICO / Log In
        </button>

        {/* Auth Modal */}
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </div>
  );
}

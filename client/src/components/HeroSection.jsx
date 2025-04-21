// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import heroBg from '../assets/trees-header-background-1600.png';

// function HeroSection() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const target = new Date("2025-04-25T00:00:00-04:00");

//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = target - now;

//       if (difference <= 0) {
//         clearInterval(interval);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((difference / 1000 / 60) % 60);
//         const seconds = Math.floor((difference / 1000) % 60);
//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-0" />

//       {/* Hero Content */}
//       <div className="z-10 max-w-7xl w-full mx-auto px-4 text-center md:text-left">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">

//           {/* Left: Hero Text */}
//           <div className="md:w-3/5">
//             <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-md">
//               The Carbon-Negative Blockchain
//             </h1>
//             <p className="text-lg text-gray-200 mb-6 drop-shadow-sm">
//               Powered by Carbon Credit Coin — Earn, Trade, and Plant Trees. Built for transparency, powered by Cosmos.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start mt-2">
//               <Link
//                 to="/dashboard"
//                 className="bg-primary text-black font-semibold px-6 py-2 rounded-lg animate-pulse hover:scale-105 transition text-center"
//               >
//                 Launch Dashboard
//               </Link>
//               <Link
//                 to="/tokenomics"
//                 className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition text-center"
//               >
//                 View Tokenomics
//               </Link>
//             </div>
//           </div>

//           {/* Right: Countdown */}
//           <div className="md:w-2/5 bg-black/40 backdrop-blur-md rounded-lg p-8 text-center shadow-lg border border-primary">
//             <h2 className="text-2xl font-semibold text-primary mb-4">ICO Launches In</h2>
//             <div className="text-white text-3xl font-mono space-x-4">
//               <span>{timeLeft.days}d</span>
//               <span>{timeLeft.hours}h</span>
//               <span>{timeLeft.minutes}m</span>
//               <span>{timeLeft.seconds}s</span>
//             </div>
//             <div className="mt-6">
//   <Link
//     to="/launch"
//     className="inline-block bg-primary text-black font-semibold px-5 py-2 rounded hover:bg-lime-400 transition"
//   >
//     View ICO Details
//   </Link>
// </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/trees-header-background-1600.png';

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2025-05-01T00:00:00-04:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <div className="z-10 max-w-7xl w-full mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: Hero Text */}
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-md">
              The Carbon-Negative Blockchain
            </h1>
            <p className="text-lg text-gray-200 mb-6 drop-shadow-sm">
              Powered by Carbon Credit Coin — Earn, Trade, and Plant Trees. Built for transparency, powered by Cosmos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start mt-2">
              <Link
                to="/chain-status"
                className="bg-primary text-black font-semibold px-6 py-2 rounded-lg animate-pulse hover:scale-105 transition text-center"
              >
                Launch Dashboard
              </Link>
              <Link
                to="/tokenomics"
                className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-black transition text-center"
              >
                View Tokenomics
              </Link>
            </div>
          </div>

          {/* Right: Countdown */}
          <div className="md:w-2/5 bg-black/40 backdrop-blur-md rounded-lg p-8 text-center shadow-lg border border-primary">
            <h2 className="text-2xl font-semibold text-primary mb-4">ICO Launches In</h2>
            <div className="text-white text-3xl font-mono space-x-4 mb-6">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>
            <Link
              to="/launch"
              className="inline-block bg-primary text-black font-semibold px-5 py-2 rounded hover:bg-lime-400 transition"
            >
              View ICO Details
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;

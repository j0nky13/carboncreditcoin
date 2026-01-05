// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // import NavBar from './components/NavBar';
// // import HeroSection from './components/HeroSection';
// // import AboutSection from './components/AboutSection';
// // import HowItWorks from './components/HowItWorks';
// // import DashboardPreview from './components/DashboardPreview';
// // import WhitepaperCTA from './components/WhitepaperCTA';
// // import ReferralSection from './components/ReferralSection';
// // import CalloutBanner from './components/CalloutBanner';
// // import EmailModal from './components/EmailModal';
// // import TreeWidget from './components/TreeWidget';
// // import SpinningCoinSection from './components/SpinningCoinSection';
// // import Footer from './components/Footer';


// // import Dashboard from './pages/Dashboard';

// // function HomePage() {
// //   return (
// //     <>
// //       <NavBar />
// //       <HeroSection />
// //       <TreeWidget />
// //       <CalloutBanner />
// //       <AboutSection />
// //       <SpinningCoinSection />
// //       <EmailModal />
// //       <HowItWorks />
// //       <DashboardPreview />
// //       <ReferralSection />
// //       <WhitepaperCTA />
// //       <Footer />
// //     </>
// //   );
// // }

// // function App() {
// //   return (
    
// //       <div className="bg-dark text-white min-h-screen">
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/dashboard" element={<Dashboard />} />
// //         </Routes>
// //       </div>
    
// //   );
// // }

// // export default App;



// // import React from 'react';
// import React, { useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import NavBar from './components/NavBar';
// import HeroSection from './components/HeroSection';
// import AboutSection from './components/AboutSection';
// import HowItWorks from './components/HowItWorks';
// import DashboardPreview from './components/DashboardPreview';
// import WhitepaperCTA from './components/WhitepaperCTA';
// import ReferralSection from './components/ReferralSection';
// import CalloutBanner from './components/CalloutBanner';
// import EmailModal from './components/EmailModal';
// import TreeWidget from './components/TreeWidget';
// import SpinningCoinSection from './components/SpinningCoinSection';
// import Footer from './components/Footer';

// import Dashboard from './pages/Dashboard';
// import LoginWrapper from './pages/LoginWrapper';



// function HomePage() {
//   useEffect(() => {
//     console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
//   }, []);

  
//   return (
//     <>
//       <NavBar />
//       <HeroSection />
//       <TreeWidget />
//       <CalloutBanner />
//       <AboutSection />
//       <SpinningCoinSection />
//       <EmailModal />
//       <HowItWorks />
//       <DashboardPreview />
//       <ReferralSection />
//       <WhitepaperCTA />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="bg-dark text-white min-h-screen">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginWrapper />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </div>
//   );
// }


// export default App;


import React, { useEffect } from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import WhitepaperCTA from './components/WhitepaperCTA';
import ReferralSection from './components/ReferralSection';
import CalloutBanner from './components/CalloutBanner';
import EmailModal from './components/EmailModal';
import TreeWidget from './components/TreeWidget';
import SpinningCoinSection from './components/SpinningCoinSection';
import Footer from './components/Footer';
import WhyCarbonChain from './components/WhyCarbonchain';
import ProtocalEnforcement from './components/ProtocalEnforcement';
import NetworkParticipation from './components/NetworkParticipation';
import EconomicModel from './components/EconomicModel';
import ForwardVision from './components/ForwardVision'

function App() {
  useEffect(() => {
    console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
  }, []);

  return (
    < div className="bg-dark text-white min-h-screen">
      <NavBar />
      <HeroSection />
      {/* <TreeWidget /> */}
      <WhyCarbonChain />
      <ProtocalEnforcement />
      <NetworkParticipation />
      <EconomicModel />
      <ForwardVision/>
      {/* <CalloutBanner /> */}

      {/* <AboutSection /> */}
      {/* <SpinningCoinSection /> */}
      {/* <EmailModal /> */}
      {/* <HowItWorks /> */}
      {/* <DashboardPreview /> */}
      {/* <ReferralSection /> */}
      {/* <WhitepaperCTA /> */}
      <Footer />
    </div>
  );
}

export default App;
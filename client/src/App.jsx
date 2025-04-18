import React from 'react';
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


import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 

import Footer from './components/Footer';
import SpinningCoinSection from './components/SpinningCoinSection';

function App() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <NavBar />
      <HeroSection />
      <TreeWidget/>
      <CalloutBanner />
      <AboutSection />
      <SpinningCoinSection/>
      <EmailModal />
      <HowItWorks />
      <DashboardPreview />
      <ReferralSection/>
      <WhitepaperCTA />
      <Footer />
    </div>
  );
}


export default App;



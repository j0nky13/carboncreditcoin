import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import VisionHero from "../components/vision/VisionHero";
import TheProblem from "../components/vision/TheProblem";
import WhyEnforcementMatters from "../components/vision/WhyEnforcementMatters";
import CoreBeliefs from "../components/vision/CoreBeliefs";
import WhatWeReject from "../components/vision/WhatWeReject";
import LongTermTrajectory from "../components/vision/LongTermTrajectory";
import VisionCTA from "../components/vision/VisionCTA";

export default function Vision() {
  return (
    <>
      <NavBar />
      <main className="bg-dark text-white space-y-24 py-16 px-6">
        <VisionHero />
        <TheProblem />
        <WhyEnforcementMatters />
        <CoreBeliefs />
        <WhatWeReject />
        <LongTermTrajectory />
        <VisionCTA />
      </main>
      <Footer />
    </>
  );
}
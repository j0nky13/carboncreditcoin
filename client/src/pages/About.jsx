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
      <main className="bg-black text-white py-16 space-y-24 w-full overflow-x-hidden">
        <VisionHero />

        <div className="px-4 md:px-6 space-y-24">
          <TheProblem />
          <WhyEnforcementMatters />
          <CoreBeliefs />
          <WhatWeReject />
          <LongTermTrajectory />
          <VisionCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
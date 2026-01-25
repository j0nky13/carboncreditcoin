import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import ChainHero from "../components/carbonchain/ChainHero";
import WhatIsCarbonChain from "../components/carbonchain/WhatIsCarbonChain";
import HowItWorksFlow from "../components/carbonchain/HowItWorksFlow";
import TechnicalStack from "../components/carbonchain/TechnicalStack";
import CoreFeatures from "../components/carbonchain/CoreFeatures";
import DifferentiationTable from "../components/carbonchain/DifferentiationTable";
import TrustTransparency from "../components/carbonchain/TrustTransparency";
import UseCases from "../components/carbonchain/UseCases";
import TokenUtility from "../components/carbonchain/TokenUtility";
import ValidatorSection from "../components/carbonchain/ValidatorSection";
import TreeTrackerSection from "../components/carbonchain/TreeTrackerSection";
import V2Roadmap from "../components/carbonchain/V2Roadmap";
import ChainCTA from "../components/carbonchain/ChainCTA";

export default function CarbonChainPage() {
  return (
    <>
      <NavBar />
      <main className="bg-black text-white py-16 space-y-24 w-full overflow-x-hidden">
        <ChainHero />
        <div className="px-4 md:px-6 space-y-24">

          <WhatIsCarbonChain />
          <HowItWorksFlow />
          <TechnicalStack />
          <CoreFeatures />
          <DifferentiationTable />
          <TrustTransparency />
          <UseCases />
          <TokenUtility />
          <ValidatorSection />
          <TreeTrackerSection />
          <V2Roadmap />
          <ChainCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
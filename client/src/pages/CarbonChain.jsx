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
      <main className="bg-dark text-white px-4 py-16 space-y-24">
        <ChainHero />
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
      </main>
      <Footer />
    </>
  );
}
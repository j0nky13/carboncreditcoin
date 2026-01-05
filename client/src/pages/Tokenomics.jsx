import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import TokenomicsHero from "../components/tokenomics/TokenomicsHero";
import SupplyDistribution from "../components/tokenomics/SupplyDistribution";
import EconomicFlows from "../components/tokenomics/EconomicFlows";
import IncentivesConstraints from "../components/tokenomics/IncentivesConstraints";
import GovernanceRelation from "../components/tokenomics/GovernanceRelation";

export default function TokenomicsPage() {
  return (
    <>
      <NavBar />
      <main className="bg-dark text-white px-4 py-16 space-y-24">
        <TokenomicsHero />
        <SupplyDistribution />
        <EconomicFlows />
        <IncentivesConstraints />
        <GovernanceRelation />
      </main>
      <Footer />
    </>
  );
}
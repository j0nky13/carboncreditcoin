// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// /* ===== HOW IT WORKS SECTIONS ===== */
// import HowItWorksHero from "../components/howitworks/HowItWorksHero";
// import SystemOverview from "../components/howitworks/SystemOverview";
// import TransactionLifecycle from "../components/howitworks/TransactionLifecycle";
// import GasToImpact from "../components/howitworks/GasToImpact";
// import VerificationAuditing from "../components/howitworks/VerificationAuditing";
// import Enforceability from "../components/howitworks/Enforceability";
// import OffsetComparison from "../components/howitworks/OffsetComparison";
// import HowItWorksCTA from "../components/howitworks/HowItWorksCTA";

// export default function HowItWorks() {
//   return (
//     <>
//       <NavBar />

//       <main className="bg-dark text-white px-4 py-16 space-y-24">
//         <HowItWorksHero />

//         <SystemOverview />

//         <TransactionLifecycle />

//         <GasToImpact />

//         <VerificationAuditing />

//         <Enforceability />

//         <OffsetComparison />

//         <HowItWorksCTA />
//       </main>

//       <Footer />
//     </>
//   );
// }


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import HowItWorksHero from "../components/howitworks/HowItWorksHero";
import SystemOverview from "../components/howitworks/SystemOverview";
import TransactionLifecycle from "../components/howitworks/TransactionLifecycle";
import GasToImpact from "../components/howitworks/GasToImpact";
import EnforcementLayer from "../components/howitworks/EnforcementLayer";
import TransparencyAudit from "../components/howitworks/TransparencyAudit";
import ExternalReconciliation from "../components/howitworks/ExternalReconciliation";
import ProtocalEnforcementDiagram from '../components/diagrams/ProtocalEnforcementDiagram'
import ExplorerAccess from "../components/howitworks/ExplorerAccess";
import WhyCarbonChainIsDifferent from "../components/howitworks/WhyCarbonChainIsDifferent";
import HowItWorksCTA from "../components/howitworks/HowItWorksCTA";

export default function HowItWorks() {
  return (
    <>
      <NavBar />
      <main className="bg-black text-white px-4 py-16 space-y-24">
        <HowItWorksHero />
        <SystemOverview />
        <TransactionLifecycle />
        <GasToImpact />
        <EnforcementLayer />
        <ProtocalEnforcementDiagram/>
        <TransparencyAudit />
        <ExplorerAccess/>
        <ExternalReconciliation />
        <WhyCarbonChainIsDifferent/>
        <HowItWorksCTA />
      </main>
      <Footer />
    </>
  );
}
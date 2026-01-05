import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

/* ===== GOVERNANCE SECTIONS ===== */
import GovernanceHero from "../components/governance/GovernanceHero";
import WhatGovernanceIs from "../components/governance/WhatGovernanceIs";
import WhatGovernanceCannotChange from "../components/governance/WhatGovernanceCannotChange";
import GovernanceScope from "../components/governance/GovernanceScope";
import VotingMechanics from "../components/governance/VotingMechanics";
import TreasuryUsage from "../components/governance/TreasuryUsage";
import SecuritySafeguards from "../components/governance/SecuritySafeguards";
import GovernanceCTA from "../components/governance/GovernanceCTA";

export default function Governance() {
  return (
    <>
      <NavBar />

      <main className="bg-black text-white">
        {/* ===== HERO ===== */}
        <GovernanceHero />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 px-6 py-24 space-y-24">
          <WhatGovernanceIs />

          <WhatGovernanceCannotChange />

          <GovernanceScope />

          <VotingMechanics />

          <TreasuryUsage />

          <SecuritySafeguards />

          <GovernanceCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
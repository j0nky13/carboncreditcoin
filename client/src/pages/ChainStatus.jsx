import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import ChainStatusHero from "../components/chainstatus/ChainStatusHero.jsx";
import NetworkVitalsGrid from "../components/chainstatus/NetworkVitalsGrid";
import ThroughputPanel from "../components/chainstatus/ThroughputPanel";
import ValidatorHealthPanel from "../components/chainstatus/ValidatorHealthPanel";
import NetworkNotes from "../components/chainstatus/NetworkNotes";

export default function ChainStatus() {
  return (
    <>
      <NavBar />

      <main className="bg-black text-white space-y-24 py-20 px-6">
        <ChainStatusHero />
        <NetworkVitalsGrid />
        <ThroughputPanel />
        <ValidatorHealthPanel />
        <NetworkNotes />
      </main>

      <Footer />
    </>
  );
}
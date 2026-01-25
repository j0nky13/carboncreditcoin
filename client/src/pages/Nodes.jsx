import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import NodesHero from "../components/nodes/NodesHero";
import WhatIsANode from "../components/nodes/WhatIsANode";
import WhyRunANode from "../components/nodes/WhyRunANode";
import NodeResponsibilities from "../components/nodes/NodeResponsibilities";
import NodeRequirements from "../components/nodes/NodeRequirements";
import NodeCTA from "../components/nodes/NodeCTA";

export default function Nodes() {
  return (
    <>
      <NavBar />
      <main className="bg-black text-white space-y-24 py-16 px-6">
        <NodesHero />
        <WhatIsANode />
        <WhyRunANode />
        <NodeResponsibilities />
        <NodeRequirements />
        <NodeCTA />
      </main>
      <Footer />
    </>
  );
}
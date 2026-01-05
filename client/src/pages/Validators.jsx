import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import ValidatorsHero from "../components/validators/ValidatorsHero";
import WhatValidatorsDo from "../components/validators/WhatIsAValidator";
import ValidatorEconomics from "../components/validators/ValidatorEconomics";
import ValidatorResponsibilities from "../components/validators/ValidatorRequirements";
import SlashingSecurity from "../components/validators/SlashingSecurity";
// import ValidatorOnboarding from "../components/validators/ValidatorOnboarding";
import ValidatorCTA from "../components/validators/ValidatorCTA";

export default function Validators() {
  return (
    <>
      <NavBar />
      <main className="bg-dark text-white space-y-24 py-16 px-6">
        <ValidatorsHero />
        <WhatValidatorsDo />
        <ValidatorEconomics />
        <ValidatorResponsibilities />
        <SlashingSecurity />
        {/* <ValidatorOnboarding /> */}
        <ValidatorCTA />
      </main>
      <Footer />
    </>
  );
}
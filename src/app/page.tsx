import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import TheSystem from "@/components/TheSystem";
import WhatIBuild from "@/components/WhatIBuild";
import ErpEvolution from "@/components/ErpEvolution";
import EnterpriseSystems from "@/components/EnterpriseSystems";
import SelectedProjects from "@/components/SelectedProjects";
import OdooLab from "@/components/OdooLab";
import Playground from "@/components/Playground";
import HowIThink from "@/components/HowIThink";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FutureSystem from "@/components/FutureSystem";
import RecruiterView from "@/components/RecruiterView";
import SystemStatus from "@/components/SystemStatus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main id="main">
        <Hero />
        <WhoIAm />
        <TheSystem />
        <WhatIBuild />
        <ErpEvolution />
        <EnterpriseSystems />
        <SelectedProjects />
        <OdooLab />
        <Playground />
        <HowIThink />
        <CurrentlyBuilding />
        <Experience />
        <Skills />
        <FutureSystem />
        <RecruiterView />
        <SystemStatus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useContext, useState } from "react";
import { ModeContext } from "./context/ModeContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import PawCursor from "./components/PawCursor";
import PawTrail from "./components/PawTrail";
import SectionDivider from "./components/SectionDivider";
import useFunSounds from "./hooks/useFunSounds";
import FunBackground from "./components/FunBackground";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const { funMode } = useContext(ModeContext);
  const [openContact, setOpenContact] = useState(false);

  useFunSounds(funMode);

  return (
    <>
      {funMode && <FunBackground />}
      {funMode && <PawCursor />}
      {funMode && <PawTrail />}

      {/* 🔥 WRAP EVERYTHING */}
      <div className={funMode ? "fun-wrapper" : ""}>

        <Navbar onHireClick={() => setOpenContact(true)} />
        <Hero onContactClick={() => setOpenContact(true)} />

        <SectionDivider label="About" />
        <About />

        <SectionDivider label="Skills" />
        <Skills />

        <SectionDivider label="Projects" />
        <Projects />

        <Footer />

      </div>

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}

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

export default function App() {
  const { funMode } = useContext(ModeContext);
  const [openContact, setOpenContact] = useState(false);

  useFunSounds(funMode);

  return (
    <>
      {/* Fun chaos layers */}
      {funMode && <FunBackground />}
      {funMode && <PawCursor />}
      {funMode && <PawTrail />}

      {/* 👇 WRAP CONTENT PROPERLY */}
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

      {/* Modal stays outside wrapper */}
      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </>
  );
}

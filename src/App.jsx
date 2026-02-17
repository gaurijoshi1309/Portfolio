import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Hackathons from "./components/Hackathons.jsx";
import Certificates from "./components/Certificates.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Navbar from "./components/Navbar.jsx";
import FadeInSection from "./components/FadeInSection.jsx";
import "./styles/App.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      tablet: {
        breakpoint: 768,
        smooth: true,
      },
      smartphone: {
        smooth: false,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <ThemeToggle />
      <div className="app-container">
        <div id="hero">
          <Hero />
        </div>
        <FadeInSection>
          <div id="about">
            <About />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="experience">
            <Experience />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="skills">
            <Skills />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="projects">
            <Projects />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="certificates">
            <Certificates />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="hackathons">
            <Hackathons />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="contact">
            <Contact />
          </div>
        </FadeInSection>
      </div>
    </>
  );
}

export default App;

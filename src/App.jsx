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
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="certificates">
          <Certificates />
        </div>
        <div id="hackathons">
          <Hackathons />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

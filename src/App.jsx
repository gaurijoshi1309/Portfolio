import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Hackathons from "./components/Hackathons.jsx";
import Certificates from "./components/Certificates.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import "./styles/App.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Navbar />
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="app-container">
        <section id="hero" data-scroll-section>
          <Hero />
        </section>
        <section id="about-me" data-scroll-section>
          <AboutMe />
        </section>
        <section id="about" data-scroll-section>
          <About />
        </section>
        <section id="experience" data-scroll-section>
          <Experience />
        </section>
        <section id="skills" data-scroll-section>
          <Skills />
        </section>
        <section id="projects" data-scroll-section>
          <Projects />
        </section>
        <section id="certificates" data-scroll-section>
          <Certificates />
        </section>
        <section id="hackathons" data-scroll-section>
          <Hackathons />
        </section>
        <section id="contact" data-scroll-section>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;

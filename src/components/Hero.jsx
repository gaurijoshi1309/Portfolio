import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaJava } from "react-icons/fa";
import {
  SiSelenium,
  SiSpringboot,
  SiMysql,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container-centered">
        <div className="hero-content">
          <p className="hero-intro">
            Hi, I am <span className="text-highlight">Gauri Joshi</span>
          </p>
          <h1 className="hero-title">
            <span className="text-gradient">Quality Assurance Engineer</span>
          </h1>
          <p className="hero-description">
            with expertise in building high performance applications and
            automated testing systems.
          </p>

          <div className="hero-actions">
            <a
              href="/assets/Gauri_Joshi_Resume.pdf"
              className="btn btn-primary"
              download="Gauri_Joshi_Resume.pdf"
            >
              Download resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Work with me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://linkedin.com/in/gauri-joshi1309/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gaurijoshi1309"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:joshigauris1309@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="floating-icons">
          <div className="floating-icon icon-1" title="Java">
            <FaJava />
          </div>
          <div className="floating-icon icon-2" title="Selenium">
            <SiSelenium />
          </div>
          <div className="floating-icon icon-3" title="Spring Boot">
            <SiSpringboot />
          </div>
          <div className="floating-icon icon-4" title="MySQL">
            <SiMysql />
          </div>
          <div className="floating-icon icon-5" title="Python">
            <SiPython />
          </div>
          <div className="floating-icon icon-6" title="JavaScript">
            <SiJavascript />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

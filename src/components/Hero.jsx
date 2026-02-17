import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import BlurText from "./react-bits/BlurText.jsx";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-intro">Hello, I'm</h2>
        <BlurText
          text="Gauri Joshi"
          delay={0.02}
          animateBy="letters"
          direction="top"
          className="hero-title"
        />
        <p className="hero-tagline">
          Detail-oriented Java Software Tester & Developer
        </p>

        <div className="hero-actions">
          <a
            href="/assets/Gauri_Joshi_Resume.pdf"
            download
            className="hero-btn primary"
          >
            Download Resume
          </a>
          <a href="#contact" className="hero-btn secondary">
            Work With Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://linkedin.com/in/gauri-joshi1309/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/gaurijoshi1309"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="mailto:joshigauris1309@gmail.com"
            className="social-link"
            title="Email"
          >
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>

      <div className="hero-bg-accent"></div>
    </section>
  );
};

export default Hero;

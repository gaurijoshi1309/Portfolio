import React from "react";
import { FiSearch, FiCode, FiCheckCircle } from "react-icons/fi";
import "../styles/About.css";

const About = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Delivering excellence through a structured and efficient process.
        </p>

        <div className="services-grid">
          <div className="glass-card service-card">
            <div className="service-icon icon-blue">
              <FiSearch />
            </div>
            <h3>Requirement Analysis</h3>
            <p>
              I start by understanding your vision, goals, and technical
              requirements to build a solid foundation.
            </p>
            <a href="#contact" className="service-link">
              Learn more
            </a>
          </div>

          <div className="glass-card service-card">
            <div className="service-icon icon-red">
              <FiCode />
            </div>
            <h3>Development & Coding</h3>
            <p>
              Using modern technical stacks like Spring Boot and React to build
              scalable, high-performance applications.
            </p>
            <button className="btn-small">Read More</button>
          </div>

          <div className="glass-card service-card">
            <div className="service-icon icon-yellow">
              <FiCheckCircle />
            </div>
            <h3>Quality Assurance</h3>
            <p>
              Thorough testing and validation to ensure your product is bug-free
              and meets the highest standards.
            </p>
            <a href="#contact" className="service-link">
              View process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

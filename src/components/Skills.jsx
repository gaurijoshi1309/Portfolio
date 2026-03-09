import React from "react";
import { FiCpu, FiLayers, FiZap } from "react-icons/fi";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container skills-container">
        <div className="skills-left">
          <h2 className="section-title">My Skills</h2>
          <p className="skills-description">
            I specialize in building robust automation frameworks and scalable
            Java applications. My expertise spans from backend development with
            Spring Boot to end-to-end testing with Selenium.
          </p>
        </div>

        <div className="skills-right">
          <div className="glass-card skill-row">
            <div className="skill-icon-box icon-red">
              <FiCpu />
            </div>
            <div className="skill-text">
              <h4>Automation Testing</h4>
              <p>Selenium, Cucumber, JUnit, TestNG, Jenkins</p>
            </div>
          </div>

          <div className="glass-card skill-row">
            <div className="skill-icon-box icon-blue">
              <FiLayers />
            </div>
            <div className="skill-text">
              <h4>Backend Development</h4>
              <p>Java, Spring Boot, MySQL, Python, REST APIs</p>
            </div>
          </div>

          <div className="glass-card skill-row">
            <div className="skill-icon-box icon-yellow">
              <FiZap />
            </div>
            <div className="skill-text">
              <h4>Quality Assurance</h4>
              <p>Manual Testing, API Testing, Performance Testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

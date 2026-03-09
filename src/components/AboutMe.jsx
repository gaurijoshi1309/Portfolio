import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about-me">
      <div className="container about-me-container">
        <div className="about-me-header">
          <h2 className="about-me-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <p className="about-me-description">
          Detail-oriented Java Software Tester with hands-on experience in
          manual testing, automation testing, API testing, and performance
          testing. I demonstrate strong analytical thinking and problem-solving
          skills, collaborating with teams to deliver high- quality, reliable,
          and scalable applications in Agile environments.
        </p>

        <div className="about-me-grid">
          {/* Education Column */}
          <div className="about-me-column">
            <h3 className="column-title">EDUCATION</h3>

            <div className="education-item">
              <h4 className="edu-degree">
                Master Of Computer Application (MCA)
              </h4>
              <p className="edu-univ">
                Savitribai Phule Pune University | 2024 - 2026
              </p>
              <p className="edu-score">CGPA: 8.28/10</p>
            </div>

            <div className="education-item">
              <h4 className="edu-degree">Bsc Computer Science</h4>
              <p className="edu-univ">
                Dr. Babasaheb Ambedkar Marathwada University | 2020 - 2023
              </p>
              <p className="edu-score">CGPA: 7.74/10</p>
            </div>
          </div>

          {/* Expertise Column */}
          <div className="about-me-column">
            <h3 className="column-title">CORE EXPERTISE</h3>

            <ul className="expertise-list">
              <li>
                <span className="bullet-arrow">→</span>
                Automation & Manual Testing
              </li>
              <li>
                <span className="bullet-arrow">→</span>
                API & Performance Testing
              </li>
              <li>
                <span className="bullet-arrow">→</span>
                Agile Methodologies
              </li>
              <li>
                <span className="bullet-arrow">→</span>
                Defect Tracking & SDLC
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

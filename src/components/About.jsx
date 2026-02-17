import React from "react";
import { SiCanva } from "react-icons/si";
import { FaFileExcel, FaVideo } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-header">About Me</h2>
          <p className="about-text">
            Detail-oriented Java Software Tester with hands-on experience in
            manual testing, automation testing, API testing, and performance
            testing. I demonstrate strong analytical thinking and
            problem-solving skills, collaborating with teams to deliver
            high-quality, reliable, and scalable applications in Agile
            environments.
          </p>

          <div className="about-details-grid">
            <div className="about-education">
              <h3 className="section-subtitle">Education</h3>
              <div className="education-item">
                <h4>Master Of Computer Application (MCA)</h4>
                <p>Savitribai Phule Pune University | 2024 - 2026</p>
                <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  CGPA: 6.85/10
                </p>
              </div>
              <div className="education-item" style={{ marginTop: "1.5rem" }}>
                <h4>Bsc Computer Science</h4>
                <p>
                  Dr. Babasaheb Ambedkar Marathwada University | 2020 - 2023
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  CGPA: 7.74/10
                </p>
              </div>
            </div>

            <div className="about-specialties">
              <h3 className="section-subtitle">Core Expertise</h3>
              <ul className="specialty-list">
                <li>Automation & Manual Testing</li>
                <li>API & Performance Testing</li>
                <li>Agile Methodologies</li>
                <li>Defect Tracking & SDLC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

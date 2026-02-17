import React from "react";
import { FaCertificate, FaAward, FaMedal } from "react-icons/fa";
import "../styles/Certificates.css";

const Certificates = () => {
  const file = [
    {
      id: 1,
      title: "Programming in Java (NPTEL)",
      issuer: "NPTEL",
      date: "2024",
      icon: <FaCertificate />,
    },
    {
      id: 2,
      title: "Introduction to Selenium",
      issuer: "Intelllipat",
      date: "2024",
      icon: <FaAward />,
    },
    {
      id: 3,
      title: "Postman Student Expert",
      issuer: "Postman Academy",
      date: "2024",
      icon: <FaMedal />,
    },
  ];

  return (
    <section className="certificates-section">
      <h2 className="certificates-header">Certifications</h2>

      <div className="certificates-grid">
        {file.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-icon">{cert.icon}</div>
            <h3 className="certificate-title">{cert.title}</h3>
            <div className="certificate-issuer">{cert.issuer}</div>
            <div className="certificate-date">{cert.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

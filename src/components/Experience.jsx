import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Java Testing Intern",
      company: "JADE (JSCOE Association for Developing Entrepreneurs)",
      date: "Dec 2025 - Present",
      description: [
        "Tested ERP internship management workflows across 6+ functional modules to ensure system accuracy and reliability",
        "Executed 120+ manual, automation, and API test cases using Selenium WebDriver and Postman with 95% pass accuracy",
        "Identified, logged, and tracked 40+ defects in JIRA while validating fixes during regression cycles",
        "Collaborated with 5+ developers to reduce rework cycles and improve release stability",
      ],
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Infosys",
      date: "Nov 2025 - Jan 2026",
      description: [
        "Performed functional, data validation, and regression testing on applications processing large datasets",
        "Validated Python-based data science workflows and verified model outputs for consistency and correctness",
        "Tested Streamlit-based applications to improve usability, performance, and error handling",
        "Assisted in identifying edge cases and improving overall test coverage during development cycles",
      ],
    },
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          My professional journey
        </p>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-meta">
                <span className="experience-date">{exp.date}</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <ul className="experience-desc-list">
                  {exp.description.map((item, index) => (
                    <li key={index} className="experience-desc-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

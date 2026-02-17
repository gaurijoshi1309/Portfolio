import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Java Testing Intern",
      company: "Jayawantrao Sawant College Of Engineering",
      date: "Dec 2025 - Present",
      description:
        "Tested ERP internship management workflows across 6+ functional modules. Executed 120+ manual, automation, and API test cases using Selenium WebDriver and Postman with 95% pass accuracy. Identified and tracked 40+ defects in JIRA.",
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Infosys",
      date: "Nov 2025 - Jan 2026",
      description:
        "Performed functional, data validation, and regression testing on applications processing large datasets. Validated Python-based data science workflows and tested Streamlit-based applications.",
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-header">Work Experience</h2>
      <p className="experience-subheader">My professional journey</p>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-meta">
              <span className="experience-date">{exp.date}</span>
            </div>
            <div className="experience-content">
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

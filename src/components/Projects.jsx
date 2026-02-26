import React from "react";
import SpotlightCard from "./react-bits/SpotlightCard.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Devion AI – Autonomous Code Review & Self-Healing System",
      description:
        "A multi-agent system built with LangGraph and FastAPI that autonomously clones a repository, runs tests, analyzes failures, and pushes fixes.",
      image: "/assets/devion-ai.png",
      tags: ["LangGraph", "FastAPI", "AI Agents", "Python"],
      link: "https://github.com/gaurijoshi1309/devion-ai",
    },
    {
      id: 2,
      title: "JSCOE Prism",
      description:
        "A centralized platform to manage students, teachers, academics, and administration for jspm-prism.",
      image: "/assets/jspm-prism.png",
      tags: ["Management System", "Web App", "Java", "Automation"],
      link: "https://github.com/gaurijoshi1309/jspm-prism",
    },
    {
      id: 3,
      title: "Meal Mitra (Smart Food Donation Webapp)",
      description:
        "A smart food donation platform connecting donors with those in need to reduce food waste.",
      image: "/assets/Mealmitra.png",
      tags: ["QA", "Functional Testing", "Integration Testing"],
      link: "https://github.com/gaurijoshi1309/meal-mitra",
    },
    {
      id: 4,
      title: "Load & Stress Testing of User Auth",
      description:
        "Comprehensive performance analysis of authentication systems using JMeter and scalability testing.",
      image: "/assets/Loadtesting.jpg",
      tags: ["JMeter", "Performance Testing", "Scalability"],
      link: "https://github.com/gaurijoshi1309/load-testing-project",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-header">Featured Work</h2>
      <p className="projects-subheader">
        A selection of my professional projects and marketing campaigns.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <SpotlightCard
            key={project.id}
            className="project-card"
            spotlightColor="rgba(99, 102, 241, 0.15)"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decodings="async"
              />
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;

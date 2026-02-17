import React from "react";
import SpotlightCard from "./react-bits/SpotlightCard.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Meal Mitra (Smart Food Donation Webapp)",
      image: "/assets/Mealmitra.png",
      tags: ["QA", "Functional Testing", "Integration Testing"],
      link: "https://github.com/gaurijoshi1309/meal-mitra",
    },
    {
      id: 2,
      title: "Load & Stress Testing of User Auth",
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

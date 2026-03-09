import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Devion AI",
      subtitle: "Autonomous Code Review",
      image: "/assets/devion-ai.png",
      link: "https://github.com/gaurijoshi1309/devion-ai",
      date: "Feb 2024",
    },
    {
      id: 2,
      title: "JSCOE Prism",
      subtitle: "Academic Platform",
      image: "/assets/jspm-prism.png",
      link: "https://github.com/gaurijoshi1309/jspm-prism",
      date: "Jan 2024",
    },
    {
      id: 3,
      title: "Meal Mitra",
      subtitle: "Smart Food Donation",
      image: "/assets/Mealmitra.png",
      link: "https://github.com/gaurijoshi1309/meal-mitra",
      date: "Dec 2023",
    },
    {
      id: 4,
      title: "Load Testing",
      subtitle: "Auth System Scalability",
      image: "/assets/Loadtesting.jpg",
      link: "https://github.com/gaurijoshi1309/load-testing-project",
      date: "Nov 2023",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container projects-container">
        <div className="projects-left">
          <h2 className="section-title">My latest Project</h2>
          <p className="projects-description">
            A showcase of my recent work in AI agents, web development, and
            quality engineering. Each project represents a unique challenge
            solved with modern tech.
          </p>
          <a href="https://github.com/gaurijoshi1309" className="view-all-link">
            View all on GitHub
          </a>
        </div>

        <div className="projects-right">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card-v2">
                <div className="project-img-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
                <div className="project-info-v2">
                  <div className="project-meta">
                    <h4>{project.title}</h4>
                    <p>{project.subtitle}</p>
                  </div>
                  <span className="project-date">{project.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

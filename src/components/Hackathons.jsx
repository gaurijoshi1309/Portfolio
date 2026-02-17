import React from "react";
import "../styles/Hackathons.css";

const Hackathons = () => {
  const events = [
    {
      id: 1,
      title: "Hacktoberfest Contributor",
      date: "Oct 2025",
      description:
        "Successfully completed Hacktoberfest by contributing multiple quality pull requests to open-source projects, demonstrating initiative and collaboration.",
      link: "#",
    },
    {
      id: 2,
      title: "Postman Student Expert",
      date: "2025",
      description:
        "Recognized as a Postman Student Expert by Postman Academy for demonstrating proficiency in API testing and development.",
      link: "#",
    },
  ];

  return (
    <section className="hackathons-section">
      <h2 className="hackathons-header">Achievements</h2>
      <p className="hackathons-subheader">Recognition & Contributions</p>

      <div className="hackathons-timeline">
        {events.map((event) => (
          <div key={event.id} className="hackathon-item">
            <div className="hackathon-date">{event.date}</div>
            <h3 className="hackathon-title">{event.title}</h3>
            <p className="hackathon-desc">{event.description}</p>
            <a href={event.link} className="hackathon-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;

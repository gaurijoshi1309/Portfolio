import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaBug,
  FaTools,
  FaFileAlt,
  FaTerminal,
  FaCode,
} from "react-icons/fa";
import {
  SiSelenium,
  SiSpringboot,
  SiPostman,
  SiJenkins,
  SiJunit5,
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Skills",
      skills: [
        { name: "Manual & Automation", icon: <FaBug /> },
        { name: "API & Performance", icon: <SiPostman /> },
        { name: "Regression & Functional", icon: <FaTools /> },
        { name: "Test Design & Document", icon: <FaFileAlt /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Selenium WebDriver", icon: <SiSelenium /> },
        { name: "Cucumber & JUnit", icon: <SiJunit5 /> },
        { name: "JIRA & Git", icon: <FaGitAlt /> },
        { name: "CI/CD & Jenkins", icon: <SiJenkins /> },
      ],
    },
    {
      title: "Programming & Databases",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "MySQL & Postgres", icon: <FaDatabase /> },
        { name: "Python & SQL", icon: <FaTerminal /> },
        { name: "HTML5", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-header">Skills & Tech</h2>
      <p className="skills-subheader">The toolkit I use</p>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="category-skills">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-badge" title={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

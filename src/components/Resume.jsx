import { FaBookOpen, FaBriefcase } from "react-icons/fa";
import PageNavbar from "./PageNavbar.jsx";

const Resume = () => {
  const education = [
    {
      title: "Bachelor in Computer Science",
      date: "2022 — 2026",
      desc: "Studying modern web technologies, software engineering and UI/UX.",
    },
    {
      title: "Intermediate Education",
      date: "2020 — 2022",
      desc: "Focused on computer science and mathematics.",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      date: "Jan 2025 — Apr 2025",
      desc: "Building responsive React applications and portfolio websites.",
    },
    // {
    //   title: 'Freelance Web Designer',
    //   date: '2022 — Present',
    //   desc: 'Creating modern responsive designs for clients worldwide.'
    // }
  ];

  const skills = [
    { name: "HTML5", value: "95%" },
    { name: "CSS3", value: "90%" },
    { name: "Tailwind CSS", value: "80%" },
    { name: "JavaScript (ES6+)", value: "85%" },
    { name: "React JS", value: "90%" },
    { name: "Node.js", value: "80%" },
    { name: "Express.js", value: "85%" },
    { name: "REST APIs", value: "85%" },
    { name: "JWT Authentication", value: "90%" },
    { name: "Postman", value: "90%" },
    { name: "MongoDB", value: "90%" },
    { name: "Git & GitHub", value: "85%" },
  ];

  return (
    <section className="resume-section">
      <PageNavbar />
      <div className="article-title-box">
        <h2 className="article-title">Resume</h2>
      </div>

      {/* Education */}
      <div className="timeline">
        <div className="timeline-header">
          <div className="timeline-icon">
            <FaBookOpen />
          </div>

          <h3>Education</h3>
        </div>

        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h4>{item.title}</h4>
            <span>{item.date}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="timeline mt-5">
        <div className="timeline-header">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <h3>Experience</h3>
        </div>

        {experience.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h4>{item.title}</h4>
            <span>{item.date}</span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="skills-box">
        <h3 className="skills-title">My Skills</h3>

        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="title-wrapper">
              <h5>{skill.name}</h5>
              <data>{skill.value}</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: skill.value }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;

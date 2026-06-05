const AdditionalSkills = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      category: "Database & Tools",
      skills: ["MongoDB", "Postman", "Git & GitHub"],
    },
  ];

  return (
    <section className="additional-skills">
      <h3 className="skills-heading">Additional Skills</h3>

      {/* Desktop: Header bar with all categories */}
      <div className="skills-header-bar desktop-only">
        {skillGroups.map((group, index) => (
          <span key={index} className="skills-category">{group.category}</span>
        ))}
      </div>

      <div className="skills-columns">
        {skillGroups.map((group, index) => (
          <div key={index} className="skills-column ">
            {/* Mobile: Category label inside each column */}
            <span className="skills-category mobile-only">{group.category}</span>
            <ul className="skills-list">
              {group.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalSkills;

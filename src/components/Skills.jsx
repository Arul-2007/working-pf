import React from "react";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

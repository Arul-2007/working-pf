import React from "react";
import projects from "../assets/data/projects";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

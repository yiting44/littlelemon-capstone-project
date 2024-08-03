import React from "react";

const projects = [
  { title: "Project 1", description: "Description 1" },
  { title: "Project 2", description: "Description 2" },
  { title: "Project 3", description: "Description 3" },
  { title: "Project 4", description: "Description 4" },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

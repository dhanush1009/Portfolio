import React from "react";

const projects = [
  {
    id: 1,
    title: "Diseaster Management System",
    description: "A Disaster Management System is a system that helps to predict, prepare, respond, and recover from disasters to protect people, property, and the environment.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS","Weather API"],
  },
  {
    id: 2,
    title: "Customer Billing Application",
    description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern web technologies.",
    tech: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    id: 3,
    title: "Retail Demand Forecasting",
    description: "Retail Demand Forecasting is the process of predicting future customer product needs to help stores manage stock and avoid shortages or excess.",
    tech: ["React", "Python", "Node.js", "PostgreSQL","ML"],
  },
  {
    id: 4,
    title: "KEC Student Portal",
    description: "Student portal UI in Figma with fees, results, LinkedIn integration, and a community to connect juniors and seniors.",
    tech: ["UI/UX","Figma"],
  },
  {
    id: 5,
    title: "Go Naturo",
    description: "Go Naturo is a project focused on building a clean and user-friendly platform that highlights natural products with smooth browsing and a simple experience.",
    tech: ["React", "JavaScript", "CSS", "UI/UX"],
  },
  {
    id: 6,
    title: "Shanruck Technologies",
    description: "Developed a business-oriented web solution with a focus on responsive UI, clean component architecture, and smooth user interaction.",
    tech: ["React", "JavaScript", "CSS", "Node.js"],
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects & Featured</h2>
      <p>
        Here are some of my recent projects that showcase my skills in creating 
        interactive and user-friendly web applications. Each project represents my commitment to quality and innovation.
      </p>
      
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">
              {project.description}
            </p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

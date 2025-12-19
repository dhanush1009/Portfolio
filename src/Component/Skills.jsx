import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "fas fa-code",
    iconColor: "#38bdf8",
    iconBg: "rgba(56, 189, 248, 0.12)",
    iconShadow: "rgba(56, 189, 248, 0.35)",
    skills: [
      { name: "React", icon: "fab fa-react", color: "#61dafb", bg: "rgba(97, 218, 251, 0.12)", shadow: "rgba(97, 218, 251, 0.35)" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
      { name: "HTML5", icon: "fab fa-html5", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", shadow: "rgba(56, 189, 248, 0.35)" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)", shadow: "rgba(192, 132, 252, 0.35)" },
      { name: "Tailwind CSS", icon: "fas fa-wind", color: "#22d3ee", bg: "rgba(34, 211, 238, 0.12)", shadow: "rgba(34, 211, 238, 0.35)" },
    ],
  },
  {
    title: "Backend Development",
    icon: "fas fa-database",
    iconColor: "#34d399",
    iconBg: "rgba(52, 211, 153, 0.12)",
    iconShadow: "rgba(52, 211, 153, 0.35)",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js", color: "#22c55e", bg: "rgba(34, 197, 94, 0.12)", shadow: "rgba(34, 197, 94, 0.35)" },
      { name: "Express", icon: "fas fa-server", color: "#f8fafc", bg: "rgba(148, 163, 184, 0.12)", shadow: "rgba(148, 163, 184, 0.25)" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#4ade80", bg: "rgba(74, 222, 128, 0.12)", shadow: "rgba(74, 222, 128, 0.35)" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
      { name: "REST APIs", icon: "fas fa-exchange-alt", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "fas fa-bezier-curve",
    iconColor: "#c084fc",
    iconBg: "rgba(192, 132, 252, 0.12)",
    iconShadow: "rgba(192, 132, 252, 0.35)",
    skills: [
      { name: "Figma", icon: "fab fa-figma", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", shadow: "rgba(168, 85, 247, 0.35)" },
      { name: "Adobe Illustrator", icon: "fab fa-adobe", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
      { name: "Adobe Photoshop", icon: "fas fa-magic", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
      { name: "Canva", icon: "fas fa-paint-brush", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", shadow: "rgba(56, 189, 248, 0.35)" },
      { name: "Wireframing", icon: "fas fa-project-diagram", color: "#34d399", bg: "rgba(52, 211, 153, 0.12)", shadow: "rgba(52, 211, 153, 0.35)" },
    ],
  },
  {
    title: "Programming Languages",
    icon: "fas fa-terminal",
    iconColor: "#fbbf24",
    iconBg: "rgba(251, 191, 36, 0.12)",
    iconShadow: "rgba(251, 191, 36, 0.35)",
    skills: [
      { name: "C", icon: "fas fa-code", color: "#7dd3fc", bg: "rgba(125, 211, 252, 0.12)", shadow: "rgba(125, 211, 252, 0.35)" },
      { name: "Java", icon: "fab fa-java", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
      { name: "Python", icon: "fab fa-python", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
      { name: "JavaScript", icon: "fab fa-js", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
      { name: "SQL", icon: "fas fa-database", color: "#f8fafc", bg: "rgba(148, 163, 184, 0.12)", shadow: "rgba(148, 163, 184, 0.25)" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills & Technologies</h2>
      <p>
        A curated stack of tools and languages I rely on to design, build, and deliver
        resilient digital experiences across the full product lifecycle.
      </p>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <div className="skill-card-header">
              <span
                className="skill-card-icon"
                style={{
                  background: category.iconBg,
                  color: category.iconColor,
                  boxShadow: `0 0 35px ${category.iconShadow}`,
                }}
              >
                <i className={category.icon}></i>
              </span>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li className="skill-item" key={skill.name}>
                  <span
                    className="skill-icon"
                    style={{
                      background: skill.bg,
                      color: skill.color,
                      boxShadow: `0 0 25px ${skill.shadow}`,
                    }}
                  >
                    <i className={skill.icon}></i>
                  </span>
                  <span className="skill-label">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

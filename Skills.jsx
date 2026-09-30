import { useState } from "react";
import LiquidText from "./LiquidText";

const ALL_SKILLS = [
  { name: "HTML5", icon: "🌐", category: "Technical" },
  { name: "CSS3", icon: "🎨", category: "Technical" },
  { name: "JavaScript", icon: "⚡", category: "Technical" },
  { name: "React", icon: "⚛️", category: "Technical" },
  { name: "Python", icon: "🐍", category: "Technical" },
  { name: "Java", icon: "☕", category: "Technical" },
  { name: "Node.js", icon: "🟢", category: "Technical" },
  { name: "MongoDB", icon: "🍃", category: "Technical" },
  { name: "UI/UX Design", icon: "✏️", category: "Creative" },
  { name: "Prompt Engineering", icon: "🤖", category: "Creative" },
  { name: "AI Image Gen", icon: "🖼️", category: "Creative" },
  { name: "Figma", icon: "🔷", category: "Creative" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "Azure DevOps", icon: "☁️", category: "Tools" },
  { name: "Git", icon: "🔀", category: "Tools" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
  { name: "CI/CD", icon: "🔄", category: "Tools" },
  { name: "Nginx", icon: "⚙️", category: "Tools" },
];

const FILTERS = ["All", "Technical", "Creative", "Tools"];

function Skills() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ALL_SKILLS
    : ALL_SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">My Skills</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">What I Work With</LiquidText></h2>
        <p className="section-desc">A versatile skill set spanning frontend, backend, AI, and cloud technologies.</p>
      </div>

      <div className="skills-filter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            <LiquidText intensity="subtle">{f}</LiquidText>
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filtered.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <LiquidText intensity="small">{skill.name}</LiquidText>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
import { useState, useEffect } from "react";
import LiquidText from "./LiquidText";

const PROJECTS = [
  {
    emoji: "🌍",
    title: "Climate Impact on Crop Production",
    shortDesc: "ML project predicting crop yield using climate data with high accuracy.",
    longDesc:
      "A machine learning project that analyzes historical climate data (temperature, rainfall, humidity) to predict agricultural crop production output. Built with Python's scikit-learn and visualized using React for an interactive dashboard.",
    category: "AI/ML",
    tech: ["Python", "Machine Learning", "React", "scikit-learn", "Pandas"],
    features: [
      "Climate data preprocessing and feature engineering",
      "Multiple ML model comparison (Random Forest, XGBoost)",
      "Interactive crop yield prediction dashboard",
      "Visualization of climate-crop correlation insights",
    ],
    github: "https://github.com/Nirmalya-alt",
    demo: "#",
  },
  {
    emoji: "🐾",
    title: "PetGuard",
    shortDesc: "AI-powered app for pet health tracking, care tips, and vet guidance.",
    longDesc:
      "PetGuard is an AI-powered web application that helps pet owners manage their pets' health. It provides intelligent care recommendations, health tracking, symptom analysis, and connects users with nearby veterinary resources.",
    category: "AI",
    tech: ["React", "JavaScript", "AI Integration", "CSS3", "Node.js"],
    features: [
      "AI-driven pet health symptom checker",
      "Daily health tracking and reminders",
      "Personalized care tips and diet recommendations",
      "Vet locator with nearby clinic listings",
    ],
    github: "https://github.com/Nirmalya-alt",
    demo: "#",
  },
  {
    emoji: "🚀",
    title: "TripBuddy App",
    shortDesc: "Smart travel companion app with AI itinerary planning and budget tracking.",
    longDesc:
      "TripBuddy is a smart travel planning application that helps users plan their trips efficiently. It features AI-powered itinerary suggestions, budget management, packing lists, and travel tips for destinations worldwide.",
    category: "Web",
    tech: ["React", "JavaScript", "CSS3", "AI API", "Local Storage"],
    features: [
      "AI-powered trip itinerary generation",
      "Budget planning and expense tracker",
      "Smart packing list suggestions by destination",
      "Weather-aware activity recommendations",
    ],
    github: "https://github.com/Nirmalya-alt",
    demo: "#",
  },
  {
    emoji: "🟢",
    title: "GreenGo",
    shortDesc: "Eco-friendly delivery service concept with sustainability tracking.",
    longDesc:
      "GreenGo is a concept application for an eco-conscious delivery service. It tracks carbon footprint per delivery, offers green routing algorithms, incentivizes eco-friendly packaging choices, and builds environmental awareness among users.",
    category: "Web",
    tech: ["React", "UI/UX", "JavaScript", "CSS3"],
    features: [
      "Carbon footprint tracker per delivery",
      "Green route optimization visualization",
      "Eco-packaging incentive gamification system",
      "Environmental impact dashboard for users",
    ],
    github: "https://github.com/Nirmalya-alt",
    demo: "#",
  },
  {
    emoji: "🍎",
    title: "Creative UI — Fruit App",
    shortDesc: "Visually stunning mobile UI concept for a fruit ordering application.",
    longDesc:
      "A premium mobile-first UI design concept for a fruit and health food ordering app. Showcases advanced CSS animation, glassmorphism design, smooth hover transitions, and a vibrant color palette for a delightful user experience.",
    category: "UI/UX",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    features: [
      "Glassmorphism and vibrant gradient UI elements",
      "Smooth product card micro-interactions",
      "Mobile-first responsive layout",
      "Animated cart and checkout flow",
    ],
    github: "https://github.com/Nirmalya-alt",
    demo: "#",
  },
];

const FILTERS = ["All", "AI/ML", "AI", "Web", "UI/UX"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">My Work</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Featured Projects</LiquidText></h2>
        <p className="section-desc">A collection of projects showcasing my skills in AI, web development, and creative UI design.</p>
      </div>

      <div className="projects-filter">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            <LiquidText intensity="subtle">{f}</LiquidText>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card-emoji">{project.emoji}</div>
            <h3><LiquidText intensity="small">{project.title}</LiquidText></h3>
            <p>{project.shortDesc}</p>
            <div className="project-tech-tags">
              {project.tech.slice(0, 4).map((t) => (
                <span className="project-tech-tag" key={t}>
                  <LiquidText intensity="subtle">{t}</LiquidText>
                </span>
              ))}
            </div>
            <div className="project-actions">
              <button
                className="project-btn project-btn-primary"
                onClick={() => setSelectedProject(project)}
              >
                🔍 <LiquidText intensity="subtle">View Details</LiquidText>
              </button>
              <a
                href={project.github}
                className="project-btn project-btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 <LiquidText intensity="subtle">GitHub</LiquidText>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Repository Link & Fallback Note */}
      <div
        className="projects-github-banner"
        style={{
          marginTop: "40px",
          padding: "20px 24px",
          borderRadius: "var(--radius-lg, 16px)",
          background: "var(--bg-glass, rgba(255, 255, 255, 0.04))",
          border: "1px solid var(--border-normal, rgba(255, 255, 255, 0.1))",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", maxWidth: "700px" }}>
          <span style={{ fontSize: "2rem" }}>🐙</span>
          <div>
            <p style={{ fontWeight: "700", fontSize: "15px", color: "var(--text-primary)" }}>
              <LiquidText intensity="small">Looking for the latest code or project repositories?</LiquidText>
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "3px", lineHeight: "1.5" }}>
              If any direct project link is undergoing updates, you can explore all active source code and upcoming releases on GitHub at{" "}
              <a
                href="https://github.com/Nirmalya-alt"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-cyan-light, #67e8f9)", textDecoration: "underline", fontWeight: "600" }}
              >
                github.com/Nirmalya-alt
              </a>
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Nirmalya-alt"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ padding: "10px 22px", fontSize: "13px", whiteSpace: "nowrap" }}
        >
          <LiquidText intensity="subtle">Visit GitHub Profile ↗</LiquidText>
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            </div>
            <div className="modal-body">
              <span className="modal-emoji">{selectedProject.emoji}</span>
              <p className="modal-desc">{selectedProject.longDesc}</p>

              <p className="modal-section-title">Key Features</p>
              <ul className="modal-features">
                {selectedProject.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p className="modal-section-title">Tech Stack</p>
              <div className="modal-tech-tags">
                {selectedProject.tech.map((t) => (
                  <span className="modal-tech-tag" key={t}>{t}</span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.github}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐙 View on GitHub
                </a>
                {selectedProject.demo !== "#" && (
                  <a
                    href={selectedProject.demo}
                    className="btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "14px", textAlign: "center" }}>
                💡 Note: If any direct repository is updating or private, explore this project and all active codebases on{" "}
                <a
                  href="https://github.com/Nirmalya-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent-cyan-light, #67e8f9)", textDecoration: "underline", fontWeight: "600" }}
                >
                  github.com/Nirmalya-alt
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
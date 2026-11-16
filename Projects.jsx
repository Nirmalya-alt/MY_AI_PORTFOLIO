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
    github: "https://github.com/Nirmalya-alt/farmer-assistent-AI-best-version",
    demo: "#",
  },
  {
    emoji: "📚",
    title: "BookLeaf Publishing — Author Support & Communication Portal",
    shortDesc: "Enterprise full-stack author support portal for 22,000+ titles with Gemini 3.8 Flash AI.",
    longDesc:
      "An integrated, enterprise-grade full-stack web application designed for BookLeaf Publishing to solve author communication at scale across 22,000+ catalog titles. Features role-based portals for Authors and Operations Admins, real-time ticket synchronization, and server-side Google Gemini 3.8 Flash integration for automated ticket classification, urgency priority scoring, and policy-grounded draft response generation.",
    category: "AI",
    tech: ["React", "Full-Stack", "Google Gemini 3.8 Flash", "Real-Time Sync", "Role-Based Auth"],
    features: [
      "Role-based portals for Authors and Operations Admins across 22,000+ catalog titles",
      "Real-time support ticket synchronization and status tracking",
      "Server-side Google Gemini 3.8 Flash integration for automated ticket classification",
      "AI-powered urgency priority scoring and policy-grounded draft response generation",
    ],
    github: "https://github.com/Nirmalya-alt/Bookleaf",
    demo: "#",
  },
  {
    emoji: "✍️",
    title: "Editorial — Full-Stack Blog Publishing Platform",
    shortDesc: "Responsive editorial blogging platform built for clarity, typography, and distraction-free reading.",
    longDesc:
      "A production-quality, responsive editorial blogging platform designed for clarity, typography, and distraction-free reading and authoring. Editorial delivers a calm, human-crafted publication experience built with a warm light aesthetic, balanced mathematical typography, real-time database persistence, and secure authentication so writers can create, curate, and share deep perspectives with ease.",
    category: "Web",
    tech: ["React", "Full-Stack", "Real-Time DB", "Google Auth", "Typography UI"],
    features: [
      "Editorial Homepage with curated featured stories spotlight, category navigator, and latest publications",
      "Full-text search (title, description, content) with category filters (Tech, Programming, AI, Design, Business, Lifestyle, Career)",
      "Distraction-free 740px reading container with reading time estimates, live read counts, author bio cards, and related stories",
      "Email & password authentication with friendly error validation and 1-click Google Sign-in",
    ],
    github: "https://github.com/Nirmalya-alt/Bolg-Writing",
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
    github: "https://github.com/Nirmalya-alt/mynimal",
    demo: "#",
  },
  {
    emoji: "💸",
    title: "SwiftPay — Offline UPI Mesh Payments",
    shortDesc: "End-to-end offline UPI payments routed via Bluetooth gossip mesh and settled asynchronously.",
    longDesc:
      "An end-to-end demonstration of offline UPI payments routed through a Bluetooth gossip mesh network and settled asynchronously upon internet reconnection. Even in zero-connectivity zones like a basement or airplane cabin, a device signs and hybrid-encrypts the transaction and broadcasts it peer-to-peer across bystander devices until an internet-connected device forwards it to the banking backend for cryptographic verification, deduplication, and atomic settlement. Built with Node.js & Express, deployed on Vercel (MIT License).",
    category: "Web",
    tech: ["Node.js", "Express", "Bluetooth Mesh", "Hybrid Crypto", "Vercel"],
    features: [
      "Offline transaction signing and hybrid encryption without cellular or Wi-Fi",
      "Peer-to-peer Bluetooth gossip mesh packet hopping across bystander devices",
      "Asynchronous forwarding to banking backend upon internet reconnection",
      "Cryptographic verification, deduplication, and atomic settlement (MIT License)",
    ],
    github: "https://github.com/Nirmalya-alt/UPI_NET_OFLINE",
    demo: "#",
  },
  {
    emoji: "💼",
    title: "DEV's Portfolio",
    shortDesc: "Custom-crafted client portfolio website with modern responsive UI and smooth interactions.",
    longDesc:
      "A bespoke client portfolio website engineered to showcase developer expertise, featured projects, and personal branding with a sleek responsive layout, fluid animations, and intuitive navigation across desktop and mobile devices.",
    category: "UI/UX",
    tech: ["React", "JavaScript", "CSS3", "Responsive UI", "UI/UX"],
    features: [
      "Tailored personal branding and clean modern aesthetic",
      "Interactive project showcase and smooth section navigation",
      "Mobile-first responsive layout across all screen sizes",
      "Optimized performance and clean visual hierarchy",
    ],
    github: "https://github.com/Nirmalya-alt/DEV_PORTFOLIO",
    demo: "#",
  },
  {
    emoji: "👥",
    title: "EMS — Employment Management System",
    shortDesc: "Full-featured employment management system for employee records, roles, and HR workflows.",
    longDesc:
      "A structured Employment Management System (EMS) designed to streamline workforce administration, employee onboarding, department and role assignments, attendance tracking, and operational HR workflows through an organized, easy-to-use dashboard.",
    category: "Web",
    tech: ["React", "JavaScript", "Node.js", "Database", "Dashboard UI"],
    features: [
      "Centralized employee directory with profile & role management",
      "Department assignment, status tracking, and task oversight",
      "Streamlined HR workflow and administrative controls",
      "Responsive dashboard layout for quick data management",
    ],
    github: "https://github.com/Nirmalya-alt/EMS",
    demo: "#",
  },
  {
    emoji: "🧾",
    title: "Bill Application",
    shortDesc: "Smart billing and invoice generator with automated tax calculations and receipt tracking.",
    longDesc:
      "A practical billing and invoicing application designed for fast, accurate receipt generation. Supports itemized product entry, automatic subtotal, discount, and tax calculations, printable invoice summaries, and clean transaction record keeping.",
    category: "Web",
    tech: ["JavaScript", "React", "HTML5", "CSS3", "Invoice Logic"],
    features: [
      "Dynamic itemized bill & invoice creation",
      "Automated calculation of subtotals, discounts, and taxes",
      "Clean, print-ready customer receipt formatting",
      "Fast and responsive interface for day-to-day billing workflows",
    ],
    github: "https://github.com/Nirmalya-alt/bill",
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
    github: "https://github.com/Nirmalya-alt/fruit",
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
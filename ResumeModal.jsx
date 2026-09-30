import { useEffect } from "react";

function ResumeModal({ onClose }) {
  const handlePrint = () => window.print();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resume-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="resume-header">
          <div className="resume-header-left">
            <h2>📄 Nirmalya Chatterjee — Resume</h2>
            <p>Creative & AI Developer · UI Specialist · Kolkata, India</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="resume-header-btns">
              <button className="resume-action-btn primary" onClick={handlePrint}>
                🖨️ Print
              </button>
            </div>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Body */}
        <div className="resume-body">
          <h1 className="resume-name">Nirmalya Chatterjee</h1>
          <p className="resume-title">Creative & AI Developer · UI Specialist</p>

          <div className="resume-contacts">
            <span className="resume-contact-chip">📍 Kolkata, West Bengal, India</span>
            <span className="resume-contact-chip">🎓 BCA — Sister Nivedita University</span>
            <span className="resume-contact-chip">🐙 github.com/Nirmalya-alt</span>
            <span className="resume-contact-chip">💼 linkedin.com/in/nirmalya-chatterjee-9b2784428</span>
          </div>

          {/* Summary */}
          <div className="resume-section">
            <p className="resume-section-title">Summary</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: "1.8" }}>
              Passionate Creative & AI Developer and UI Specialist pursuing BCA at Sister Nivedita University (2023–2026).
              Experienced in web development, DevOps, and AI prompt engineering through 3 internships.
              Skilled at building modern, AI-powered applications and visually stunning user interfaces.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <p className="resume-section-title">Experience</p>

            <div className="resume-exp-item">
              <div className="resume-exp-row">
                <span className="resume-exp-role">AI Image Prompt Engineering Intern</span>
                <span className="resume-exp-year">2026 – Present</span>
              </div>
              <p className="resume-exp-company">RT Network Solutions Pvt. Ltd.</p>
              <ul className="resume-exp-bullets">
                <li>Designed creative AI image generation prompts for marketing campaigns</li>
                <li>Developed structured prompt engineering workflows to improve output quality</li>
                <li>Collaborated with design teams on AI-assisted creative projects</li>
              </ul>
            </div>

            <div className="resume-exp-item" style={{ marginTop: "16px" }}>
              <div className="resume-exp-row">
                <span className="resume-exp-role">DevOps Intern</span>
                <span className="resume-exp-year">2024</span>
              </div>
              <p className="resume-exp-company">Employability.life</p>
              <ul className="resume-exp-bullets">
                <li>Configured Azure DevOps pipelines and managed CI/CD workflows</li>
                <li>Set up Docker containers and Nginx reverse proxy for production environments</li>
                <li>Managed virtual machines for staging and production deployments</li>
              </ul>
            </div>

            <div className="resume-exp-item" style={{ marginTop: "16px" }}>
              <div className="resume-exp-row">
                <span className="resume-exp-role">Web Developer Intern</span>
                <span className="resume-exp-year">2024</span>
              </div>
              <p className="resume-exp-company">Chipherbytechnology Pvt Ltd</p>
              <ul className="resume-exp-bullets">
                <li>Built responsive UI components with HTML, CSS, and JavaScript</li>
                <li>Collaborated on frontend React development and code optimization</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="resume-section">
            <p className="resume-section-title">Key Projects</p>
            <ul className="resume-exp-bullets">
              <li><strong style={{ color: "var(--text-primary)" }}>Climate Impact on Crop Production</strong> — ML model predicting crop yields using climate data (Python, scikit-learn, React)</li>
              <li><strong style={{ color: "var(--text-primary)" }}>PetGuard</strong> — AI-powered pet health tracking and care recommendation app (React, JavaScript)</li>
              <li><strong style={{ color: "var(--text-primary)" }}>TripBuddy App</strong> — Smart AI travel planner with itinerary generation and budget tracking (React)</li>
              <li><strong style={{ color: "var(--text-primary)" }}>GreenGo</strong> — Eco-friendly delivery service concept with carbon footprint tracking (React, UI/UX)</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Creative UI — Fruit App</strong> — Premium mobile-first glassmorphic UI design (HTML, CSS, JavaScript)</li>
            </ul>
          </div>

          {/* Education */}
          <div className="resume-section">
            <p className="resume-section-title">Education</p>
            <div className="resume-exp-item">
              <div className="resume-exp-row">
                <span className="resume-exp-role">Bachelor of Computer Applications (BCA)</span>
                <span className="resume-exp-year">2023 – 2026</span>
              </div>
              <p className="resume-exp-company">Sister Nivedita University, Kolkata</p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <p className="resume-section-title">Technical Skills</p>
            <div className="resume-skills-wrap">
              {["HTML5","CSS3","JavaScript","React","Python","Java","Node.js","MongoDB","Docker","Azure DevOps","Git","GitHub","CI/CD","Nginx","Prompt Engineering","UI/UX Design","Figma","AI Image Generation"].map(s => (
                <span className="resume-skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="resume-section">
            <p className="resume-section-title">Certifications (Forage Virtual Experience)</p>
            <div className="resume-cert-list">
              {[
                { name: "Technology Consulting Job Simulation", issuer: "Deloitte" },
                { name: "AWS Cloud Foundations", issuer: "Amazon Web Services" },
                { name: "Software Development Simulation", issuer: "TCS" },
                { name: "Data Analytics Virtual Experience", issuer: "Tata Group" },
                { name: "Software Engineering Program", issuer: "Electronic Arts (EA)" },
                { name: "Software Engineering Simulation", issuer: "Walmart" },
              ].map((c) => (
                <div className="resume-cert-item" key={c.name}>
                  <span className="resume-cert-name">{c.name}</span>
                  <span className="resume-cert-issuer">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;

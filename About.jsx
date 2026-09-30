import LiquidText from "./LiquidText";

function About({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { number: "3+", label: "Internships" },
    { number: "5+", label: "Projects Built" },
    { number: "6+", label: "Certifications" },
    { number: "2026", label: "BCA Graduate" },
  ];

  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">About Me</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Who I Am</LiquidText></h2>
      </div>

      <div className="about-grid">
        <div className="about-text-block">
          <p>
            Hi! I'm <strong style={{ color: "var(--text-primary)" }}>Nirmalya Chatterjee</strong>, a BCA student at
            Sister Nivedita University, Kolkata (2023–2026). I'm a passionate
            <strong style={{ color: "var(--accent-violet-light)" }}> Creative &amp; AI Developer</strong> and
            <strong style={{ color: "var(--accent-cyan-light)" }}> UI Specialist</strong>.
          </p>
          <p>
            I love building modern websites, AI-powered applications, and creative digital
            experiences. My journey spans internships in DevOps, AI Prompt Engineering, and
            Web Development — giving me a well-rounded view of how products come to life.
          </p>
          <p>
            Currently focused on deepening my skills in full-stack development, machine learning,
            and building beautiful, functional user interfaces that solve real-world problems.
          </p>

          <div className="about-actions">
            <button className="btn-primary" onClick={onOpenResume}>
              📄 <LiquidText intensity="subtle">View Resume</LiquidText>
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              💬 <LiquidText intensity="subtle">Let's Talk</LiquidText>
            </button>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-number"><LiquidText intensity="medium">{s.number}</LiquidText></span>
              <span className="stat-label"><LiquidText intensity="small">{s.label}</LiquidText></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
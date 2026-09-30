import LiquidText from "./LiquidText";

const CERTIFICATIONS = [
  { emoji: "🔵", name: "Technology Consulting Job Simulation", issuer: "Deloitte (Forage)" },
  { emoji: "☁️", name: "AWS Cloud Foundations", issuer: "AWS (Forage)" },
  { emoji: "🔷", name: "Software Development Simulation", issuer: "TCS (Forage)" },
  { emoji: "🟠", name: "Data Analytics Simulation", issuer: "Tata Group (Forage)" },
  { emoji: "🎮", name: "Software Engineering Program", issuer: "EA (Forage)" },
  { emoji: "🟡", name: "Software Engineering Simulation", issuer: "Walmart (Forage)" },
];

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">Education</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Academic Background</LiquidText></h2>
        <p className="section-desc">Formal education and industry-recognized virtual certifications.</p>
      </div>

      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <div className="edu-info">
            <p className="edu-degree">
              <LiquidText intensity="small">Bachelor of Computer Applications (BCA)</LiquidText>
            </p>
            <p className="edu-institution">
              <LiquidText intensity="subtle">Sister Nivedita University, Kolkata, West Bengal</LiquidText>
            </p>
            <span className="edu-duration">2023 – 2026</span>
            <p className="edu-desc">
              Pursuing BCA with focus on software development, AI fundamentals, data structures,
              web technologies, and database management. Active in coding events and hackathons.
            </p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-icon">📜</div>
          <div className="edu-info">
            <p className="edu-degree">
              <LiquidText intensity="small">Higher Secondary (12th) — Science Stream</LiquidText>
            </p>
            <p className="edu-institution">
              <LiquidText intensity="subtle">West Bengal Board</LiquidText>
            </p>
            <span className="edu-duration">Completed 2022</span>
            <p className="edu-desc">
              Completed Higher Secondary with Science stream, building a strong analytical and
              mathematical foundation before entering the field of computer science.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ marginTop: "56px" }}>
        <div className="section-header" style={{ marginBottom: "32px" }}>
          <span className="section-label"><LiquidText intensity="small">Certifications</LiquidText></span>
          <h2 className="section-title" style={{ fontSize: "2rem" }}>
            <LiquidText intensity="medium">Forage Virtual Experience</LiquidText>
          </h2>
          <p className="section-desc" style={{ marginTop: "10px" }}>
            Completed industry-recognized virtual internship programs from global companies via Forage.
          </p>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <span className="cert-emoji">{cert.emoji}</span>
              <p className="cert-name"><LiquidText intensity="small">{cert.name}</LiquidText></p>
              <p className="cert-source"><LiquidText intensity="subtle">{cert.issuer}</LiquidText></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

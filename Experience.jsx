import LiquidText from "./LiquidText";

const EXPERIENCES = [
  {
    role: "AI Image Prompt Engineering Intern",
    company: "RT Network Solutions Pvt. Ltd.",
    duration: "2026 – Present",
    bullets: [
      "Designed creative AI image generation prompts for marketing and product campaigns.",
      "Developed structured prompt engineering workflows to improve output quality and consistency.",
      "Collaborated with design and marketing teams on AI-assisted creative projects.",
      "Researched cutting-edge generative AI tools and maintained documentation of best practices.",
    ],
  },
  {
    role: "DevOps Intern",
    company: "Employability.life",
    duration: "2024",
    bullets: [
      "Worked with Azure DevOps for project management, CI/CD pipeline setup and maintenance.",
      "Configured and managed Docker containers for application deployment.",
      "Set up and maintained Nginx as a reverse proxy and load balancer.",
      "Worked with virtual machines for staging and production environment management.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Chipherbytechnology Pvt Ltd",
    duration: "2024",
    bullets: [
      "Developed responsive frontend UI components using HTML, CSS, and JavaScript.",
      "Collaborated on web development projects following agile team workflows.",
      "Improved website performance through code optimization and best practices.",
      "Gained hands-on experience with React for dynamic UI development.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">My Experience</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Internship &amp; Experience</LiquidText></h2>
        <p className="section-desc">Real-world experience across AI, DevOps, and web development domains.</p>
      </div>

      <div className="experience-timeline">
        {EXPERIENCES.map((exp) => (
          <div className="exp-item" key={exp.company}>
            <div className="exp-dot" />
            <div className="exp-card">
              <div className="exp-header">
                <span className="exp-role"><LiquidText intensity="small">{exp.role}</LiquidText></span>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <p className="exp-company">🏢 <LiquidText intensity="subtle">{exp.company}</LiquidText></p>
              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
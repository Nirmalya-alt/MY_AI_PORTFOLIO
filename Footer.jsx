import LiquidText from "./LiquidText";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: "🐙", href: "https://github.com/Nirmalya-alt", label: "GitHub" },
  { icon: "💼", href: "https://www.linkedin.com/in/nirmalya-chatterjee-9b2784428", label: "LinkedIn" },
];

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a
            href="#"
            className="footer-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <LiquidText intensity="medium">Nirmalya.</LiquidText>
          </a>
          <p className="footer-tagline">
            Building digital experiences that make an impact.
          </p>
        </div>

        <div className="footer-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              <LiquidText intensity="small">{link.label}</LiquidText>
            </a>
          ))}
        </div>

        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            <LiquidText intensity="subtle">
              © 2026 Nirmalya Chatterjee · Crafted with ☕ + AI
            </LiquidText>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

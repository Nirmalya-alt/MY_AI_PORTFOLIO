import { useState, useEffect } from "react";
import LiquidText from "./LiquidText";

function Navbar({ onOpenResume, onOpenChat, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "skills", "projects", "experience", "education", "contact"];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a
          href="#"
          className="logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <LiquidText intensity="medium">Nirmalya.</LiquidText>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.replace("#", "") ? "active" : ""}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
            >
              <LiquidText intensity="small">{item.label}</LiquidText>
            </a>
          ))}
        </div>

        <div className="navbar-right">
          {/* Theme toggle */}
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
            </span>
          </button>

          <button className="nav-ai-btn" title="Portfolio Assistant" onClick={onOpenChat}>🤖</button>
          <button className="nav-resume-btn" onClick={onOpenResume}>
            <LiquidText intensity="subtle">Resume</LiquidText>
          </button>
          <button
            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-drawer ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
          >
            {item.label}
          </a>
        ))}
        <div style={{ display: "flex", gap: "10px", marginTop: "8px", alignItems: "center" }}>
          <button
            className="nav-resume-btn"
            style={{ width: "fit-content" }}
            onClick={() => { setMobileOpen(false); onOpenResume(); }}
          >
            📄 View Resume
          </button>
          <button className="theme-toggle-btn" onClick={onToggleTheme} title="Toggle theme">
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb">{theme === "dark" ? "🌙" : "☀️"}</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
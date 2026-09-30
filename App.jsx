import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import ResumeModal from "./ResumeModal";
import "./index.css";

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  // ── Dark/Light theme ──────────────────────────────
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [resumeOpen]);

  return (
    <>
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenChat={() => setChatOpen((v) => !v)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}

      <button
        className="chatbot-trigger"
        title="Ask the Portfolio Assistant"
        onClick={() => setChatOpen((v) => !v)}
      >
        {chatOpen ? "✕" : "🤖"}
      </button>
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />

      <button
        className={`back-to-top ${showBackTop ? "visible" : ""}`}
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </>
  );
}

export default App;

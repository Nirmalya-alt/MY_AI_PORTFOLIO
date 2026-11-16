import { useState, useEffect } from "react";
import LiquidText from "./LiquidText";

const EMAIL_ADDRESS = "nirmalyachatterjee617@gmail.com";

function Contact() {
  const [composeOpen, setComposeOpen] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("Hello Nirmalya");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!composeOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setComposeOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [composeOpen]);

  const formattedSubject = (subject.trim() || "Hello Nirmalya") + (senderName.trim() ? ` — from ${senderName.trim()}` : "");
  const formattedBody = message.trim() || "Hi Nirmalya,\n\n";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL_ADDRESS
  )}&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    formattedSubject
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        const el = document.createElement("textarea");
        el.value = EMAIL_ADDRESS;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">Contact Me</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Let&apos;s Work Together</LiquidText></h2>
      </div>

      <div className="contact-layout">
        <button
          type="button"
          className="contact-detail-item contact-email-link"
          onClick={() => setComposeOpen(true)}
          style={{ cursor: "pointer", fontFamily: "inherit", textAlign: "left", color: "inherit" }}
        >
          <span className="contact-detail-icon" aria-hidden="true">📧</span>
          <span className="contact-detail-value">
            <LiquidText intensity="subtle">{EMAIL_ADDRESS}</LiquidText>
          </span>
        </button>
      </div>

      {composeOpen && (
        <div className="modal-overlay" onClick={() => setComposeOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">📧 Send Mail to Nirmalya</h2>
              <button
                type="button"
                className="modal-close"
                onClick={() => setComposeOpen(false)}
                aria-label="Close mail compose modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-sm, 10px)",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span style={{ fontSize: "13px", color: "var(--text-secondary)", overflowWrap: "anywhere" }}>
                  <strong style={{ color: "var(--text-primary)" }}>To:</strong> {EMAIL_ADDRESS}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    background: "var(--bg-glass-strong)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {copied ? "✓ Copied" : "📋 Copy Email"}
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="contact-sender-name" style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                  Your Name
                </label>
                <input
                  id="contact-sender-name"
                  type="text"
                  placeholder="Enter your name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm, 10px)",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="contact-mail-subject" style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                  Subject
                </label>
                <input
                  id="contact-mail-subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm, 10px)",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label htmlFor="contact-mail-body" style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  id="contact-mail-body"
                  rows={4}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "var(--radius-sm, 10px)",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-primary)",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>

              <div className="modal-actions" style={{ marginTop: "6px" }}>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  📨 Open in Gmail
                </a>
                <a
                  href={mailtoUrl}
                  className="btn-outline"
                >
                  ✉️ Open Mail App
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;

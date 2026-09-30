import LiquidText from "./LiquidText";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-label"><LiquidText intensity="small">Contact Me</LiquidText></span>
        <h2 className="section-title"><LiquidText intensity="medium">Let's Work Together</LiquidText></h2>
      </div>

      <div className="contact-layout">
        <a
          className="contact-detail-item contact-email-link"
          href="mailto:nirmalyachatterjee617@gmail.com?subject=Hello%20Nirmalya&body=Hello%20Nirmalya%2C"
        >
          <span className="contact-detail-icon" aria-hidden="true">📧</span>
          <span className="contact-detail-value">
            <LiquidText intensity="subtle">nirmalyachatterjee617@gmail.com</LiquidText>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Contact;

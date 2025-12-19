import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Dhanush",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Let's Collaborate</h2>
      <p>
        I'm always excited to explore new ideas, tackle challenging briefs, and team up with people who value design-led engineering. Drop a line and let's shape something remarkable.
      </p>
      
      <div className="contact-wrapper">
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon"><i className="fas fa-whatsapp"></i></div>
            <div className="contact-title">WhatsApp</div>
            <div className="contact-info">6384248520</div>
            <p className="contact-subtext">Response within 24 hours</p>
          </div>
          <div
            className="contact-method contact-method--link"
            role="button"
            tabIndex={0}
            onClick={() => window.open('https://www.linkedin.com/in/dhanush-s-679674337/', '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open('https://www.linkedin.com/in/dhanush-s-679674337/', '_blank');
              }
            }}
          >
            <div className="contact-icon"><i className="fab fa-linkedin"></i></div>
            <div className="contact-title">LinkedIn</div>
            <div className="contact-info contact-link">linkedin.com/in/dhanush-s-679674337</div>
            <p className="contact-subtext">Let's connect professionally</p>
          </div>
          <div className="contact-method">
            <div className="contact-icon"><i className="fab fa-github"></i></div>
            <div className="contact-title">GitHub</div>
            <div className="contact-info">github.com/dhanush</div>
            <p className="contact-subtext">Browse recent builds</p>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-header">
            <h3>Send a Message</h3>
            <p>I usually respond within a day. Required fields are marked with *.</p>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>
            {formStatus === "sending" && <p className="form-status sending">Sending...</p>}
            {formStatus === "success" && <p className="form-status success">✓ Message sent successfully!</p>}
            {formStatus === "error" && <p className="form-status error">✗ Failed to send message. Please try again.</p>}
            <button type="submit" className="btn btn-primary" disabled={formStatus === "sending"}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

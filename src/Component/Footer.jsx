import React from "react";

export default function Footer({ scrollToSection }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dhanush</h4>
          <p>Full-stack web developer focused on creating beautiful and functional web experiences.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Skills</a></li>
            <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection("events"); }}>Events</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li><a href="https://github.com/dhanush1009" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/dhanush-s-679674337/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Dhanush. All rights reserved.</p>
        <p>Designed & Built with React, Tailwind CSS & ❤️</p>
      </div>
    </footer>
  );
}

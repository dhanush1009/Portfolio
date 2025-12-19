import React from "react";

export default function Navbar({ isDarkMode, setIsDarkMode, activeNav, scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          <span className="logo-text">Dhanush</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "home" ? "active" : ""}`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "events" ? "active" : ""}`}
              onClick={() => scrollToSection("events")}
            >
              Events
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "certificates" ? "active" : ""}`}
              onClick={() => scrollToSection("certificates")}
            >
              Certificates
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeNav === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="theme-toggle-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

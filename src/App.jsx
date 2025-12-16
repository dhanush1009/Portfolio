import React, { useState, useEffect } from "react";
import "./App.css";
import resume from "./assets/Dhanush S Resume.pdf";
import ProfilePic from "./assets/Dhanush.jpg";
import mongoCertificate from "./assets/mongodb.pdf";
import oracleCertificate from "./assets/OracleCertificate.pdf";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeNav, setActiveNav] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "events", "projects", "certificates", "contact"];
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }

      setActiveNav(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Diseaster Management System",
      description: "A Disaster Management System is a system that helps to predict, prepare, respond, and recover from disasters to protect people, property, and the environment.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS","Weather API"],
    },
    {
      id: 2,
      title: "Customer Billing Application",
      description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern web technologies.",
      tech: ["React", "JavaScript", "CSS", "Git"],
    },
    {
      id: 3,

      title: "Retail Demand Forecasting",
      description: "Retail Demand Forecasting is the process of predicting future customer product needs to help stores manage stock and avoid shortages or excess.",
      tech: ["React", "Python", "Node.js", "PostgreSQL","ML"],
    },
    {
      id: 4,
      title: "KEC Student Portal",
      description: "Student portal UI in Figma with fees, results, LinkedIn integration, and a community to connect juniors and seniors.",
      tech: ["UI/UX","Figma"],

    }
  ];

  const filteredProjects = projects;

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code",
      iconColor: "#38bdf8",
      iconBg: "rgba(56, 189, 248, 0.12)",
      iconShadow: "rgba(56, 189, 248, 0.35)",
      skills: [
        { name: "React", icon: "fab fa-react", color: "#61dafb", bg: "rgba(97, 218, 251, 0.12)", shadow: "rgba(97, 218, 251, 0.35)" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
        { name: "HTML5", icon: "fab fa-html5", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", shadow: "rgba(56, 189, 248, 0.35)" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#c084fc", bg: "rgba(192, 132, 252, 0.12)", shadow: "rgba(192, 132, 252, 0.35)" },
        { name: "Tailwind CSS", icon: "fas fa-wind", color: "#22d3ee", bg: "rgba(34, 211, 238, 0.12)", shadow: "rgba(34, 211, 238, 0.35)" },
      ],
    },
    {
      title: "Backend Development",
      icon: "fas fa-database",
      iconColor: "#34d399",
      iconBg: "rgba(52, 211, 153, 0.12)",
      iconShadow: "rgba(52, 211, 153, 0.35)",
      skills: [
        { name: "Node.js", icon: "fab fa-node-js", color: "#22c55e", bg: "rgba(34, 197, 94, 0.12)", shadow: "rgba(34, 197, 94, 0.35)" },
        { name: "Express", icon: "fas fa-server", color: "#f8fafc", bg: "rgba(148, 163, 184, 0.12)", shadow: "rgba(148, 163, 184, 0.25)" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "#4ade80", bg: "rgba(74, 222, 128, 0.12)", shadow: "rgba(74, 222, 128, 0.35)" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
        { name: "REST APIs", icon: "fas fa-exchange-alt", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: "fas fa-bezier-curve",
      iconColor: "#c084fc",
      iconBg: "rgba(192, 132, 252, 0.12)",
      iconShadow: "rgba(192, 132, 252, 0.35)",
      skills: [
        { name: "Figma", icon: "fab fa-figma", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", shadow: "rgba(168, 85, 247, 0.35)" },
        { name: "Adobe Illustrator", icon: "fab fa-adobe", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
        { name: "Adobe Photoshop", icon: "fas fa-magic", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
        { name: "Canva", icon: "fas fa-paint-brush", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)", shadow: "rgba(56, 189, 248, 0.35)" },
        { name: "Wireframing", icon: "fas fa-project-diagram", color: "#34d399", bg: "rgba(52, 211, 153, 0.12)", shadow: "rgba(52, 211, 153, 0.35)" },
      ],
    },
    {
      title: "Programming Languages",
      icon: "fas fa-terminal",
      iconColor: "#fbbf24",
      iconBg: "rgba(251, 191, 36, 0.12)",
      iconShadow: "rgba(251, 191, 36, 0.35)",
      skills: [
        { name: "C", icon: "fas fa-code", color: "#7dd3fc", bg: "rgba(125, 211, 252, 0.12)", shadow: "rgba(125, 211, 252, 0.35)" },
        { name: "Java", icon: "fab fa-java", color: "#f97316", bg: "rgba(249, 115, 22, 0.12)", shadow: "rgba(249, 115, 22, 0.35)" },
        { name: "Python", icon: "fab fa-python", color: "#60a5fa", bg: "rgba(96, 165, 250, 0.12)", shadow: "rgba(96, 165, 250, 0.35)" },
        { name: "JavaScript", icon: "fab fa-js", color: "#facc15", bg: "rgba(250, 204, 21, 0.12)", shadow: "rgba(250, 204, 21, 0.35)" },
        { name: "SQL", icon: "fas fa-database", color: "#f8fafc", bg: "rgba(148, 163, 184, 0.12)", shadow: "rgba(148, 163, 184, 0.25)" },
      ],
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="welcome-screen">
          <div className="welcome-content">
            <h1 className="welcome-title">Welcome to My Portfolio</h1>
            <div className="welcome-subtitle">Dhanush</div>
            <p className="welcome-text">Web Developer & Creative Problem Solver</p>
            <div className="welcome-loader">
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
              <div className="loader-dot"></div>
            </div>
            <div className="welcome-orb">
              <div className="welcome-orb__core"></div>
              <div className="welcome-orb__ring welcome-orb__ring--one"></div>
              <div className="welcome-orb__ring welcome-orb__ring--two"></div>
              <div className="welcome-orb__ring welcome-orb__ring--three"></div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-kicker">UI/UX Designer</span>
            <h1 className="hero-name">
              Dhanush
              <span className="hero-glow"> Builds immersive web stories</span>
            </h1>
            <p className="hero-desc">
              Crafts intuitive and engaging digital experiences. A collaborative UI/UX designer passionate about blending user-centered design with modern technologies to deliver products that delight users.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resume;
                  link.download = 'Dhanush_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
              <div className="hero-actions__meta">
                <span className="meta-pill">Frontend · Backend · UI/UX</span>
              </div>
            <div className="social-icons">
              <a href="https://github.com/dhanush1009" target="_blank" rel="noreferrer" className="social-link" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/dhanush-s-679674337/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-frame">
              <div className="profile-halo"></div>
              <div className="profile-tilt">
                <span className="profile-glare"></span>
                <img src={ProfilePic} alt="Dhanush" className="profile-image" />
              </div>
              <div className="profile-tag"></div>
            </div>
            <div className="hero-planet">
              <div className="hero-cube">
                <span className="cube-face cube-face--front">React</span>
                <span className="cube-face cube-face--back">Node</span>
                <span className="cube-face cube-face--left">UI/UX</span>
                <span className="cube-face cube-face--right">APIs</span>
                <span className="cube-face cube-face--top">JS</span>
                <span className="cube-face cube-face--bottom">SQL</span>
              </div>
              <div className="hero-orbit hero-orbit--outer"></div>
              <div className="hero-orbit hero-orbit--inner"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Quick Stats Section
        <section className="stats">
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          {/* <div className="stat-card">
            <div className="stat-number">30+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        // </section> */} 
        

        {/* Skills Section */}
        <section className="skills" id="skills">
          <h2>Skills & Technologies</h2>
          <p>
            A curated stack of tools and languages I rely on to design, build, and deliver
            resilient digital experiences across the full product lifecycle.
          </p>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div className="skill-card" key={category.title}>
                <div className="skill-card-header">
                  <span
                    className="skill-card-icon"
                    style={{
                      background: category.iconBg,
                      color: category.iconColor,
                      boxShadow: `0 0 35px ${category.iconShadow}`,
                    }}
                  >
                    <i className={category.icon}></i>
                  </span>
                  <h3>{category.title}</h3>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li className="skill-item" key={skill.name}>
                      <span
                        className="skill-icon"
                        style={{
                          background: skill.bg,
                          color: skill.color,
                          boxShadow: `0 0 25px ${skill.shadow}`,
                        }}
                      >
                        <i className={skill.icon}></i>
                      </span>
                      <span className="skill-label">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Events Attended Section */}
        <section className="events" id="events">
          <h2>Events & Conferences Attended</h2>
          <div className="events-container">
            <div className="event-card">
              <div className="event-number">1</div>
              <div className="event-details">
                <h3>Hackathon</h3>
                <br></br>
                <p>Participating in the HACKGENIX event organized in the TECHNO SUMMIT'25,held on 12th & 13th September, 2025.</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-number">2</div>
              <div className="event-details">
                <h3>Hackathon</h3>
                <br></br>
                <p>Participated in "AlgoArena' 25", a 24 hours hackathon held on 17th & 18th September, 2025.</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-number">3</div>
              <div className="event-details">
                <h3>Coding Competition</h3>
                <br></br>
                <p>Participated in the CODING EVENT, INTERFAZE held on October 08,2025</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-number">4</div>
              <div className="event-details">
                <h3>Project Presentation</h3>
                <br></br>
                <p>Participated in a National Level Technical Symposium organized by COIMBATORE INSTITUTE OF TECHNOLOGY held on 21.03.2025</p>

              </div>
            </div>

            <div className="event-card">
              <div className="event-number">5</div>
              <div className="event-details">
                <h3>Workshop</h3>
                <br></br>
                <p>Participated in the Drone Dynamic Workshop event during the Kanam 2025 held at NGP iTech & NGPASC February 08th & 09th 2025</p>
              </div>
            </div>

            <div className="event-card">
              <div className="event-number">6</div>
              <div className="event-details">
                <h3>Coding Event</h3>
                <br></br>
                <p>Participated in Codeup`25 held on 26th April 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Filter */}
        <section className="projects" id="projects">
          <h2>Projects & Featured</h2>
          <p>
            Here are some of my recent projects that showcase my skills in creating 
            interactive and user-friendly web applications. Each project represents my commitment to quality and innovation.
          </p>
          
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="certificates" id="certificates">
          <h2>Certifications & Achievements</h2>
          <div className="certificates-container">
            <div className="certificate-card">
              <div className="certificate-header">
                <i className="fas fa-certificate"></i>
                <h3>MongoDB Associate Developer</h3>
              </div>
              <p className="certificate-desc">Global Certificate proves that a person has the skills to build and manage applications using MongoDB effectively.</p>
              <a href={mongoCertificate} target="_blank" rel="noreferrer" className="certificate-link">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="certificate-card">
              <div className="certificate-header">
                <i className="fas fa-certificate"></i>
                <h3>Oracle APEX Cloud Developer</h3>
              </div>
              <p className="certificate-desc">Global Certificate shows that a person can create and deploy cloud-based web applications using Oracle APEX.</p>
              <a href={oracleCertificate} target="_blank" rel="noreferrer" className="certificate-link">
                View Certificate <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="certificate-card">
              <div className="certificate-header">
                <i className="fas fa-certificate"></i>
                <h3>Javafoundation</h3>
              </div>
              <p className="certificate-desc">Global Certificate proves that a person has basic knowledge of Java programming and core concepts used in software development.</p>
              <a href="#" className="certificate-link">View Certificate <i className="fas fa-external-link-alt"></i></a>
            </div>
           
          </div>
        </section>

        {/* Contact Section */}
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

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Dhanush</h4>
              <p>Full-stack web developer focused on creating beautiful and functional web experiences.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Social</h4>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
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
      </div>
    </>
  );
}

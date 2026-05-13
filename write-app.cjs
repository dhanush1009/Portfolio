const fs = require('fs');

const appContent = `import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLenis } from './hooks/useLenis';
import './premium.css';
import './animations.css';
import resume from './assets/Dhanush S Resume.pdf';
import profilePic from './assets/Dhanush.jpg';
import mongoCertificate from './assets/mongodb.pdf';
import oracleCertificate from './assets/OracleCertificate.pdf';
import javaFoundation from './assets/Java.pdf';

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
];

const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Python', 'Figma', 'UI/UX', 'Tailwind CSS', 'Express', 'GSAP', 'Framer Motion'];

const projects = [
  { number: '01', title: 'Disaster Management System', tech: 'React / Node / MongoDB', description: 'A response-focused platform designed to predict, prepare, and recover from disasters with practical workflows and a clear information hierarchy.', tags: ['Weather API', 'Dashboard', 'Real-time'] },
  { number: '02', title: 'Customer Billing Application', tech: 'React / JavaScript / CSS', description: 'A clean billing interface that emphasizes clarity, speed, and smooth customer-facing interactions.', tags: ['Billing', 'UI Design', 'Responsive'] },
  { number: '03', title: 'Retail Demand Forecasting', tech: 'React / Python / PostgreSQL', description: 'A forecasting workflow built to support inventory planning and smarter stock decisions through structured product prediction.', tags: ['ML', 'Forecasting', 'Analytics'] },
  { number: '04', title: 'KEC Student Portal', tech: 'UI/UX / Figma', description: 'A student portal concept with fees, results, community access, and LinkedIn-style connection points for campus networking.', tags: ['Design', 'Portal', 'UX'] },
  { number: '05', title: 'Go Naturo', tech: 'React / UI Design', description: 'A polished natural products experience centered on calm browsing, readability, and product storytelling.', tags: ['Ecommerce', 'Design', 'Product'] },
  { number: '06', title: 'Shanruck Technologies', tech: 'React / Node / Systems', description: 'A business-facing web build shaped around responsive UI, modular components, and a professional interface layer.', tags: ['Corporate', 'Responsive', 'Systems'] },
];

const capabilities = [
  { title: 'Frontend Development', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
  { title: 'Backend Development', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { title: 'Design & UX', items: ['Figma', 'Illustrator', 'Photoshop', 'Wireframing', 'UI Design', 'Animation'] },
  { title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C', 'SQL'] },
];

const experiences = [
  { number: '01', subtitle: 'Internship', title: 'Full Stack Developer', description: 'Worked on production-adjacent features, improved responsive UI flows, and contributed to the polish of real product screens during a 6-month internship.', tags: ['React', 'Node.js', 'UI', 'Production'] },
  { number: '02', subtitle: 'Events & Competitions', title: 'Hackathons & Symposiums', description: 'Participated in hackathons, coding events, and symposium presentations that strengthened speed, problem solving, and product communication.', tags: ['HackGENIX', 'AlgoArena', 'TECHNO SUMMIT'] },
  { number: '03', subtitle: 'Design Thinking', title: 'UI/UX Design Systems', description: 'Figma-led thinking shows up in the way the portfolio, student portal, and product concepts are framed: with hierarchy first and decorative elements second.', tags: ['Figma', 'Design Systems', 'UX'] },
];

const recognitions = [
  { title: 'MongoDB Associate Developer', description: 'Building and managing applications with MongoDB effectively.', href: mongoCertificate },
  { title: 'Oracle APEX Cloud Developer', description: 'Creating and deploying cloud-based applications with Oracle APEX.', href: oracleCertificate },
  { title: 'Java Foundation', description: 'Core Java knowledge and programming fundamentals.', href: javaFoundation },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);
  return progress;
}

function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: \`\${progress}%\` }} />;
}

function Navigation({ activeSection }) {
  return (
    <nav className="studio-nav">
      <button className="studio-brand" onClick={() => scrollToSection('home')}>Dhanush</button>
      <div className="studio-nav-links">
        {navigation.map((item) => (
          <button key={item.id} className={\`studio-nav-link \${activeSection === item.id ? 'is-active' : ''}\`} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section className="studio-hero" id="home" ref={ref}>
      <motion.div className="hero-content" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
        <div>
          <p className="hero-tag">Creative Developer Portfolio</p>
          <h1 className="hero-title">Premium digital experiences, crafted with precision</h1>
          <p className="hero-subtitle">I design and build clean, cinematic web experiences using modern tools and creative thinking. Focused on UI quality, smooth interactions, and premium aesthetics.</p>
        </div>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollToSection('work')}>View My Work</button>
          <button className="btn btn-secondary" onClick={() => { const link = document.createElement('a'); link.href = resume; link.download = 'Dhanush_Resume.pdf'; document.body.appendChild(link); link.click(); document.body.removeChild(link); }}>Download Resume</button>
        </div>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
          <div className="stat-card"><span className="stat-value">6</span><span className="stat-label">Projects</span></div>
          <div className="stat-card"><span className="stat-value">3</span><span className="stat-label">Certifications</span></div>
          <div className="stat-card"><span className="stat-value">6 mo</span><span className="stat-label">Internship</span></div>
          <div className="stat-card"><span className="stat-value">10+</span><span className="stat-label">Events</span></div>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
        <div className="profile-card"><img src={profilePic} alt="Dhanush" className="profile-image" /></div>
      </motion.div>
    </section>
  );
}

function SkillsMarquee() {
  return (
    <motion.section className="skills-marquee" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <p className="marquee-label">Skills & Technologies</p>
      <div className="marquee-content">
        {[...skills, ...skills].map((skill, index) => (
          <motion.span key={\`\${skill}-\${index}\`} className="marquee-item" whileHover={{ scale: 1.05 }}>{skill}</motion.span>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section className="projects-section container" id="work" ref={ref}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span className="section-tag">Selected Work</span>
        <h2 className="section-title">Crafted Digital Experiences</h2>
        <p className="section-description">A collection of projects showcasing expertise in frontend design, full-stack development, and creative problem-solving.</p>
      </motion.div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div key={project.number} className="project-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
            <div className="project-header"><span className="project-number">{project.number}</span><span className="project-tech">{project.tech}</span></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">{project.tags.map((tag) => (<span key={tag} className="project-tag">{tag}</span>))}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section className="capabilities-section container" id="about" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}><span className="section-tag">Capabilities</span><h2 className="section-title">How I Build</h2></motion.div>
      <div className="capabilities-grid">
        {capabilities.map((cap, index) => (
          <motion.div key={cap.title} className="capability" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
            <h3 className="capability-title">{cap.title}</h3>
            <ul className="capability-list">{cap.items.map((item) => (<li key={item}>{item}</li>))}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section className="experience-section container" id="experience" ref={ref}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span className="section-tag">Experience & Events</span>
        <h2 className="section-title">Professional Journey</h2>
      </motion.div>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div key={exp.number} className="experience-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 8 }}>
            <div className="experience-number">{exp.number}</div>
            <div className="experience-content">
              <span className="experience-subtitle">{exp.subtitle}</span>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-list">{exp.tags.map((tag) => (<li key={tag} className="experience-list-item">{tag}</li>))}</ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RecognitionSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  return (
    <section className="recognition-section container" id="recognition" ref={ref}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        <span className="section-tag">Recognition</span>
        <h2 className="section-title">Certifications & Credentials</h2>
      </motion.div>
      <div className="recognition-grid">
        {recognitions.map((recognition, index) => (
          <motion.div key={recognition.title} className="recognition-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }}>
            <h3 className="recognition-title">{recognition.title}</h3>
            <p className="recognition-description">{recognition.description}</p>
            <a href={recognition.href} target="_blank" rel="noreferrer" className="recognition-link">View Certificate</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <section className="contact-section container" id="contact" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}><span className="section-tag">Get In Touch</span><h2 className="section-title">Let's Create Something Amazing</h2></motion.div>
      <div className="contact-grid">
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -4 }}>
          <span className="contact-label">WhatsApp</span>
          <span className="contact-value">6384248520</span>
          <span className="contact-description">Response within 24 hours</span>
        </motion.div>
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -4 }} onClick={() => window.open('https://www.linkedin.com/in/dhanush-s-679674337/', '_blank')}>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">linkedin.com/in/dhanush-s</span>
          <span className="contact-description">Professional connection</span>
        </motion.div>
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -4 }}>
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com/dhanush1009</span>
          <span className="contact-description">Browse recent builds</span>
        </motion.div>
      </div>
      <motion.div className="contact-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
        <button className="btn btn-primary" onClick={() => scrollToSection('home')}>Back to Top</button>
        <button className="btn btn-secondary" onClick={() => scrollToSection('work')}>Review Work</button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="studio-footer container">
      <p className="footer-text">© 2024 Dhanush. Crafted with precision and care.</p>
      <div className="footer-links">
        <button className="footer-link" onClick={() => scrollToSection('work')}>Work</button>
        <button className="footer-link" onClick={() => scrollToSection('experience')}>Experience</button>
        <button className="footer-link" onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  useLenis();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleEntry?.target?.id) setActiveSection(visibleEntry.target.id);
    }, { threshold: [0.2, 0.35, 0.5] });
    navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="studio-page">
      <ScrollProgress />
      <Navigation activeSection={activeSection} />
      <main className="container">
        <HeroSection />
        <SkillsMarquee />
        <ProjectsSection />
        <CapabilitiesSection />
        <ExperienceSection />
        <RecognitionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('./src/App.jsx', appContent, 'utf-8');
console.log('✓ App.jsx has been successfully written');

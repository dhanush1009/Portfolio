import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLenis } from './hooks/useLenis';
import IntroScreen from './IntroScreen';
import Cursor from './Cursor';
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

const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'Python', 'Figma', 'UI/UX', 'SEO', 'Meta Ads', 'Tailwind CSS', 'GSAP', 'Framer Motion'];

const projects = [
  { number: '01', label: 'Company portal / Befhue', title: 'Befhue Private Limited Portal', tech: 'React / Node.js / Dashboard UI', description: 'A company-facing portal for Befhue Private Limited that brings essential information and workflows into one structured, responsive interface.', tags: ['Portal', 'Dashboard', 'Systems'], tone: 'mint', image: '/project-images/befhue.png', url: 'https://befhue-portal1.vercel.app/login' },
  { number: '02', label: 'Business website', title: 'Shanruck Technologies', tech: 'React / Node / Systems', description: 'A business-facing web build shaped around responsive UI, modular components, and a professional interface layer.', tags: ['Corporate', 'Responsive', 'Systems'], tone: 'mint', image: '/project-images/shanruck.png', url: 'https://shanrucktechnologies.in/' },
  { number: '03', label: 'Product experience', title: 'Go Naturo', tech: 'React / UI Design', description: 'A polished natural products experience centered on calm browsing, readability, and product storytelling.', tags: ['Ecommerce', 'Design', 'Product'], tone: 'coral', image: '/project-images/gonaturo.png', url: 'https://gonature-store-tn-2026.web.app/' },
  { number: '04', label: 'Client portfolio / Gokul', title: 'Gokul Portfolio', tech: 'React / UI Design / Motion', description: 'A polished personal portfolio built to turn Gokul’s story, services, and work into a memorable digital experience.', tags: ['Brand Story', 'Responsive', 'Motion'], tone: 'violet', image: '/project-images/gokul-portfolio.png', url: 'https://gokul-portfolio-sage.vercel.app/' },
  { number: '05', label: 'Client portfolio / Karunyan', title: 'Karunyan Portfolio', tech: 'React / Figma / Framer Motion', description: 'A visual-first portfolio for Karunyan, balancing expressive layouts with a clear path from introduction to enquiry.', tags: ['Art Direction', 'UX', 'Interactions'], tone: 'coral', image: '/project-images/karunyan-portfolio.png', url: 'https://karunyan.vercel.app/' },
  { number: '06', label: 'Portal concept', title: 'KEC Student Portal', tech: 'UI/UX / Figma', description: 'A student portal concept with fees, results, community access, and LinkedIn-style connection points for campus networking.', tags: ['Design', 'Portal', 'UX'], tone: 'violet', image: '/project-images/kec.png', url: 'https://www.figma.com/design/jz1EEmJRWVajwu8GQvTm4p/HACKATHON?node-id=69-2&p=f&t=uVzXPkn6hsJ39lHL-0' },
  { number: '07', label: 'Academic project', title: 'Disaster Management System', tech: 'React / Node / MongoDB', description: 'A response-focused platform designed to predict, prepare, and recover from disasters with practical workflows and a clear information hierarchy.', tags: ['Weather API', 'Dashboard', 'Real-time'], tone: 'violet', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=85' },
];

const capabilities = [
  { title: 'Frontend Development', items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
  { title: 'Digital Marketing', items: ['SEO', 'Keyword Research', 'On-page SEO', 'Meta Ads', 'Content Strategy', 'Analytics'] },
  { title: 'Backend Development', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
  { title: 'Design & UX', items: ['Figma', 'Illustrator', 'Photoshop', 'Wireframing', 'UI Design', 'Animation'] },
  { title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C', 'SQL'] },
];

const aboutStats = [
  { value: '7+', label: 'Projects Delivered' },
  { value: '9mo', label: 'Industry Internship' },
  { value: '3', label: 'Certifications' },
  { value: '10+', label: 'Events & Hackathons' },
];

const allSkills = ['React', 'Node.js', 'JavaScript', 'Python', 'Figma', 'MongoDB', 'PostgreSQL', 'Framer Motion', 'GSAP', 'UI/UX', 'SEO', 'Meta Ads', 'Tailwind CSS', 'Express', 'REST APIs', 'Java', 'C', 'HTML/CSS'];

const experiences = [
  { number: '01', subtitle: 'Digital Marketing Internship · 9 months', title: 'SEO & Growth Marketing', description: 'Built practical experience with SEO research, on-page optimization, content structure, keyword discovery, Meta Ads, and the fundamentals of improving organic visibility.', tags: ['SEO', 'Meta Ads', 'Keywords', 'Analytics'] },
  { number: '02', subtitle: 'Full Stack Internship', title: 'Full Stack Developer', description: 'Worked on production-adjacent features, improved responsive UI flows, and contributed to the polish of real product screens during a 9-month internship.', tags: ['React', 'Node.js', 'UI', 'Production'] },
  { number: '03', subtitle: 'Events & Competitions', title: 'Hackathons & Symposiums', description: 'Participated in hackathons, coding events, and symposium presentations that strengthened speed, problem solving, and product communication.', tags: ['HackGENIX', 'AlgoArena', 'TECHNO SUMMIT'] },
  { number: '04', subtitle: 'Design Thinking', title: 'UI/UX Design Systems', description: 'Figma-led thinking shows up in the way every build is framed: with hierarchy first and decorative elements second.', tags: ['Figma', 'Design Systems', 'UX'] },
];

const recognitions = [
  { title: 'MongoDB Associate Developer', description: 'Building and managing applications with MongoDB effectively.', href: mongoCertificate },
  { title: 'Oracle APEX Cloud Developer', description: 'Creating and deploying cloud-based applications with Oracle APEX.', href: oracleCertificate },
  { title: 'Java Foundation', description: 'Core Java knowledge and programming fundamentals.', href: javaFoundation },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    // Use window.scrollTo for more reliable scrolling with Lenis
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }
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

function GlobalScrollTracker() {
  const progress = useScrollProgress();
  const formattedProgress = Math.min(100, Math.max(0, Math.round(progress))).toString().padStart(3, '0');
  return <div className="global-scroll-tracker">{formattedProgress}%</div>;
}

function Navigation({ activeSection }) {
  return (
    <nav className="studio-nav">
      <button className="studio-brand" onClick={() => scrollToSection('home')}>Dhanush</button>
      <div className="studio-nav-links">
        {navigation.map((item) => (
          <button key={item.id} className={`studio-nav-link ${activeSection === item.id ? 'is-active' : ''}`} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section className="studio-hero" id="home" ref={ref}>
      <motion.div className="hero-content" variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
        <div>
          <motion.p variants={item} className="hero-tag">Digital Experience Portfolio</motion.p>
          <motion.h1 variants={item} className="hero-title">
            <span className="hover-word">Creative</span>{' '}
            <br/>
            <i style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: "300" }}>
              <span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>Developer</span>
            </i>{' '}&{' '}<br/>
            <span className="hover-word">Designer</span>
          </motion.h1>
          <motion.p variants={item} className="hero-subtitle">Crafting immersive digital experiences through precision code and minimalist design. Based in the intersection of logic and art.</motion.p>
        </div>
        <motion.div variants={item} className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollToSection('work')}>View My Work</button>
          <button className="btn btn-secondary" onClick={() => { const link = document.createElement('a'); link.href = resume; link.download = 'Dhanush_Resume.pdf'; document.body.appendChild(link); link.click(); document.body.removeChild(link); }}>Download Resume</button>
        </motion.div>
        <motion.div variants={item} className="hero-stats">
          <div className="stat-card"><span className="stat-value">7</span><span className="stat-label">Projects</span></div>
          <div className="stat-card"><span className="stat-value">3</span><span className="stat-label">Certifications</span></div>
          <div className="stat-card"><span className="stat-value">9 mo</span><span className="stat-label">Internship</span></div>
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, filter: "blur(20px)" }} animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}} transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}>
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
          <motion.span key={`${skill}-${index}`} className="marquee-item" whileHover={{ scale: 1.05 }}>{skill}</motion.span>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <section className="projects-section" id="work">
      <div className="projects-sticky-wrapper">
        <div className="container projects-header-container">
          <div className="section-header">
            <span className="section-tag">Selected Work</span>
            <h2 className="section-title">Crafted Digital Experiences</h2>
            <p className="section-description">A collection of projects showcasing expertise in frontend design, full-stack development, and creative problem-solving.</p>
          </div>
        </div>
        <motion.div className="projects-horizontal-track projects-bento-grid">
          {projects.map((project, index) => (
            <motion.div key={project.number} className={`project-card horizontal-card project-${project.tone} project-card--${project.number}`} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.15 }} whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}>
              <div className="project-visual">
                <img src={project.image} alt={`${project.title} preview`} className="project-visual-image" loading="lazy" decoding="async" />
              </div>
              <div className="project-header">
                <span className="project-number">{project.number} / {project.label}</span>
                <span className="project-tech">{project.tech}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => (<span key={tag} className="project-tag">{tag}</span>))}</div>
              <div className="project-card-footer">
                {project.url ? (
                  <a className="view-project-button" href={project.url} target="_blank" rel="noreferrer">
                    View Project <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <button className="view-project-button" type="button" onClick={() => setSelectedProject(project)}>
                    View Project <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedProject && (
          <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button className="project-modal-close" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button>
              <span className="section-tag">{selectedProject.label}</span>
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="project-modal-meta">
                <span>{selectedProject.tech}</span>
                <div className="project-tags">{selectedProject.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
              </div>
              <button className="btn btn-primary" type="button" onClick={() => { setSelectedProject(null); scrollToSection('contact'); }}>Discuss this project</button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function AboutSection() {
  const [activeSkill, setActiveSkill] = React.useState(null);

  return (
    <section className="about-section" id="about">
      {/* Top eyebrow */}
      <div className="container">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">About Me</span>
          <div className="section-rule" />
        </motion.div>
      </div>

      {/* Main split layout */}
      <div className="about-split">
        {/* Left — large bio statement */}
        <div className="about-left">
          <motion.h2
            className="about-headline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
          >
            <span className="hover-word">I</span>{' '}
            <span className="hover-word">turn</span>{' '}
            <span className="hover-word">ideas</span>{' '}
            <span className="hover-word">into</span>
            <br />
            <i><span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>living,</span>{' '}<span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>breathing</span></i>
            <br />
            <span className="hover-word">digital</span>{' '}<span className="hover-word">products.</span>
          </motion.h2>

          {/* Stat pills */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat-pill">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — what I do accordion + skills */}
        <div className="about-right">
          <motion.p
            className="about-bio"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a Full Stack Developer & UI/UX Designer based in Tamil Nadu, India.
            I specialize in building scalable web applications that don't just work —
            they <em>feel</em> exceptional. From pixel-perfect interfaces to robust backends,
            I bring both creative and technical precision to every build.
          </motion.p>

          {/* What I Do — accordion list */}
          <div className="about-services">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className={`about-service-row ${activeSkill === cap.title ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveSkill(activeSkill === cap.title ? null : cap.title)}
              >
                <div className="service-row-header">
                  <span className="service-row-index">0{index + 1}</span>
                  <span className="service-row-title">{cap.title}</span>
                  <span className="service-row-arrow">{activeSkill === cap.title ? '−' : '+'}</span>
                </div>
                <motion.div
                  className="service-row-items"
                  initial={false}
                  animate={{
                    height: activeSkill === cap.title ? 'auto' : 0,
                    opacity: activeSkill === cap.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                  <div className="service-tags">
                    {cap.items.map((item) => (
                      <span key={item} className="project-tag">{item}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width scrolling skill ticker */}
      <div className="about-skill-ticker">
        <div className="ticker-track">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className="ticker-item">{skill} <span className="ticker-dot">✦</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="experience-section container" id="experience">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Experience & Events</span>
        <div className="section-rule" />
      </motion.div>
      <motion.h2
        className="section-title editorial"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
      >
        Professional <i><span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>Journey</span></i>
      </motion.h2>
      <div className="experience-list-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.number}
            className="experience-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 12 }}
          >
            <span className="exp-row-number">{exp.number}</span>
            <div className="exp-row-content">
              <span className="exp-row-subtitle">{exp.subtitle}</span>
              <h3 className="exp-row-title">{exp.title}</h3>
              <p className="exp-row-description">{exp.description}</p>
            </div>
            <div className="exp-row-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RecognitionSection() {
  return (
    <section className="recognition-section container" id="recognition">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Recognition</span>
        <div className="section-rule" />
      </motion.div>
      <motion.h2
        className="section-title editorial"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
      >
        <span className="hover-word">Certifications</span> & <i><span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>Credentials</span></i>
      </motion.h2>
      <div className="recognition-list">
        {recognitions.map((recognition, index) => (
          <motion.div
            key={recognition.title}
            className="recognition-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 8 }}
          >
            <span className="recognition-index">0{index + 1}</span>
            <h3 className="recognition-row-title">{recognition.title}</h3>
            <p className="recognition-row-desc">{recognition.description}</p>
            <a href={recognition.href} target="_blank" rel="noreferrer" className="recognition-link">View →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <motion.div
        className="section-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">Get In Touch</span>
        <div className="section-rule" />
      </motion.div>
      <motion.h2
        className="contact-big-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true }}
      >
        <span className="hover-word">Let's</span>{' '}<span className="hover-word">Create</span><br />
        <i><span className="hover-word" style={{'--stroke-color': 'var(--accent)'}}>Something</span></i><br />
        <span className="hover-word">Amazing.</span>
      </motion.h2>
      <div className="contact-grid">
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -4 }}>
          <span className="contact-label">WhatsApp</span>
          <span className="contact-value">6384248520</span>
          <span className="contact-description">Response within 24 hours</span>
        </motion.div>
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -4 }} onClick={() => window.open('https://www.linkedin.com/in/dhanush-s-679674337/', '_blank')} style={{cursor: 'none'}}>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">linkedin.com/in/dhanush-s</span>
          <span className="contact-description">Professional connection</span>
        </motion.div>
        <motion.div className="contact-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -4 }} onClick={() => window.open('https://github.com/dhanush1009', '_blank')} style={{cursor: 'none'}}>
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
  const [showIntro, setShowIntro] = useState(true);
  useLenis();
  useEffect(() => {
    // Improved active section detection for manual scrolling
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport
      
      let activeId = 'home';
      
      // Find the section that's closest to the middle of the viewport
      let minDistance = Infinity;
      
      navigation.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          const sectionCenter = sectionTop + sectionHeight / 2;
          
          // Calculate distance from viewport center to section center
          const distance = Math.abs(scrollPosition - sectionCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            activeId = item.id;
          }
        }
      });
      
      setActiveSection(activeId);
    };
    
    // Call once on mount
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (showIntro) {
    return (
      <>
        <Cursor />
        <IntroScreen onComplete={() => setShowIntro(false)} />
      </>
    );
  }

  return (
    <>
      <Cursor />
      <div className="studio-page">
        <GlobalScrollTracker />
        <Navigation activeSection={activeSection} />
        <main className="container">
          <HeroSection />
          <SkillsMarquee />
          <ProjectsSection />
          <AboutSection />
          <ExperienceSection />
          <RecognitionSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

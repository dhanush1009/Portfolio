import React, { useState, useEffect } from "react";
import "./App.css";
import WelcomeScreen from "./Component/WelcomeScreen";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Events from "./Component/Events";
import Projects from "./Component/Projects";
import Certificates from "./Component/Certificates";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeNav, setActiveNav] = useState("home");

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

  return (
    <>
      <WelcomeScreen show={showWelcome} />
      <Navbar 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeNav={activeNav}
        scrollToSection={scrollToSection}
      />
      <Hero />

      <div className="container">
        <Skills />
        <Events />
        <Projects />
        <Certificates />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </>
  );
}

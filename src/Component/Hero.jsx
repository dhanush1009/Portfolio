import React from "react";
import resume from "../assets/Dhanush S Resume.pdf";
import ProfilePic from "../assets/Dhanush.jpg";

export default function Hero() {
  return (
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
  );
}

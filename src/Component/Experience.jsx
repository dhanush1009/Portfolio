import React from "react";

export default function Experience() {
  return (
    <section className="events experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-wrap">
        <article className="experience-card">
          <div className="experience-badge">Internship Journey</div>
          <div className="experience-main">
            <div>
              <h3>Full Stack Intern</h3>
              <p className="experience-company">Industry Project Experience</p>
            </div>
            <span className="experience-duration">6 Months</span>
          </div>
          <p className="experience-summary">
            Worked on real-time web modules, improved responsive UI flows, and collaborated on practical product tasks in a professional environment.
          </p>
          <ul className="experience-highlights">
            <li>Built reusable React components for live project screens</li>
            <li>Improved layout responsiveness across mobile and desktop</li>
            <li>Contributed to production-ready feature refinements</li>
          </ul>
        </article>
        <div className="experience-glow" aria-hidden="true"></div>
      </div>
    </section>
  );
}

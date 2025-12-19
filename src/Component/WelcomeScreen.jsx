import React from "react";

export default function WelcomeScreen({ show }) {
  if (!show) return null;

  return (
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
  );
}

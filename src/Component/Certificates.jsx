import React from "react";
import mongoCertificate from "../assets/mongodb.pdf";
import oracleCertificate from "../assets/OracleCertificate.pdf";
import internCertificate from "../assets/intern.pdf";

export default function Certificates() {
  return (
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
        <div className="certificate-card">
          <div className="certificate-header">
            <i className="fas fa-certificate"></i>
            <h3>Intern</h3>
          </div>
          <p className="certificate-desc">Internship certificate that highlights practical project experience and real-world industry exposure.</p>
          <a href={internCertificate} target="_blank" rel="noreferrer" className="certificate-link">
            View Certificate <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

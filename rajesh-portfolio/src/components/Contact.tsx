import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ minHeight: '60vh' }}>
      <h2 className="section-title">Get In <span className="glow-text">Touch</span></h2>
      
      <div className="card glass" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's build something great together.</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
          <a href="mailto:letsmailrajeshmondal@gmail.com" className="btn btn-primary" style={{ justifyContent: 'center' }}>
            <FaEnvelope /> letsmailrajeshmondal@gmail.com
          </a>
          <a href="tel:+918820857197" className="btn btn-primary" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
            <FaPhone /> +91 8820857197
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/rajisdevil" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
          <a href="https://linkedin.com/in/rajeshtechie" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
          <a href="https://www.instagram.com/synthsoulx_/" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
        </div>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Rajesh Mondal. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Software Developer | Open Source Enthusiast</p>
      </footer>
    </section>
  );
};

export default Contact;

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero" style={{ padding: '0 10%' }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
        
        {/* Text Content */}
        <div className="hero-content" style={{ maxWidth: '800px' }}>
          <h2>Hello, I'm</h2>
          <h1 className="glow-text">Rajesh Mondal</h1>
          <h2 style={{ fontSize: '1.5rem', marginTop: '-10px', color: 'var(--text-muted)' }}>
            Software Developer <span style={{ color: 'var(--accent-purple)' }}>&</span> Competitive Programmer
          </h2>
          <div className="cta-container" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://github.com/rajisdevil" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://linkedin.com/in/rajeshtechie" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://www.instagram.com/synthsoulx_/" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

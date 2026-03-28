import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass">
      <div className="logo glow-text">RAJESH.DEV</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

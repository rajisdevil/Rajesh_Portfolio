import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="section-title">My <span className="glow-text">Projects</span></h2>
      <div className="grid-2">
        <div className="card glass">
          <h3>DSA & Optimization Repository</h3>
          <p>Regularly solving and maintaining collections of DSA problems. High focus on time and space complexity optimization across various algorithmic challenges.</p>
          <div className="tag-container">
            <span className="tag">C++</span>
            <span className="tag">Algorithms</span>
          </div>
        </div>

        <div className="card glass">
          <h3>Dynamic Web Applications</h3>
          <p>Developing modern, dynamic web applications to strengthen JavaScript knowledge. Building responsive and interactive interfaces.</p>
          <div className="tag-container">
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
          </div>
        </div>

        <div className="card glass">
          <h3>Responsive Web Pages</h3>
          <p>Designed and built various pixel-perfect, responsive web pages focusing on layout techniques, semantic structuring, and mobile-first design.</p>
          <div className="tag-container">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
          </div>
        </div>

        <div className="card glass">
          <h3>Open Source Exploration</h3>
          <p>Actively exploring open-source projects, participating in collaborative development, and reviewing code contributions on GitHub.</p>
          <div className="tag-container">
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

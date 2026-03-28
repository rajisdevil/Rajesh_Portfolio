import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical <span className="glow-text">Skills</span></h2>
      <div className="grid-3">
        <div className="card glass">
          <h3>Core Concepts</h3>
          <div className="tag-container">
            <span className="tag">Data Structures</span>
            <span className="tag">Algorithms</span>
            <span className="tag">OOP</span>
            <span className="tag">Problem Solving</span>
            <span className="tag">Time & Space Complexity</span>
          </div>
        </div>
        
        <div className="card glass">
          <h3>Programming Languages</h3>
          <div className="tag-container">
            <span className="tag">C++</span>
            <span className="tag">C</span>
            <span className="tag">Java (Basic)</span>
            <span className="tag">Python (Basic)</span>
          </div>
        </div>

        <div className="card glass">
          <h3>Web Dev & Tools</h3>
          <div className="tag-container">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript (Learning)</span>
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">VS Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

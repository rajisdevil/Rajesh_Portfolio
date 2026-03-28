import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title">About <span className="glow-text">Me</span></h2>
      <div className="grid-2">
        <div className="glass card">
          <h3>My Background</h3>
          <p>
            I am a first-year B.Tech student in Electronics and Communication Engineering at Academy of Technology, Adisaptagram, Hooghly (Expected graduation: 2029).
            <br /><br />
            I have a strong passion for Software Development, and I am a quick learner and responsible team player aiming to build a successful career as a Software Developer.
          </p>
        </div>
        <div className="glass card">
          <h3>My Focus</h3>
          <p>
            I am currently focused on mastering Data Structures & Algorithms to excel in competitive programming and tackle algorithmic challenges efficiently.
            <br /><br />
            At the same time, I am actively strengthening my Web Development skills through personal projects and actively exploring open-source contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

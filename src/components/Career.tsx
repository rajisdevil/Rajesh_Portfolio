import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Electronics & Communication</h4>
                <h5>Academy of Technology, Adisaptagram</h5>
              </div>
              <h3>2025 - 2029</h3>
            </div>
            <p>
              First-year B.Tech student exploring the fundamentals of engineering
              and continuously growing my passion for technology and software
              development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development & Projects</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built responsive web pages using HTML & CSS. Developing dynamic
              web applications to strengthen JavaScript skills and exploring
              modern web frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming</h4>
                <h5>Open-Source Collaboration</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively solving Data Structures & Algorithms (DSA) problems focusing
              on time and space optimization, and participating in open-source
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

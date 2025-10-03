import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from "../../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 text-primary">About Me</h2>
        <div className="row align-items-center">
          
          {/* Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImage}
              alt="Habtamu Kassa"
              className="img-fluid rounded-circle shadow-sm"
              style={{ maxWidth: "220px", border: "4px solid #0d6efd", transition: 'transform 0.3s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          {/* About Text Card */}
          <div className="col-md-8">
            <div className="card shadow-sm p-4 border-0" style={{ background: 'white' }}>
              <p className="fs-5 text-dark mb-3" style={{ lineHeight: '1.8' }}>
                I am a <span className="fw-bold text-primary">graduate in  Electrical & Computer Engineering graduate</span> (BSc CGPA: 3.74, MSc CGPA: 3.7) from Addis Ababa Science and Technology University (AASTU). 
                With strong engineering principles and diverse software development skills, I specialize in <span className="fw-semibold text-secondary">full-stack web development</span> using <span className="fw-semibold">MERN, and Python| Django</span>
              </p>
              <p className="fs-5 text-dark mb-3" style={{ lineHeight: '1.8' }}>
                I am Certified in <span className="fw-bold text-primary">in Full stack Developer</span> <span className="fw-bold text-primary">in MERN from Addis Ababa Science University</span>, I bring both practical and theoretical knowledge in full stack web technologies 
                </p>
              <p className="fs-5 text-dark mb-3" style={{ lineHeight: '1.8' }}>
                I am eager to contribute to <span className="fw-bold text-secondary">innovative projects</span> by leveraging my technical skills and passion for continuous learning.
              </p>
              <a
                href="#projects"
                className="btn btn-primary btn-lg mt-3"
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

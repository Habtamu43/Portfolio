import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../../assets/profile.jpg";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e, selector) => {
    e.preventDefault();
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 text-light"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        scrollBehavior: "smooth",
      }}
    >
      <img
        src={profileImage}
        alt="Habtamu Kassa"
        className={`rounded-circle mb-4 shadow-lg ${animate ? "animate__fadeIn" : ""}`}
        style={{ width: "140px", border: "3px solid #ddd" }}
      />

      <h1 className={`display-4 fw-bold mb-3 ${animate ? "animate__fadeInUp" : ""}`}>
        Habtamu Kassa
      </h1>

      <p className={`lead mb-4 ${animate ? "animate__fadeInUp" : ""}`}>
        Electrical & Computer Engineer | Full-Stack Developer
      </p>

      <div
        className={`mb-4 d-flex flex-wrap justify-content-center gap-2 ${animate ? "animate__fadeInUp" : ""}`}
      >
        <a
          href="https://github.com/Habtamu43"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light"
        >
          <i className="fab fa-github me-1"></i> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/habtamu-kassa"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light"
        >
          <i className="fab fa-linkedin text-primary me-1"></i> LinkedIn
        </a>
        <a
          href="mailto:habtamukassa4339@gmail.com"
          className="btn btn-outline-light"
        >
          <i className="fas fa-envelope text-danger me-1"></i> Email
        </a>
      </div>

      <a
        href="#about"
        className="btn btn-info btn-lg mt-3 animate__fadeInUp"
        onClick={(e) => scrollToSection(e, "#about")}
      >
        View My Work <i className="fas fa-arrow-down ms-2"></i>
      </a>

      {/* Animate.css (make sure it's in index.html or installed via npm) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
}

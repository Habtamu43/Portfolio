// src/components/Footer/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-5">
      <div className="mb-4">
        <a
          href="https://github.com/Habtamu43"
          target="_blank"
          rel="noreferrer"
          className="text-white mx-3 fs-5 footer-icon"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/habtamu-kassa"
          target="_blank"
          rel="noreferrer"
          className="text-white mx-3 fs-5 footer-icon"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:habtamukassa4339@gmail.com"
          className="text-white mx-3 fs-5 footer-icon"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="mb-0">&copy; {new Date().getFullYear()} Habtamu Kassa. All rights reserved.</p>

      <style>
        {`
          .footer-icon {
            transition: transform 0.3s, color 0.3s;
          }
          .footer-icon:hover {
            transform: translateY(-3px);
            color: #0d6efd;
          }
        `}
      </style>
    </footer>
  );
}

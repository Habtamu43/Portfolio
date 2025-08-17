// src/components/Projects/Projects.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 text-primary">Projects</h2>
        <div className="row g-4">
          {projects.map(({ id, title, description, github, demo, tech }) => (
            <div className="col-md-6 col-lg-4" key={id}>
              <div className="card h-100 shadow-sm border-0 hover-shadow transition" style={{transition: 'transform 0.3s, box-shadow 0.3s'}}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3">{title}</h5>
                  <p className="card-text text-secondary mb-3">{description}</p>

                  {/* Optional: tech badges */}
                  {tech && (
                    <div className="mb-3">
                      {tech.map((t, i) => (
                        <span key={i} className="badge bg-info text-dark me-1 mb-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary flex-grow-1"
                    >
                      <i className="fab fa-github me-1"></i> GitHub
                    </a>
                    {demo !== "#" && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary flex-grow-1"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for hover effect */}
      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </section>
  );
}

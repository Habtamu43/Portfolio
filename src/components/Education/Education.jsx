// src/components/Education/Education.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Education() {
  const educations = [
    {
      degree: "BSc Electrical and Computer Engineering",
      university: "Addis Ababa Science and Technology University (AASTU)",
      year: "2023",
      cgpa: "3.74",
    },
    {
      degree: "MSc Electrical Engineering",
      university: "Addis Ababa Science and Technology University (AASTU)",
      year: "2024",
      cgpa: "3.7 (Thesis with very good results)",
    },
  ];

  return (
    <section id="education" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 text-primary">Education</h2>
        <div className="row g-4">
          {educations.map((edu, index) => (
            <div className="col-md-6" key={index}>
              <div className="card shadow-sm border-0 h-100 hover-scale" style={{ transition: 'transform 0.3s' }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{edu.degree}</h5>
                  <p className="card-subtitle mb-2 text-secondary">{edu.university}</p>
                  <p className="mb-1"><strong>Year:</strong> {edu.year}</p>
                  <p className="mb-0"><strong>CGPA:</strong> {edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .hover-scale:hover {
            transform: translateY(-5px) scale(1.02);
          }
        `}
      </style>
    </section>
  );
}

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <section id="contact" className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 text-primary">Contact Me</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4 border-0">
              <div className="mb-3">
                <h5 className="fw-bold text-secondary"><i className="fas fa-map-marker-alt me-2 text-primary"></i>Address</h5>
                <p className="mb-0">Addis Ababa, Ethiopia</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold text-secondary"><i className="fas fa-phone me-2 text-primary"></i>Phone</h5>
                <p className="mb-0">+251 943 398 424, +251 703 954 135</p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold text-secondary"><i className="fas fa-envelope me-2 text-primary"></i>Email</h5>
                <p className="mb-0">
                  <a href="mailto:habtamukassa4339@gmail.com" className="text-primary text-decoration-none hover-underline">
                    habtamukassa4339@gmail.com
                  </a>
                </p>
              </div>

              {/* Optional: Add a contact form here for interactivity */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

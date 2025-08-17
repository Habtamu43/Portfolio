import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // create this for hover and active styles

export default function Navbar() {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      links.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(link.href);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(href);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        scrollY > 20 ? 'bg-dark bg-opacity-95 shadow-lg' : 'bg-dark bg-opacity-75'
      } transition`}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-4"
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
        >
          Habtamu Kassa
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item mx-2" key={link.name}>
                <a
                  className={`nav-link fw-medium ${
                    activeSection === link.href ? 'active-link' : ''
                  }`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

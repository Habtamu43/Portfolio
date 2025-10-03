const skills = [
  {
    category: "Frontend",
    items: ["React", "CSS", "HTML", "JavaScript", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Django"],
  },
  { category: "Databases", items: ["MongoDB", "MySQL", "SQL"] },
  {
    category: "Tools & Other",
    items: ["Git & GitHub", "REST APIs", "Responsive Web Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5 text-primary">Skills</h2>
        <div className="row g-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="col-md-6 col-lg-3">
              <div
                className="card h-100 shadow-sm hover-shadow p-4"
                style={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  minHeight: '250px',
                }}
              >
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title text-primary text-center mb-4">{category}</h5>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-info text-dark py-2 px-3 fs-6"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect */}
      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-7px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          }
        `}
      </style>
    </section>
  );
}

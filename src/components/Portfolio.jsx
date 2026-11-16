
const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    category: "E-COMMERCE",
    title: "E-Commerce Experience",
    description: "A modern shopping experience built around simplicity."
  },
  {
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900",
    category: "BRANDING",
    title: "Creative Brand Identity",
    description: "A bold visual identity for a new generation of brands."
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    category: "DIGITAL",
    title: "Digital Innovation",
    description: "A powerful digital platform designed for growth."
  }
];

function Portfolio() {
  return (
    <section className="portfolio section-padding" id="portfolio">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">OUR SELECTED WORK</span>

          <h2>
            Ideas Into
            <span> Experiences.</span>
          </h2>

          <p>
            A look at the kind of digital experiences we love creating.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={project.title}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <span className="portfolio-index">
                  0{index + 1}
                </span>
              </div>

              <div className="portfolio-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;

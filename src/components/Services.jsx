
const services = [
  {
    number: "01",
    icon: "✧",
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive interfaces designed to create meaningful user experiences."
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    description:
      "Fast, responsive, and modern websites built to help your business grow."
  },
  {
    number: "03",
    icon: "↗",
    title: "Digital Marketing",
    description:
      "Smart digital strategies that connect your brand with the right audience."
  },
  {
    number: "04",
    icon: "▣",
    title: "Mobile Solutions",
    description:
      "Engaging mobile experiences that keep your customers connected."
  }
];

function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">WHAT WE DO</span>
          <h2>
            Services That Drive
            <span> Innovation.</span>
          </h2>
          <p>
            Everything your brand needs to stand out in the digital world.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Learn More ↗
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;

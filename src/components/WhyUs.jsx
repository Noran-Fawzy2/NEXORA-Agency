
const features = [
  {
    icon: "✦",
    title: "Innovation First",
    description:
      "We explore fresh ideas and modern technologies to create better digital solutions."
  },
  {
    icon: "◎",
    title: "Results Driven",
    description:
      "Every decision is focused on creating real value and measurable business growth."
  },
  {
    icon: "♡",
    title: "Client Focused",
    description:
      "Your goals are our priority. We work closely with you at every step."
  },
  {
    icon: "◇",
    title: "Creative Thinking",
    description:
      "We combine creativity and strategy to make your brand stand out."
  }
];

function WhyUs() {
  return (
    <section className="why-us section-padding" id="about">
      <div className="container">

        <div className="why-content">
          <div className="why-visual">
            <div className="why-glow"></div>

            <div className="why-card">
              <span className="why-letter">N</span>
              <h3>Think Beyond.</h3>
              <p>Build What's Next.</p>
              <span className="why-decoration">✦</span>
            </div>
          </div>

          <div className="why-text">
            <span className="section-tag">WHY CHOOSE US</span>

            <h2>
              We Turn Big Ideas Into
              <span> Real Impact.</span>
            </h2>

            <p className="why-description">
              We believe great digital experiences start with
              understanding people, solving problems, and
              creating something extraordinary.
            </p>

            <div className="features-grid">
              {features.map((feature) => (
                <div className="feature-item" key={feature.title}>
                  <span className="feature-icon">{feature.icon}</span>

                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;

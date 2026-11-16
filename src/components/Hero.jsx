
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-tag">
              ✦ YOUR DIGITAL GROWTH PARTNER
            </span>

            <h1>
              We Build
              <span> Digital </span>
              Experiences That Matter.
            </h1>

            <p>
              Transform your ideas into powerful digital
              experiences. We help ambitious brands grow
              through strategy, design, and technology.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Start Your Project ↗
              </a>

              <a href="#portfolio" className="btn-secondary">
                Explore Our Work ▶
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>

              <div>
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>

              <div>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>

            <div className="hero-circle">
              <div className="hero-circle-inner">
                <span>N</span>
                <small>NEXORA</small>
              </div>
            </div>

            <div className="floating-card card-one">
              <span>✦</span>
              <div>
                <strong>Creative Design</strong>
                <small>Ideas into reality</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>↗</span>
              <div>
                <strong>Growth</strong>
                <small>Results that matter</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

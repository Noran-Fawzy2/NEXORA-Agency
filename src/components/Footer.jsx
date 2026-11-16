
function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="nav-logo">
              NEXORA<span>.</span>
            </a>

            <p>
              Building digital experiences that inspire,
              innovate, and move businesses forward.
            </p>

            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">◎</a>
              <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
              <a href="https://facebook.com" aria-label="Facebook">f</a>
              <a href="https://github.com" aria-label="GitHub">◈</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#services">UI/UX Design</a>
            <a href="#services">Web Development</a>
            <a href="#services">Digital Marketing</a>
            <a href="#services">Mobile Solutions</a>
          </div>

          <div className="footer-column">
            <h4>Get In Touch</h4>
            <a href="mailto:hello@nexora.com">
              hello@nexora.com
            </a>
            <a href="#contact">Start a Project ↗</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 NEXORA. All rights reserved.</p>
          <p>Designed with creativity. Built for the future.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-section">
          <div className="logo">
            <img
              src="assets/images/footer-logo.png"
              className="img-footer"
              alt="footer"
            />
            <a href="/" className="footer-logo">
              Remind<span>me</span>
            </a>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-description">
              Task deadlines and scheduling <br /> applications with various
              benefits and <br />
              advantages
            </p>
          </div>
          <div className="container footer-links-parent">
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  About Us
                </a>
              </li>
            </ul>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Set Task Better
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Easy Manage
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Get Notification
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-socials">
            <p className="footer-socials-title">Follow Us</p>
            <img
              src="assets/images/facebook.png"
              className="footer-social"
              alt="social-icon"
            />
            <img
              src="assets/images/twitter.png"
              className="footer-social"
              alt="social-icon"
            />
            <img
              src="assets/images/linkedin.png"
              className="footer-social"
              alt="social-icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

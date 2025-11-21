import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        {/* Links & Contact */}
        <div className="footer-right">
          <div className="footer-columns">
            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="column-title">Quick links</h3>
              <nav className="footer-links">
                <a href="#about">About us</a>
                <a href="#contact">Contact us</a>
                <a href="#privacy">Privacy & policy</a>
                <a href="#terms">Terms & conditions</a>
              </nav>
            </div>

            {/* Our Products */}
            <div className="footer-column">
              <h3 className="column-title">Our products</h3>
              <nav className="footer-links">
                <a href="#ring">Ring</a>
                <a href="#necklaces">Necklaces</a>
                <a href="#bracelet">Bracelet</a>
                <a href="#earrings">Earrings</a>
              </nav>
            </div>

            {/* Contact Us */}
            <div className="footer-column">
              <h3 className="column-title">Contact us</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="contact-text">1st Floor, Dev House,</p>
                    <p className="contact-text">Vastadevdi Road,</p>
                    <p className="contact-text">Katargam, Surat-395004</p>
                  </div>
                </div>

                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="contact-text">tulsiyajewels@gmail.com</p>
                </div>

                <div className="contact-item">
                  <svg
                    className="contact-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="contact-text">(+91) 99797-94686</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          2025-26 SEARWORTH JEWELS ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

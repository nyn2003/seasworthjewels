import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Nav.css";
import logoBlack from "../assets/SWJ_Logo_Final_Black.png";
import logoWhite from "../assets/SWJ_Logo_Final_White.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isHome = location.pathname === "/";
      const isScrolled = isHome ? window.scrollY > 100 : true;
      setScrolled(isScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-logo">
              <Link to="/">
                <img
                  src={scrolled ? logoBlack : logoWhite}
                  alt="Seasworth Jewels"
                  className="logo-img"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-menu">
              <Link to="/" className="nav-link">
                HOME
              </Link>
              <Link to="/shop" className="nav-link">
                SHOP
              </Link>
              <Link to="/about" className="nav-link">
                ABOUT US
              </Link>
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="nav-actions">
              <button
                className="mobile-toggle"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={`mobile-side-menu ${open ? "mobile-side-menu-open" : ""}`}
      >
        {/* Overlay */}
        <div
          className="mobile-menu-overlay"
          onClick={() => setOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="mobile-menu-content">
          {/* Close Button */}
          <button
            className="mobile-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Logo */}
          <div className="mobile-logo">
            <img
              src={logoBlack}
              alt="Seasworth Jewels"
              className="mobile-logo-img"
            />
            <span className="mobile-logo-text">SEASWORTH JEWELS</span>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-nav-links">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span>HOME</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              to="/shop"
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span>SHOP</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span>ABOUT US</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span>CONTACT</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </nav>

          {/* Mobile Footer */}
          <div className="mobile-menu-footer">
            <p className="mobile-copyright">© 2025 Seasworth Jewels</p>
          </div>
        </div>
      </div>
    </>
  );
}

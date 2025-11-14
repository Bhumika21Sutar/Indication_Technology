import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/IndicationLOGO.png";
import ContactModal from "../pages/ContactModal";
import "./Navbar.css";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // modal state

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="nav-link">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div className="dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="dropdown-btn"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/web-development"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/app-development"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    App Development
                  </Link>
                  <Link
                    to="/ai-services"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    AI Services
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog/ai-agents-future" className="nav-link">
              Blog
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="contact-btn desktop"
          >
            <Link to="/contact">Contact</Link>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link"
            >
              About Us
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                className="mobile-link"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services {isMobileServicesOpen ? "▲" : "▼"}
              </button>
              {isMobileServicesOpen && (
                <div className="mobile-dropdown">
                  <Link
                    to="/web-development"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/app-development"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    App Development
                  </Link>
                  <Link to="/ai-services" onClick={() => setIsMenuOpen(false)}>
                    AI Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog/ai-agents-future"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link"
            >
              Blog
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsContactOpen(true);
              }}
              className="contact-btn"
            >
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {/* <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      /> */}
    </>
  );
};

export default Navbar;

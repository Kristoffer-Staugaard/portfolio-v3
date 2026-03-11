import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import "../styles/Navbar.scss";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the top 100px
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up or at the very top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={() => setIsMenuOpen(false)}>
          <span>Staugaard Studio</span>
        </a>

        <div className="nav-links">
          <a href="#mission">Mission</a>
          <a href="#cases">Cases</a>
          <a href="#services">Services</a>
          <a href="#about">Om mig</a>
        </div>

        <div className="nav-actions">
          <a href="mailto:kristofferstaugaard@gmail.com" className="book-btn">
            <span className="book-text">Book gratis sparring</span> <ArrowRight size={14} strokeWidth={1.5} />
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#mission" onClick={() => setIsMenuOpen(false)}>Mission</a>
          <a href="#cases" onClick={() => setIsMenuOpen(false)}>Cases</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Om mig</a>
        </div>
        <a href="mailto:kristofferstaugaard@gmail.com" className="mobile-book-btn" onClick={() => setIsMenuOpen(false)}>
          Book gratis sparring <ArrowRight size={16} strokeWidth={1.5} />
        </a>
      </div>
    </nav>
  );
}

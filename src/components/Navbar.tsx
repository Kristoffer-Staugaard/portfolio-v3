import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import "../styles/Navbar.scss";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the top 100px
        setIsVisible(false);
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
        <a href="#" className="logo">
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
            Book gratis sparring <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}

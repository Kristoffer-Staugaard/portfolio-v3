import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import { ArrowRight } from "lucide-react";
import "./styles/FooterCta.scss";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Projects />
        <Services />
        <About />

        {/* Footer */}
        <footer className="footer-simple">
          <div className="footer-content">
            <div className="footer-main">
              <h2>Lad os bygge noget fantastisk sammen.</h2>
              <p>Klar til at transformere din digitale tilstedeværelse? Kontakt mig for at drøfte dit næste projekt.</p>
              <a href="mailto:kristofferstaugaard@gmail.com" className="footer-cta-btn">
                Book et opkald
                <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© {new Date().getFullYear()} Staugaard Studio</div>
          </div>
        </footer>
      </main>
    </>
  );
}

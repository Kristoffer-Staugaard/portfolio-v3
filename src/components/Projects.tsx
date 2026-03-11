import { useRef, useState, useEffect } from "react";
import { Framer, Figma, Code, Layout, X } from "lucide-react";
import "../styles/Projects.scss";

export default function Projects() {
  const callbuddyRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const [openInfoId, setOpenInfoId] = useState<string | null>(null);

  useEffect(() => {
    const el = callbuddyRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setCardHeight((entry.target as HTMLElement).offsetHeight);
      }
    });

    // Set initial height
    setCardHeight(el.offsetHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const toggleInfo = (id: string) => {
    setOpenInfoId(openInfoId === id ? null : id);
  };

  return (
    <section className="projects-grid" id="cases">
      {/* Project 1 */}
      <div className="project-card col-span-2" ref={callbuddyRef}>
        <div className="card-header">
          <div className="header-left">
            <div className="title-area">
              <Framer size={14} color="#737373" />
              <span className="file-name">callbuddy.exe</span>
            </div>
          </div>
          <button className="info-btn" onClick={() => toggleInfo('callbuddy')}>
            {openInfoId === 'callbuddy' ? 'Close' : 'Info'}
          </button>
        </div>
        <div
          className="card-content"
          style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}
        >
          <div className={`project-info-panel ${openInfoId === 'callbuddy' ? 'open' : ''}`}>
            <p>Callbuddy er en innovativ, AI-drevet SaaS-platform designet til at maksimere potentialet hos telefonsælgere. Gennem en intuitiv web-app fungerer Callbuddy som en virtuel "teamleader", der lytter med under salgssamtaler og leverer intelligente forslag og indvendingshåndtering i realtid. Målet er at gøre samtalerne mere naturlige, strømline salgsprocessen og hjælpe sælgerne med at udvikle sig opkald for opkald.</p>
            <div className="tech-stack">
              <span>Framer</span>
              <span>Branding</span>
              <span>Motion Graphics</span>
            </div>
            <a href="https://www.callbuddy.dk/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/callbuddy-logo.png" alt="Callbuddy Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content" onClick={() => window.open("https://www.callbuddy.dk/", "_blank")} style={{ cursor: "pointer" }}>
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/callbuddy-mockup.png"
                alt="Callbuddy Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">MENU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="card-header">
          <div className="header-left">
            <div className="title-area">
              <Figma size={14} color="#737373" />
              <span className="file-name">bookido.app</span>
            </div>
          </div>
          <button className="info-btn" onClick={() => toggleInfo('bookido')}>
            {openInfoId === 'bookido' ? 'Close' : 'Info'}
          </button>
        </div>
        <div className="card-content" style={{ overflow: "hidden", padding: "2rem", perspective: "1500px" }}>
          <div className={`project-info-panel ${openInfoId === 'bookido' ? 'open' : ''}`}>
            <p>Bookido er en dedikeret C2C (Consumer-to-Consumer) markedsplads, der forbinder købere og sælgere af brugte bøger. Platformen er skabt med en vision om at gøre det nemt for bogentusiaster at dele læseoplevelser. Samtidig gør Bookido det muligt for brugerne at spare penge og træffe et bæredygtigt valg ved at give bøgerne nyt liv, frem for at købe fra ny.</p>
            <div className="tech-stack">
              <span>Figma</span>
              <span>Branding</span>
              <span>UI/UX</span>
              <span>Animations</span>
            </div>
            <a href="https://www.figma.com/design/apFOr6DI7R0PqId9H5OS14/Bookido--Community-?node-id=0-1&t=2PY7aXMtyPU5Bs7Y-1" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          {/* Mobile Mockup Template */}
          <div className="mockup-mobile-container">
            <div className="mockup-mobile-header">
              <div className="mockup-notch"></div>
              <div className="mockup-mobile-status">
                <span className="time">
                  <img src="/projects/logos/bookido-logo.png" alt="Bookido Logo" className="mockup-logo" style={{ height: '8px' }} />
                </span>
                <span className="battery">{`BATT OK`}</span>
              </div>
            </div>
            <div className="mockup-mobile-content" onClick={() => window.open("https://www.figma.com/design/apFOr6DI7R0PqId9H5OS14/Bookido--Community-?node-id=0-1&t=2PY7aXMtyPU5Bs7Y-1", "_blank")} style={{ cursor: "pointer" }}>
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/bookido-mockup.png"
                alt="Bookido App Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-mobile-footer">
              <div className="home-indicator"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div className="project-card" style={{ flex: 1 }}>
          <div className="card-header">
            <div className="header-left">
              <div className="title-area">
                <Code size={14} color="#737373" />
                <span className="file-name">airplate.sys</span>
              </div>
            </div>
            <button className="info-btn" onClick={() => toggleInfo('airplate')}>
              {openInfoId === 'airplate' ? 'Close' : 'Info'}
            </button>
          </div>
          <div className="card-content" style={{ overflow: "hidden", padding: "1.5rem", perspective: "1500px" }}>
            <div className={`project-info-panel ${openInfoId === 'airplate' ? 'open' : ''}`}>
              <p>Mit fokus i udviklingen af Airplate.dk har været at skabe et rent, moderne og brugervenligt design, samt 3D rendering</p>
              <div className="tech-stack">
                <span>React</span>
                <span>3D Render</span>
                <span>UI/UX</span>
              </div>
              <a href="https://airplate.dk/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            {/* Mockup Template */}
            <div className="mockup-container" style={{ maxWidth: "100%", padding: "0.75rem" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem 1rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>

                <div className="mockup-ascii-decor" style={{ fontSize: "0.6rem" }}>
                  <img src="/projects/logos/airplate-logo.png" alt="Airplate Logo" className="mockup-logo" />
                </div>
              </div>
              <div className="mockup-content" onClick={() => window.open("https://airplate.dk/", "_blank")} style={{ cursor: "pointer" }}>
                {/* Replace src with your actual project screenshot */}
                <img
                  src="/projects/airplate-mockup.png"
                  alt="AirPlate Project Screenshot"
                  className="mockup-image"
                  loading="lazy"
                />
                <div className="scanline-bar"></div>
              </div>
              <div className="mockup-footer" style={{ padding: "1rem 0 0.25rem 0", fontSize: "0.55rem" }}>
                <span className="status">POWER</span>
                <span className="sys-info">INPUT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" style={{ flex: 1 }}>
          <div className="card-header">
            <div className="header-left">
              <div className="title-area">
                <Layout size={14} color="#737373" />
                <span className="file-name">wellness_by_gitte.html</span>
              </div>
            </div>
            <button className="info-btn" onClick={() => toggleInfo('wellness')}>
              {openInfoId === 'wellness' ? 'Close' : 'Info'}
            </button>
          </div>
          <div className="card-content" style={{ overflow: "hidden", padding: "1.5rem", perspective: "1500px" }}>
            <div className={`project-info-panel ${openInfoId === 'wellness' ? 'open' : ''}`}>
              <p>For "Wellness by Gitte Lage" har jeg designet og udviklet en indbydende hjemmeside, der fungerer som klinikkens digitale ansigt udadtil.</p>
              <div className="tech-stack">
                <span>Webflow</span>
                <span>CMS</span>
                <span>UI/UX</span>
              </div>
              <a href="https://www.wellnessbygittelage.dk/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            {/* Mockup Template */}
            <div className="mockup-container" style={{ maxWidth: "100%", padding: "0.75rem" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem 1rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>

                <div className="mockup-ascii-decor">
                  <img src="/projects/logos/wellness-by-gitte-logo.png" alt="Wellness Logo" className="mockup-logo" />
                </div>
              </div>
              <div className="mockup-content" onClick={() => window.open("https://www.wellnessbygittelage.dk/", "_blank")} style={{ cursor: "pointer" }}>
                {/* Replace src with your actual project screenshot */}
                <img
                  src="/projects/wellness-by-gitte-mockup.png"
                  alt="Wellness by Gitte Project Screenshot"
                  className="mockup-image"
                  loading="lazy"
                />
                <div className="scanline-bar"></div>
              </div>
              <div className="mockup-footer" style={{ padding: "1rem 0 0.25rem 0", fontSize: "0.55rem" }}>
                <span className="status">POWER</span>
                <span className="sys-info">DEGAUSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card col-span-2" style={cardHeight ? { height: cardHeight } : undefined}>
        <div className="card-header">
          <div className="header-left">
            <div className="title-area">
              <Layout size={14} color="#737373" />
              <span className="file-name">gluds_cafe.html</span>
            </div>
          </div>
          <button className="info-btn" onClick={() => toggleInfo('gluds')}>
            {openInfoId === 'gluds' ? 'Close' : 'Info'}
          </button>
        </div>
        <div className="card-content" style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}>
          <div className={`project-info-panel ${openInfoId === 'gluds' ? 'open' : ''}`}>
            <p>Jeg har designet og udviklet en skræddersyet og responsiv hjemmeside med en intuitiv navigationsstruktur. Siden er bygget op omkring kerneelementerne for forretningen: Menu, Begivenheder, Aktiviteter og muligheden for at Leje en bar.</p>
            <div className="tech-stack">
              <span>Webflow</span>
              <span>Figma</span>
              <span>CMS</span>
              <span>UI/UX</span>
            </div>
            <a href="https://www.gludscafe.dk/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/gluds-cafe-logo.png" alt="Gluds Cafe Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content" onClick={() => window.open("https://www.gludscafe.dk/", "_blank")} style={{ cursor: "pointer" }}>
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/gluds-cafe-mockup.png"
                alt="Gluds Cafe Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">VOL +</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card col-span-2" style={cardHeight ? { height: cardHeight } : undefined}>
        <div className="card-header">
          <div className="header-left">
            <div className="title-area">
              <Code size={14} color="#737373" />
              <span className="file-name">justesen_artpack.zip</span>
            </div>
          </div>
          <button className="info-btn" onClick={() => toggleInfo('justesen')}>
            {openInfoId === 'justesen' ? 'Close' : 'Info'}
          </button>
        </div>
        <div className="card-content" style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}>
          <div className={`project-info-panel ${openInfoId === 'justesen' ? 'open' : ''}`}>
            <p>Design og udvikling af en professionel hjemmeside for Justesen Artpack, en virksomhed med mange års erfaring i transport, håndtering og vedligeholdelse af kunst. Målet med projektet var at skabe en overskuelig og tillidsvækkende digital platform, der formidler deres ekspertise til museer, gallerier, kunstnere og private samlere.</p>
            <div className="tech-stack">
              <span>Wordpress</span>
              <span>Blog</span>
              <span>UI/UX</span>
            </div>
            <a href="https://artpack.dk/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/justesen-logo.png" alt="Justesen Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content" onClick={() => window.open("https://artpack.dk/", "_blank")} style={{ cursor: "pointer" }}>
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/justesen-artpack-mockup.png"
                alt="Justesen Artpack Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">CH +</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

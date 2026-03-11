import React, { lazy, Suspense, useRef, useState, useEffect } from "react";
import "../styles/About.scss";

// Lazy-load the globe: defers cobe + d3-geo + topojson until needed
const InteractiveGlobe = lazy(() => import("./InteractiveGlobe"));

// Wrapper that only mounts children once the element enters the viewport
function LazyVisible({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before entering viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : (fallback || null)}</div>;
}

export default function About() {
  return (
    <section className="about-grid" id="about">
      <div className="section-header">
        <div className="sh-label">
          <span>[ REVIEWS & TOOLKIT ]</span>
        </div>
        <div className="sh-content">
          <h2>Lidt om Staugaard Studio</h2>
          <p>
            Jeg er passioneret omkring digitalt håndværk og stræber efter at
            levere skræddersyede løsninger, der skiller sig ud. Med base i
            Danmark arbejder jeg med kunder over hele verden for at bringe deres
            visioner til live.
          </p>
        </div>
      </div>
      {/* Block 1: Testimonial */}
      <div className="testimonial-block">
        <div className="static-card">
          <div className="card-bg-grid"></div>
          <div className="badge">
            <span className="dot"></span>
            <span>KUNDE HISTORIER</span>
          </div>
          <div className="rating-wrapper">
            <h2 className="score">100%</h2>
            <div className="satisfaction-text">
              <p className="satisfaction-title">Kundetilfredshed</p>
              <p className="review-count">BASERET PÅ SENESTE PROJEKTER</p>
            </div>
          </div>
          <div className="tech-line"></div>
        </div>

        <div className="marquee-area">
          <div className="marquee-scroll">
            {/* Group 1 */}
            <div className="marquee-group">
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_01.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Kristoffer har udviklet en flot hjemmeside til Gluds Café, og det er en fornøjelse at bruge ham som samarbejdspartner. Mange af ideerne er kommet fra ham, og vi er tilfredse med resultatet."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/gitte.png"
                        alt="Gitte Lage"
                        loading="lazy"
                      />
                      <div>
                        <p className="name">Gitte Lage</p>
                        <p className="role">Ejer og stifter</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_02.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Kristoffer har kreeret en flot, overskuelig og brugervenlig hjemmeside til os. Samarbejdet var fantastisk og han formåede at yde et godt overskud og et professionelt resultat, som vi er glade for."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/kenny.png"
                        alt="Kenny Gluds"
                      />
                      <div>
                        <p className="name">Kenny Gluds</p>
                        <p className="role">Ejer og stifter</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_03.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Samarbejdet med Kristoffer om min nye hjemmeside har været en fornøjelse. Resultatet er blevet præcis, som jeg ønskede: En professionel, rolig og overskuelig side, der fanger hele essensen af min klinik."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/lovz.png"
                        alt="Lovz Klose"
                      />
                      <div>
                        <p className="name">Lovz Klose</p>
                        <p className="role">Ejer</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
            </div>
            {/* Group 2 (Duplicate) */}
            <div className="marquee-group">
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_01.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Kristoffer har udviklet en flot hjemmeside til Gluds Café, og det er en fornøjelse at bruge ham som samarbejdspartner. Mange af ideerne er kommet fra ham, og vi er tilfredse med resultatet."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/gitte.png"
                        alt="Gitte Lage"
                        loading="lazy"
                      />
                      <div>
                        <p className="name">Gitte Lage</p>
                        <p className="role">Ejer og stifter</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_02.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Kristoffer har kreeret en flot, overskuelig og brugervenlig hjemmeside til os. Samarbejdet var fantastisk og han formåede at yde et godt overskud og et professionelt resultat, som vi er glade for."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/kenny.png"
                        alt="Kenny Gluds"
                      />
                      <div>
                        <p className="name">Kenny Gluds</p>
                        <p className="role">Ejer og stifter</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
              <div className="mockup-review-card">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="dot close"></span>
                    <span className="dot minimize"></span>
                    <span className="dot maximize"></span>
                  </div>
                  <span className="mockup-title">review_03.txt</span>
                </div>
                <div className="mockup-content">
                  <div className="review-text-container">
                    <p>
                      "Samarbejdet med Kristoffer om min nye hjemmeside har været en fornøjelse. Resultatet er blevet præcis, som jeg ønskede: En professionel, rolig og overskuelig side, der fanger hele essensen af min klinik."
                    </p>
                    <div className="author">
                      <img
                        src="/testimonials/lovz.png"
                        alt="Lovz Klose"
                      />
                      <div>
                        <p className="name">Lovz Klose</p>
                        <p className="role">Ejer</p>
                      </div>
                    </div>
                  </div>
                  <div className="scanline-bar"></div>
                </div>
                <div className="mockup-footer">
                  <span className="status">VERIFIED</span>
                  <span className="sys-info">5.0 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Location */}
      <div className="location-block">
        <div className="location-inner">
          <div className="text-header">
            <h3>Baseret i Danmark</h3>
            <div className="badge">
              <span className="dot"></span>
              <span>Tilgængelig overalt</span>
            </div>
          </div>
          <div className="globe-visual" style={{ pointerEvents: 'auto' }}>
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '1/1' }}>
              <LazyVisible>
                <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                  <InteractiveGlobe
                    theta={0.3}
                    dark={1}
                    diffuse={1}
                    mapSamples={16000}
                    mapBrightness={1.8}
                    baseColor={[0.30196078431372547, 0.30196078431372547, 0.30196078431372547]}
                    markerColor={[1, 0.23529411764705882, 0.10196078431372549]}
                    glowColor={[0, 0, 0]}
                    markers={[
                      {
                        location: [55.5072, 11.1276],
                        size: 0.14,
                        label: "Slagelse, DK"
                      }
                    ]}
                    scale={1}
                    offset={[0, 0]}
                    rotationSpeed={0.005}
                    dragSensitivity={0.005}
                    enableFadeMask={true}
                    showGraticule={true}
                    graticuleColor="#ffffff"
                    graticuleOpacity={0.1}
                    graticuleScale={0.8}
                    showLandOutline={true}
                    landOutlineColor="#ffffff"
                    landOutlineOpacity={1}
                    landOutlineScale={0.8}
                    pulseMarkers={true}
                  />
                </Suspense>
              </LazyVisible>
            </div>
          </div>
          <div className="gradient-fade"></div>
        </div>
      </div>

      {/* Block 3: Toolbox */}
      <div className="toolbox-block">
        <div className="title-area">
          <h3>Digital Værktøjskasse</h3>
          <p>Design & Udvikling stack</p>
        </div>
        <div className="icons-area">
          <div className="icons-scroll">
            <div className="icon-box" title="Figma">
              <img src="https://cdn.simpleicons.org/figma/737373" alt="Figma" className="brand-icon" />
            </div>
            <div className="icon-box" title="Webflow">
              <img src="https://cdn.simpleicons.org/webflow/737373" alt="Webflow" className="brand-icon" />
            </div>
            <div className="icon-box" title="Wordpress">
              <img src="https://cdn.simpleicons.org/wordpress/737373" alt="Wordpress" className="brand-icon" />
            </div>
            <div className="icon-box" title="Framer">
              <img src="https://cdn.simpleicons.org/framer/737373" alt="Framer" className="brand-icon" />
            </div>
            <div className="icon-box" title="React">
              <img src="https://cdn.simpleicons.org/react/737373" alt="React" className="brand-icon" />
            </div>
            <div className="icon-box" title="Vue">
              <img src="https://cdn.simpleicons.org/vuedotjs/737373" alt="Vue" className="brand-icon" />
            </div>
            <div className="icon-box" title="Github">
              <img src="https://cdn.simpleicons.org/github/737373" alt="Github" className="brand-icon" />
            </div>
            <div className="icon-box" title="Lottie">
              <img src="https://cdn.simpleicons.org/lottiefiles/737373" alt="Lottie" className="brand-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import '../styles/Services.scss';

// Pre-compute ASCII grids once at module load
const makeGrid = (charFn: () => string) =>
  Array.from({ length: 15 }, () => Array.from({ length: 30 }, charFn));

const ASCII_BRANDING = makeGrid(() => Math.random() > 0.8 ? '+' : Math.random() > 0.5 ? '-' : '.');
const ASCII_WEB = makeGrid(() => Math.random() > 0.9 ? '<>' : Math.random() > 0.5 ? '/' : '*');
const ASCII_MOTION = makeGrid(() => Math.random() > 0.8 ? '~' : Math.random() > 0.5 ? '^' : '.');

const AsciiGrid = ({ grid }: { grid: string[][] }) => (
  <div className="ascii-bg">
    {grid.map((row, i) => (
      <div key={i} className="ascii-row">
        {row.map((char, j) => (
          <span key={j}>{char}</span>
        ))}
      </div>
    ))}
  </div>
);

const SERVICES_DATA = [
  {
    id: 'branding',
    title: 'Branding Identitet',
    shortTitle: 'Branding Identitet',
    description: 'Jeg designer brands, systemer og oplevelser, der føles meningsfulde fra det første tryk til den sidste interaktion.',
    skills: [
      ['Identitets Branding', 'UI Design', 'Art Direction', 'Interaktiv Design'],
      ['UX Design / Research', 'Copywriting', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container branding-anim-bento">
        <AsciiGrid grid={ASCII_BRANDING} />
        <div className="scene-3d">
          <div className="brand-bento-wrapper">

            {/* ADDED: Floating Tags for Branding */}
            <div className="floating-tag tag-logo">{'[ LOGOMARK ]'}</div>
            <div className="floating-tag tag-color">{'#FD4D1E'}</div>
            <div className="floating-tag tag-type">{'.font-serif'}</div>

            <div className="brand-bento-inner">

              <div className="bento-panel p-logo">
                {/* ... existing p-logo content ... */}
                <div className="b-content">
                  <div className="wireframe-shape"></div>
                </div>
              </div>

              <div className="bento-panel p-colors">
                <div className="b-content">
                  <div className="c-bar c1"></div>
                  <div className="c-bar c2"></div>
                  <div className="c-bar c3"></div>
                </div>
              </div>

              <div className="bento-panel p-type">
                <div className="b-content">
                  <span className="t-large">Aa</span>
                  <div className="t-lines">
                    <div className="t-line"></div>
                    <div className="t-line short"></div>
                  </div>
                </div>
              </div>

              <div className="bento-panel p-grid">
                <div className="b-content">
                  <div className="g-dot"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'web',
    title: 'Web Design & Udvikling',
    shortTitle: 'Web Design & Udvikling',
    description: 'Jeg bygger digitale produkter, hjemmesider og web-apps, der kombinerer æstetisk design med en robust og skalerbar teknisk arkitektur.',
    skills: [
      ['Frontend Udvikling', 'Backend Systemer', 'CMS Integration'],
      ['Web Animationer', 'SEO',]
    ],
    animation: (
      <div className="animation-container web-anim-new">
        <AsciiGrid grid={ASCII_WEB} />
        <div className="scene-3d">
          <div className="tech-stack-wrapper">

            {/* Data Streams */}
            <div className="data-stream s1"><div className="packet"></div></div>
            <div className="data-stream s2"><div className="packet"></div></div>
            <div className="data-stream s3"><div className="packet"></div></div>

            {/* Top Layer: UI */}
            <div className="stack-layer layer-ui">
              <div className="layer-plane">
                <div className="ui-nav">
                  <div className="ui-logo"></div>
                  <div className="ui-links"><span></span><span></span></div>
                </div>
                <div className="ui-hero">
                  <div className="ui-text"></div>
                  <div className="ui-text short"></div>
                  <div className="ui-btn"></div>
                </div>
              </div>
              <div className="layer-label">
                <span className="tag">{'<FRONTEND />'}</span>
              </div>
            </div>

            {/* Middle Layer: API */}
            <div className="stack-layer layer-api">
              <div className="layer-plane">
                <div className="api-grid"></div>
                <div className="api-node n1"></div>
                <div className="api-node n2"></div>
                <div className="api-node n3"></div>
                <div className="api-node n4"></div>
                <svg className="api-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 20 20 L 80 50 L 30 80 L 50 40 Z" fill="none" stroke="#fd4d1e" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>
              <div className="layer-label">
                <span className="tag">{'SERVER_API'}</span>
              </div>
            </div>

            {/* Bottom Layer: DB */}
            <div className="stack-layer layer-db">
              <div className="layer-plane">
                <div className="db-container">
                  <div className="db-disk d1"></div>
                  <div className="db-disk d2"></div>
                  <div className="db-disk d3"></div>
                  <div className="db-core"></div>
                </div>
              </div>
              <div className="layer-label">
                <span className="tag">{'{DATABASE}'}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  },
  {
    id: 'motion',
    title: 'Graphic & Motion Design',
    shortTitle: 'Motion Systems',
    description: 'Jeg bruger bevægelse med et formål. Motion design, der leder blikket, skaber overblik og gør interaktionen til en oplevelse.',
    skills: [
      ['2D/3D Animation', 'Micro-interactions'],
      ['Lottie Animationer', 'WebGL', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container motion-anim">
        <AsciiGrid grid={ASCII_MOTION} />
        <div className="scene-3d">
          <div className="motion-dev-wrapper">
            <div className="floating-tag tag-ease">{'ease: "power3.out"'}</div>
            <div className="floating-tag tag-dur">{'duration: 2.5s'}</div>
            <div className="floating-tag tag-fps">{'fps: 60'}</div>

            <div className="software-3d">
              <div className="s-top-bar">
                <div className="s-dots"><span></span><span></span><span></span></div>
                <div className="s-title">Motion_Project.aep</div>
              </div>
              <div className="s-layout">
                <div className="s-viewport">
                  <div className="v-grid"></div>
                  <div className="v-path">
                    <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                      <path d="M 10 50 C 30 10, 70 10, 90 50" fill="none" stroke="#fd4d1e" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                  <div className="v-object">
                    <div className="v-cube">
                      <div className="face front"></div>
                      <div className="face back"></div>
                      <div className="face left"></div>
                      <div className="face right"></div>
                      <div className="face top"></div>
                      <div className="face bottom"></div>
                    </div>
                  </div>
                </div>
                <div className="s-timeline">
                  <div className="t-header">
                    <div className="t-playhead-top"></div>
                  </div>
                  <div className="t-tracks">
                    <div className="t-playhead-line"></div>
                    <div className="t-track">
                      <div className="t-keyframe k-1"></div>
                      <div className="t-keyframe k-2"></div>
                    </div>
                    <div className="t-track">
                      <div className="t-keyframe k-3"></div>
                      <div className="t-keyframe k-4"></div>
                    </div>
                    <div className="t-track">
                      <div className="t-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCardClass = (index: number) => {
    if (expandedIndex === null) return 'service-card default';
    if (expandedIndex === index) return 'service-card expanded';
    return 'service-card collapsed';
  };

  return (
    <section className={`services-grid ${expandedIndex !== null ? 'has-expanded' : ''}`} id="services">
      <div className="section-header">
        <div className="sh-label">
          <span>[ SERVICES & EXPERTISE ]</span>
        </div>
        <div className="sh-content">
          <h2>Digitalt Design Powerhouse</h2>
          <p>I løbet af de sidste fem år har jeg finpudset mine færdigheder inden for digitalt design. Jeg leverer løsninger af højeste kvalitet, hvor unikt design altid er det bærende formål.</p>
        </div>
      </div>

      <div className="cards-container">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} className={getCardClass(index)} onClick={() => toggleCard(index)}>
            <div className="card-inner">

              <div className="expanded-content">
                <div className="expanded-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="skills-list">
                    {service.skills.map((col, cIdx) => (
                      <ul key={cIdx}>
                        {col.map((skill, sIdx) => (
                          <li key={sIdx}>→ {skill}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animation-section">
                {service.animation}
                <div className="text-content default-title">
                  <h3>{service.title}</h3>
                </div>
              </div>

              <div className="collapsed-title">
                <span>{service.shortTitle}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

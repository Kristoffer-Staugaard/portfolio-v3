import { useState, useEffect } from "react";
import "../styles/LoadingScreen.scss";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    // Start exit animation after content has "loaded"
    const exitTimer = setTimeout(() => setPhase("exiting"), 2400);
    // Remove from DOM after exit animation completes
    const doneTimer = setTimeout(() => setPhase("done"), 3200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`loading-screen ${phase === "exiting" ? "exit" : ""}`}>
      {/* Scan line sweep */}
      <div className="loader-scanline" />

      {/* Ambient glow */}
      <div className="loader-glow" />

      {/* Center content */}
      <div className="loader-center">
        <div className="loader-text-wrapper">
          <span className="loader-text">Staugaard Studio</span>
          <span className="loader-cursor" />
        </div>

        {/* Progress bar */}
        <div className="loader-progress-track">
          <div className="loader-progress-fill" />
        </div>

        <span className="loader-status">INITIALIZING&hellip;</span>
      </div>

      {/* Corner decorations */}
      <div className="loader-corner top-left" />
      <div className="loader-corner top-right" />
      <div className="loader-corner bottom-left" />
      <div className="loader-corner bottom-right" />
    </div>
  );
}

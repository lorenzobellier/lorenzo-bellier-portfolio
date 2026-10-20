import { useState, useEffect } from "react";
import { THEMES } from "./data/themes";
import { Nav, ThemeSwitcher } from "./components/Nav";
import { Particles } from "./components/UI";
import HomeSection    from "./components/HomeSection";
import AboutSection   from "./components/AboutSection";
import DiplomasSection from "./components/DiplomasSection";
import SkillsSection  from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import VeilleSection  from "./components/VeilleSection";
import BtsSection from "./components/BtsSection";
import EpreuveSection from "./components/EpreuveSection";
import PortfolioMobile from "./portfolio-mobile.jsx"; // Import du fichier mobile
import "./index.css";

export default function App() {
  const validSections = ["home", "about", "diplomes", "skills", "projets", "veille", "bts", "epreuve", "contact"];
  const readInitial = (key, fallback, allowed) => {
    try {
      const fromHash = key === "section" ? window.location.hash.replace(/^#/, "") : "";
      const saved = window.localStorage.getItem(`portfolio-${key}`);
      const value = fromHash || saved;
      return value && (!allowed || allowed.includes(value)) ? value : fallback;
    } catch { return fallback; }
  };
  const [theme, setTheme] = useState(() => readInitial("theme", "japon", Object.keys(THEMES)));
  const [section, setSectionState] = useState(() => readInitial("section", "home", validSections));
  const setSection = (next) => {
    setSectionState(next);
    try {
      window.localStorage.setItem("portfolio-section", next);
      if (window.location.hash !== `#${next}`) window.history.replaceState(null, "", `#${next}`);
    } catch { /* stockage indisponible : la navigation reste fonctionnelle */ }
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const t = THEMES[theme];

  // Détection dynamique de la taille de l'écran
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTheme = (k) => {
    setTheme(k);
    try { window.localStorage.setItem("portfolio-theme", k); } catch { /* stockage facultatif */ }
  };

  // --- RENDU MOBILE ---
  if (isMobile) {
    return <PortfolioMobile theme={theme} setTheme={handleTheme} />;
  }

  // --- RENDU DESKTOP ---
  const renderSection = () => {
    switch (section) {
      case "about":    return <AboutSection    theme={theme} />;
      case "diplomes": return <DiplomasSection theme={theme} />;
      case "skills":   return <SkillsSection   theme={theme} />;
      case "projets":  return <ProjectsSection theme={theme} />;
      case "veille":   return <VeilleSection   theme={theme} />;
      case "bts":      return <BtsSection      theme={theme} />;
      case "epreuve":  return <EpreuveSection  theme={theme} />;
      case "contact":  return <ContactSection  theme={theme} />;
      default:         return <HomeSection theme={theme} setSection={setSection} />;
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:t.bg, transition:"background 0.8s ease", position:"relative", overflowX:"hidden" }}>
      <Particles theme={theme} />
      <Nav active={theme} setSection={setSection} />
      <ThemeSwitcher active={theme} setActive={handleTheme} />
      <main style={{ position:"relative", zIndex:1 }}>
        {renderSection()}
      </main>
      <footer style={{ textAlign:"center", padding:"15px", fontFamily:"'Noto Serif JP',serif", fontSize:"0.68rem", color:"#ffffff18", borderTop:`1px solid ${t.color}10`, position:"relative", zIndex:1 }}>
        Lorenzo Bellier · {new Date().getFullYear()} · {t.name}
      </footer>
    </div>
  );
}

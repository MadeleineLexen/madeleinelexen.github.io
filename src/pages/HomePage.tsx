import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./styles/HomePage.css";
import HeroContent from "./HeroContent";
import ProjectSection from "./ProjectSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Instantly jump to projects section if hash is present
    if (location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Madeleine Lexén | UX Designer</title>
        <meta name="description" content="UX designer specializing in complex B2B systems and data-heavy tools. Case studies in decision support, revenue optimization, and operational UX." />
      </Helmet>
      <div className="homepage page-transition">
        <div className="page-container">
          <section id="hero">
            <HeroContent />
          </section>
          <section id="projects">
            <ProjectSection />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;

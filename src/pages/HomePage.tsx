import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

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
    <div className="homepage">
      <Container className="page-container">
        <section id="hero">
          <HeroContent />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
      </Container>
    </div>
  );
};

export default HomePage;

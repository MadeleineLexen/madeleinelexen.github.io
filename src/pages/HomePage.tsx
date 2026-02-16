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

/*
 <Row className="g-5">
              <Col md={6} lg={4} className="mb-4">
                <ProjectCard
                  title="Project 1"
                  description="Description for project 1."
                  image={masterThesis}
                  stack={["Figma", "Sketch"]}
                  link="https://example.com/project1"
                />
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <ProjectCard
                  title="Project 2"
                  description="Description for project 2."
                  image={masterThesis}
                  stack={["React", "Bootstrap"]}
                  link="https://example.com/project2"
                />
              </Col>
              <Col md={6} lg={4} className="mb-4">
                <ProjectCard
                  title="Project 3"
                  description="Description for project 3."
                  image={masterThesis}
                  stack={["JavaScript", "CSS"]}
                  link="https://example.com/project3"
                />
              </Col>
            </Row>
            */

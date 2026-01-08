import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import "./styles/HomePage.css";
import HeroContent from "./HeroContent";
import ProjectSection from "./ProjectSection";
import { About } from "./About";
import useScrollSectionHash from "../components/Hooks/UseScrollSectionHash";

const sectionIds = ["hero", "projects", "about"];

const HomePage = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Mark that initial mount/restoration is complete after delay
    const timer = setTimeout(() => {
      isInitialMount.current = false;
    }, 400);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Don't scroll during initial mount - let browser handle scroll restoration
    if (isInitialMount.current) return;
    
    // Only scroll to hash for fresh navigation with hash
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [location]);

  useScrollSectionHash(sectionIds, 200);

  return (
    <div className="homepage">
      <Container className="page-container">
        <section id="hero">
          <HeroContent />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="about">
          <About />
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

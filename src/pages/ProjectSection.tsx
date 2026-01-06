import React from "react";
import PausePalCardImage from "../assets/PausePal/PausePalCardImage.png";
import Hero from "../assets/PausePal/PausePal-Hero.png";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";
import masterThesis from "../assets/MasterThesis/MasterThesisCardWhite.png";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/ProjectSection.css";
import ProjectCardNew from "../components/ProjectCardNew";


const projects: ProjectCardProps[] = [
  {
    title: "PausePal - A Chrome Extension for Healthier Workdays",
    description:
      "A complete redesign of a mobile app to improve user experience and increase engagement.",
    image: PausePalCardImage,
    stack: [
      "Figma",
      "Illustration",
      "Prototyping",
      "User Testing",
      "Sketching",
    ],
    link: "pausepal",
  },
  {
    title: "Master Thesis - Maritime coordination centre",
    description:
      "Optimized the user journey for an e-commerce website to increase conversion rates and ease of navigation.",
    image: masterThesis,
    stack: [
      "Figma",
      "Illustration",
      "Prototyping",
      "User Testing",
      "Sketching",
    ],
    link: "masterthesis",
  },
  {
    title: "Dashboard for Analytics Tool",
    description:
      "Designed an intuitive dashboard for an analytics tool, focusing on data visualization and user control.",
    image: masterThesis,
    stack: ["Figma", "Adobe XD", "D3.js", "HTML", "CSS"],
    link: "project3",
  },
  {
    title: "User Research for a SaaS Product",
    description:
      "Conducted user research and usability testing to improve the design of a SaaS product.",
    image: masterThesis,
    stack: ["Figma", "UsabilityHub", "UserTesting", "Surveys"],
    link: "project4",
  },
];

const ProjectSection = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <Container>
        <Row className="gx-5 gy-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                stack={project.stack}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {/*
      <Container>
        <Row className="gx-5 gy-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <ProjectCardFlow
                title={project.title}
                image={project.image}
                skills={project.stack}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
      */}
      
      <h2 style={{ marginTop: '4rem' }}>New Card Style</h2>
      <Container>
        <Row className="gx-2 justify-content-center" style={{ rowGap: '6rem' }}>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={6} className="mb-4 d-flex justify-content-center">
              <ProjectCardNew
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.stack}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;

import React from "react";
import PausePalCardImage from "../assets/PausePal/PausePalCardImage.png";
import masterTheisCardImage from "../assets/MasterThesis/MasterThesisCardImage.png";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/ProjectSection.css";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";


const projects: ProjectCardProps[] = [
  {
    title: "PausePal",
    description:
      "A Chrome Extension for Healthier Workdays",
    image: PausePalCardImage,
    stack: [
      "Figma",
      "Illustration",
      "UI design",
      "UX research",
    ],
    link: "pausepal",
  },
  {
    title: "Master thesis",
    description:
      "Designing for a maritime coordination centre",
    image: masterTheisCardImage,
    stack: [
      "Litterature review",
      "UI design",
      "UX research",
      "Sketching",
    ],
    link: "masterthesis",
  },
];

const ProjectSection = () => {
  return (
    <section className="projects">
      <h2 className="section-heading">Projects</h2>
      <Container>
        <Row className="gx-2 justify-content-center" style={{ rowGap: '6rem' }}>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={6} className="mb-4 d-flex justify-content-center">
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
    </section>
  );
};

export default ProjectSection;

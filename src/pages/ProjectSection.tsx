import React from "react";
import PausePalCardImage from "../assets/PausePal/PausePalCardImage.png";
import OverbookingCardImage from "../assets/Overbooking/OverbookingCardImage.png";
import masterTheisCardImage from "../assets/MasterThesis/MasterThesisCardImage.png";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/ProjectSection.css";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";


const projects: ProjectCardProps[] = [
  {
    title: "Automatic overbooking model",
    description:
      "Designing trust in automated decisions",
    image: OverbookingCardImage,
    stack: [
      "Product Design",
      "UX Research",
      "Decision support",
      "Automation UX"
    ],
    link: "projects/automatic-overbooking"
  }, {
    title: "PausePal",
    description: "Exploring how product design can support lasting behaviour change",
    image: PausePalCardImage,
    stack: [
      "Product Design",
      "UX Research",
      "Behaviour Change",
      "Interaction Design"
    ],
    link: "projects/pausepal",
  },
  {
    title: "Master thesis",
    description:
      "Designing information systems for high-pressure coordination environments",
    image: masterTheisCardImage,
    stack: [
      "UX Research",
      "Systems Thinking",
      "Interaction Design",
      "Information Architecture"
    ],
    link: "projects/masterthesis",
  },
];

const ProjectSection = () => {
  return (
    <section className="projects page-transition">
      <h2 className="section-heading">PROJECTS</h2>
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

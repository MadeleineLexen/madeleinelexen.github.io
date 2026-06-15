import React from "react";
import PausePalCardImage from "../assets/PausePal/PausePalCardImage.png";
import masterTheisCardImage from "../assets/MasterThesis/MasterThesisCardImage.png";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/ProjectSection.css";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";


const projects: ProjectCardProps[] = [
  {
    title: "Automatic overbooking model",
    description:
      "Designing trust in an automated decision-support system",
    image: PausePalCardImage,
    stack: [
      "Product Design",
      "UX Research",
      "User Testing",
      "Automation UX"
    ],
    link: "projects/automatic-overbooking"
  }, {
    title: "PausePal",
    description: "Exploring how design can encourage healthier workday routines",
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
      "Exploring how interface design supports coordination and situational awareness",
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

import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles/ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  stack,
  link,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="project-card" onClick={() => navigate(link)}>
      <Card.Img
        variant="top"
        src={image}
        className="project-image"
        alt={title}
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <div className="stack-tags">
          {stack.map((tech, index) => (
            <Badge key={index} className="stack-badge">
              {tech}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

//genererat av chatgpt, inte kollat hur de ser ut än

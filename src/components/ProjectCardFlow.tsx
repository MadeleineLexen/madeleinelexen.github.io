import React from "react";
import "./styles/ProjectCardFlow.css";
import { useNavigate } from "react-router-dom";

export interface ProjectCardFlowProps {
  image: string;
  title: string;
  skills: string[];
  link: string;
}

const ProjectCardFlow: React.FC<ProjectCardFlowProps> = ({
  image,
  title,
  skills,
  link,
}) => {
  const navigate = useNavigate();

  return (
    <div className="project-card-flow" onClick={() => navigate(link)}>
      <div className="card-line top" />
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <div className="card-skills">
        {skills.map((skill, idx) => (
          <span className="card-skill" key={idx}>
            {skill}
          </span>
        ))}
      </div>
      <div className="card-line bottom" />
    </div>
  );
};
export default ProjectCardFlow;

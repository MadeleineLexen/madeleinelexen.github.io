import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}



const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link to={`/${props.link}`} className="project-card-new">
      <div className="project-card-new-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-card-new-content">
        <h3 className="project-card-new-title">{props.title}</h3>
        <p className="project-card-new-description">{props.description}</p>
        <div className="project-card-new-tags">
          {props.stack.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};



export default ProjectCard;

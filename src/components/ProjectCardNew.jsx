import PropTypes from "prop-types";
import "./styles/ProjectCardNew.css";

const ProjectCardNew = ({ image, title, description, tags }) => {
  return (
    <div className="project-card-new">
      <div className="project-card-new-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-new-content">
        <h3 className="project-card-new-title">{title}</h3>
        <p className="project-card-new-description">{description}</p>
        <div className="project-card-new-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCardNew.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCardNew;

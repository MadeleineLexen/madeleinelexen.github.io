import PropTypes from "prop-types";
import "./styles/ProjectTopSection.css";

const ProjectTopSection = ({ title, description, info }) => (
  <div className="project-top-section">

    
    <div className="project-top-section-left">
      <h2 className="project-title">{"Background"}</h2>
      <div className="project-desc-row">
        <div className="project-description">
          <p>{description}</p>
        </div>
        <div className="project-top-section-right">
          <div className="project-info-list">
            <div>
              <strong>Client</strong>
              <br />
              {info.client}
            </div>
            <div>
              <strong>My Role</strong>
              <br />
              {info.role}
            </div>
            <div>
              <strong>Team</strong>
              <br />
              {info.team}
            </div>
            <div>
              <strong>Timeline</strong>
              <br />
              {info.timeline}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProjectTopSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  info: PropTypes.shape({
    client: PropTypes.string,
    role: PropTypes.string,
    team: PropTypes.string,
    timeline: PropTypes.string,
  }).isRequired,
};

export default ProjectTopSection;
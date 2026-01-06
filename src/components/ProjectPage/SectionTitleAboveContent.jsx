import PropTypes from "prop-types";
import "./styles/SectionTitleAboveContent.css";

const SectionTitleAboveContent = ({ title, children }) => (
  <div className="project-section-container">
    <div className="section-title-above">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  </div>
);

SectionTitleAboveContent.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node
};

export default SectionTitleAboveContent;
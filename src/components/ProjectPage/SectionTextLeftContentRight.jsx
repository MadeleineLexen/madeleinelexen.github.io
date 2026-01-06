import PropTypes from "prop-types";
import "./styles/SectionTextLeftContentRight.css";

const SectionTextLeftContentRight = ({ title, left, right }) => (
  <div className="project-section-container">
    <div className="section-text-left-content-right">
      <h2>{title}</h2>
      <div className="section-content-row">
        <div className="section-left">
          {left}
        </div>
        <div className="section-right">
          {right}
        </div>
      </div>
    </div>
  </div>
);

SectionTextLeftContentRight.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.node,
  right: PropTypes.node,
};

export default SectionTextLeftContentRight;
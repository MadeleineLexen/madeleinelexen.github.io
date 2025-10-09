import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SectionTitleAboveContent = ({ title, children }) => (
  <Row className="mb-5">
    <Col lg={4}>
      <h2>{title}</h2>
    </Col>
    <Col lg={8}>
      {children}
    </Col>
  </Row>
);

SectionTitleAboveContent.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node
};

export default SectionTitleAboveContent;
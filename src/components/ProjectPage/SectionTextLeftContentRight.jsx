import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SectionTextLeftContentRight = ({ left, right }) => (
  <Row className="align-items-center mb-5">
    <Col lg={4}>
      {left}
    </Col>
    <Col lg={8}>
      {right}
    </Col>
  </Row>
);

SectionTextLeftContentRight.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default SectionTextLeftContentRight;
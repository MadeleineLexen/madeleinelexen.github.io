import { Container, Row, Col } from "react-bootstrap";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <Container fluid="md">
        <Row className="align-items-center">
          <Col sm={6} className="d-flex justify-content-center">
            <p className="mb-0 text-center">© {year} Designed by Madeleine Lexén</p>
          </Col>
          <Col sm={6} className="d-flex justify-content-center">
            <div className="d-flex align-items-center">
              <p className="me-4 mb-0 text-center">madeleine.lexen@gmail.com</p>
              <a
                href="https://www.linkedin.com/madeleinelexen"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
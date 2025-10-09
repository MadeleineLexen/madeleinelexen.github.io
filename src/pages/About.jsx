import { Col, Container, Row } from "react-bootstrap";
import polaroid from '../assets/polaroid.png';
import "./styles/About.css";

export const About = () => {
  return (
    <section className="about-page">
      <Container fluid="md">
        <h2>About me</h2>
        <Row className="align-items-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <img
              src={polaroid}
              alt="Madeleine, UX designer from Gothenburg"
              className="img-fluid"
            />
          </Col>
          <Col lg={8}>
            <p>
              I’m a UX designer passionate about creating intuitive, user-centered digital experiences. With a background in software engineering and interaction design, I bridge the gap between technology and people to design solutions that truly work.
            </p>
            <p>
              When I’m not working I like to experience things with my friends, go to concerts and events, or just hang out. Books have always been a big part of my life, and I spend a lot of my free time curled up on my sofa with a cup of tea and a book.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

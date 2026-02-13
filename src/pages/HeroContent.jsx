import { Container, Row, Col } from "react-bootstrap";
import './styles/HeroContent.css';

const HeroContent = () => {
  return (
    <Container fluid className="hero-content">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <section className="hero">
            <div className="hero-content">

              <h1 className="titan-one-regular">Hi, I&apos;m Madeleine</h1>
              <p className="hero-subheading">
UX designer shaping data-driven products people can trust.

I work at the intersection of complex systems and everyday experience, turning algorithms and data into intuitive, transparent interactions.              </p>

            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroContent;


//Test sida genererad av chatgpt, inte kollat hur den ser ut än, det blev galet när jag stoppade in den på homepagen<<<<<<
import { Container, Row, Col } from "react-bootstrap";
import './styles/HeroContent.css';

const HeroContent = () => {
  return (
    <Container fluid className="hero-content">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <section className="hero">
            <div className="hero-content">

              <h1 className="hero-heading">Hi, I&apos;m Madeleine</h1>
              <p className="hero-subheading">
                A UX designer with with a coding background. My goal is to make things that delight, and I believe that if you have fun at work, it will show through in the end product.
              </p>

            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroContent;


//Test sida genererad av chatgpt, inte kollat hur den ser ut än, det blev galet när jag stoppade in den på homepagen<<<<<<
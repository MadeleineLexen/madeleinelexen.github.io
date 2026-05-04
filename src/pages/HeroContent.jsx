import './styles/HeroContent.css';
import ClarifyingHeadline from '../components/ClarifyingHeadline';

const HeroContent = () => {
  return (
    <section className="hero hero-left">
      <div className="hero-content hero-content-left">
        <h1 className="hero-heading left">Hi, I&apos;m Madeleine,</h1>
        <h1 className="hero-heading left">
          <ClarifyingHeadline 
            before="Desgiingn clrtaiy " 
            after="Designing clarity "
          /> for data-driven products people can trust.
        </h1>
        <p className="hero-subheading left">
          Nice of you to look in. This is a space where I share a bit of my work and thoughts on design, data, and the human experience.
        </p>
      </div>
    </section>
  );
};

export default HeroContent;
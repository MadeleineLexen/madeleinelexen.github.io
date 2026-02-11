import "./styles/About.css";
import picture from '../assets/ProfilePictures/Portfolio-profile-picture.png';

export const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              src={picture}
              alt="Madeleine, UX designer from Gothenburg"
            />
          </div>
          <div className="about-text">
            <h2 className="about-heading">About me</h2>
            <p>
              I’m a UX designer who cares deeply about people and how they experience technology. With a background in software engineering and interaction design, I enjoy working at the intersection of logic and empathy to design digital experiences that feel intuitive, thoughtful, and human.

              I’m motivated by curiosity and a drive to understand users, ask better questions, and create solutions that make a difference.
            </p>
            <p>
              When I’m not designing, you’ll most likely find me at a concert, spending time with friends, or curled up on the sofa with a book and a cup of tea.            
              </p>
            <h3>Education</h3>
            <ul>
              <li>
                MSc. in Interaction Design, Chalmers University of Technology
              </li>
              <li>
                BSc.in Software Engineering, Chalmers University of Technology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

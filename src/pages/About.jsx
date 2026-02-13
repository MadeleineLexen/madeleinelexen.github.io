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
             I’m a UX designer with a background in software engineering, currently working with complex, data-heavy systems. I’m drawn to the space where technology, human behavior, and trust meet — especially when something complicated needs to become clear and usable for the people relying on it.

In my work, I often find myself stepping into ambiguity and helping shape it into something more structured. That might mean clarifying what problem we’re actually solving, aligning a team around a shared goal, or designing flows that hold up beyond the ideal “happy path.” My technical foundation helps me understand constraints and edge cases, but I’m equally attentive to how a system feels from the user’s side, particularly when algorithms or data models risk becoming a black box.

What motivates me most is seeing a product genuinely support someone in their everyday work or routine. I care about reducing friction, building confidence in complex systems, and creating experiences that feel reliable rather than overwhelming.
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

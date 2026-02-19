import "./styles/About.css";
import picture from '../assets/ProfilePictures/Portfolio-profile-picture.png';

import React from "react";

// Calculate Duolingo streak based on today's date
const startValue = 1630;
const startDate = new Date("2026-02-19T00:00:00Z");
const now = new Date();
const daysElapsed = Math.floor((now.setHours(0, 0, 0, 0) - startDate.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24));
const duoStreak = startValue + daysElapsed;

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
            <h1 className={"about-heading"}>About me</h1>
            <p>
              I'm a UX designer with a background in software engineering, currently working with complex, data-heavy systems. I like working where technology, human behavior, and trust meet, especially when something complicated needs to become clear and usable for the people relying on it.
            </p>
            <p>
              Most problems are messy in some way, which is why it's important to structure and define problems.  That might mean clarifying what problem we’re actually solving, aligning a team around a shared goal, or designing flows that hold up beyond the ideal “happy path”. My technical foundation helps me understand constraints and edge cases, but I’m equally attentive to how a system feels from the user’s side, particularly when algorithms or data models risk becoming a black box.
            </p>
            <p>
              What motivates me most is seeing a product genuinely support someone in their everyday work or routine. I care about reducing friction, building confidence in complex systems, and creating experiences that feel reliable rather than overwhelming.
            </p>
            <p>
              When I'm not designing, you'll most likely find me at a concert, spending time with friends, or curled up on the sofa with a book and a cup of tea, trying to knit. I’ve also developed a slightly stubborn attachment to my Duolingo streak (currently at {duoStreak} days and counting). Turns out well-designed habit systems really do work.
            </p>
            <h2>Education</h2>
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

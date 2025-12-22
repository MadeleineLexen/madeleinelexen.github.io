import React from "react";
import "./styles/Footer2.css";
import WaveFooter from "../assets/Wave-footer.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import GitHubIcon from "../assets/github-icon.svg";

const UxFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ux-footer">
      <img src={WaveFooter} alt="" className="footer-wave" />

  

      <div className="ux-footer-content">
        <p>© {year} Madeleine Lexén. Designed with &lt;3</p>
        
        <div className="ux-footer-social-icons">
          <a
            href="https://www.linkedin.com/in/madeleinelexen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/madeleinelexen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default UxFooter;

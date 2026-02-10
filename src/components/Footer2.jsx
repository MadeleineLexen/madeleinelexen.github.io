import React from "react";
import "./styles/Footer2.css";
import LinkedInIcon from "../assets/Socials/linkedin-icon.svg";
import GitHubIcon from "../assets/Socials/github-icon.svg";

const UxFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ux-footer">
      <svg className="footer-wave" viewBox="0 0 8031 1519" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M8031 0H0C0 0 603 532.146 1391 613.592C2182.5 721.021 2852.5 417.223 3792 441.207C5090 464.191 5628.5 962.86 6681 1177.72L6701.22 1179.93C7277.54 1243.08 7623.25 1280.95 8031 1200V0Z" fill="var(--bg-primary)"/>
        <path d="M0 1519 L8031 1519 L8031 1200 C7623.25 1280.95 7277.54 1243.08 6701.22 1179.93 L6681 1177.72 C5628.5 962.86 5090 464.191 3792 441.207 C2852.5 417.223 2182.5 721.021 1391 613.592 C603 532.146 0 0 0 0 Z" fill="var(--bg-footer)"/>
      </svg>

  

      <div className="ux-footer-content">
        <p>© {year} Madeleine Lexén. Designed with &lt;3</p>
        <p> This website was built by me using react, and a little help from github copilot.</p>
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

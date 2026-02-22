import "./styles/Menu.css";
import "./styles/MenuDarkOverrides.css";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/LOGO.svg?react";
import { DarkModeToggle } from "./DarkModeToggle";



function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleProjectsClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = "#projects";
      }
    }
    setExpanded(false); // close menu after click
  };

  const handleNavClick = () => {
    setExpanded(false); // close menu after any nav click
  };

  return (
    <div className="nav-sticky">
      <Navbar
        className="nav-background"
        expand="md"
        variant="light"
        sticky="top"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
          <Logo className="logo" aria-label="Home" />
        </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse
          style={{ justifyContent: "flex-end" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Link className="nav-link" to="/#projects" aria-label="View my UX design projects" onClick={handleProjectsClick}>PROJECTS</Link>
            <Link className="nav-link" to="/about" aria-label="Read about Madeleine" onClick={handleNavClick}>ABOUT</Link>
            <Link className="nav-link" to="/contact" aria-label="Contact Madeleine" onClick={handleNavClick}>CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
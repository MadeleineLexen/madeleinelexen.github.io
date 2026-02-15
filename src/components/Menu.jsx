import "./styles/Menu.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg?react";
import { DarkModeToggle } from "./DarkModeToggle";


function Menu() {
  return (
    <div className="nav-sticky">
      <Navbar
        className="nav-background"
        expand="md"
        variant="light"
        sticky="top"
      >
        <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
          <Logo className="logo" aria-label="Home" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "flex-end" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Link className="nav-link" to="/#projects" aria-label="View my UX design projects">PROJECTS</Link>
            <Link className="nav-link" to="/about" aria-label="Read about Madeleine">ABOUT</Link>
            <Link className="nav-link" to="/contact" aria-label="Contact Madeleine">CONTACT</Link>
           <DarkModeToggle />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
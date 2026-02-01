import "./styles/Menu.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Chatgpt-logo.png";


function Menu() {
  return (
    <div className="nav-sticky">
      <Navbar
        className="nav-background"
        expand="md"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "flex-end" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Link className="nav-link" to="/#projects" aria-label="View my UX design projects">PROJECTS</Link>
            <Link className="nav-link" to="/about" aria-label="Read about Madeleine">ABOUT</Link>
            <Link className="nav-link" to="/contact" aria-label="Contact Madeleine">CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;


/*
  <Nav className="ml-auto">
            <NavLink className="nav-link" to={"/projects"} aria-label="View my UX design projects">Projects</NavLink>

            <NavLink className="nav-link" to={"/about"} aria-label="Read about Madeleine">About</NavLink>

            <NavLink className="nav-link" to={"/contact"} aria-label="Find out how to contact Madeleine">Contact</NavLink>
          </Nav>
          */
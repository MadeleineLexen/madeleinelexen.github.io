import "./styles/Menu.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Chatgpt-logo.png";


function Menu() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const currentHash = location.hash;

  return (
    <div className="nav-sticky">
      <Navbar
        className="nav-background"
        expand="md"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand>
          {isHome ? (
            <a href="#hero">
              <img className="logo" src={logo} alt="" />
            </a>
          ) : (
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "flex-end" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            {isHome ? (
              <>
                <a className={`nav-link ${currentHash === '#projects' ? 'active' : ''}`} href="#projects" aria-label="View my UX design projects">PROJECTS</a>
                <a className={`nav-link ${currentHash === '#about' ? 'active' : ''}`} href="#about" aria-label="Read about Madeleine">ABOUT</a>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/#projects" aria-label="View my UX design projects">PROJECTS</Link>
                <Link className="nav-link" to="/#about" aria-label="Read about Madeleine">ABOUT</Link>
              </>
            )}
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
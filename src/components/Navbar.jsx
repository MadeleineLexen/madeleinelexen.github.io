import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";
import logo from "../assets/Logo.svg";
import menuIcon from "../assets/hamburger.svg";
import close from "../assets/times.svg";

export const Navbar = () => {
  return (
    <nav>
      <span>
      <Link to={"/"}>
      <img src={logo} alt=""></img>
      </Link>
      </span>
      <img src={menuIcon} alt="" className="nav-mob-open"></img>
      <ul className="nav-menu">
        <img src={close} alt="" className="nav-mob-close"></img>
        <li>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

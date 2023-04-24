import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";

const navLinks = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/",
  },
  {
    title: "MENU",
    path: "/",
  },
  {
    title: "RESERVATION",
    path: "/",
  },
  {
    title: "ONLINE ORDER",
    path: "/",
  },
  {
    title: "LOGIN",
    path: "/",
  },
];

function Navbar() {
  const [active, setActive] = React.useState(false);

  return (
    <nav className="navbar">
      <img src={Logo}></img>
      <ul className={`navbarNav ${active && "active"}`}>
        {navLinks.map((links, index) => (
          <NavItem
            key={index}
            something={links.title}
            title={links.title}
            path={links.path}
          />
        ))}
      </ul>
      <div className="hamburgerIcon" onClick={() => setActive(!active)}></div>
    </nav>
  );
}

function NavItem({ title, path, something }) {
  return (
    <li className={`navItem ${something}`}>
      <a href={path}>{title}</a>
    </li>
  );
}

export default Navbar;

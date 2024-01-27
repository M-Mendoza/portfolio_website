import React from "react";
import NavLinks from "./NavLinks";
import Menu from "../../img/menu.png";
import "./navbar.css";

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="nav-bar">
      <div className="menu-icon">
        <img src={Menu} alt="" />
      </div>
      <div className="nav-links">
        <NavLinks links={links} />
      </div>
    </div>
  );
};

export default Navbar;

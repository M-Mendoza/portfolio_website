import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div>
      {props.links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;

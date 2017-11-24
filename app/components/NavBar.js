import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="school-header">
        <NavLink to="/campuses">
          <button className="btn-lg btn-outline-success btn-header">Houses</button>
        </NavLink>
        <NavLink to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/1200px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="logo" />
        </NavLink>
        <NavLink to="/students">
          <button className="btn-lg btn-outline-warning btn-header">Wizards</button>
        </NavLink>
    </header>
  )
}

export default NavBar;

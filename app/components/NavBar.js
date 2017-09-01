import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header className="school">
      <center>
        <NavLink to="/campuses">
          <button type="button" className="btn btn-outline-success">Houses</button>
        </NavLink>
        <NavLink to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/1200px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="logo" />
        </NavLink>
        <NavLink to="/students">
          <button type="button" className="btn btn-outline-warning">Wizards</button>
        </NavLink>
      </center>
    </header>
  )
}

export default NavBar;

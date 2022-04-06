import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from "react-router-dom";
import CodeIcon from '@mui/icons-material/Code';

function NavBar() {
  return (
    <header class="navbar">
      <div className="page-wrap navbar__container">
        <div className="navbar__logo">
          <NavLink end to="/">
            <CodeIcon />
          </NavLink>
        </div>
        <nav>
          <NavLink end to="/projects">
            PROJECTS
          </NavLink>
          <NavLink end to="/about">
            ABOUT
          </NavLink>
          <NavLink end to="/contact">
            CONTACT
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="kyb-nav-wrapper">
      <nav className="kyb-nav-cont">
        <ul>
          <li>
            <NavLink  to='/about'><span>A</span>bout</NavLink>
          </li>
          <li>
            <NavLink  to='/skills'><span>S</span>kills</NavLink>
          </li>
          <li>
            <NavLink  to='/works'><span>W</span>orks</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
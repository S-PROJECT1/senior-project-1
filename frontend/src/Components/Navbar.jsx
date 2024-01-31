import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        {/* <li onClick={() => props.switchView('Home')}>Home</li>
        <li onClick={() => props.switchView('About')}>About</li>
        <li onClick={() => props.switchView('Contact')}>Contact</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
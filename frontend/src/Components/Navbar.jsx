// Navbar.jsx

import React from 'react';
import './Navbar.css';
import SearchComponent from './SearchComponent'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='a'><SearchComponent /></div>
    </nav>
  );
};

export default Navbar;

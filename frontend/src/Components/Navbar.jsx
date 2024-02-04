import React from 'react';
import '../css/Navbar.css';
import SearchComponent from './SearchComponent';
import logo from './Assets/logo.png'
const Navbar = ({ view }) => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo}/>
      {view !== 'Login' && view !== 'Register' && (
        <ul className="nav-links">
          <SearchComponent />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

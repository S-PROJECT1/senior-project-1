import React from 'react';
import '../css/Navbar.css';
import SearchComponent from './SearchComponent';

const Navbar = ({ view }) => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      {view !== 'Login' && view !== 'Register' && (
        <ul className="nav-links">
          <SearchComponent />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

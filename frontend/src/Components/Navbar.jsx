import React from 'react';
import '../css/Navbar.css';
import SearchComponent from './SearchComponent';

const Navbar = ({ view }) => {
  return (
    <div className="stic">
      <div className="Header">
        <nav className="navbar">
          <div className="logo">Your Logo</div>
          {view !== 'Login' && (
            <ul className="nav-links">
              <SearchComponent />
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

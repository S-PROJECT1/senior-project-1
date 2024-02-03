
import '../css/Navbar.css';
import SearchComponent from './SearchComponent';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your  Logo</div>
      <ul className="nav-links">
        <SearchComponent/>
      </ul>
    </nav>
  );
};

export default Navbar;

import './App.css';
import React, { useState } from 'react';
import Handiwork from './Components/HandiWork.jsx';
import HandMade from './Components/HandMade.jsx';
import Navbar from './Components/Navbar.jsx';
import { FaTools, FaHandPaper } from 'react-icons/fa';
import { AiFillHome, AiFillPhone, AiFillPlusCircle } from "react-icons/ai";

function App() {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Home');

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
    setMenuView(false);
  };

  return (
    <div>
      <Navbar switchView={switchView} />
      <div className={`sidebar ${menuView ? 'active' : ''}`}>
        <div className="katha" onClick={toggleMenu}>
          ☰
        </div>
        <span className="items" onClick={() => switchView('Home')}>
          <AiFillHome className="icon" /> Home
        </span>
        <span className="items" onClick={() => switchView('Handiwork')}>
          <FaTools className="icon" /> Handiwork
        </span>
        <span className="items" onClick={() => switchView('HandMade')}>
          <FaHandPaper className="icon" /> HandMade
        </span>

        <span className="items" onClick={() => switchView('About')}>
          <AiFillPhone className="icon" /> About
        </span>
        <span className="items" onClick={() => switchView('Contact')}>
          <AiFillPlusCircle className="icon" /> Contact
        </span>
      </div>

      <div className={`container ${menuView ? 'active' : ''}`}>
        {/* <Slider /> */}
        {view === 'Handiwork' && <Handiwork />}
        {view === 'HandMade' && <HandMade />}

      </div>
    </div>
  );
}

export default App;

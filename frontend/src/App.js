// App.js

import './App.css';
import React, { useState } from 'react';
import Handiwork from './Components/HandiWork.jsx';
import HandMade from './Components/HandMade.jsx';
import Navbar from './Components/Navbar.jsx';
import { FaTools, FaHandPaper } from 'react-icons/fa';
import  Footer from './Components/Footer';

function App() {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Products');

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
    setMenuView(false); // Close the sidebar when switching views
  };

  return (
    <div>
      <Navbar />
      <div className={`sidebar ${menuView ? 'active' : ''}`}>
        <div className="katha" onClick={toggleMenu}>
          ☰
        </div>
        <span className="items" onClick={() => switchView('Handiwork')}>
          <FaTools className="icon" /> Handiwork
        </span>
        <span className="items" onClick={() => switchView('HandMade')}>
          <FaHandPaper className="icon" /> HandMade
        </span>
      </div>

      <div className={`container ${menuView ? 'active' : ''}`}>
        {view === 'Handiwork' && <Handiwork />}
        {view === 'HandMade' && <HandMade />}
        <Footer/>
      </div>
    </div>
  );
}

export default App;

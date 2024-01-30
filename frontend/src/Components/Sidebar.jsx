// import React from "react";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import Navbar from '../css/Navbar.css'
// export const Sidebar = [
//     {
//         title: 'Home',
//         path: '/',
//         icon: <AiIcons.AiFillHome />,
//         cName: 'nav-text'
//       },
//       {
//         title:'Hand Maid',
//         path:'/HandMaid',
//         cName:'nav-text'
//       },
//       {
//         title:'Handi Work',
//         path:'/HandiWork',
//         cName:'nav-text'
//       },
//       {
//         title: 'Contact US',
//         path: '/ContactUs',
//         icon: <FaIcons.FaEnvelopeOpenText />,
//         cName: 'nav-text'
//       },
//       {
//         title: 'About US',
//         path: '/AboutUS',
//         icon: <IoIcons.IoMdHelpCircle />,
//         cName: 'nav-text'
//       },
     

// ]



<div className="nav">
        
        <span className="items" onClick={() => switchView('Handiwork')}>
          Handiwork
        </span>
        <span className="items" onClick={() => switchView('HandMade')}>
          🔻HandMade
        </span>
      </div>

import './App.css';
import React, { useState } from 'react';
import Handiwork from './Components/HandiWork.jsx';
import HandMade from './Components/HandMade.jsx';
import Sidebar from 'react-sidebar';
import { FaTools, FaHandPaper } from 'react-icons/fa';

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

  const sidebarContent = (
    <div className="nav">
      <span className="items" onClick={() => switchView('Handiwork')}>
        <FaTools className="icon" /> Handiwork
      </span>
      <span className="items" onClick={() => switchView('HandMade')}>
        <FaHandPaper className="icon" /> HandMade
      </span>
    </div>
  );

  return (
    <Sidebar
      sidebar={sidebarContent}
      open={menuView}
      onSetOpen={toggleMenu}
      styles={{
        sidebar: {
          background: '#2c3e50', // Change background color
          width: '200px',
          padding: '20px',
          color: 'white',
        },
      }}
    >
      <div>
        <button onClick={toggleMenu}>☰ Toggle Sidebar</button>
        {view === 'Handiwork' && <Handiwork />}
        {view === 'HandMade' && <HandMade />}
      </div>
    </Sidebar>
  );
}

export default App;
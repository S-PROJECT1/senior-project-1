import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'red' }}>
        <div className='navbar'>
          <button className='menu-bars' onClick={showSidebar}>
            <FaIcons.FaBars />
          </button>
        </div>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <button className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </button>
            </li>
            {Sidebar.map((item, index) => (
              <li key={index} className={item.cName}>
                <button>
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
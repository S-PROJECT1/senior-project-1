import React, { useState, useContext } from 'react';
import Handiwork from './Components/HandiWork.jsx';
import HandMade from './Components/HandMade.jsx';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider.jsx';
import AboutUs from './Components/About.jsx';
import { FaTools, FaHandPaper } from 'react-icons/fa';
import { AiFillHome, AiFillPhone, AiFillPlusCircle } from 'react-icons/ai';
import '../src/css/App.css';
import Register from './Components/Register.jsx';
import Login from './Components/login.jsx';
// import { AuthContext, AuthProvider } from './context/AuthContext.js';
import Footer from './Components/Footer.jsx';


function App() {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Register');
  // const [curr, setcurr] = useState("login");

  // const { isLoading, userToken } = useContext(AuthContext)

  // if (isLoading) {
  //   return (
  //     <div>
  //       Loading...
  //     </div>
  //   );
  // }
  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option) => {
    setView(option);
    setMenuView(false);
  };

  return (
    <div>


      {/* {userToken !== null ? <Slider /> : <Login />} */}








      <Navbar />
      {/* Conditionally render the Slider component only for the Home view */}
      {view === 'Home' && <Slider />}

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
        <span className="items" onClick={() => switchView('Login')}>
          <AiFillPlusCircle className="icon" /> Login
        </span>
      </div>
      <div className={`container ${menuView ? 'active' : ''}`}>



        {view === 'Handiwork' && <Handiwork />}
        {view === 'HandMade' && <HandMade />}
        {/* {view === 'Home' && <Home />} */}
        {view === 'Login' && <Login switchView={switchView} />}
        {view === 'Register' && <Register switchView={switchView} />}


        {view === 'About' && <AboutUs />}
        <Footer/>
      
      </div>
    </div>
  );
}

export default App;





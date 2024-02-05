import React, { useState } from 'react';
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
import Homy from './Components/Homy.jsx';
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

function App() {

  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('Login');
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



  const steps = [
    {
      id: '0',
      message: 'Welcome! What is your name?',
      trigger: '1',
    },
    {
      id: '1',
      user: true,
      trigger: '2',
    },
    {
      id: '2',
      message: 'Hi there, how can I help you?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },

    {
      id: '4',
      message: ({ previousValue }) => {
        const lowerCaseInput = previousValue.toLowerCase();

        if (lowerCaseInput.includes('handmade')) {
          switchView('HandMade');
          return 'You can find handmade items by clicking on "HandMade" in the sidebar.';
        } else if (lowerCaseInput.includes('handwork')) {
          switchView('Handiwork');
          return 'You can find handiwork items by clicking on "Handiwork" in the sidebar.';
        } else if (lowerCaseInput.includes('videos')) {
          return 'Yes, there are videos available. Click on a card to watch.';
        } else if (lowerCaseInput.includes('i love you')) {

          return 'i love you too.';
        } else {
          return `I'm not sure how to help with that. Is there anything else you'd like to know?`;
        }
      },
      trigger: '3',
    },
  ];


  // Creating our own theme
  const theme = {
    background: '#fff',
    headerBgColor: ' #088da5',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: ' #088da5',
    userFontColor: 'white',
  };

  // Set some properties of the bot
  const config = {
    // botAvatar: "img.png",
    floating: true,
  };




  return (
    <div>
      <Navbar view={view} />
      {view === 'Home' && <Slider />}

      {view !== 'Login'&&view !== 'Register' && (
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
         
          <span className="items" onClick={() => switchView('Login')}>
            <AiFillPlusCircle className="icon" /> Log Out
          </span>
        </div>
      )}
      <div className={`container ${menuView ? 'active' : ''}`}>



        {view === 'Handiwork' && <Handiwork />}
        {view === 'HandMade' && <HandMade />}
        {view === 'Login' && <Login switchView={switchView} />}
        {view === 'Register' && <Register switchView={switchView} />}
        {view === 'About' && <AboutUs />}
        {view === 'Home' && <Homy />}




        <ThemeProvider theme={theme}>
          <ChatBot

            // This appears as the header
            // text for the chat bot
            headerTitle="ChatBot"
            steps={steps}
            {...config}

          />
        </ThemeProvider>


        <Footer />

      </div>
    </div>
  );
}

export default App;
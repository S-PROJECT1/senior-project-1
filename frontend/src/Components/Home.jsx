import React from 'react';
import Navbar from './Navbar';
import Handiwork from './HandiWork.jsx';
import HandMade from './HandMade.jsx';
import  Footer  from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Handiwork />
      <HandMade />
      <Footer/>
    </div>
  );
};

export default Home;
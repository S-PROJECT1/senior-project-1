import React from 'react';
import Navbar from './Navbar';
import Handiwork from './HandiWork.jsx';
import HandMade from './HandMade.jsx';
import Search from './Search'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Handiwork />
      <HandMade />
      <Search />
    </div>
  );
};

export default Home;
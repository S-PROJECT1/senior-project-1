import React from 'react';
import Navbar from './Navbar';
import Handiwork from './HandiWork.jsx';
import HandMade from './HandMade.jsx';
import SearchComponent from './SearchComponent';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Handiwork />
      <HandMade />
      <SearchComponent />
    </div>
  );
};

export default Home;
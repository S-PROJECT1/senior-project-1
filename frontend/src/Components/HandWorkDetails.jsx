import React from 'react';
import '../css/App.css';
import video4 from '../videos/video4.mp4'

const HandWorkDetails = ({ data, onBack }) => {
  // // Check if data is defined before accessing its properties
  // if (!data) {
  //   return <div>Loading...</div>; // You can display a loading message or handle the absence of data in some way
  // }

  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.image} alt="Handiwork" />
      <p>{data.desc}</p>
      {data.videos ? (
        <video controls width="100%">
          <source src={video4}type="video/mp4" />
        </video>
      ) : (
        <p>No video available</p>
      )}
      <button onClick={onBack}>Back To handiwork</button>
    </div>
  );
};

export default HandWorkDetails;





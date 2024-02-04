import React from 'react';
import '../css/App.css';

const HandWorkDetails = ({ data, onBack }) => {
  // Check if data is defined before accessing its properties
  if (!data) {
    return <div>Loading...</div>; // You can display a loading message or handle the absence of data in some way
  }

  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.image} alt="Handiwork" />
      <p>{data.desc}</p>
      {data.videos ? (
      <iframe
      width="100%"
      height="315"
      src={data.videos}
      title="YouTube Video"
      frameborder="0"
      allowfullscreen
    ></iframe>
    
      ) : (
        <p>No video available</p>
      )}
      <button onClick={onBack}>Back To handiwork</button>
    </div>
  );
};

export default HandWorkDetails;





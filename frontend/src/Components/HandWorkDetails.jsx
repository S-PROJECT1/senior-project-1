// HandWorkDetails.js
import React from 'react';
import '../css/App.css';

const HandWorkDetails = ({ data, onBack }) => {
  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.image} alt="Handiwork" />
      <p>{data.desc}</p>
      <video controls width="100%">
        <source src={data.videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default HandWorkDetails;

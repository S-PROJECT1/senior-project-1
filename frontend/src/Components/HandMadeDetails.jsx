// HandMadeDetails.js
import React from 'react';
import '../css/App.css';

const HandMadeDetails = ({ data, onBack }) => {
  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.img} alt="Handmade" />
      <p>{data.description}</p>
      <video controls width="100%">
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default HandMadeDetails;

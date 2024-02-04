import React from 'react';
import '../css/App.css';

const HandMadeDetails = ({ data, onBack }) => {
  if (!data) {
    // If data is undefined, you can handle it gracefully
    return 
  }

  const { title, img, description, video } = data;

  return (
    <div className="details-container full-screen-details">
      <h2>{title}</h2>
      <img src={img} alt="Handmade" />
      <p>{description}</p>
      <video controls width="100%">
        <source src={video} type="video/mp4" />
      </video>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default HandMadeDetails;

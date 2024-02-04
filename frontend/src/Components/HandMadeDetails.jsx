// HandMadeDetails.js
import React from 'react';
import '../css/App.css';

const HandMadeDetails = ({ data, onBack }) => {
  if (!data) {
    // If data is undefined, you can handle it gracefully
    return <div>Loading...</div>; // or any other loading state or message
  }

  const { title, img, description, video } = data;

  return (
    <div className="details-container full-screen-details">
      <h2>{title}</h2>
      <img src={img} alt="Handmade" />
      <p>{description}</p>
      <video controls width="100%">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default HandMadeDetails;

import React from 'react';
import '../css/App.css';

const HandMadeDetails = ({ data, onBack }) => {
  // Add a check to ensure data is defined
  if (!data) {
    return null;
  }

  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.img} alt="Handmade" />
      {/* Add a check for data.description */}
      {data.description && <p>{data.description}</p>}
      {data.video ? (
        // Use the <video> element for local videos
        <video controls width="100%">
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video available</p>
      )}
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default HandMadeDetails;

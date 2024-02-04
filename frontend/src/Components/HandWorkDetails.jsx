import React from 'react';
import YouTube from 'react-youtube';
import '../css/App.css';

const HandWorkDetails = ({ data, onBack }) => {
  // Check if data is defined before accessing its properties
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.image} alt="Handiwork" />
      <p>{data.desc}</p>
      {data.videos ? (
        <YouTube videoId={data.videos} />
      ) : (
        <p>No video available</p>
      )}
      <button onClick={onBack}>Back To handiwork</button>
    </div>
  );
};

export default HandWorkDetails;









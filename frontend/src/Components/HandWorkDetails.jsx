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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/unKU1aFzxUQ?si=57QqmsOfofdtew6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <button onClick={onBack}>Back To handiwork</button>
    </div>
  );
};

export default HandWorkDetails;









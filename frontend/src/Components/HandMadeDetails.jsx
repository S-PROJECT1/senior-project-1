import React from 'react';
import '../css/App.css';

const HandMadeDetails = () => {
  const { data } = window.history.state;

  return (
    <div className="details-container full-screen-details">
      <h2>{data.title}</h2>
      <img src={data.img} alt="Handmade" />
      <p>{data.desc}</p>
      <video controls width="100%">
        <source src={data.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HandMadeDetails;

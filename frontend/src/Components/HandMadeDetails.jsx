
import React from 'react'
import '../css/App.css'

const HandMadeDetails = ({ handmade }) => {
  return (
    <div className="details-container full-screen-details">
      <h2>{handmade.title}</h2>
      <img src={handmade.img} alt="Handmade" />
      <p>{handmade.desc}</p>
      <video controls width="100%">
        <source src={handmade.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HandMadeDetails;


import React from 'react'
import '../css/App.css'

const HandWorkDetails = ({ handwork }) => {
  return (
    <div className="details-container full-screen-details">
      <h2>{handwork.title}</h2>
      <img src={handwork.image} alt="Handiwork" />
      <p>{handwork.desc}</p>
      <video controls width="100%">
        <source src={handwork.videos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HandWorkDetails

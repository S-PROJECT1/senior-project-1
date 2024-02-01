import React from 'react';

function HandWorkDetails({ handwork }) {
  return (
    <div className="details-container">
      <img src={handwork.image} alt="Handiwork" />
      <div>
        <h2>{handwork.title}</h2>
        <p>{handwork.desc}</p>

      </div>
    </div>
  );
}

export default HandWorkDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HandMade() {
  const [handmades, setHandmades] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => {
        setHandmades(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="cards-container">
      {handmades.map(handmade => (
        <div className="card" key={handmade.id}>
          <img src={handmades.image} alt="handwork" />
          <div className="card-title">{handmade.title}</div>
          <div className="card-description">{handmade.description}</div>
          <button className="card-button">See more details</button>
        </div>
      ))}
    </div>
  )
}

export default HandMade;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
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
  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
  }

  return (
    <div className="cards-container">
      <AddHandMade onAddHandmade={handleAddHandmade} />
      {handmades.map(handmade => (
        <div key={handmade.id} className="card">
          <img src={handmade.img} alt="Handiwork" />
          <div>
            <div className="card-title">{handmade.title}</div>
            <div className="card-description">{handmade.description}</div>
            <button className="card-button">See more details</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HandMade;

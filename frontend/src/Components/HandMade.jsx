import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import UpdateHandMade from './UpdateHandMade';
function HandMade() {
  const [handmades, setHandmades] = useState([])
  const [selectedHandmade, setSelectedHandmade] = useState(null)

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
  const handleUpdateClick = (handmade) => {
    // Set the selectedHandmade to open the UpdateHandMade component
    setSelectedHandmade(handmade);
  };

  const handleUpdateHandmade = (updatedHandmade) => {
    // Update the handmades array with the new data
    setHandmades((prevHandmades) =>
      prevHandmades.map((handmade) =>
        handmade.id === updatedHandmade.id ? updatedHandmade : handmade
      )
    );
    // Clear the selectedHandmade to close the UpdateHandMade component
    setSelectedHandmade(null);
  };

  const handleCancelUpdate = () => {
    // Clear the selectedHandmade to close the UpdateHandMade component
    setSelectedHandmade(null);
  };



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
      {selectedHandmade && (
        <UpdateHandMade
          onUpdateHandmade={handleUpdateHandmade}
          onCancel={handleCancelUpdate}
          initialData={selectedHandmade}
        />
      )}
    </div>
  )
}

export default HandMade;

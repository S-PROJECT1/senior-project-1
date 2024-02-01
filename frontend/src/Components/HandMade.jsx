<<<<<<< HEAD

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddHandMade from "./AddHandMade"
import HandMadeDetails from './HandMadeDetails'
import DetailsModal from './DetailsModal'
import '../css/App.css'

function HandMade() {
  const [handmades, setHandmades] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
=======
// HandMade.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import UpdateHandMade from './UpdateHandMade';

function HandMade() {
  const [handmades, setHandmades] = useState([]);
  const [selectedHandmade, setSelectedHandmade] = useState(null);
>>>>>>> 947b38855bbe9710317eb5bf22c5b5cb77b77a0d

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => {
        setHandmades(response.data);
      })
      .catch(error => {
<<<<<<< HEAD
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade])
  }

  const handleShowDetails = (handmade) => {
    setSelectedItem({ type: 'handmade', data: handmade })
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }
=======
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
  };
>>>>>>> 947b38855bbe9710317eb5bf22c5b5cb77b77a0d

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
    <div className="full-screen-container">
      <AddHandMade onAddHandmade={handleAddHandmade} />
<<<<<<< HEAD
      <div className="cards-container">
        {handmades.map(handmade => (
          <div key={handmade.id} className="card">
            <img src={handmade.img} alt="Handmade" />
            <div>
              <div className="card-title">{handmade.title}</div>
              <div className="card-description">{handmade.desc}</div>
              <button className="card-button" onClick={() => handleShowDetails(handmade)}>
                See more details
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />}
=======
      {handmades.map(handmade => (
        <div key={handmade.id} className="card">
          <img src={handmade.img} alt="Handiwork" />
          <div>
            <button className="card-button" onClick={() => handleUpdateClick(handmade)}>
              Update
            </button>
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
>>>>>>> 947b38855bbe9710317eb5bf22c5b5cb77b77a0d
    </div>
  );
}

export default HandMade

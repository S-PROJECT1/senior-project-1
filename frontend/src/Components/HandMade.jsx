// HandMade.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import DetailsModal from './DetailsModal';
import UpdateHandMade from './UpdateHandMade';
import './HandMade.css';

function HandMade() {
  const [handmades, setHandmades] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedData = JSON.parse(localStorage.getItem('handmades')) || [];
    setHandmades(storedData);

    // Fetch data from the server
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => {
        setHandmades(response.data);

        // Save data to localStorage after fetching from the server
        localStorage.setItem('handmades', JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddHandmade = (newHandmade) => {
    // Update state with the new handmade
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);

    // Save the updated data to localStorage
    localStorage.setItem('handmades', JSON.stringify([...handmades, newHandmade]));
  };

  const handleShowDetails = (handmade) => {
    setSelectedItem({ type: 'handmade', data: handmade });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleUpdateClick = (handmade) => {
    setSelectedItem({ type: 'update', data: handmade });
  };

  const handleUpdateHandmade = (updatedHandmade) => {
    setHandmades((prevHandmades) =>
      prevHandmades.map((handmade) =>
        handmade.id === updatedHandmade.id ? updatedHandmade : handmade
      )
    );
    setSelectedItem(null);

    // Save the updated data to localStorage
    localStorage.setItem('handmades', JSON.stringify([...handmades]));
  };

  const handleDeleteClick = (handmadeId) => {
    axios.delete(`http://localhost:8080/handmade/delete/${handmadeId}`)
      .then(response => {
        setHandmades((prevHandmades) => prevHandmades.filter(handmade => handmade.id !== handmadeId));
        // Save the updated data to localStorage
        localStorage.setItem('handmades', JSON.stringify([...handmades]));
      })
      .catch(error => {
        console.error('Error deleting handmade:', error);
      });
  };

  return (
    <div className="full-screen-container">
      <AddHandMade onAddHandmade={handleAddHandmade} />
      <div className="cards-container">
        {handmades.map(handmade => (
          <div key={handmade.id} className="card">
            <img src={handmade.img} alt="Handmade" />
            <div>
              <div className="card-title">{handmade.title}</div>
              <div className="card-description">{handmade.description}</div>
              <button className="card-button" onClick={() => handleShowDetails(handmade)}>
                See more details
              </button>
              <button className="card-button" onClick={() => handleUpdateClick(handmade)}>
                Update
              </button>
              <button className="card-button delete-button" onClick={() => handleDeleteClick(handmade.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        selectedItem.type === 'handmade' ? (
          <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />
        ) : (
          <UpdateHandMade
            onUpdateHandmade={handleUpdateHandmade}
            onCancel={handleCloseModal}
            initialData={selectedItem.data}
          />
        )
      )}
    </div>
  );
}

export default HandMade;

// Handiwork.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import AddHandWork from './AddHandWork';
import UpdateHandiwork from './UpdateHandiwork';

function Handiwork() {
  const [handworkData, setHandworkData] = useState([]);
  const [selectedHandiwork, setSelectedHandiwork] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddHandWork = (newHandWork) => {
    setHandworkData((prevHandworkData) => [...prevHandworkData, newHandWork])
  }

  const handleUpdateClick = (handiwork) => {
    // Set the selectedHandiwork to open the UpdateHandiwork component
    setSelectedHandiwork(handiwork);
  };

  const handleUpdateHandiwork = (updatedHandiwork) => {
    // Update the handworkData array with the new data
    setHandworkData((prevHandworkData) =>
      prevHandworkData.map((handiwork) =>
        handiwork.id_Work === updatedHandiwork.id_Work ? updatedHandiwork : handiwork
      )
    );
    // Clear the selectedHandiwork to close the UpdateHandiwork component
    setSelectedHandiwork(null);
  };

  const handleCancelUpdate = () => {
    // Clear the selectedHandiwork to close the UpdateHandiwork component
    setSelectedHandiwork(null);
  };

  return (
    <div className="full-screen-container">
      <AddHandWork onAddHandWork={handleAddHandWork} />
      {handworkData.map(handiwork => (
        <div key={handiwork.id_Work} className="card">
          <img src={handiwork.image} alt="Handiwork" />
          <div>
            <button className="card-button" onClick={() => handleUpdateClick(handiwork)}>
              Update
            </button>
            <div className="card-title">{handiwork.title}</div>
            <div className="card-description">{handiwork.desc}</div>
            <button className="card-button">See more details</button>
          </div>
        </div>
      ))}
      {selectedHandiwork && (
        <UpdateHandiwork
          onUpdateHandiwork={handleUpdateHandiwork}
          onCancel={handleCancelUpdate}
          initialData={selectedHandiwork}
        />
      )}
    </div>
  )
}

export default Handiwork

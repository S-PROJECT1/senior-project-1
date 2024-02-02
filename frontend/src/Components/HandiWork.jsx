// Handiwork.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandWork from './AddHandWork';
import HandWorkDetails from './HandWorkDetails';
import DetailsModal from './DetailsModal';

function Handiwork() {
  const [handworkData, setHandworkData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, []);

  const handleAddHandWork = (newHandWork) => {
    setHandworkData((prevHandworkData) => [...prevHandworkData, newHandWork]);
  }

  const handleShowDetails = (handwork) => {
    setSelectedItem({ type: 'handwork', data: handwork });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  }

  return (
    <div className="cards-container">
      <AddHandWork onAddHandWork={handleAddHandWork} />
      {handworkData.map(handwork => (
        <div key={handwork.id_Work} className="card">
          <img src={handwork.image} alt="Handiwork" />
          <div>
            <div className="card-title">{handwork.title}</div>
            <div className="card-description">{handwork.desc}</div>
            <button className="card-button" onClick={() => handleShowDetails(handwork)}>
              See more details
            </button>
          </div>
        </div>
      ))}
      {selectedItem && <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />}
    </div>
  );
}

export default Handiwork;

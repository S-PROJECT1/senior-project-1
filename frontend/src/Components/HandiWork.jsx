// Handiwork.jsx
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import AddHandWork from './AddHandWork';
import HandWorkDetails from './HandWorkDetails';

function Handiwork() {
  const [handworkData, setHandworkData] = useState([]);
  const [selectedHandWork, setSelectedHandWork] = useState(null);

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
    setSelectedHandWork(handwork);
  };

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
      {selectedHandWork && <HandWorkDetails handwork={selectedHandWork} />}
    </div>
  );
}

export default Handiwork;

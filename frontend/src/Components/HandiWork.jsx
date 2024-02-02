import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import AddHandWork from './AddHandWork.jsx';
import UpdateHandiwork from './UpdateHandiwork.jsx';

function Handiwork() {
  const [handworkData, setHandworkData] = useState([]);
  const [selectedHandiwork, setSelectedHandiwork] = useState(null);

  const fetchHandworkData = () => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchHandworkData();
  }, []);

  const handleAddHandWork = (newHandWork) => {
    setHandworkData((prevHandworkData) => [...prevHandworkData, newHandWork]);
  }

  const handleUpdateClick = (handiwork) => {
    setSelectedHandiwork(handiwork);
  };

  const handleUpdateHandiwork = (updatedHandiwork) => {
    setHandworkData((prevHandworkData) =>
      prevHandworkData.map((handiwork) =>
        handiwork.id_Work === updatedHandiwork.id_Work ? updatedHandiwork : handiwork
      )
    );
    setSelectedHandiwork(null);
  };

  const handleCancelUpdate = () => {
    setSelectedHandiwork(null);
  };

  return (
    <div className="full-screen-container">
      <AddHandWork onAddHandWork={(newHandWork) => {
        handleAddHandWork(newHandWork);
        fetchHandworkData(); // Fetch data again after adding
      }} />
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
  );
}

export default Handiwork;

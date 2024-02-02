// Handiwork.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandWork from './AddHandWork';
import UpdateHandWork from './UpdateHandiwork';
import DetailsModal from './DetailsModal';
import HandWorkDetails from './HandWorkDetails';
import '../css/App.css';

const Handiwork = () => {
  const [handworkData, setHandworkData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('main');

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
    setHandworkData((prevHandworkData) => [...prevHandworkData, newHandWork]);
  }

  const handleUpdateClick = (handiwork) => {
    setSelectedItem({ type: 'update', data: handiwork });
  };

  const handleShowDetails = (handiwork) => {
    setSelectedItem({ type: 'handiwork', data: handiwork });
    setView('details');
  };

  const handleUpdateHandiwork = (updatedHandiwork) => {
    setHandworkData((prevHandworkData) =>
      prevHandworkData.map((handiwork) =>
        handiwork.id_Work === updatedHandiwork.id_Work ? updatedHandiwork : handiwork
      )
    );
    setSelectedItem(null);
  };

  const handleCancelUpdate = () => {
    setSelectedItem(null);
    setView('main');
  };

  return (
    <div className="full-screen-container">
      {view === 'main' && (
        <>
          <AddHandWork onAddHandWork={handleAddHandWork} />
          {handworkData.map(handiwork => (
            <div key={handiwork.id_Work} className="card">
              <img src={handiwork.image} alt="Handiwork" />
              <div>
                <div className="card-title">{handiwork.title}</div>
                <div className="card-description">{handiwork.desc}</div>
                <button className="card-button" onClick={() => handleShowDetails(handiwork)}>
                  See more details
                </button>
                <button className="card-button" onClick={() => handleUpdateClick(handiwork)}>
                  Update
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      {view === 'details' && selectedItem && (
        <HandWorkDetails
          data={selectedItem.data}
          onBack={() => setView('main')}
        />
      )}
      {selectedItem && (
        selectedItem.type === 'update' && view === 'main' && (
          <UpdateHandWork
            onUpdateHandiwork={handleUpdateHandiwork}
            onCancel={handleCancelUpdate}
            initialData={selectedItem.data}
          />
        )
      )}
      {selectedItem && view === 'main' && (
        <DetailsModal selectedItem={selectedItem} onClose={handleCancelUpdate} />
      )}
    </div>
  );
};

export default Handiwork;

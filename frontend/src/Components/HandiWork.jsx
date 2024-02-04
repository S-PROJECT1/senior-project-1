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
  const [refreshPage, setRefreshPage] = useState(false); // New state variable

  useEffect(() => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data);
        setRefreshPage(false); // Reset the refreshPage state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [refreshPage]);

  const handleAddHandWork = (newHandWork) => {
    axios.post('http://localhost:8080/handywork/add', newHandWork)
      .then(response => {
        setHandworkData((prevHandworkData) => [...prevHandworkData, response.data]);
        setSelectedItem({ type: 'handiwork', data: response.data });
        setRefreshPage(true); // Trigger a page refresh after adding data
      })
      .catch(error => {
        console.error('Error adding handiwork:', error);
      });
  };




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

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:8080/handywork/DELETE/${id}`)
      .then(response => {
        setHandworkData((prevHandworkData) => prevHandworkData.filter(handiwork => handiwork.id_Work !== id));
      })
      .catch(error => {
        console.error('Error deleting handiwork:', error);
      });
  };

  const handleCancelUpdate = () => {
    setSelectedItem(null);
    setView('main');
  };

  return (
    <div className="full-screen-container">
      {view === 'main' && (
        <>
          <div className='add-handmade'><AddHandWork onAddHandWork={handleAddHandWork} onAddSuccess={() => setRefreshPage(true)} /></div>

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
                <button className="card-button delete-button" onClick={() => handleDeleteClick(handiwork.id_Work)}>
                  Delete
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
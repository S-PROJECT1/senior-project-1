// HandMade.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import HandMadeDetails from './HandMadeDetails';
import DetailsModal from './DetailsModal';
import UpdateHandMade from './UpdateHandMade';
import '../css/App.css';

function MainView({ handmades, onShowDetails, onUpdateClick, onDeleteClick }) {
  return (
    <div className="cards-container">
      {handmades.map(handmade => (
        <div key={handmade.id} className="card">
          <img src={handmade.img} alt="Handmade" />
          <div>
            <div className="card-title">{handmade.title}</div>
            {/* <div className="card-description">{handmade.description}</div> */}
            <button className="card-button" onClick={() => onShowDetails(handmade)}>
              See more details
            </button>
            <button className="card-button1" onClick={() => onUpdateClick(handmade)}>
              Update
            </button>
            <button className="card-button delete-button" onClick={() => onDeleteClick(handmade.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function HandMade() {
  const [handmades, setHandmades] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('main');
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => {
        setHandmades(response.data);
        setRefreshPage(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [refreshPage]);

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
    setRefreshPage(true);
  };

  const handleShowDetails = (handmade) => {
    setSelectedItem({ type: 'handmade', data: handmade });
    setView('details');  // Set the view to 'details'
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setView('main');  // Reset the view to 'main'
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
  };

  const handleDeleteClick = (handmadeId) => {
    axios.delete(`http://localhost:8080/handmade/delete/${handmadeId}`)
      .then(response => {
        setHandmades((prevHandmades) => prevHandmades.filter(handmade => handmade.id !== handmadeId));
      })
      .catch(error => {
        console.error('Error deleting handmade:', error);
      });
  };

  return (
    <div className="full-screen-container">
      <AddHandMade onAddHandmade={handleAddHandmade} onAddSuccess={() => setRefreshPage(true)} />

      {view === 'main' && (
        <MainView
          handmades={handmades}
          onShowDetails={handleShowDetails}
          onUpdateClick={handleUpdateClick}
          onDeleteClick={handleDeleteClick}
        />
      )}

      {view === 'details' && selectedItem && (
        <HandMadeDetails
          data={selectedItem.data}
          onBack={handleCloseModal}
        />
      )}

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

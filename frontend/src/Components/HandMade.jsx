import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import HandMadeDetails from './HandMadeDetails';
import DetailsModal from './DetailsModal';
import UpdateHandMade from './UpdateHandMade';
import '../css/App.css';

function HandMade() {
  const [handmades, setHandmades] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('main'); // Added view state

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => setHandmades(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
  };

  const handleShowDetails = (handmade) => {
    setSelectedItem({ type: 'handmade', data: handmade });
    setView('details');
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setView('main');
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

  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:8080/handmade/DELETE/${id}`)
      .then(response => {
        setHandmades((prevHandmades) => prevHandmades.filter(handmade => handmade.id !== id));
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
              <div className="card-description">{handmade.desc}</div>
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
      {selectedItem && view === 'details' && (
        <HandMadeDetails
          data={selectedItem.data}
          onBack={() => setView('main')}
        />
      )}
      {selectedItem && selectedItem.type === 'update' && view === 'main' && (
        <UpdateHandMade
          onUpdateHandmade={handleUpdateHandmade}
          onCancel={handleCloseModal}
          initialData={selectedItem.data}
        />
      )}
      {selectedItem && view === 'main' && (
        <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default HandMade;

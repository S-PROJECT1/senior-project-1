// HandMade.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
import DetailsModal from './DetailsModal';
import UpdateHandMade from './UpdateHandMade';
import HandMadeDetails from './HandMadeDetails';
import '../css/App.css';

const HandMade = () => {
  const [handmades, setHandmades] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('main');

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

  return (
    <div className="full-screen-container">
      {view === 'main' && (
        <>
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
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {view === 'details' && selectedItem && (
        <HandMadeDetails
          data={selectedItem.data}
          onBack={() => setView('main')}
        />
      )}
      {selectedItem && (
        selectedItem.type === 'update' && view === 'main' && (
          <UpdateHandMade
            onUpdateHandmade={handleUpdateHandmade}
            onCancel={handleCloseModal}
            initialData={selectedItem.data}
          />
        )
      )}
      {selectedItem && view === 'main' && (
        <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HandMade;

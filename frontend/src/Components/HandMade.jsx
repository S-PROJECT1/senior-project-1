import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from './AddHandMade';
import UpdateHandMade from './UpdateHandMade';
import { useHistory } from 'react-router-dom'; // Change from useNavigate to useHistory
import '../css/App.css';

const HandMade = () => {
  const history = useHistory(); // Change from useNavigate to useHistory
  const [handmades, setHandmades] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => setHandmades(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleShowDetails = (handmade) => {
    history.push(`/handmade/details/${handmade.id}`, { state: { data: handmade } });
  };

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
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
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        selectedItem.type === 'update' ? (
          <UpdateHandMade
            onUpdateHandmade={handleUpdateHandmade}
            onCancel={handleCloseModal}
            initialData={selectedItem.data}
          />
        ) : null
      )}
    </div>
  );
};

export default HandMade;

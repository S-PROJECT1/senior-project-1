import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandWork from './AddHandWork';
import UpdateHandiwork from './UpdateHandiwork';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';

const HandWork = () => {
  const navigate = useNavigate();
  const [handworkData, setHandworkData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowDetails = (handiwork) => {
    navigate(`/handiwork/details/${handiwork.id_Work}`, { state: { data: handiwork } });
  };

  const handleAddHandWork = (newHandWork) => {
    setHandworkData((prevHandworkData) => [...prevHandworkData, newHandWork])
  }

  const handleUpdateClick = (handiwork) => {
    setSelectedItem(handiwork);
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
            <button className="card-button" onClick={() => handleShowDetails(handiwork)}>
              See more details
            </button>
          </div>
        </div>
      ))}
      {selectedItem && (
        <UpdateHandiwork
          onUpdateHandiwork={handleUpdateHandiwork}
          onCancel={handleCancelUpdate}
          initialData={selectedItem}
        />
      )}
    </div>
  );
}

export default HandWork;

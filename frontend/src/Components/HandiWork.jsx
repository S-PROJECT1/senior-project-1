// Handiwork.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css'

function Handiwork() {
  const [handworkData, setHandworkData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/handywork/GETALL')
      .then(response => {
        setHandworkData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className="cards-container">
      {handworkData.map(handwork => (
        <div key={handwork.id_Work} className="card">
          <img src={handwork.image} alt="Handiwork" />
          <div>
            <div className="card-title">{handwork.title}</div>
            <div className="card-description">{handwork.desc}</div>
            <button className="card-button">See more details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Handiwork;

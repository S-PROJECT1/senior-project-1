
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddHandMade from "./AddHandMade"
import HandMadeDetails from './HandMadeDetails'
import DetailsModal from './DetailsModal'
import '../css/App.css'

function HandMade() {
  const [handmades, setHandmades] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8080/handmade/getAll')
      .then(response => {
        setHandmades(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const handleAddHandmade = (newHandmade) => {
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade])
  }

  const handleShowDetails = (handmade) => {
    setSelectedItem({ type: 'handmade', data: handmade })
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

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
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <DetailsModal selectedItem={selectedItem} onClose={handleCloseModal} />}
    </div>
  )
}

export default HandMade

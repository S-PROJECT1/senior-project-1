import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddHandMade from "./AddHandMade";
function HandMade() {
  const [handmades, setHandmades] = useState([])

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
    setHandmades((prevHandmades) => [...prevHandmades, newHandmade]);
  }

  return (
    <div>
      <h1>HandMade Component</h1>
      <AddHandMade onAddHandmade={handleAddHandmade} />
      {handmades.map(handmade => (
        <div key={handmade.id}>
          <p>{handmade.title}</p>
          <p>{handmade.description}</p>
        </div>
      ))}
    </div>
  )
}

export default HandMade;

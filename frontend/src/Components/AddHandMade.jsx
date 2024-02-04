import React, { useState } from 'react';
import axios from 'axios';
import "../css/App.css"
import home2 from './Assets/home2.png'

function AddHandMade({ onAddHandmade, onAddSuccess }) {
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    description: '',
    video: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a POST request to add the handmade
    axios.post('http://localhost:8080/handmade/add', formData)
      .then(response => {
        // Update the parent component's state with the new handmade
        onAddHandmade(response.data);
        // Optionally, you can reset the form data
        setFormData({
          img: '',
          title: '',
          description: '',
          video: '',
        });
        // Close the modal after submission
        setShowModal(false);
        // Notify the parent component about the successful addition
        onAddSuccess();
      })
      .catch(error => {
        console.error('Error adding handmade:', error);
      });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='add'>
      <div className='welcome'> <img src={home2}/> </div>

      <div className='button-one'>
        <button onClick={handleOpenModal}>📝</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <label>
                Image URL:
                <input type="text" name="img" value={formData.img} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Video URL:
                <input type="text" name="video" value={formData.video} onChange={handleInputChange} />
              </label>
              <br />
              <button className='add-handmade' type="submit">Add Handmade</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddHandMade;
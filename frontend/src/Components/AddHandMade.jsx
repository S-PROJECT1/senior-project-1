import React, { useState } from 'react';
import axios from 'axios';
import "../css/App.css";

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
    axios.post('http://localhost:8080/handmade/add', formData)
      .then(response => {
        onAddHandmade(response.data);
        setFormData({
          img: '',
          title: '',
          description: '',
          video: '',
        });
        setShowModal(false);
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
      <div className='welcome'>
        <h1>welcome to the lovely space</h1>
      </div>

      <div className='button-one'>
        <button onClick={handleOpenModal}>📝</button>
      </div>

      {showModal && (
        <div className="modal-background">
          <div className="modal">
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

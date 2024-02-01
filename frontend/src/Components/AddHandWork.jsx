import React, { useState } from 'react';
import axios from 'axios';

function AddHandWork({ onAddHandWork }) {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    desc: '', // Corrected field name to match the server-side model
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
    axios.post('http://localhost:8080/handywork/create', formData)
      .then(response => {
        onAddHandWork(response.data);
        setFormData({
          image: '',
          title: '',
          desc: '', // Corrected field name to match the server-side model
          video: '',
        });
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error adding handwork:', error);
      });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Add Handwork</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <label>
                Image URL:
                <input type="text" name="image" value={formData.image} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Description:
                <input type="text" name="desc" value={formData.desc} onChange={handleInputChange} />
              </label>
              <br />
              <label>
                Video URL:
                <input type="text" name="video" value={formData.video} onChange={handleInputChange} />
              </label>
              <br />
              <button type="submit">Add Handwork</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddHandWork;


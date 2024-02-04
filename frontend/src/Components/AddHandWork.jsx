import React, { useState } from 'react';
import axios from 'axios';
import home3 from './Assets/home3.png';
import '../css/App.css';

function AddHandWork({ onAddHandWork, onAddSuccess }) {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    desc: '',
    videos: '',
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
    axios.post('http://localhost:8080/handywork/add', formData)
      .then(response => {
        onAddHandWork(response.data);
        setFormData({
          image: '',
          title: '',
          desc: '',
          videos: '',
        });
        setShowModal(false);
        // Notify the parent component about the successful addition
        onAddSuccess();
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
      <div className='welc'> <img src={home3} alt="Welcome" /> </div>

      <div className='button-two'>
        <button onClick={handleOpenModal}>📝</button>
      </div>
      {showModal && (
        <div>
          <div className="modal-background"></div>

          <div className="modal">
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
                <input type="text" name="videos" value={formData.videos} onChange={handleInputChange} />
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

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
    <div className='add'>
    <div className='welc'> <img src={home3} alt="Welcome" /> </div>


    <div className='button-one'>
      <button onClick={handleOpenModal}>🖋️</button>
    </div>

    {showModal && (
      <div className="modal-background">
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <form onSubmit={handleSubmit}>
<label>
  Image URL:
  <br />
  <input type="text" name="img" value={formData.img} onChange={handleInputChange} />
</label>

<label>
  Title:
  <br />
  <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
</label>

<label>
  Description:
  <br />
  <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
</label>

<label>
  Video URL:
  <br />
  <input type="text" name="video" value={formData.video} onChange={handleInputChange} />
</label>

<button className='add-handmade-button' type="submit">Add Handmade</button>
</form>

        </div>
      </div>
    )}
  </div>
  );
}

export default AddHandWork;

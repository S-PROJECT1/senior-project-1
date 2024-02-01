// UpdateHandiwork.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

function UpdateHandiwork({ onUpdateHandiwork, onCancel, initialData }) {
  const [updatedHandiwork, setUpdatedHandiwork] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedHandiwork((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to update the handiwork on the server
      await axios.put(`http://localhost:8080/handywork/update/${updatedHandiwork.id_Work}`, updatedHandiwork);

      // After the update is successful, trigger the onUpdateHandiwork function
      onUpdateHandiwork(updatedHandiwork);
      // Close the modal and update form
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating handiwork:', error);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCancel}
      contentLabel="Update Handiwork Modal"
    >
      <div className="update-popup">
        <form onSubmit={handleSubmit}>
          {/* Add form elements for updating handiwork information */}
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={updatedHandiwork.title || ''}
            onChange={handleChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="desc"
            value={updatedHandiwork.desc || ''}
            onChange={handleChange}
          />
          {/* Add other form elements for image, etc. */}
          <button type="submit">Update</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default UpdateHandiwork;

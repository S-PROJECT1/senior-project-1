
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

function UpdateHandMade({ onUpdateHandmade, onCancel, initialData }) {
  const [updatedHandmade, setUpdatedHandmade] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedHandmade((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to update the handmade on the server
      await axios.put(`http://localhost:8080/handmade/update/${updatedHandmade.id}`, updatedHandmade);

      // After the update is successful, trigger the onUpdateHandmade function
      onUpdateHandmade(updatedHandmade);
      // Close the modal and update form
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating handmade:', error);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCancel}
      contentLabel="Update Handmade Modal"
    >
      <div className="update-popup">
        <form onSubmit={handleSubmit}>
          {/* Add form elements for updating handmade information */}
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={updatedHandmade.title}
            onChange={handleChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={updatedHandmade.description}
            onChange={handleChange}
          />
          {/* Add other form elements for img, video, etc. */}
          <button type="submit">Update</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
}
console.log('hand')


export default UpdateHandMade;

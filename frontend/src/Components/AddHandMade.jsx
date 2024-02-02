// AddHandMade.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

function AddHandMade({ onAddHandmade }) {
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
        // Check if the response has the expected data structure
        if (response.data && response.data.id) {
          // Call the parent component's callback to add the new handmade
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
        } else {
          console.error('Invalid response data structure:', response.data);
        }
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
    <div>
      <img
        id="icon"
        src={require('../icones/add.png')}
        alt="Add Handmade"
        onClick={handleOpenModal}
      />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Handmade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="img">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control type="text" name="img" value={formData.img} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="video">
              <Form.Label>Video URL:</Form.Label>
              <Form.Control type="text" name="video" value={formData.video} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Handmade
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddHandMade;

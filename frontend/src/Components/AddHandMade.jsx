import React, { useState } from 'react';
import axios from 'axios';

function AddHandMade({ onAddHandmade }) {
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    description: '',
    video: '',
  });

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
      })
      .catch(error => {
        console.error('Error adding handmade:', error);
      });
  };

  return (
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
      <button type="submit">Add Handmade</button>
    </form>
  );
}

export default AddHandMade;

import React from 'react';
import '../css/App.css';

const HandMadeDetails = ({ data, onBack }) => {
  if (!data) {
    // If data is undefined, you can handle it gracefully
    return null;
  }

  const { title, img, description, video } = data;

  // Extract the video ID from the full YouTube URL
  const videoId = getYouTubeVideoId(video);

  return (
    <div className="details-container full-screen-details">
      <h2>{title}</h2>
      <img src={img} alt="Handmade" />
      <p>{description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

// Function to extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
  return match ? match[1] : null;
}

export default HandMadeDetails;


import React from 'react';
import '../css/App.css';

const HandWorkDetails = ({ data, onBack }) => {
  // Check if data is defined before accessing its properties
  if (!data) {
    return <div>Loading...</div>;
  }

  // Extract the video ID from the YouTube link
  const videoId = getYouTubeVideoId(data.videos);

  return (
    <>
    

      <div className="details-container full-screen-details">
        <h2>{data.title}</h2>
        <img src={data.image} alt="Handiwork" />
        <p>{data.desc}</p>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <button onClick={onBack}>Back To handiwork</button>
      </div>
    </>
  );
};


// Function to extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
  return match ? match[1] : null;
}

export default HandWorkDetails;











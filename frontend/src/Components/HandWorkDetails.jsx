import React, { useState } from 'react';
import '../css/App.css';

const HandWorkDetails = ({ data, onBack }) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  // Check if data is defined before accessing its properties
  if (!data) {
    return <div>Loading...</div>;
  }

  // Extract the video ID from the YouTube link
  const videoId = getYouTubeVideoId(data.videos);

  const handleCommentSubmit = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="details-container full-screen-details">
      <div className='title'>{data.title}</div>
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
      <div>
        {/* Comment section */}
        <div>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          {/* Form to submit a new comment */}
          <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(e.target.comment.value); }}>
            <input id="input" type="text" name="comment" placeholder="Add a comment" />
            <button id="bu" type="submit">Post Comment</button>
            <button id="bu1" onClick={handleLikeClick}>Like ({likes})</button>
          </form>
        </div>
      </div>

      <button id="bu1" onClick={onBack}>Back To handiwork</button>
    </div>
  );
};

// Function to extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
  return match ? match[1] : null;
}

export default HandWorkDetails;












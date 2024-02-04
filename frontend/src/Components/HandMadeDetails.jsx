import React, { useState } from 'react';
import '../css/App.css';
// ... (existing imports)

const HandMadeDetails = ({ data, onBack }) => {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  if (!data) {
    return null;
  }

  const { title, img, description, video } = data;

  const videoId = getYouTubeVideoId(video);

  const handleCommentSubmit = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

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
          </form>
        </div>
      </div>

      {/* Like button */}
      <div>
        <button id="bu1" onClick={handleLikeClick}>Like ({likes})</button>
      </div>

      <button id="bu1" onClick={onBack}>Back To handmade</button>
    </div>
  );
};

// Function to extract the YouTube video ID from the URL
function getYouTubeVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
  return match ? match[1] : null;
}

export default HandMadeDetails;




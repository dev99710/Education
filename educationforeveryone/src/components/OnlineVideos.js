import React from 'react';
import '../styles/onlineVideos.css'; // Import the CSS file for online videos page

const OnlineVideos = () => {
  return (
    <div className="container">
      <h1>Online Education Videos</h1>
      <div className="video-item">
        <div className="video-title">Video Title 1</div>
        {/* Add video player or embed code here */}
      </div>
      <div className="video-item">
        <div className="video-title">Video Title 2</div>
        {/* Add video player or embed code here */}
      </div>
    </div>
  );
};

export default OnlineVideos;

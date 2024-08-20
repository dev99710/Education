// src/components/OnlineVideos.js

import React from 'react';

const OnlineVideos = () => {
  const videos = [
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/C0DPdy98e4c" },
    // Add more videos here
  ];

  return (
    <div className="container mt-4">
      <h2>Online Education Videos</h2>
      <div className="row">
        {videos.map(video => (
          <div key={video.id} className="col-md-4">
            <div className="card mb-4">
              <iframe
                width="100%"
                height="200"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineVideos;

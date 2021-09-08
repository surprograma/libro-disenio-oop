import React from 'react';

export const VideoYouTube = ({ id, titulo, descripcion }) => (
  <div className="card">
    <div className="card__image">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="post-content-video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    {titulo && (
      <div className="card__body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    )}
  </div>
);

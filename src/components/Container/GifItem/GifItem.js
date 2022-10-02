import React from 'react';

const GifItem = ({ url, source, description }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <img src={source} alt={`Animated GIF: ${description}`} />
    </a>
  );
};

export default GifItem;

import React from 'react';

const GifItem = ({ url, source, description }) => {
  const imageClickedHandler = () => {
    window.open(url, '_blank').focus();
  };
  return (
    <div
      onClick={imageClickedHandler}
      title={description}
      className='gif__container'
      style={{ backgroundImage: `url(${source})` }}></div>
  );
};

export default GifItem;

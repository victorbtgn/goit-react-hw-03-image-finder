import React from 'react';

export default ({ onClick, webformatURL, largeImageURL }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt=""
      className="ImageGalleryItem-image"
      data-src={largeImageURL}
      onClick={onClick}
    />
  </li>
);

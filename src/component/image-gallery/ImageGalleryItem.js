import React from 'react';

export default ({ webformatURL, largeImageURL }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

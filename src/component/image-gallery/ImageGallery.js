import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

export default ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

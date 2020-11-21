import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images;

  return (
    <div className="image-list" style={{ width: '100%' }}>
      {images.map((image, index) => {
        return (
          <ImageCard
            key={image.id}
            image={image}
            touchImage={props.touchImage}
          />
        );
      })}
    </div>
  );
};

export default ImageList;

import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images;
  // THIS CODE DOES NOT CAUSE AN ERROR
  // const images = props.images.map((image) => {
  //     return <ImageCard key={image.id} image={image}/>;
  // })
  // return <div className="image-list">{images}</div>;

  return (
    <div div className="image-list">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
};

export default ImageList;

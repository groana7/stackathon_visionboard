import React, { Component, useState, useEffect } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

// zIndex for layer

const ImageCard = (props) => {

  const [spans, useSpans] = useState(0)
  const imageRef = React.createRef();

  const { photographer, src, id, touched } = props.image;
  // why is onStop not found?
  const dragHandlers = { onStart, onStop };

  // for Pexels
  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    useSpans({spans})
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans);
  })

  const onStart = (evt) => {
    if (evt.target.currentSrc) {
      props.touchImage(evt.target.id);
    }

    evt.target.style.position = 'absolute';
  }

    return (
      <div>
        <Draggable {...dragHandlers}>
          {/* use hook */}
          <div style={{ gridRowEnd: `span ${spans}` }}>
            <img
              style={{ position: touched ? 'absolute' : '' }}
              id={id}
              ref={imageRef}
              alt={photographer}
              src={src.medium}
            />
          </div>
        </Draggable>
      </div>
    );

}

export default ImageCard;

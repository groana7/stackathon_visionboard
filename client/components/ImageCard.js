import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

// zIndex for layer

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.onStart = this.onStart.bind(this);

    // for Pexels
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // for Pexels
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // for Pexels
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  onStart(evt) {
    if (evt.target.currentSrc) {
      this.props.touchImage(evt.target.id);
    }

    evt.target.style.position = 'absolute';
  }

  render() {
    const { photographer, src, id, touched } = this.props.image;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div>
        <Draggable {...dragHandlers}>
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img
              style={{ position: touched ? 'absolute' : '' }}
              id={id}
              ref={this.imageRef}
              alt={photographer}
              src={src.medium}
            />
          </div>
        </Draggable>
      </div>
    );
  }
}

export default ImageCard;

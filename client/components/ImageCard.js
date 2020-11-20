import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

// Draggable
//  If you want to completely control the lifecycle of the component, use <DraggableCore>

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

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

  render() {
    const { photographer, src } = this.props.image;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    // console.log('IMAGE CARD THIS:', this) // interesting

    return (
      <div>
        <Draggable {...dragHandlers}>
          <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imageRef} alt={photographer} src={src.medium} />
          </div>
        </Draggable>
      </div>
    );
  }
}
// class ImageCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { spans: 0 };

//         this.imageRef = React.createRef();
//     }

//     componentDidMount() {
//         this.imageRef.current.addEventListener('load', this.setSpans);
//     }

//     setSpans = () => {
//         const height = this.imageRef.current.clientHeight;
//         const spans = Math.ceil(height / 10 + 1);
//         this.setState({ spans });
//     }

//     render() {
//         const {photographer, src} = this.props.image;

//         return (
//             <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
//                 <img
//                     ref={this.imageRef}
//                     alt={photographer}
//                     src={src.medium}
//                 />
//             </div>
//         );
//     }
// }

export default ImageCard;

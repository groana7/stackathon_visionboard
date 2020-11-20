import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

// const {ReactDraggable: Draggable, React, ReactDOM} = window;

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0,
      },
      controlledPosition: {
        x: -400,
        y: 200,
      },
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const { photographer, src } = this.props.image;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;

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

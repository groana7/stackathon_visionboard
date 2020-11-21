import React, { Component } from 'react';
import ImageCard from './ImageCard';
import Draggable, { DraggableCore } from 'react-draggable';

class Board extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    // console.log(evt);
    // console.log(evt.target.className);

    if (
      !['IMG'].includes(evt.target.tagName) &&
      evt.target.className !== 'textInput' &&
      evt.target.className !==
        'textInput react-draggable react-draggable-dragged'
    ) {
      this.props.addTextBox(evt.pageX, evt.pageY);
    }
  }

  render() {
    const images = this.props.images;
    const textBoxes = this.props.textBoxes;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
      <div
        id="board"
        onClick={this.onClick}
        style={{ height: window.innerHeight, width: '900px' }}
      >
        <div className="image-list">
          {images.map((image) => {
            return (
              <ImageCard key={image.id} image={image} touchImage={() => {}} />
            );
          })}
          {textBoxes.map((textBox, index) => (
            <div>
              <Draggable {...dragHandlers}>
                <div
                  contentEditable="true"
                  className="textInput"
                  key={index}
                  style={{
                    position: 'absolute',
                    left: textBox.x + 'px',
                    top: textBox.y + 'px',
                    fontSize: "20px"
                  }}
                >
                  This text can be edited by the user.
                </div>
              </Draggable>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;

import React, { Component } from 'react';
import ImageCard from './ImageCard';

class Board extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    // console.log(evt);

    if (!['IMG'].includes(evt.target.tagName) && (evt.target.className !== "textInput")) {
      this.props.addTextBox(evt.pageX, evt.pageY);
    }
  }

  render() {
    const images = this.props.images;
    const textBoxes = this.props.textBoxes;

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
            <div 
              contentEditable="true"
              className="textInput"
              key={index}
              style={{
                    position: 'fixed',
                    left: textBox.x + 'px',
                    top: textBox.y + 'px',
              }}

            >
              This text can be edited by the user.
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;

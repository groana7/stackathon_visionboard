import React, { Component } from 'react';
import ImageCard from './ImageCard';

class Board extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    console.log(evt);
    if (!['IMG', 'INPUT'].includes(evt.target.tagName)) {
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
        style={{ height: '100%', width: '100%' }}
      >
        <p>CANVAS</p>
        <div className="image-list">
          {images.map((image) => {
            return (
              <ImageCard key={image.id} image={image} touchImage={() => {}} />
            );
          })}
          {textBoxes.map((textBox, index) => (
            <input
              key={index}
              type="text"
              style={{
                position: 'fixed',
                left: textBox.x + 'px',
                top: textBox.y + 'px',
              }}
              defaultValue={textBox.text}
            ></input>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;

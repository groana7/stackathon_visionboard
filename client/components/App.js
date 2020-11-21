import React, { Component } from 'react';
import pexels from '../../server/api/pexels';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      photos: [],
      selected: [],
      textBoxes: []
    };

    this.touchImage = this.touchImage.bind(this);
    this.addTextBox = this.addTextBox.bind(this)
  }

  onSearchSubmit = async (term) => {
    const response = await pexels.get(`/v1/search`, {
      params: {
        query: term,
        per_page: 15,
        page: 1,
      },
    });

    this.setState({
      photos: [
        // ...this.state.photos,
        // ...this.state.photos.filter((photo) => photo.touched),
        ...response.data.photos,
      ],
    });
  };

  touchImage(id) {
    const image = this.state.photos.find((photo) => photo.id === +id);
    // console.log(image);

    // image.touched = true;
    this.setState({
      selected: [...this.state.selected, image],
      photos: this.state.photos.filter(photo => photo.id !== image.id)
    })

    // this.setState({
    //   photos: [...this.state.photos.filter(photo => photo.id !== image.id), image]
    // })
  }

  addTextBox(x, y) {
    const textBox = {
      x,
      y,
      text: 'yayyy'
    }

    console.log( x, y)

    this.setState({
      textBoxes: [...this.state.textBoxes, textBox]
    })
  }

  render() {
    return (
      <div id="page">
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.photos} touchImage={this.touchImage} />
        </div>
        <div id="canvas">
          <Board images={this.state.selected} addTextBox={this.addTextBox} textBoxes={this.state.textBoxes} />
        </div>
      </div>
    );
  }
}

export default App;

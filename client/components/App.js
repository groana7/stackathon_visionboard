import React, { Component, Fragment } from 'react';
import pexels from '../../server/api/pexels';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Board from './Board';
import Frame from 'react-frame-component';
import Footer from './Footer';
import ReactToPrint from 'react-to-print';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      selected: [],
      textBoxes: [],
    };

    this.touchImage = this.touchImage.bind(this);
    this.addTextBox = this.addTextBox.bind(this);
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
      photos: [...response.data.photos],
    });
  };

  touchImage(id) {
    const image = this.state.photos.find((photo) => photo.id === +id);
    console.log(image);

    this.setState({
      selected: [...this.state.selected, image],
      photos: this.state.photos.filter((photo) => photo.id !== image.id),
    });
  }

  addTextBox(x, y) {
    const textBox = {
      x,
      y,
      text: 'Add Text',
    };

    // console.log( x, y)

    this.setState({
      textBoxes: [...this.state.textBoxes, textBox],
    });
  }

  render() {
    const componentRef = (el) => (this.componentRef = el);
    // console.log(node)

    return (
      <div>
        <div id="print" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
        </div>
        <div id="page">
          <Frame style={{ width: '900px', height: window.innerHeight }}>
            <div className="container">
              <SearchBar onSubmit={this.onSearchSubmit} />
              <ImageList
                images={this.state.photos}
                touchImage={this.touchImage}
              />
            </div>
          </Frame>
          <Frame
            style={{ width: window.innerWidth, height: window.innerHeight }}
          >
            <div id="canvas">
              <Board
                ref={componentRef}
                images={this.state.selected}
                addTextBox={this.addTextBox}
                textBoxes={this.state.textBoxes}
              />
            </div>
          </Frame>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

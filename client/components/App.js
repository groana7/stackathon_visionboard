import React, { Component } from 'react';
import pexels from '../../server/api/pexels';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = { photos: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await pexels.get(`/v1/search`, {
      params: {
        query: term,
        per_page: 15,
        page: 1,
      },
    });

    this.setState({ photos: response.data.photos });
  };

  render() {
    return (
      <div id="page">
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.photos} />
        </div>
        <div id="canvas">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;

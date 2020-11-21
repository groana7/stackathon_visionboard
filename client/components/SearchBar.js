import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { term: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            size="25"
            placeholder="Search for photos on Pexels"
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;

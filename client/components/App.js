import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.user.name}</p>
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(App);

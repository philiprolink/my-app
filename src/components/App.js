import React, { Component } from 'react';
import '../scss/App.scss';
import Nav from './Nav'
import Banner from './Banner'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
      </div>
    );
  }
}

export default App;

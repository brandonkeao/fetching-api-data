import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Here are some random profile pictures of random people
        </p>
        <Background />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LifeCounter from './components/LifeCounter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="lifecounter-wrapper">
          <LifeCounter></LifeCounter>
          <LifeCounter></LifeCounter>
        </div>
      </div>
    );
  }
}

export default App;

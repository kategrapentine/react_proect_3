import React, { Component } from 'react';
import { HousesList } from './components/HousesList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <br></br>
        <HousesList />
      </div>
    )
  }
}

export default App;
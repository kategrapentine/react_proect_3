import React, { Component } from 'react';
import { HousesList } from './components/HousesList';
import { HouseForm } from './components/HouseForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <br></br>
        <HouseForm />
        <HousesList />
      </div>
    )
  }
}

export default App;
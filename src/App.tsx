import * as React from 'react';
import './App.css';
import SelectCar from './SelectCar/SelectCar';
import { Make } from './SelectCar/Make';

const logo = require('./logo.svg');

let sampleMakes: Make[] = [{id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SelectCar makes={sampleMakes} />
      </div>
    );
  }
}

export default App;

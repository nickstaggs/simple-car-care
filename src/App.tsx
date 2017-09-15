import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export interface Props {
  make: Object;
  enthusiasmLevel?: number;
}

function SelectCar(object: Props) {
  const makes = Props.makes;
  const makesList = makes.map((make) =>
    <option key={make.id.toString()} value={make.name}>{make.name}</option>
  );
  return (
    <select>
      {makesList}
    </select>
  );
}

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
      </div>
    );
  }
}

export default App;

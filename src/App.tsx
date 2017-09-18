import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

interface Make {
  id: number;
  name: string;
}

interface Props {
  makes: Make[];
}

let sampleMakes: Make[] = [new Make(1, 'Audi'), new Make(2, 'BMW')];

const SelectCar = (props: Props) => {
  const makes = props.makes;
  const makesList = makes.map((make) =>
    <option key={make.id.toString()} value={make.name}>{make.name}</option>
  );
  return (
    <select>
      {makesList}
    </select>
  );
};

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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SelectCar from './SelectCar';
import { Make } from './Make';

let sampleMakes: Make[] = [{id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectCar makes={sampleMakes} />, div);
});

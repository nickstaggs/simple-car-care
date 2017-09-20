import * as React from 'react';
import SelectCar from './SelectCar/SelectCar';
import { Make } from './SelectCar/Make';
import './App.css';

let sampleMakes: Make[] = [{id: 0, name: 'Select Make'}, {id: 1, name: 'Audi'}, {id: 2, name: 'BMW'}];

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <div className="Logo-box Pull-left">
        <h1>Simple Car Care</h1>
      </div>
      <div className="Car-make-dropdown-box Pull-right">
        <SelectCar makes={sampleMakes} className="Select-car"  />
      </div>
    </div>
  );
};

export default NavBar;

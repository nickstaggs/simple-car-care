import * as React from 'react';
import SelectCar from './SelectCar/SelectCar';
import { Make } from './SelectCar/Make';
import './App.css';

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <div className="Logo-box">
        <h2 className="Pull-left">Simple Car Care</h2>
      </div>
      <div className="Car-make-dropdown-box">
        
      </div>
    </div>
  );
};

export default NavBar;

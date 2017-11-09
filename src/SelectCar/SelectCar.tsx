import * as React from 'react';
import { Make } from './Make';
import { Link } from 'react-router-dom';

interface Props {
  makes: Make[];
  className: string;
}

const SelectCar = (props: Props) => {
  const makes = props.makes;

  const makesList = makes.map((make) => {
    return (
      <option key={make.id.toString()} value={make.name}>
        <Link to="/:make">{make.name}</Link>
      </option>
    );
  });

  return (
    <select className={props.className}>
      {makesList}
    </select>
  );
};

export default SelectCar;

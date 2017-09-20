import * as React from 'react';
import { Make } from './Make';

interface Props {
  makes: Make[];
  className: string;
}

const SelectCar = (props: Props) => {
  const makes = props.makes;

  const makesList = makes.map((make) =>
    <option key={make.id.toString()} value={make.name}>{make.name}</option>
  );

  return (
    <select className={props.className}>
      {makesList}
    </select>
  );
};

export default SelectCar;

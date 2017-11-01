import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar className="" />, div);
});

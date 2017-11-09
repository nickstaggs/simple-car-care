import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Make from './Make';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Make />, div);
});

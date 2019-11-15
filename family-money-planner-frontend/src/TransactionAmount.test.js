import React from 'react';
import ReactDOM from 'react-dom';
import TransactionAmount from './TransactionAmount';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TransactionAmount />, div);
  ReactDOM.unmountComponentAtNode(div);
});
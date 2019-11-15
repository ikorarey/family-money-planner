import React from 'react';
import ReactDOM from 'react-dom';
import TransactionName from './TransactionName';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TransactionName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
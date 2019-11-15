import React from 'react';
import ReactDOM from 'react-dom';
import NewTransactionButton from './NewTransactionButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTransactionButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
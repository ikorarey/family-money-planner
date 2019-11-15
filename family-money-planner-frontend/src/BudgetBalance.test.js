import React from 'react';
import ReactDOM from 'react-dom';
import BudgetBalance from './BudgetBalance';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BudgetBalance />, div);
  ReactDOM.unmountComponentAtNode(div);
});
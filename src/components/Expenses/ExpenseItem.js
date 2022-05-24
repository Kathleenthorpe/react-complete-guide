import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  //console.log('ExpenseItem evaluated by React');
  //Will show 4 times as 4 items when refreshed. Will show once when state changes on one item.

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

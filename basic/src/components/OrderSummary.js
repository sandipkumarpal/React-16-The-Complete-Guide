import React from 'react';

import HoCAux from '../hoc/HoCAux';
import '../stylesheets/components/OrderSummary.css';

import Button from './Button';

function OrderSummary(props) {
  const ingredientsSummary = Object.keys(props.ingredients)
  .map((item, index) =>
    (<li key={index} className="OrderSummaryList">
      <span>{item}</span>: {props.ingredients[item]}
    </li>)
  );
  return (
    <HoCAux>
      <h3>You Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </HoCAux>
  );
}

export default OrderSummary;

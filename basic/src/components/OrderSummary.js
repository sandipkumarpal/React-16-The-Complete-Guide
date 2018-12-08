import React from 'react';

import HoCAux from '../hoc/HoCAux';
import '../stylesheets/components/OrderSummary.css';

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
      <p>Continue to Checkout?</p>
    </HoCAux>
  );
}

export default OrderSummary;

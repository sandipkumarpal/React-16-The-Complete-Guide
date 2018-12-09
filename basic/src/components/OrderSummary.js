import React from 'react';
import PropTypes from 'prop-types';

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

OrderSummary.defaultProps = {
  ingredients: {},
  price: 0,
  purchaseCanceled: () => {},
  purchaseContinued: () => {}
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;

import React from 'react';
import PropTypes from 'prop-types';
import BurgerInGredient from '../../components/BurgerInGredient';

import '../../stylesheets/containers/Burger.css';

class Burger extends React.Component {
 render() {
    const { ingredients } = this.props;

    let intregationIngredients = Object.keys(ingredients)
      .map(inteKey => [...Array(ingredients[inteKey])]
        .map((_, index) =>
          <BurgerInGredient key={inteKey + index} type={inteKey}/>
        )
      )
      .reduce((preValue, NewValue) => {
        return NewValue.concat(preValue);
      }, []);

    console.log(intregationIngredients);
    return (
      <div className="Burger">
        <BurgerInGredient type="bread-top"/>
        { intregationIngredients.length === 0 ?
          <p>Please start adding ingredients.</p>
          :
          intregationIngredients
        }
        <BurgerInGredient type="bread-bottom"/>
      </div>
    );
 }
}

Burger.defaultProps = {
  ingredients: {},
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;

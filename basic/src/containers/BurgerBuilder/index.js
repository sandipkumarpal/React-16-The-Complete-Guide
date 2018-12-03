import React from 'react';

import HoCAusx from '../../hoc/HoCAux';
import Burger from './Burger';
import BuildControls from '../BuildControls';

const INGREDIENT_PRICES =  {
  salad: 0.8,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 0
        };
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    }

    addIngredientHandler(type) {
      const {
        ingredients,
        totalPrice
      } = this.state;
      const updateCount = ingredients[type] + 1;
      const updatedIngredients = {
        ...ingredients
      };
      updatedIngredients[type] = updateCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const newPrice = totalPrice + priceAddition;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
    }
    removeIngredientHandler(type) {
      const {
        ingredients,
        totalPrice
      } = this.state;
      if (ingredients[type] <= 0) {
        return;
      }
      const updateCount = ingredients[type] - 1;
      const updatedIngredients = {
        ...ingredients
      };
      updatedIngredients[type] = updateCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const newPrice = totalPrice - priceDeduction;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
    }
    render() {
        const { ingredients } = this.state;
        const disabledInfo = { ...ingredients };
        for (const key in disabledInfo) {
          disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <HoCAusx>
                <Burger ingredients={ingredients}/>
                <BuildControls
                  ingredientAdd={this.addIngredientHandler}
                  ingredientRemove={this.removeIngredientHandler}
                  disabled={disabledInfo}
                />
            </HoCAusx>
        );
    }
}

export default BurgerBuilder;

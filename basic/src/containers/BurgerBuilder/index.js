import React from 'react';

import HoCAusx from '../../hoc/HoCAux';
import Burger from './Burger';
import BuildControls from '../BuildControls';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';

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
            totalPrice: 0,
            purchasable: false,
            purchasing: false
        };
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.updatePurchaseState = this.updatePurchaseState.bind(this);
        this.purchasehandler = this.purchasehandler.bind(this);
        this.purchaseCancelhandler = this.purchaseCancelhandler.bind(this);
        this.purchaseContinuehandler = this.purchaseContinuehandler.bind(this);
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
      this.updatePurchaseState(updatedIngredients);
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
      this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState(ingredients) {
      const purchasable = Object.keys(ingredients)
        .map(inGredientKey => {
          return ingredients[inGredientKey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      this.setState({ purchasable: purchasable > 0 });
    }

    purchasehandler() {
      this.setState({ purchasing: true});
    }
    purchaseCancelhandler() {
      this.setState({ purchasing: false});
    }

    purchaseContinuehandler() {
      alert('You ContinueQ');
    }

    render() {
        const { ingredients, totalPrice, purchasable, purchasing } = this.state;
        const disabledInfo = { ...ingredients };
        for (const key in disabledInfo) {
          disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <HoCAusx>
                <Modal show={purchasing} modalClosed={this.purchaseCancelhandler}>
                  <OrderSummary
                    ingredients={ingredients}
                    purchaseContinued={this.purchaseContinuehandler}
                    purchaseCanceled={this.purchaseCancelhandler}
                  />
                </Modal>
                <Burger ingredients={ingredients}/>
                <BuildControls
                  ingredientAdd={this.addIngredientHandler}
                  ingredientRemove={this.removeIngredientHandler}
                  purchasable={purchasable}
                  disabled={disabledInfo}
                  price={totalPrice}
                  ordered={this.purchasehandler}
                />
            </HoCAusx>
        );
    }
}

export default BurgerBuilder;

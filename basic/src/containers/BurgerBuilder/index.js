import React from 'react';

import HoCAusx from '../../hoc/HoCAux';
import Burger from './Burger';

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        };
    }
    render() {
        const { ingredients } = this.state;
        return (
            <HoCAusx>
                <Burger ingredients={ingredients}/>
            </HoCAusx>
        );
    }
}

export default BurgerBuilder;

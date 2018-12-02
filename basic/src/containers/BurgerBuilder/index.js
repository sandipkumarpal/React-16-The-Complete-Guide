import React from 'react';

import HoCAusx from '../../hoc/HoCAux';
import Burger from '../../components/Burger';

class BurgerBuilder extends React.Component {
    render() {
        return (
            <HoCAusx>
                <Burger />
            </HoCAusx>
        );
    }
}

export default BurgerBuilder;

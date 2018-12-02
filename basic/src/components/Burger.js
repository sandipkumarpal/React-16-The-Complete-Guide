import React from 'react';

import BurgerInGredient from './BurgerInGredient';

import '../stylesheets/components/Burger.css';

function Burger(props) {
  return (
    <div className="Burger">
      <BurgerInGredient type="bread-top"/>
      <BurgerInGredient type="cheese"/>
      <BurgerInGredient type="meat"/>
      <BurgerInGredient type="bread-bottom"/>
    </div>
  );
}

export default Burger;

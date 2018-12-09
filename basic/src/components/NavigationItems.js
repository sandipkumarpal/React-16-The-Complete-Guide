import React from 'react';
import '../stylesheets/components/NavigationItems.css';

import NavigationItem from './NavigationItem';

function NavigationItems() {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}

export default NavigationItems;

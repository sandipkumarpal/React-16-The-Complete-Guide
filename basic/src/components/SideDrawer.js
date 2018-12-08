import React from 'react';

import Logo  from './Logo';
import NavigationItems from './NavigationItems';

import '../stylesheets/components/SideDrawer.css';

function SideDrawer(props) {
  return (
    <div className="SideDrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default SideDrawer;

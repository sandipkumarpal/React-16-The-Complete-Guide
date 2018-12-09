import React from 'react';

import '../stylesheets/components/ToolBar.css';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import DrawerToggle from './DrawerToggle';

function ToolBar(props) {
    return (
      <header className="ToolBar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo />
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    );
}

export default ToolBar;

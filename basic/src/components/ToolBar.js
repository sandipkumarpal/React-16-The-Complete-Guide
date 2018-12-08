import React from 'react';

import '../stylesheets/components/ToolBar.css';
import Logo from './Logo';
import NavigationItems from './NavigationItems';

function ToolBar(props) {
    return (
      <header className="ToolBar">
        <div>Menu</div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    );
}

export default ToolBar;

import React from 'react';

import '../stylesheets/components/ToolBar.css';
import Logo from './Logo';

function ToolBar(props) {
    return (
      <header className="ToolBar">
        <div>Menu</div>
        <Logo />
        <nav>
          ...
        </nav>
      </header>
    );
}

export default ToolBar;

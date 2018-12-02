import React from 'react';
import HoCAux from '../../hoc/HoCAux';

import '../../stylesheets/components/Layout/layout.css';

function Layout(props) {
    return (
        <HoCAux>
            <header>
                ToolBar, SideDrawer, BacakDrop
            </header>
            <main className="content">
                {props.children}
            </main>
        </HoCAux>
    );
}

export default Layout;

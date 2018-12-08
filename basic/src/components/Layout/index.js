import React from 'react';
import HoCAux from '../../hoc/HoCAux';

import '../../stylesheets/components/Layout/layout.css';
import ToolBar from '../ToolBar';
import SideDrawer from '../SideDrawer';

function Layout(props) {
    return (
        <HoCAux>
            <ToolBar />
            <SideDrawer />
            <main className="content">
                {props.children}
            </main>
        </HoCAux>
    );
}

export default Layout;
